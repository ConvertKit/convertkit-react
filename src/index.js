import React from 'react'
import PropTypes from 'prop-types'

const InlineFormat = ({ action }) => (
  <form action={action}>
  </form>
)

const formFormat = (format, props) => {
  const formatEmbeds = {
    inline: () => <InlineFormat {...props} />,
    modal: () => null,
    slide: () => null,
    sticky: () => null,
    minimal: () => null,
  }

  return formatEmbeds[format]
}

const ConvertKitForm = ({ format = 'inline', formId, ...props }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`
  return formFormat(format, { action, ...props })()
}

ConvertKitForm.propTypes = {
  format: PropTypes.string.isRequired,
  formId: PropTypes.number.isRequired,
}

export default ConvertKitForm

