# @2e32/react-checkbox

[Русский (ru)](README.ru.md)

React checkbox.

## How install

```bash
yarn add @2e32/react-checkbox
```

## Usage

App.js

```javascript
// Once (css import)
import '@2e32/react-checkbox/css';

const App = () => <Page />;

export default App;
```

Page.js

```javascript
import Checkbox from '@2e32/react-checkbox';

const Page = () => {
  return <Checkbox />;
};

export default Page;
```

## Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>name</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>string | number | readonly string[]</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLLabelElement&gt;</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>checked</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>defaultChecked</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>checkedValue</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td>
        <code>true</code>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>uncheckedValue</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>isValueChecked</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>children</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>className</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>boxClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td></td>
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
      <td></td>
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
      <td></td>
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
      <td></td>
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
      <td></td>
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
      <td></td>
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
      <td></td>
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
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>onChange</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Examples

See [storybook](https://github.com/2e32/react-checkbox-storybook).

## License

[MIT](https://choosealicense.com/licenses/mit)
