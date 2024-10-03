import type { RenderIconProps } from '../types';
import { CheckedIcon, IndeterminateIcon, UncheckedIcon } from '../components';

const getIcon = (checked: boolean, indeterminate: boolean) => {
  if (indeterminate) return IndeterminateIcon;

  return checked ? CheckedIcon : UncheckedIcon;
};

const renderIconDefault = ({ checked, indeterminate }: RenderIconProps) => {
  const Icon = getIcon(checked, indeterminate);

  return <Icon className="e-checkbox__icon" />;
};

export default renderIconDefault;
