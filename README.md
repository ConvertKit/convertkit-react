<div align="center">
  <h1>ConvertKit React</h1>
  <img src="https://raw.githubusercontent.com/ConvertKit/convertkit-react/main/static/convertKit-react.png" alt="ConvertKit React Logo" width="200" />
  <p>Easily plug convertkit forms to your React and Gatsby websites.</p>
</div>

## Setup

```sh
yarn add convertkit-react
```

## Usage

```jsx
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 1234567

function HomePage() {
  return (
    <ConvertKitForm formId={MY_FORM_ID} />
  )
}
```

To get your form id, go to the form you have created on convertkit and choose the HTML embed option.

![form embed screenshot](https://raw.githubusercontent.com/ConvertKit/convertkit-react/main/static/embed-screenshot.png)

Here you'll pick out your form id from the form action in the embed code:

```html
<form
  action="https://app.convertkit.com/forms/YOUR_FORM_ID_IS_HERE/subscriptions"
></form>
```

#### Passing custom configuration options

```jsx
function HomePage() {
  const config = {
    formId: MY_FORM_ID,
    format: 'inline',
    emailPlaceholder: 'Enter an email address',
    submitText: 'Sign up',
  }

  return (
    <ConvertKitForm {...config} />
  )
}
```

#### Configuration Options

|   **option**    |   **default option**   |  **options**   |
| :-------------: | :--------------: | :------------------: |
|   format   |   minimal   | minimal, inline, slidein, sticky |
|     template    |      clare       | _templates in the app_ |
|    submitText   |     Submit       |     any string       |
| emailPlaceholder |    Your email   |     any string       |
| namePlaceholder |  Your first name |     any string       |
|    nameLabel    |     First name   |     any string       |
|    emailLabel   |       Email      |     any string       |
|    showLabels   |       false      |     boolean          |
|     hideName    |       false      |     boolean          |
|     newTab      |       false      |     boolean          |
