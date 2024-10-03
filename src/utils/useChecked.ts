import React, { useState, useCallback } from 'react';

import type { CheckboxProps } from '../types';

import { isSameValue } from './common';

type UseCheckedProps<T> = Pick<
  CheckboxProps<T>,
  'checked' | 'defaultChecked' | 'checkedValue' | 'uncheckedValue' | 'isValueChecked' | 'onChange'
>;

// Значение и функция его изменения, возвращаемые в виде массива (аналогично useState).
type UseCheckedResult = [boolean, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useChecked = <T>(props: UseCheckedProps<T>): UseCheckedResult => {
  const {
    checked,
    defaultChecked = false,
    checkedValue: checkedValueProp,
    uncheckedValue: uncheckedValueProp,
    isValueChecked,
    onChange,
  } = props;

  // Внутреннее значение используется, если нет внешнего
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);

  // Значение контролируемое, если оно передано явно
  const isControlled = checked !== undefined;

  const isChecked = isValueChecked ?? isSameValue;

  const checkedValue = checkedValueProp === undefined ? true : checkedValueProp;
  const uncheckedValue = uncheckedValueProp === undefined ? false : uncheckedValueProp;

  const controlledChecked = isChecked(checked, checkedValue as T);

  // Если значение контролируемое, то возвращаем его, иначе внутреннее значение
  const checkedState = isControlled ? controlledChecked : uncontrolledChecked;

  // Обновлять значение можем только у внутреннего значение.
  // Обновление контролируемого значения происходит "снаружи".
  const setCheckedState = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputChecked = e.target.checked;

      if (isControlled) {
        const newChecked = inputChecked ? checkedValue : uncheckedValue;
        onChange?.(newChecked as T, e);
      } else {
        setUncontrolledChecked(inputChecked);
        onChange?.(inputChecked as T, e);
      }
    },
    [isControlled, checkedValue, uncheckedValue, onChange]
  );

  return [checkedState, setCheckedState];
};

export default useChecked;
