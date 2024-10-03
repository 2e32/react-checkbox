import React from 'react';
import cn from 'classnames';

const Label = ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn('e-checkbox__label', className)} {...rest} />
);

export default Label;
