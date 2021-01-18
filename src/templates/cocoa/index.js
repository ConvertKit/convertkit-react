
import React from 'react'
import './clare-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'
import useScript from '../../use-script'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/rainier/bg.jpg'

function Cocoa({
  action,
  formId,
  options,
  hideName = false,
  showLabels = false,
  newTab = false,
  hideWarnings = false,
  stacked = true,
  className = '',
  submitText = 'Subscribe',
  emailPlaceholder = 'Your email',
  namePlaceholder = 'Your first name',
  nameLabel = 'First name',
  emailLabel = 'Email',
  format = 'inline',
  backgroundImage = bgImage,
  backgroundOpacity = 0.8,
  backgroundColor = [16,16,16]
}) {
}
