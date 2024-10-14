type CheckmarkPosition = 'left' | 'right' | 'top' | 'bottom';

type CheckmarkAlign = 'start' | 'center' | 'end';

/**
 * Свойства, которые принимает функция рендера иконки переключателя.
 */
interface RenderIconProps {
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  readOnly: boolean;
}
//
/**
 * Свойства и методы переключателя.
 */
interface CheckboxProps<T = boolean> {
  /**
   * Идентификатор элемента в документе.
   */
  id?: string;
  /**
   * Имя элемента.
   */
  name?: string;
  /**
   * Значение элемента формы.
   */
  value?: string | number | readonly string[];
  /**
   * Ссылка для доступа к DOM-узлу компонента.
   */
  ref?: React.Ref<HTMLLabelElement>;
  /**
   * Значение, указывающее отмечен ли элемент управления галочкой.
   * При значении `true` галочка установлена, в противном случае - не установлена.
   *
   * ⚠️ Используйте `checked` для контролируемого состояния.
   */
  checked?: T;
  /**
   * Значение, указывающее отмечен ли элемент управления галочкой.
   *
   * ⚠️ Используйте `defaultChecked` для неконтролируемого состояния.
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Переключатель в неопределенном состоянии. Отображается собственная иконка состояния.
   * Иконка соответствующая состоянию `checked` игнорируется.
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Значение, возвращаемое в методе `onChange` при установке галочки.
   * @default true
   */
  checkedValue?: T;
  /**
   * Значение, возвращаемое в методе `onChange` при снятии галочки.
   * @default false
   */
  uncheckedValue?: T;
  /**
   * Функция для определения, должен ли переключатель быть отмечен галочкой.
   * Функция сравнивает `checked` и `checkedValue`. Если они равны, то галочка отображается.
   *
   * ⚠️ Используйте `isValueChecked` для сравнения `checked` и `checkedValue`, если они в виде
   * объектов или представлены разными типами. По умолчанию они сравниваются с помощью Object.is.
   *
   * @param checked Текущее значение свойства `checked`.
   * @param checkedValue Значение, соответствующее состоянию `checked=true`.
   * @returns Возвращает `true`, если `checked` и `checkedValue` соответствуют друг другу.
   */
  isValueChecked?: (checked: T | undefined, checkedValue: T) => boolean;
  /**
   * Содержимое связанное с галочкой (текстовая подпись).
   */
  children?: React.ReactNode;
  /**
   * CSS-класс.
   */
  className?: string;
  /**
   * Стиль.
   */
  style?: React.CSSProperties;
  /**
   * CSS-класс контейнера, в котором располагается галочка.
   */
  boxClassName?: string;
  /**
   * CSS-класс контейнера, в котором располагается текст.
   */
  labelClassName?: string;
  /**
   * Позиция отображения галочки относительно контента чекбокса.
   * @default left
   */
  checkmarkPosition?: CheckmarkPosition;
  /**
   * Выравнивание галочки относительно контента чекбокса.
   * @default center
   */
  checkmarkAlign?: CheckmarkAlign;
  /**
   * Компонент отключен (состояние галочки не может быть изменено, получение фокуса запрещено).
   * @default false
   */
  disabled?: boolean;
  /**
   * Компонент только на чтение (состояние галочки не может быть изменено).
   * @default false
   */
  readOnly?: boolean;
  /**
   * Компонент должен находится в фокусе при монтировании.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Компонент занимает всю ширину контейнера.
   * @default false
   */
  block?: boolean;
  /**
   * Значение для настройки фокуса элемента.
   *
   * ⚠️ Значение `tabIndex` используется `<input type="checkbox" />`.
   * @default 0
   */
  tabIndex?: number;
  /**
   * Отображает иконку переключателя.
   *
   * ⚠️ Используйте этот метод для собственной стилизации галочки.
   */
  renderIcon?: (props: RenderIconProps) => React.ReactNode;
  /**
   * Вызывается при переключении значения.
   */
  onChange?: (checked: T, e: React.ChangeEvent<HTMLInputElement>) => void;

  // Стандартные обработчики событий

  // Мышь
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseDown?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseUp?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLLabelElement>;

  // Клавиатура
  onKeyDown?: React.KeyboardEventHandler<HTMLLabelElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLLabelElement>;

  // Фокус (события проброшены на input)
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

type CheckboxComponent = <T>(
  props: CheckboxProps<T>,
  ref: React.Ref<HTMLLabelElement>
) => JSX.Element;

export type {
  CheckmarkPosition,
  CheckmarkAlign,
  RenderIconProps,
  CheckboxProps,
  CheckboxComponent,
};
