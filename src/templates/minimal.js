import React from 'react'

function Minimal({
  className,
  action,
  submitText,
  emailPlaceholder,
  namePlaceholder,
  hideName,
  showLabels,
  nameLabel,
  emailLabel,
  newTab,
  formId
}) {
  return (
    <form action={action} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} className={className}>
      {!hideName && (
        <>
          {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
          <input type="text" name="fields[first_name]" placeholder={namePlaceholder} aria-label={nameLabel} id="ck-first-name" />
        </>
      )}
      {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
      <input type="email" name="email_address" placeholder={emailPlaceholder} aria-label={emailLabel} id="ck-email" />
      <button type="submit">{submitText}</button>
    </form>
  )
}

export default Minimal
