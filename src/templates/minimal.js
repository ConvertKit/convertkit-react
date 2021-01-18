import React from 'react'

function Minimal({
  action,
  formId,
  options,
  hideName = false,
  showLabels = false,
  newTab = false,
  className = '',
  submitText = 'Subscribe',
  emailPlaceholder = 'Your email',
  namePlaceholder = 'Your first name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
}) {
  return (
    <form action={action} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} className={className}>
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
