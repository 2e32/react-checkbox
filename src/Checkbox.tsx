import React, { useEffect, useRef } from 'react';

import type { CheckboxProps, CheckboxComponent } from './types';
import { Container, Box, Label } from './components';
import { isFunction, renderIconDefault, useChecked } from './utils';

const Checkbox = <T,>(props: CheckboxProps<T>, ref: React.Ref<HTMLLabelElement>) => {
  const {
    id,
    name,
    value,
    tabIndex = 0,
    children,
    checked,
    defaultChecked = false,
    indeterminate = false,
    checkedValue,
    uncheckedValue,
    isValueChecked,
    className,
    boxClassName,
    labelClassName,
    checkmarkPosition = 'left',
    checkmarkAlign = 'center',
    disabled = false,
    readOnly = false,
    autoFocus = false,
    block = false,
    renderIcon: renderIconProp,
    onChange,
    onFocus,
    onBlur,
    ...rest
  }: CheckboxProps<T> = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [checkedState, setCheckedState] = useChecked<T>({
    checked,
    defaultChecked,
    checkedValue,
    uncheckedValue,
    isValueChecked,
    onChange,
  });

  useEffect(() => {
    if (autoFocus) inputRef?.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const renderIcon = () => {
    const renderIconProps = { checked: checkedState, disabled, readOnly, indeterminate };
    const renderFn = isFunction(renderIconProp) ? renderIconProp : renderIconDefault;

    return renderFn(renderIconProps);
  };

  return (
    <Container
      ref={ref}
      id={id}
      className={className}
      checkmarkPosition={checkmarkPosition}
      disabled={disabled}
      block={block}
      {...rest}
    >
      {/* input первый для возможности применения комбинаторов A + B, A ~ B */}
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        checked={checkedState}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        className="e-checkbox__input"
        tabIndex={tabIndex}
        onChange={disabled || readOnly ? undefined : setCheckedState}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Box
        checked={disabled ? false : checkedState || indeterminate}
        disabled={disabled}
        readOnly={readOnly && !disabled}
        className={boxClassName}
        checkmarkPosition={checkmarkPosition}
        checkmarkAlign={checkmarkAlign}
      >
        {renderIcon()}
      </Box>
      <Label className={labelClassName}>{children}</Label>
    </Container>
  );
};

export default React.forwardRef(Checkbox) as CheckboxComponent;
