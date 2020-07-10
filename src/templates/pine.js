import React from 'react'
import './pine-styles.css'
import Warning from '../warning'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/rainier/bg.jpg'

function Pine({
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
      <form action={action} className={`seva-form formkit-form pine ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px' }}>
        <div data-style="full">
          <div data-element="column" className="formkit-column" style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
            <div className="formkit-background" style={{ opacity: 0.3 }}></div>
            <div className="formkit-header" data-element="header" style={{ color: 'rgb(77, 77, 77)', fontSize: '20px', fontWeight: 700 }}>
              <h1>Join the Newsletter</h1>
            </div>
            <div className="formkit-subheader" data-element="subheader" style={{ color: 'rgb(104, 104, 104)', fontSize: '15px' }}>Subscribe to get our latest content by email.</div>
            <div className="formkit-image formkit-image relative focus:outline-none" role="button" tabIndex="0">
              <img className="cursor-pointer focus:outline-blue " src={bgImage} alt="" style={{ maxWidth: '100%' }} />
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" className="seva-fields formkit-fields">
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
              <button data-element="submit" className="formkit-submit" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(22, 119, 190)', borderRadius: '24px', fontWeight: 700 }}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
            </div>
            <div className="formkit-guarantee" data-element="guarantee" style={{ color: 'rgb(77, 77, 77)', fontSize: '13px', fontWeight: 400 }}>We respect your privacy. Unsubscribe at any time.</div>
            {options.settings.powered_by.show ? (
              <a href={options.settings.powered_by.url} className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a>
            ) : null}
          </div>
        </div>
      </form>
    </>
  )
}

export default Pine
