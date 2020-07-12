import React from 'react'
import useTemplate from './use-template'

// TO-DO:
// derive data-uid of user

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
  template,
  format,
  ...props
}) {
  const { options, Template } = useTemplate(template)
  return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <Template {...props} options={options} format={useAppFormat(format)} />
    </>
  )
}

export default Form
