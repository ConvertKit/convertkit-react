'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var InlineForm = function InlineForm(_ref) {
  var action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTab = _ref.newTab;
  return /*#__PURE__*/React.createElement("form", {
    action: action,
    method: "post",
    target: newTab ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/React.createElement(React.Fragment, null, showLabels ? /*#__PURE__*/React.createElement("label", null, nameLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/React.createElement("label", null, emailLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, submitText));
};

var MinimalForm = function MinimalForm(_ref) {
  var action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTab = _ref.newTab;
  return /*#__PURE__*/React.createElement("form", {
    action: action,
    method: "post",
    target: newTab ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/React.createElement(React.Fragment, null, showLabels ? /*#__PURE__*/React.createElement("label", null, nameLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/React.createElement("label", null, emailLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, submitText));
};

var ModalForm = function ModalForm(_ref) {
  var action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTab = _ref.newTab;
  return /*#__PURE__*/React.createElement("form", {
    action: action,
    method: "post",
    target: newTab ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/React.createElement(React.Fragment, null, showLabels ? /*#__PURE__*/React.createElement("label", null, nameLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/React.createElement("label", null, emailLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, submitText));
};

var SlideInForm = function SlideInForm(_ref) {
  var action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTab = _ref.newTab;
  return /*#__PURE__*/React.createElement("form", {
    action: action,
    method: "post",
    target: newTab ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/React.createElement(React.Fragment, null, showLabels ? /*#__PURE__*/React.createElement("label", null, nameLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/React.createElement("label", null, emailLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, submitText));
};

var StickyForm = function StickyForm(_ref) {
  var action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTab = _ref.newTab;
  return /*#__PURE__*/React.createElement("form", {
    action: action,
    method: "post",
    target: newTab ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/React.createElement(React.Fragment, null, showLabels ? /*#__PURE__*/React.createElement("label", null, nameLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/React.createElement("label", null, emailLabel) : null, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, submitText));
};

var formFormat = function formFormat(format, props) {
  var formatEmbeds = {
    inline: function inline() {
      return /*#__PURE__*/React.createElement(InlineForm, props);
    },
    minimal: function minimal() {
      return /*#__PURE__*/React.createElement(MinimalForm, props);
    },
    modal: function modal() {
      return /*#__PURE__*/React.createElement(ModalForm, props);
    },
    slidein: function slidein() {
      return /*#__PURE__*/React.createElement(SlideInForm, props);
    },
    sticky: function sticky() {
      return /*#__PURE__*/React.createElement(StickyForm, props);
    }
  };

  if (!formatEmbeds.hasOwnProperty(format)) {
    var errorMessage = "This form format: \"".concat(format, "\" is not supported");
    throw new ReferenceError(errorMessage);
  }

  return formatEmbeds[format];
};

var ConvertKitForm = function ConvertKitForm(_ref) {
  var format = _ref.format,
      formId = _ref.formId,
      props = _objectWithoutProperties(_ref, ["format", "formId"]);

  var action = "https://app.convertkit.com/forms/".concat(formId, "/subscriptions");
  return formFormat(format, _objectSpread2({
    action: action
  }, props))();
};

ConvertKitForm.propTypes = {
  format: PropTypes.string,
  template: PropTypes.string,
  formId: PropTypes.number.isRequired,
  submitText: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  namePlaceholder: PropTypes.string,
  nameLabel: PropTypes.string,
  emailLabel: PropTypes.string,
  showLabels: PropTypes.bool,
  hideName: PropTypes.bool,
  newTab: PropTypes.bool
};
ConvertKitForm.defaultProps = {
  format: 'minimal',
  template: 'clare',
  submitText: 'Submit',
  emailPlaceholder: 'Your email',
  namePlaceholder: 'Your first name',
  nameLabel: 'First name',
  emailLabel: 'Email',
  showLabels: false,
  hideName: false,
  newTab: false
};

module.exports = ConvertKitForm;
