<div align="center">
  <h1>ConvertKit React</h1>
  <img src="https://raw.githubusercontent.com/ConvertKit/convertkit-react/main/static/convertKit-react.png" alt="ConvertKit React Logo" width="200" />
  <p>Easily plug convertkit forms to your React and Gatsby websites.</p>
</div>

## Setup

```sh
yarn add convertkit-react
```

## Demos

View examples on [how to use different templates here](https://codesandbox.io/s/twilight-cookies-ihryz) and [how to style your form with custom styling here](https://codesandbox.io/s/nifty-fog-f8eys)

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
    template: 'rainer',
    emailPlaceholder: 'Enter an email address',
    submitText: 'Sign up',
  }

  return (
    <ConvertKitForm {...config} />
  )
}
```

#### Configuration Options

|   **property**  |   **default option**  |   **options**   |
| :-------------: | :--------------: | :------------------: |
|   format   |   inline   | inline, modal, slidein, sticky |
|     template    |    minimal       | _templates in the app + minimal_ |
|    submitText   |     Subscribe    |     any string       |
| emailPlaceholder |    Your email   |     any string       |
| namePlaceholder |  Your first name |     any string       |
|    nameLabel    |     First name   |     any string       |
|    emailLabel   |       Email      |     any string       |
|    showLabels   |       false      |     boolean          |
|     hideName    |       false      |     boolean          |
|     newTab      |       false      |     boolean          |
|      stack      |        true      |     boolean          |
|   hideWarnings  |       false      |     boolean          |

##### Templates
The minimal template has no preconfigured styling, leaving you options to style
as desired. To get a preconfigured style, use one of the app templates
(clare, rainer, powell etc) as seen on the app.

##### Stacking
Using the stack option determines if the form inputs will be stacked upon each
other or placed inline. All templates use stacked inputs by default.


## Contributing
To publish a package:

```sh
./publish X.X.X "Message about version"
```

where `X.X.X` is the version number.
