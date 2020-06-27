import React from 'react'
import './inline-styles.css'
import useTemplate from './use-template'

// TO-DO:
// derive data-uid of user

function InlineForm({
  template,
  ...props
}) {
  const { options, Template } = useTemplate(template)
  return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <Template {...props} options={options} />
    </>
  )
}

export default InlineForm
