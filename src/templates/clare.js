import React from 'react'
import './clare-styles.css'
import Warning from '../warning'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

function Clare({
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
  format,
  stacked,
  hideWarnings,
}) {
  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} method="post" target={newTab ? '_blank' : '_self'} className={`seva-form formkit-form clare ${className}`} method="post" data-sv-form={formId} data-format={format} data-version={options.version} data-uid={options.uid} data-options={JSON.stringify(options)} min-width="400 500 600 700 800">
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
          </ul>
          <div data-element="fields" data-stacked={stacked} className="seva-fields formkit-fields">
            {!hideName && (
              <>
                {showLabels ? <label htmlFor="ck-first-form">{nameLabel}</label> : null}
                <div className="formkit-field">
                  <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} id="ck-first-name" />
                </div>
              </>
            )}
            {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
            <div className="formkit-field">
              <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} id="ck-email" />
            </div>
            <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(22, 119, 190)', borderRadius: '4px', fontWeight: 400 }}>
              <div className="formkit-spinner">
                <div></div><div></div><div></div>
              </div>
              <span>{submitText}</span>
            </button>
          </div>
          {options.settings.powered_by.show ? (
            <a href={options.settings.powered_by.url} className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a>
          ) : null}
        </div>
      </form>
    </>
  )
}

export default Clare
