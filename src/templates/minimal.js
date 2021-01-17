import React from 'react'

function Minimal({
  options,
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
  formId,
  format
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
