import React from 'react';
import cn from 'classnames';

import type { CheckmarkPosition } from '../types';

interface ContainerProps extends React.ComponentPropsWithoutRef<'label'> {
  checkmarkPosition: CheckmarkPosition;
  disabled: boolean;
  block: boolean;
}

const Container = (props: ContainerProps, ref: React.Ref<HTMLLabelElement>) => {
  const {
    id,
    className,
    checkmarkPosition,
    disabled = false,
    block = false,
    ...rest
  }: ContainerProps = props;

  return (
    <label
      ref={ref}
      htmlFor={id}
      className={cn(
        'e-checkbox',
        `e-checkbox--orientation-${checkmarkPosition}`,
        {
          'e-checkbox--disabled': disabled,
          'e-checkbox--block': block,
        },
        className
      )}
      {...rest}
    />
  );
};

export default React.forwardRef(Container);
