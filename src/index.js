import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'

const ConvertKitForm = ({ formId, ...props }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`
  return <Form {...props} action={action} formId={formId} />
}

ConvertKitForm.propTypes = {
  format: PropTypes.string,
  template: PropTypes.string,
  formId: PropTypes.number.isRequired,
  submitText: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  namePlaceholder: PropTypes.string,
  nameLabel: PropTypes.string,
  emailLabel: PropTypes.string,
  showLabels: PropTypes.bool,
  hideName: PropTypes.bool,
  newTab: PropTypes.bool,
  stacked: PropTypes.bool,
  hideWarnings: PropTypes.bool,
}

ConvertKitForm.defaultProps = {
  format: 'inline',
  template: 'minimal',
  submitText: 'Subscribe',
  emailPlaceholder: 'Your email',
  namePlaceholder: 'Your first name',
  nameLabel: 'First name',
  emailLabel: 'Email',
  showLabels: false,
  hideName: false,
  newTab: false,
  stacked: true,
  hideWarnings: false,
}

export default ConvertKitForm
