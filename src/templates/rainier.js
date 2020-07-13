import React from 'react'
import './rainier-styles.css'
import Warning from '../warning'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/rainier/bg.jpg'

function Rainier({
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
      <form action={action} className={`seva-form formkit-form rainier ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800">
        <div className="formkit-container" data-style="full" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
          <div className="formkit-hero">
            <div className="formkit-hero-bg-color" style={{ background: `linear-gradient(rgba(16, 16, 16, .8), rgba(16, 16, 16, .8)), url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="formkit-header" data-element="header" style={{ fontSize: '27px', fontWeight: 700, marginBottom: '20px', color: 'rgb(255,255,255)' }}>
              <h1>Join the Newsletter</h1>
              <p>​</p>
            </div>
            <div className="formkit-content" data-element="content" style={{ color: 'rgb(255, 255, 255)', fontSize: '18px', fontWeight: 400 }}>
              <p>Receive tips and tricks on how to travel the world</p>
            </div>
          </div>
          <div>
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked={stacked} className="seva-fields formkit-fields">
              {!hideName && (
                <>
                  {showLabels ? <label htmlFor="ck-first-form">{nameLabel}</label> : null}
                  <div className="formkit-field">
                    <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(146, 146, 146)', borderColor: 'rgb(228, 231, 234)', borderRadius: 0, fontWeight: 400 }} id="ck-first-name" />
                  </div>
                </>
              )}
              {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(146, 146, 146)', borderColor: 'rgb(228, 231, 234)', borderRadius: 0, fontWeight: 400 }} id="ck-email" />
              </div>
              <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(199, 92, 86)', borderRadius: 0, fontWeight: 700 }} type="submit">
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
            </div>
            {options.settings.powered_by.show ? (
              <a href={options.settings.powered_by.url} className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a>
            ) : null}
          </div>
        </div>
      </form>
    </>
  )
}

export default Rainier
