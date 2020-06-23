import React from 'react'
import PropTypes from 'prop-types'

const InlineForm = ({
  action,
  submitText,
  emailPlaceholder,
  namePlaceholder,
  hideName,
  showLabels,
  nameLabel,
  emailLabel,
  newTabSubmit,
  }) => (
  <form action={action} target={newTabSubmit ? '_blank' : 'self'}>
    {!hideName && (
      <>
        {showLabels ? <label>{nameLabel}</label> : null}
        <input type="text" name="fields[first_name]" placeholder={namePlaceholder} />
      </>
    )}
    {showLabels ? <label>{emailLabel}</label> : null}
    <input type="email" name="email_address" placeholder={emailPlaceholder} />
    <button type="submit">{ submitText }</button>
  </form>
)

const formFormat = (format, props) => {
  const formatEmbeds = {
    inline: () => <InlineForm {...props} />,
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
  submitText: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  namePlaceholder: PropTypes.string,
  nameLabel: PropTypes.string,
  emailLabel: PropTypes.string,
  showLabels: PropTypes.bool,
  hideName: PropTypes.bool,
  newTabSubmit: PropTypes.bool,
}

ConvertKitForm.defaultProps = {
  submitText: 'Submit',
  emailPlaceholder: 'Your email',
  namePlaceholder: 'Your first name',
  nameLabel: 'First name',
  emailLabel: 'Email',
  showLabels: false,
  hideName: false,
  newTabSubmit: false,
}

export default ConvertKitForm

