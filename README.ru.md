# @2e32/react-checkbox

[English (en)](README.md)

React checkbox.

## Установка

```bash
yarn add @2e32/react-checkbox
```

## Использование

App.js

```javascript
// Единожды подключить стиль на уровне приложения (точки входа)
import '@2e32/react-checkbox/css';

const App = () => <Page />;

export default App;
```

Page.js

```javascript
// Импортировать компонент
import Checkbox from '@2e32/react-checkbox';

const Page = () => {
  return <Checkbox />;
};

export default Page;
```

## Свойства

<table>
  <thead>
    <tr>
      <th>Название</th>
      <th>Тип</th>
      <th>Значение по умолчанию</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>Идентификатор элемента в документе.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>Имя элемента.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>string | number | readonly string[]</code>
      </td>
      <td></td>
      <td>Значение элемента формы.</td>
    </tr>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLLabelElement&gt;</code>
      </td>
      <td></td>
      <td>Ссылка для доступа к DOM-узлу компонента.</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td></td>
      <td>
        Значение, указывающее отмечен ли элемент управления галочкой. При значении <code>true</code> галочка
        установлена, в противном случае - не установлена.
        <br />
        <br />
        ⚠️ Используйте <code>checked</code> для контролируемого состояния.
      </td>
    </tr>
    <tr>
      <td>defaultChecked</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>
        Значение, указывающее отмечен ли элемент управления галочкой.
        <br />
        <br />
        ⚠️ Используйте <code>defaultChecked</code> для неконтролируемого состояния.
      </td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>
        Переключатель в неопределенном состоянии. Отображается собственная иконка состояния. Иконка, соответствующая
        состоянию <code>checked</code>, игнорируется.
      </td>
    </tr>
    <tr>
      <td>checkedValue</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td>
        <code>true</code>
      </td>
      <td>Значение, возвращаемое в методе <code>onChange</code>, при установке галочки.</td>
    </tr>
    <tr>
      <td>uncheckedValue</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Значение, возвращаемое в методе <code>onChange</code>, при снятии галочки.</td>
    </tr>
    <tr>
      <td>isValueChecked</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Функция для определения, должен ли переключатель быть отмечен галочкой. Функция сравнивает
        <code>checked</code> и
        <code>checkedValue</code>. Если они равны, то галочка отображается.
        <br />
        <br />
        ⚠️ Используйте <code>isValueChecked</code> для сравнения <code>checked</code> и <code>checkedValue</code>,
        если они в виде объектов или представлены разными типами. По умолчанию они сравниваются с помощью
        <code>Object.is</code>.
        <br />
        <br />
        <code>(checked: T | undefined, checkedValue: T) => boolean</code>
      </td>
    </tr>
    <tr>
      <td>children</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Содержимое связанное с галочкой (текстовая подпись).</td>
    </tr>
    </tr>
    <tr>
      <td>className</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс.</td>
    </tr>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td>Стиль.</td>
    </tr>
    </tr>
    <tr>
      <td>boxClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс контейнера, в котором располагается галочка.</td>
    </tr>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс контейнера, в котором располагается текст.</td>
    </tr>
    </tr>
    <tr>
      <td>checkmarkPosition</td>
      <td>
        <code>'left' | 'right' | 'top' | 'bottom'</code>
      </td>
      <td>
        <code>'left'</code>
      </td>
      <td>
        Позиция отображения галочки относительно контента чекбокса.
      </td>
    </tr>
    </tr>
    <tr>
      <td>checkmarkAlign</td>
      <td>
        <code>'start' | 'center' | 'end'</code>
      </td>
      <td>
        <code>'center'</code>
      </td>
      <td>Выравнивание галочки относительно контента чекбокса.</td>
    </tr>
    </tr>
    <tr>
      <td>disabled</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент отключен (состояние галочки не может быть изменено, получение фокуса запрещено).</td>
    </tr>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент только на чтение (состояние галочки не может быть изменено).</td>
    </tr>
    </tr>
    <tr>
      <td>autoFocus</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент должен находится в фокусе при монтировании.</td>
    </tr>
    </tr>
    <tr>
      <td>block</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент занимает всю ширину контейнера.</td>
    </tr>
    </tr>
    <tr>
      <td>tabIndex</td>
      <td>
        <code>number</code>
      </td>
      <td>
        <code>0</code>
      </td>
      <td>Значение для настройки фокуса элемента.</td>
    </tr>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Отображает иконку переключателя.
        <br />
        <br />
        ⚠️ Используйте этот метод для собственной стилизации галочки.
        <br />
        <br />
        <code> (props: RenderIconProps) => React.ReactNode</code>
      </td>
    </tr>
    </tr>
    <tr>
      <td>onChange</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Вызывается при переключении значения.
        <br />
        <br />
        <code>(checked: T, e: React.ChangeEvent<HTMLInputElement>) => void</code>
      </td>
    </tr>
  </tbody>
