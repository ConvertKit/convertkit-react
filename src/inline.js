import React from 'react'

const InlineForm = ({
  action,
  submitText,
  emailPlaceholder,
  namePlaceholder,
  hideName,
  showLabels,
  nameLabel,
  emailLabel,
  newTab,
}) => (
    <form action={action} method="post" target={newTab ? '_blank' : '_self'}>
      {!hideName && (
        <>
          {showLabels ? <label>{nameLabel}</label> : null}
          <input type="text" name="fields[first_name]" placeholder={namePlaceholder} />
        </>
      )}
      {showLabels ? <label>{emailLabel}</label> : null}
      <input type="email" name="email_address" placeholder={emailPlaceholder} />
      <button type="submit">{submitText}</button>
    </form>
  )

export default InlineForm
