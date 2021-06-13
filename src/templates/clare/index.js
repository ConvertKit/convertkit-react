import React from 'react'
import './clare-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

function Clare({
  action,
  formId,
  options,
  hideName = false,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  stacked = false,
  className = '',
  submitText = 'Subscribe',
  emailPlaceholder = 'Your email address',
  namePlaceholder = 'Your first name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(22 119 190)",
}) {
  useScript('https://f.convertkit.com/ckjs/ck.5.js')

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
                {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                <div className="formkit-field">
                  <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} id="ck-first-name" />
                </div>
              </>
            )}
            {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
            <div className="formkit-field">
              <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} id="ck-email" />
            </div>
            <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: buttonColor, backgroundColor: buttonBackground, borderRadius: '4px', fontWeight: 400 }}>
              <div className="formkit-spinner">
                <div></div><div></div><div></div>
              </div>
              <span>{submitText}</span>
            </button>
          </div>
          {options.settings.powered_by.show ? (
            <BuiltWithBadge href={options.settings.powered_by.url} />
          ) : null}
        </div>
      </form>
    </>
  )
}

export default Clare
