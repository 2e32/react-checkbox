import React from 'react';
import cn from 'classnames';

import type { CheckmarkPosition, CheckmarkAlign } from '../types';

interface BoxProps extends React.ComponentPropsWithoutRef<'span'> {
  checked: boolean;
  checkmarkPosition: CheckmarkPosition;
  checkmarkAlign: CheckmarkAlign;
  disabled: boolean;
  readOnly: boolean;
}

const Box = (props: BoxProps) => {
  const {
    checked = false,
    className,
    checkmarkPosition,
    checkmarkAlign,
    disabled = false,
    readOnly = false,
    ...rest
  }: BoxProps = props;

  return (
    <span
      className={cn(
        'e-checkbox__box',
        `e-checkbox__box--position-${checkmarkPosition}`,
        `e-checkbox__box--align-${checkmarkAlign}`,
        {
          'e-checkbox__box--checked': checked,
          'e-checkbox__box--disabled': disabled,
          'e-checkbox__box--readonly': readOnly && !disabled,
        },
        className
      )}
      {...rest}
    />
  );
};

export default Box;
