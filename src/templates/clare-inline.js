import React from 'react'

function ClareInline({
  options,
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
}) {
  return (
    <form action={action} method="post" target={newTab ? '_blank' : '_self'} className="seva-form formkit-form" method="post" data-sv-form={formId} data-format="inline" data-version={options.version} data-uid="e8437783ad" data-options={JSON.stringify(options)} min-width="400 500 600 700 800">
      <div data-style="clean">
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
        </ul>
        <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
          {!hideName && (
            <>
              {showLabels ? <label>{nameLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} />
              </div>
            </>
          )}
          {showLabels ? <label>{emailLabel}</label> : null}
          <div className="formkit-field">
            <input className="formkit-input" name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} />
          </div>
          <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(22, 119, 190)', borderRadius: '4px', fontWeight: 400 }}>
            <div className="formkit-spinner">
              <div></div><div></div><div></div>
            </div>
            <span>{submitText}</span>
          </button>
        </div>
        {options.settings.powered_by.show ? (
          <a href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form" className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a>
        ) : null}
      </div>
    </form>
  )
}

export default ClareInline
