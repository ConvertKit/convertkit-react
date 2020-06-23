<div align="center">
  <h1>ConvertKit React</h1>
  <img src="https://github.com/convertkit/convertkit/tree/main/static/convertkit-react.png" alt="ConvertKit React Logo" />
  <p>Easily plug convertkit forms to your React and Gatsby websites.</p>
</div>


## Setup

```sh
yarn add @convertkit/convertkit-react
```

### Usage
```jsx
import ConvertKitForm from '@convertkit/convertkit-react'

const MY_FORM_ID = 1234567

function HomePage() {
  return (
    <ConvertKitForm formId={MY_FORM_ID} format="inline" />
  )
}
```

##### Passing custom configuration options

```jsx
function HomePage() {
  const config = {
    formId: MY_FORM_ID,
    format: 'minimal',
    emailPlaceholder: 'Enter an email address',
    submitText: 'Sign up',
  }

  return (
    <ConvertKitForm {...config} />
  )
}
```

##### Configuration Options

|  **option**  | **default option** | **value** |
| :----------: | :----------------: | :-------------: |
| submitText   | Submit | Any string |
| emailPlaceholder   | Your email | Any string |
| namePlaceholder   | Your first name | Any string |
| nameLabel   | First name | Any string |
| emailLabel   | Email | Any string |
| showLabels   | false | boolean |
| hideName   | false | boolean |
| newTabSubmit   | false | boolean |




