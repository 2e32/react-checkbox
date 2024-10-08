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

## Примеры

Смотри [storybook](https://github.com/2e32/react-checkbox-storybook).

## Лицензия

[MIT](https://choosealicense.com/licenses/mit)
