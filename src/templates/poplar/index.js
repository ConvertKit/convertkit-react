import React from 'react'
import './poplar-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = 'https://embed.filekitcdn.com/e/ob1LxuDzufvKjqSohJyaUP/5oPVzNSoHca4JJZz2kaMCf'

const DefaultContent = () => (
  <p>I’ll send you a simple guide that will boost your photography skills overnight.
    <br />​
    <br />Get the 28-step guide by subscribing below.
  </p>
)

function Poplar({
  action,
  formId,
  options,
  hideName = true,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  stacked = false,
  className = '',
  submitText = 'Download',
  disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
  emailPlaceholder = 'Email Address',
  namePlaceholder = 'First Name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  children = <DefaultContent />,
  backgroundImage = bgImage,
  headingText = 'Learn how to take photos like a pro',
  borderRadius = 5,
  buttonColor = "rgb(255 255 255)",
  buttonBackground = "rgb(120 94 223)",
}) {
  const formRadius = `${borderRadius}px`

  useScript('https://f.convertkit.com/ckjs/ck.5.js')

  return (
    <>
      {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
      <form action={action} className={`seva-form formkit-form poplar ${className}`} target={newTab ? '_blank' : '_self'} method="post" data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(255 255 255)', borderRadius: '10px' }}>
        <div data-style="full" style={{ '--bg-border-radius': formRadius }}>
          <div data-element="column" className="formkit-column">
            <div className="formkit-header" data-element="header" style={{ color: 'rgb(55 63 69)', fontWeight: 700 }}>
              <h1>{headingText}</h1>
            </div>
            <div className="formkit-content" data-element="content" style={{ color: 'rgb(105 113 119)' }}>
             {children}
            </div>
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
            <div data-element="fields" data-stacked={stacked} className="seva-fields formkit-fields">
              {!hideName && (
                <>
                  {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                  <div className="formkit-field">
                    <input className="formkit-input" name="fields[first_name]" aria-label={nameLabel} placeholder={namePlaceholder} type="text" style={{ color: 'rgb(105 113 119)', backgroundColor: 'rgb(243 246 249)', borderRadius: '5px', fontWeight: 400 }} id="ck-first-name" />
                  </div>
                </>
              )}
              {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
              <div className="formkit-field">
                <input className="formkit-input" name="email_address" aria-label={emailLabel} placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(105 113 119)', backgroundColor: 'rgb(243 246 249)', borderRadius: '5px', fontWeight: 400 }} />
              </div>
              <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: buttonColor, backgroundColor: buttonBackground, borderRadius: '5px', fontWeight: 700 }}>
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{submitText}</span>
              </button>
            </div>
            <div className="formkit-disclaimer" data-element="disclaimer" style={{ color: 'rgb(105 113 119)' }}>
              {disclaimerText}
            </div>
            {options.settings.powered_by.show ? (
              <BuiltWithBadge href={options.settings.powered_by.url} />
            ) : null}
          </div>
          <div data-element="column" className="formkit-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </div>
      </form>
    </>
  )
}

export default Poplar