</table>

## CSS

CSS-классы, используемые для стилизации компонента. Некоторые классы применяются в определенных состояниях или в зависимости от переданных свойств.

<table>
  <thead>
    <tr>
      <th>Название</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>.e-checkbox</code>
      </td>
      <td>Класс корневого элемента Checkbox.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox--disabled</code>
      </td>
      <td>Модификатор, который применяется в случае, если компонент отключен.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox--block</code>
      </td>
      <td>
        Модификатор, который применяется в случае, если компонент должен занимать всю доступную
        ширину контейнера (вести себя как блочный элемент).
      </td>
    </tr>
    <tr>
      <td>
        <code> .e-checkbox--orientation-left </code>
        <br />
        <code> .e-checkbox--orientation-right </code>
        <br />
        <code> .e-checkbox--orientation-top </code>
        <br />
        <code> .e-checkbox--orientation-bottom </code>
      </td>
      <td>
        Модификаторы, применяемые в зависимости от положения переключателя относительно текста.
        Предназначены для изменения положения галочки и текста.
      </td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__box</code>
      </td>
      <td>Класс контейнера, в котором выводится галочка.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__box--checked</code>
      </td>
      <td>Модификатор, который применяется в случае, если компонент отмечен галочкой.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__box--disabled</code>
      </td>
      <td>Модификатор, который применяется в случае, если компонент отключен.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__box--readonly</code>
      </td>
      <td>Модификатор, который применяется в случае, если компонент только на чтение.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__box--position-left</code>
        <br />
        <code>.e-checkbox__box--position-right</code>
        <br />
        <code>.e-checkbox__box--position-top</code>
        <br />
        <code>.e-checkbox__box--position-bottom</code>
      </td>
      <td>
        Модификаторы, применяемые в зависимости от положения переключателя относительно текста.
        Предназначены для регулирования отступа между галочкой и текстом.
      </td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__box--align-start</code>
        <br />
        <code>.e-checkbox__box--align-center</code>
        <br />
        <code>.e-checkbox__box--align-end</code>
      </td>
      <td>
        Модификаторы, применяемые для выравнивания галочки и текста относительно друг друга.
      </td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__icon</code>
      </td>
      <td>
        Класс иконки галочки. Добавляется <b>только</b> к стандартной иконке. Предназначен для
        установки размера иконки.
      </td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__label</code>
      </td>
      <td>Класс контейнера, в котором отображается текстовое описание галочки.</td>
    </tr>
    <tr>
      <td>
        <code>.e-checkbox__input</code>
      </td>
      <td>
        Класс элемента <code>&lt;input type="checkbox"&gt;</code>. Предназначен для скрытия
        отображения стандартной галочки.
      </td>
    </tr>
  </tbody>
</table>

## Примеры

Смотри [storybook](https://github.com/2e32/react-checkbox-storybook).

## Лицензия

[MIT](https://choosealicense.com/licenses/mit)
