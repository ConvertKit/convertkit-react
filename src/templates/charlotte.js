import React from 'react'
import './charlotte-styles.css'
import Warning from '../warning'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/charlotte/bg.jpg'

function Charlotte({
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
  hideWarnings,
}) {
  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form charlotte ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px' }}>
        <div data-style="full">
          <div data-element="column" className="formkit-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div data-element="column" className="formkit-column">
            <div className="formkit-header" data-element="header" style={{ color: 'rgb(83, 83, 83)', fontSize: '28px', fontWeight: 700 }}>
              <h1>Get our how to guide</h1>
            </div>
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" className="seva-fields formkit-fields">
              {!hideName && (
                <>
                  {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                  <div className="formkit-field">
                    <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(139, 139, 139)', borderColor: 'rgb(221, 224, 228)', fontWeight: 400, borderLeft: 0, borderRight: 0, borderTop: 0, paddingLeft: 0, paddingRight: 0 }} id="ck-first-name" />
                  </div>
                </>
              )}
              {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(139, 139, 139)', borderColor: 'rgb(221, 224, 228)', fontWeight: 400, borderLeft: 0, borderRight: 0, borderTop: 0, paddingLeft: 0, paddingRight: 0 }} id="ck-email" />
              </div>
              <button data-element="submit" className="formkit-submit" style={{ width: '100%', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(246, 166, 171)', borderRadius: '3px', fontWeight: 700 }}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
            </div>
            <div className="formkit-disclaimer" data-element="disclaimer" style={{ color: 'rgb(139, 139, 139)', fontSize: '13px' }}>We respect your privacy. Unsubscribe at any time.</div>
            {options.settings.powered_by.show ? (
              <a href={options.settings.powered_by.url} className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a>
            ) : null}
          </div>
        </div>
      </form>
    </>
  )
}

export default Charlotte
