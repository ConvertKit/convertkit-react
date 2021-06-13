import React from 'react'
import './monterey-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/monterey/bg.jpg'

const DefaultContent = () => (
  <p>Subscribe to get our latest content by email.</p>
)

function Monterey({
  action,
  formId,
  options,
  hideName = true,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  className = '',
  submitText = 'Subscribe',
  emailPlaceholder = 'Email Address',
  namePlaceholder = 'First Name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  backgroundImage = bgImage,
  backgroundOpacity = 0.7,
  backgroundColor = [51, 51, 51],
  borderRadius = 0,
  headingText = 'Join the newsletter',
  children = <DefaultContent />,
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(51 51 51)",
}) {
  const bgColor = backgroundColor.join(' ').concat(`/${backgroundOpacity}`)
  const formRadius = `${borderRadius}px`

  useScript('https://f.convertkit.com/ckjs/ck.5.js')

  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form monterey ${className}`} target={newTab ? '_blank' : '_self'} method="post" data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(243 246 249)', borderRadius: formRadius }}>
        <div data-style="image">
          <div data-element="column" className="formkit-column" style={{ backgroundImage: `linear-gradient(rgb(${bgColor}), rgb(${bgColor})), url(${backgroundImage})`, height: '480px' }}>
            <div className="formkit-header" data-element="header" style={{ color: 'rgb(255 255 255)', fontSize: '36px', fontWeight: 700 }}>
              <h1>{headingText}</h1>
            </div>
            <div className="formkit-subheader" data-element="subheader" style={{ color: 'rgb(255 255 255)', fontSize: '22px' }}>
              {children}
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
            <div data-element="fields" className="seva-fields formkit-fields">
              {!hideName && (
                <>
                  {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                  <div className="formkit-field">
                    <input className="formkit-input" name="fields[first_name]" aria-label={nameLabel} placeholder={namePlaceholder} type="text" style={{ color: 'rgb(77 77 77)', borderColor: 'rgb(227 227 227)', borderRadius: 0, fontWeight: 400 }} id="ck-first-name" />
                  </div>
                </>
              )}
              {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" name="email_address" aria-label={emailLabel} placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(77 77 77)', borderColor: 'rgb(227 227 227)', borderRadius: 0, fontWeight: 400 }} />
              </div>
              <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: buttonColor, backgroundColor: buttonBackground, borderRadius: 0, fontWeight: 400 }}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
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

export default Monterey
