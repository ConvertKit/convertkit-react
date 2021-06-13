import React from 'react'
import './cocoa-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//embed.filekitcdn.com/e/2owDSJCEZcjwZhVLK4rMrK/2vJTtpQyc87b2ZVG9bQ3aA'

const DefaultContent = () => (
  <p>Subscribe below and we’ll notify you when the product is released.</p>
)

function Cocoa({
  action,
  formId,
  options,
  hideName = false,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  className = '',
  submitText = 'Download',
  disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
  emailPlaceholder = 'Your email',
  namePlaceholder = 'Your first name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  backgroundImage = bgImage,
  backgroundColor = [46,46,46],
  borderRadius = 0,
  headingText = 'Join the waitlist',
  children = <DefaultContent />,
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(245 113 72)",
}) {
  const bgColor = backgroundColor.join(' ')
  const formRadius = `${borderRadius}px`

  useScript('https://f.convertkit.com/ckjs/ck.5.js')

  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form cocoa ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ borderRadius: formRadius }}>
        <div data-style="full" style={{'--border-radius': formRadius}}>
          <div className="formkit-container" style={{ backgroundImage: `linear-gradient(180deg, rgb(${bgColor} / .3) 0%, rgb(${bgColor} / .73) 64%, rgb(${bgColor}) 89%), url(${backgroundImage})`}}>
            <div className="formkit-header" data-element="header" style={{color: 'rgb(255 255 255)', fontWeight: 700}}>
              <h1>{headingText}</h1>
            </div>
            <div className="formkit-content" data-element="content" style={{color: 'rgb(255 255 255)'}}>
              {children}
            </div>
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" className="seva-fields formkit-fields" style={{color: 'rgb(255 255 255)'}}>
              {!hideName && (
                <>
                  {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                  <div className="formkit-field">
                    <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{color: 'rgb(105 113 119)', fontWeight: 400, backgroundColor: 'rgb(27 27 27)', borderRadius: '4px'}} id="ck-first-name" />
                  </div>
                </>
              )}
              {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" name="email_address" aria-label={emailLabel} placeholder={emailPlaceholder} required type="email" style={{color: 'rgb(105 113 119)', fontWeight: 400, backgroundColor: 'rgb(27 27 27)', borderRadius: '4px'}} />
              </div>
              <button data-element="submit" className="formkit-submit formkit-submit" style={{color: buttonColor, backgroundColor: buttonBackground, borderRadius: '4px', fontWeight: 700}}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
            </div>
            <div className="formkit-disclaimer" data-element="disclaimer" style={{color: 'rgb(203 203 203)'}}>
              {disclaimerText}
            </div>
            {options.settings.powered_by.show ? (
              <BuiltWithBadge href={options.settings.powered_by.url} data-variant="light" />
            ) : null}
          </div>
        </div>
      </form>
    </>
  )
}

export default Cocoa
