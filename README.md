# @2e32/react-checkbox

[Русский (ru)](README.ru.md)

React checkbox.

## How install

npm

```bash
npm i @2e32/react-checkbox
```

yarn

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
      <td>The id of the input.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The name of the input.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>string | number | readonly string[]</code>
      </td>
      <td></td>
      <td>The value of the input.</td>
    </tr>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLLabelElement&gt;</code>
      </td>
      <td></td>
      <td>Ref to the root element.</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td></td>
      <td>
        If <code>true</code>, the component is checked.
        <br />
        <br />
        ⚠️ Use when the component is controlled.
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
        The default checked state.
        <br />
        <br />
        ⚠️ Use when the component is not controlled.
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
      <td>If <code>true</code>, the component appears indeterminate.</td>
    </tr>
    <tr>
      <td>checkedValue</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td>
        <code>true</code>
      </td>
      <td>The value of the true state.</td>
    </tr>
    <tr>
      <td>uncheckedValue</td>
      <td>
        <code>T = boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>The value of the false state.</td>
    </tr>
    <tr>
      <td>isValueChecked</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>Compare <code>checked</code> and <code>checkedValue</code>. Returns <code>true</code> if values are
        equivalent, <code>false</code> otherwise.</td>
    </tr>
    <tr>
      <td>children</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>The content associated with the checkbox.</td>
    </tr>
    <tr>
      <td>className</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the root element.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td>The style applied to the root element.</td>
    </tr>
    </tr>
    <tr>
      <td>boxClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the checkmark container.</td>
    </tr>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the content container.</td>
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
      <td>Checkmark placement.</td>
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
      <td>Checkmark align.</td>
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
      <td>If true, the component is disabled (<code>checked</code> cannot be changed).</td>
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
      <td>If true, the component is readonly (<code>checked</code> cannot be changed).</td>
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
      <td>Gets focus when the component is mounted.</td>
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
      <td>Expands the component to 100% of available space.</td>
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
      <td>The tabindex of the input.</td>
    </tr>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>Render checkbox icon.</td>
    </tr>
    </tr>
    <tr>
      <td>onChange</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>Callback fired when the checked state is changed by user.</td>
    </tr>
  </tbody>
</table>

## Examples

See [storybook](https://github.com/2e32/react-checkbox-storybook).

## License

[MIT](https://choosealicense.com/licenses/mit)
