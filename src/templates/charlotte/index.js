import React from 'react'
import './charlotte-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/charlotte/bg.jpg'

function Charlotte({
  action,
  formId,
  options,
  hideName = true,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  className = '',
  submitText = 'Send me the guide',
  disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
  emailPlaceholder = 'Your email',
  namePlaceholder = 'Your first name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  headingText = 'Get our how to guide',
  format = 'inline',
  backgroundImage = bgImage,
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(246 166 171)",
}) {
  useScript('https://f.convertkit.com/ckjs/ck.5.js')

  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form charlotte ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px' }}>
        <div data-style="full">
          <div data-element="column" className="formkit-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          <div data-element="column" className="formkit-column">
            <div className="formkit-header" data-element="header" style={{ color: 'rgb(83, 83, 83)', fontSize: '28px', fontWeight: 700 }}>
              <h1>{headingText}</h1>
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
              <button data-element="submit" className="formkit-submit" style={{ width: '100%', color: buttonColor, backgroundColor: buttonBackground, borderRadius: '3px', fontWeight: 700 }}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
            </div>
            <div className="formkit-disclaimer" data-element="disclaimer" style={{ color: 'rgb(139, 139, 139)', fontSize: '13px' }}>
              {disclaimerText}
            </div>
            {options.settings.powered_by.show ? (
              <BuiltWithBadge href={options.settings.powered_by.url} data-variant="dark" />
            ) : null}
          </div>
        </div>
      </form>
    </>
  )
}

export default Charlotte
