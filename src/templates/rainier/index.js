import React from 'react'
import './rainier-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/rainier/bg.jpg'

const DefaultContent = () => (
  <p>Receive tips and tricks on how to travel the world</p>
)

function Rainier({
  action,
  formId,
  options,
  hideName = true,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  stacked = false,
  className = '',
  submitText = 'Send it my way!',
  emailPlaceholder = 'Email Address',
  namePlaceholder = 'First Name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  backgroundImage = bgImage,
  backgroundOpacity = 0.8,
  backgroundColor = [16,16,16],
  headingText = 'Join the Newsletter',
  children = <DefaultContent />,
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(199 92 86)",
}) {
  const bgColor = backgroundColor.join(' ').concat(`/${backgroundOpacity}`)

  useScript('https://f.convertkit.com/ckjs/ck.5.js')

  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form rainier ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800">
        <div className="formkit-container" data-style="full" style={{ backgroundColor: 'rgb(255 255 255)' }}>
          <div className="formkit-hero">
            <div className="formkit-hero-bg-color" style={{ backgroundImage: `linear-gradient(rgb(${bgColor}), rgb(${bgColor})), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="formkit-header" data-element="header" style={{ fontSize: '27px', fontWeight: 700, marginBottom: '20px', color: 'rgb(255 255 255)' }}>
              <h1>{headingText}</h1>
              <p>​</p>
            </div>
            <div className="formkit-content" data-element="content" style={{ color: 'rgb(255 255 255)', fontSize: '18px', fontWeight: 400 }}>
              {children}
            </div>
          </div>
          <div>
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked={stacked} className="seva-fields formkit-fields">
              {!hideName && (
                <>
                  {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                  <div className="formkit-field">
                    <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(146 146 146)', borderColor: 'rgb(228 231 234)', borderRadius: 0, fontWeight: 400 }} id="ck-first-name" />
                  </div>
                </>
              )}
              {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(146 146 146)', borderColor: 'rgb(228 231 234)', borderRadius: 0, fontWeight: 400 }} id="ck-email" />
              </div>
              <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: buttonColor, backgroundColor: buttonBackground, borderRadius: 0, fontWeight: 700 }} type="submit">
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

export default Rainier
