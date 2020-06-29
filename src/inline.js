import React from 'react'
import useTemplate from './use-template'

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
