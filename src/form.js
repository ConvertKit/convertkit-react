import React from 'react'
import useTemplate from './use-template'

function formFormat(format) {
  switch (format) {
    case 'slidein':
      return 'slide in'
    case 'sticky':
      return 'sticky bar'
    default:
      return format;
  }
}

function Form({
  template = 'minimal',
  format,
  ...props
}) {
  const { options, Template } = useTemplate(template)
  return <Template {...props} options={options} format={formFormat(format)} />
}

export default Form
