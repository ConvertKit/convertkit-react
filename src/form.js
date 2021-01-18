import React from 'react'
import useTemplate from './use-template'

function useAppFormat(format) {
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
  format = 'inline',
  ...props
}) {
  const { options, Template } = useTemplate(template)
  return <Template {...props} options={options} format={useAppFormat(format)} />
}

export default Form
