"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InlineForm = function InlineForm(_ref) {
  var action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTabSubmit = _ref.newTabSubmit;
  return /*#__PURE__*/_react.default.createElement("form", {
    action: action,
    method: "post",
    target: newTabSubmit ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showLabels ? /*#__PURE__*/_react.default.createElement("label", null, nameLabel) : null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/_react.default.createElement("label", null, emailLabel) : null, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, submitText));
};

var MinimalForm = function MinimalForm(_ref2) {
  var action = _ref2.action,
      submitText = _ref2.submitText,
      emailPlaceholder = _ref2.emailPlaceholder,
      namePlaceholder = _ref2.namePlaceholder,
      hideName = _ref2.hideName,
      showLabels = _ref2.showLabels,
      nameLabel = _ref2.nameLabel,
      emailLabel = _ref2.emailLabel,
      newTabSubmit = _ref2.newTabSubmit;
  return /*#__PURE__*/_react.default.createElement("form", {
    action: action,
    method: "post",
    target: newTabSubmit ? '_blank' : '_self'
  }, !hideName && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showLabels ? /*#__PURE__*/_react.default.createElement("label", null, nameLabel) : null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "fields[first_name]",
    placeholder: namePlaceholder
  })), showLabels ? /*#__PURE__*/_react.default.createElement("label", null, emailLabel) : null, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: emailPlaceholder
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, submitText));
};

var formFormat = function formFormat(format, props) {
  var formatEmbeds = {
    inline: function inline() {
      return /*#__PURE__*/_react.default.createElement(InlineForm, props);
    },
    minimal: function minimal() {
      return /*#__PURE__*/_react.default.createElement(MinimalForm, props);
    },
    modal: function modal() {
      return null;
    },
    slidein: function slidein() {
      return null;
    },
    sticky: function sticky() {
      return null;
    }
  };

  if (!formatEmbeds.hasOwnProperty(format)) {
    var errorMessage = "This form format: \"".concat(format, "\" is not supported");
    throw new ReferenceError(errorMessage);
  }

  return formatEmbeds[format];
};

var ConvertKitForm = function ConvertKitForm(_ref3) {
  var _ref3$format = _ref3.format,
      format = _ref3$format === void 0 ? 'inline' : _ref3$format,
      formId = _ref3.formId,
      props = _objectWithoutProperties(_ref3, ["format", "formId"]);

  var action = "https://app.convertkit.com/forms/".concat(formId, "/subscriptions");
  return formFormat(format, _objectSpread({
    action: action
  }, props))();
};

ConvertKitForm.propTypes = {
  format: _propTypes.default.string,
  template: _propTypes.default.string,
  formId: _propTypes.default.number.isRequired,
  submitText: _propTypes.default.string,
  emailPlaceholder: _propTypes.default.string,
  namePlaceholder: _propTypes.default.string,
  nameLabel: _propTypes.default.string,
  emailLabel: _propTypes.default.string,
  showLabels: _propTypes.default.bool,
  hideName: _propTypes.default.bool,
  newTabSubmit: _propTypes.default.bool
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
  newTabSubmit: false
};
var _default = ConvertKitForm;
exports.default = _default;
