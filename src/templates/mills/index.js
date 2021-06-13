import React from 'react'
import './mills-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const DefaultContent = () => (
  <p>Subscribe to get our latest content by email.</p>
)

function Mills({
  action,
  formId,
  options,
  hideName = true,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  stacked = false,
  className = '',
  submitText = 'Subscribe',
  disclaimerText = "We won't send you spam. Unsubscribe at any time.",
  emailPlaceholder = 'Email Address',
  namePlaceholder = 'First Name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  headingText = 'Join the Newsletter',
  children = <DefaultContent />,
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(22 119 190)",
}) {

  useScript('https://f.convertkit.com/ckjs/ck.5.js')

  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form mills ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(249 250 251)', borderRadius: '4px' }}>
        <div className="formkit-background" style={{ opacity: 0.2 }}></div>
        <div data-style="minimal">
          <div className="formkit-header" data-element="header" style={{ color: 'rgb(77, 77, 77)', fontSize: '27px', fontWeight: 700, textAlign: 'center' }}>
            <h1>{headingText}</h1>
          </div>
          <div className="formkit-subheader" data-element="subheader" style={{ color: 'rgb(104 104 104)', fontsize: '18px' }}>
            {children}
          </div>
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked={stacked} className="seva-fields formkit-fields">
            {!hideName && (
              <>
                {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                <div className="formkit-field">
                  <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(0 0 0)', borderColor: 'rgb(227 227 227)', borderRadius: '4px', fontWeight: 400 }} id="ck-first-name" />
                </div>
              </>
            )}
            {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
            <div className="formkit-field">
              <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required="" type="email" style={{ color: 'rgb(0 0 0)', borderColor: 'rgb(227 227 227)', borderRadius: '4px', fontWeight: 400 }} id="ck-email" />
            </div>
            <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: buttonColor, backgroundColor: buttonBackground, borderRadius: '4px', fontWeight: 400 }}>
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>{submitText}</span>
            </button>
          </div>
          <div className="formkit-guarantee" data-element="guarantee" style={{ color: 'rgb(77 77 77)', fontSize: '13px', fontWeight: 400 }}>
            {disclaimerText}
          </div>
          {options.settings.powered_by.show ? (
            <BuiltWithBadge href={options.settings.powered_by.url} data-variant="dark" />
          ) : null}
        </div>
      </form>
    </>
  )
}

export default Mills
