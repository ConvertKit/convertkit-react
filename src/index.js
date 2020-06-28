import React from 'react'
import PropTypes from 'prop-types'
import InlineForm from './inline'
import ModalForm from './modal'
import SlideInForm from './slidein'
import StickyForm from './sticky'

const formFormat = (format, props) => {
  const formatEmbeds = {
    inline: () => <InlineForm {...props} />,
    modal: () => <ModalForm {...props} />,
    slidein: () => <SlideInForm {...props} />,
    sticky: () => <StickyForm {...props} />,
  }
  if (!formatEmbeds.hasOwnProperty(format)) {
    const errorMessage = `This form format: "${format}" is not supported`
    throw new ReferenceError(errorMessage)
  }

  return formatEmbeds[format]
}

const ConvertKitForm = ({ format, formId, ...props }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`
  return formFormat(format, { action, ...props })()
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
}

export default ConvertKitForm
