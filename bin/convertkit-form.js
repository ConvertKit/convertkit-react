import React from 'react';

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function (a) {
  return z(a) === k;
};

var isContextProvider = function (a) {
  return z(a) === h;
};

var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

var isForwardRef = function (a) {
  return z(a) === n;
};

var isFragment = function (a) {
  return z(a) === e;
};

var isLazy = function (a) {
  return z(a) === t;
};

var isMemo = function (a) {
  return z(a) === r;
};

var isPortal = function (a) {
  return z(a) === d;
};

var isProfiler = function (a) {
  return z(a) === g;
};

var isStrictMode = function (a) {
  return z(a) === f;
};

var isSuspense = function (a) {
  return z(a) === p;
};

var isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function () {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var e$1 = [],
    t$1 = [];
function injector_bafb39d8 (n, r) {
  if (n && "undefined" != typeof document) {
    void 0 === r && (r = {});
    var d,
        a = !0 === r.prepend ? "prepend" : "append",
        i = "undefined" != typeof r.singleTag && r.singleTag,
        s = "undefined" != typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (i) {
      var u = e$1.indexOf(s);
      -1 === u && (u = e$1.push(s) - 1, t$1[u] = {}), d = t$1[u] && t$1[u][a] ? t$1[u][a] : t$1[u][a] = o();
    } else d = o();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), d.styleSheet ? d.styleSheet.cssText += n : d.appendChild(document.createTextNode(n));
  }

  function o() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var d = "prepend" === a ? "afterbegin" : "beforeend";
    return s.insertAdjacentElement(d, e), e;
  }
}

const css_ebb60008 = ".formkit-form * {\n\tbox-sizing: border-box;\n}\n.formkit-form {\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n.formkit-form legend {\n\tborder: none;\n\tfont-size: inherit;\n\tmargin-bottom: 10px;\n\tpadding: 0;\n\tposition: relative;\n\tdisplay: table;\n}\n.formkit-form fieldset {\n\tborder: 0;\n\tpadding: 0.01em 0 0 0;\n\tmargin: 0;\n\tmin-width: 0;\n}\n.formkit-form body:not(:-moz-handler-blocked) fieldset {\n\tdisplay: table-cell;\n}\n.formkit-form h1,\n.formkit-form h2,\n.formkit-form h3,\n.formkit-form h4,\n.formkit-form h5,\n.formkit-form h6 {\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n}\n.formkit-form p {\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n}\n.formkit-form ol:not([template-default]),\n.formkit-form ul:not([template-default]),\n.formkit-form blockquote:not([template-default]) {\n\ttext-align: left;\n}\n.formkit-form p:not([template-default]),\n.formkit-form hr:not([template-default]),\n.formkit-form blockquote:not([template-default]),\n.formkit-form ol:not([template-default]),\n.formkit-form ul:not([template-default]) {\n\tcolor: inherit;\n\tfont-style: initial;\n}\n.formkit-form[data-format=\"modal\"] {\n\tdisplay: none;\n}\n.formkit-form[data-format=\"slide in\"] {\n\tdisplay: none;\n}\n.formkit-form[data-format=\"sticky bar\"] {\n\tdisplay: none;\n}\n.formkit-sticky-bar .formkit-form[data-format=\"sticky bar\"] {\n\tdisplay: block;\n}\n.formkit-form .formkit-input,\n.formkit-form .formkit-select,\n.formkit-form .formkit-checkboxes {\n\twidth: 100%;\n}\n.formkit-form .formkit-button,\n.formkit-form .formkit-submit {\n\tborder: 0;\n\tborder-radius: 5px;\n\tcolor: #ffffff;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin-bottom: 15px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: relative;\n\tvertical-align: middle;\n}\n.formkit-form .formkit-button:hover,\n.formkit-form .formkit-submit:hover,\n.formkit-form .formkit-button:focus,\n.formkit-form .formkit-submit:focus {\n\toutline: none;\n}\n.formkit-form .formkit-button:hover > span,\n.formkit-form .formkit-submit:hover > span,\n.formkit-form .formkit-button:focus > span,\n.formkit-form .formkit-submit:focus > span {\n\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n.formkit-form .formkit-button > span,\n.formkit-form .formkit-submit > span {\n\tdisplay: block;\n\t-webkit-transition: all 300ms ease-in-out;\n\ttransition: all 300ms ease-in-out;\n\tpadding: 12px 24px;\n}\n.formkit-form .formkit-input {\n\tbackground: #ffffff;\n\tfont-size: 15px;\n\tpadding: 12px;\n\tborder: 1px solid #e3e3e3;\n\t-webkit-flex: 1 0 auto;\n\t-ms-flex: 1 0 auto;\n\tflex: 1 0 auto;\n\tline-height: 1.4;\n\tmargin: 0;\n\t-webkit-transition: border-color ease-out 300ms;\n\ttransition: border-color ease-out 300ms;\n}\n.formkit-form .formkit-input:focus {\n\toutline: none;\n\tborder-color: #1677be;\n\t-webkit-transition: border-color ease 300ms;\n\ttransition: border-color ease 300ms;\n}\n.formkit-form .formkit-input::-webkit-input-placeholder {\n\tcolor: inherit;\n\topacity: 0.8;\n}\n.formkit-form .formkit-input::-moz-placeholder {\n\tcolor: inherit;\n\topacity: 0.8;\n}\n.formkit-form .formkit-input:-ms-input-placeholder {\n\tcolor: inherit;\n\topacity: 0.8;\n}\n.formkit-form .formkit-input::placeholder {\n\tcolor: inherit;\n\topacity: 0.8;\n}\n.formkit-form[data-group=\"dropdown\"] {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n.formkit-form[data-group=\"dropdown\"]::before {\n\tcontent: \"\";\n\ttop: calc(50% - 2.5px);\n\tright: 10px;\n\tposition: absolute;\n\tpointer-events: none;\n\tborder-color: #4f4f4f transparent transparent transparent;\n\tborder-style: solid;\n\tborder-width: 6px 6px 0 6px;\n\theight: 0;\n\twidth: 0;\n\tz-index: 999;\n}\n.formkit-form[data-group=\"dropdown\"] select {\n\theight: auto;\n\twidth: 100%;\n\tcursor: pointer;\n\tcolor: #333333;\n\tline-height: 1.4;\n\tmargin-bottom: 0;\n\tpadding: 0 6px;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tfont-size: 15px;\n\tpadding: 12px;\n\tpadding-right: 25px;\n\tborder: 1px solid #e3e3e3;\n\tbackground: #ffffff;\n}\n.formkit-form[data-group=\"dropdown\"] select:focus {\n\toutline: none;\n}\n.formkit-form[data-group=\"checkboxes\"] {\n\ttext-align: left;\n\tmargin: 0;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] {\n\tmargin-bottom: 10px;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] * {\n\tcursor: pointer;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"]:last-of-type {\n\tmargin-bottom: 0;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] input[type=\"checkbox\"] {\n\tdisplay: none;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] input[type=\"checkbox\"] + label::after {\n\tcontent: none;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] input[type=\"checkbox\"]:checked + label::after {\n\tborder-color: #ffffff;\n\tcontent: \"\";\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] input[type=\"checkbox\"]:checked + label::before {\n\tbackground: #10bf7a;\n\tborder-color: #10bf7a;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] label {\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding-left: 28px;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] label::before,\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] label::after {\n\tposition: absolute;\n\tcontent: \"\";\n\tdisplay: inline-block;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] label::before {\n\theight: 16px;\n\twidth: 16px;\n\tborder: 1px solid #e3e3e3;\n\tbackground: #ffffff;\n\tleft: 0px;\n\ttop: 3px;\n}\n.formkit-form[data-group=\"checkboxes\"][data-group=\"checkbox\"] label::after {\n\theight: 4px;\n\twidth: 8px;\n\tborder-left: 2px solid #4d4d4d;\n\tborder-bottom: 2px solid #4d4d4d;\n\t-webkit-transform: rotate(-45deg);\n\t-ms-transform: rotate(-45deg);\n\ttransform: rotate(-45deg);\n\tleft: 4px;\n\ttop: 8px;\n}\n.formkit-form .formkit-alert {\n\tbackground: #f9fafb;\n\tborder: 1px solid #e3e3e3;\n\tborder-radius: 5px;\n\t-webkit-flex: 1 0 auto;\n\t-ms-flex: 1 0 auto;\n\tflex: 1 0 auto;\n\tlist-style: none;\n\tmargin: 25px auto;\n\tpadding: 12px;\n\ttext-align: center;\n\twidth: 100%;\n}\n.formkit-form .formkit-alert:empty {\n\tdisplay: none;\n}\n.formkit-form .formkit-alert-success {\n\tbackground: #d3fbeb;\n\tborder-color: #10bf7a;\n\tcolor: #0c905c;\n}\n.formkit-form .formkit-alert-error {\n\tbackground: #fde8e2;\n\tborder-color: #f2643b;\n\tcolor: #ea4110;\n}\n.formkit-form .formkit-spinner {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\theight: 0px;\n\twidth: 0px;\n\tmargin: 0 auto;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\twidth: 0px;\n\toverflow: hidden;\n\ttext-align: center;\n\t-webkit-transition: all 300ms ease-in-out;\n\ttransition: all 300ms ease-in-out;\n}\n.formkit-form .formkit-spinner > div {\n\tmargin: auto;\n\twidth: 12px;\n\theight: 12px;\n\tbackground-color: #fff;\n\topacity: 0.3;\n\tborder-radius: 100%;\n\tdisplay: inline-block;\n\t-webkit-animation: formkit-bouncedelay-formkit-form-data-uid-e8437783ad- 1.4s infinite ease-in-out both;\n\tanimation: formkit-bouncedelay-formkit-form-data-uid-e8437783ad- 1.4s infinite ease-in-out both;\n}\n.formkit-form .formkit-spinner > div:nth-child(1) {\n\t-webkit-animation-delay: -0.32s;\n\tanimation-delay: -0.32s;\n}\n.formkit-form .formkit-spinner > div:nth-child(2) {\n\t-webkit-animation-delay: -0.16s;\n\tanimation-delay: -0.16s;\n}\n.formkit-form .formkit-submit[data-active] .formkit-spinner {\n\topacity: 1;\n\theight: 100%;\n\twidth: 50px;\n}\n.formkit-form .formkit-submit[data-active] .formkit-spinner ~ span {\n\topacity: 0;\n}\n.formkit-form .formkit-powered-by[data-active=\"false\"] {\n\topacity: 0.35;\n}\n@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-e8437783ad- {\n\t0%, 80%, 100% {\n\t\t-webkit-transform: scale(0);\n\t\t-ms-transform: scale(0);\n\t\ttransform: scale(0);\n\t}\n\t40% {\n\t\t-webkit-transform: scale(1);\n\t\t-ms-transform: scale(1);\n\t\ttransform: scale(1);\n\t}\n}\n@keyframes formkit-bouncedelay-formkit-form-data-uid-e8437783ad- {\n\t0%, 80%, 100% {\n\t\t-webkit-transform: scale(0);\n\t\t-ms-transform: scale(0);\n\t\ttransform: scale(0);\n\t}\n\t40% {\n\t\t-webkit-transform: scale(1);\n\t\t-ms-transform: scale(1);\n\t\ttransform: scale(1);\n\t}\n}\n.formkit-form blockquote {\n\tpadding: 10px 20px;\n\tmargin: 0 0 20px;\n\tborder-left: 5px solid #e1e1e1;\n}\n.formkit-form {\n\tmax-width: 700px;\n}\n.formkit-form[data-style=\"clean\"] {\n\twidth: 100%;\n}\n.formkit-form .formkit-fields {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tmargin: 0 auto;\n}\n.formkit-form .formkit-field,\n.formkit-form .formkit-submit {\n\tmargin: 0 0 15px 0;\n\t-webkit-flex: 1 0 100%;\n\t-ms-flex: 1 0 100%;\n\tflex: 1 0 100%;\n}\n.formkit-form .formkit-powered-by {\n\tcolor: #7d7d7d;\n\tdisplay: block;\n\tfont-size: 12px;\n\tmargin: 0;\n\ttext-align: center;\n}\n.formkit-form[min-width~=\"700\"][data-style=\"clean\"],\n.formkit-form[min-width~=\"800\"][data-style=\"clean\"] {\n\tpadding: 10px;\n}\n.formkit-form[min-width~=\"700\"] .formkit-fields[data-stacked=\"false\"],\n.formkit-form[min-width~=\"800\"] .formkit-fields[data-stacked=\"false\"] {\n\tmargin-left: -5px;\n\tmargin-right: -5px;\n}\n.formkit-form[min-width~=\"700\"] .formkit-fields[data-stacked=\"false\"] .formkit-field,\n.formkit-form[min-width~=\"800\"] .formkit-fields[data-stacked=\"false\"] .formkit-field,\n.formkit-form[min-width~=\"700\"] .formkit-fields[data-stacked=\"false\"] .formkit-submit,\n.formkit-form[min-width~=\"800\"] .formkit-fields[data-stacked=\"false\"] .formkit-submit {\n\tmargin: 0 5px 15px 5px;\n}\n.formkit-form[min-width~=\"700\"] .formkit-fields[data-stacked=\"false\"] .formkit-field,\n.formkit-form[min-width~=\"800\"] .formkit-fields[data-stacked=\"false\"] .formkit-field {\n\t-webkit-flex: 100 1 auto;\n\t-ms-flex: 100 1 auto;\n\tflex: 100 1 auto;\n}\n.formkit-form[min-width~=\"700\"] .formkit-fields[data-stacked=\"false\"] .formkit-submit,\n.formkit-form[min-width~=\"800\"] .formkit-fields[data-stacked=\"false\"] .formkit-submit {\n\t-webkit-flex: 1 1 auto;\n\t-ms-flex: 1 1 auto;\n\tflex: 1 1 auto;\n}\n";
injector_bafb39d8(css_ebb60008);

function ClareInline(_ref) {
  var _React$createElement;

  var options = _ref.options,
      action = _ref.action,
      submitText = _ref.submitText,
      emailPlaceholder = _ref.emailPlaceholder,
      namePlaceholder = _ref.namePlaceholder,
      hideName = _ref.hideName,
      showLabels = _ref.showLabels,
      nameLabel = _ref.nameLabel,
      emailLabel = _ref.emailLabel,
      newTab = _ref.newTab,
      formId = _ref.formId;
  return /*#__PURE__*/React.createElement("form", (_React$createElement = {
    action: action,
    method: "post",
    target: newTab ? '_blank' : '_self',
    className: "seva-form formkit-form"
  }, _defineProperty(_React$createElement, "method", "post"), _defineProperty(_React$createElement, "data-sv-form", formId), _defineProperty(_React$createElement, "data-format", "inline"), _defineProperty(_React$createElement, "data-version", options.version), _defineProperty(_React$createElement, "data-uid", ""), _defineProperty(_React$createElement, "data-options", JSON.stringify(options)), _defineProperty(_React$createElement, "min-width", "400 500 600 700 800"), _React$createElement), /*#__PURE__*/React.createElement("div", {
    "data-style": "clean"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "formkit-alert formkit-alert-error",
    "data-element": "errors",
    "data-group": "alert"
  }), /*#__PURE__*/React.createElement("div", {
    "data-element": "fields",
    "data-stacked": "false",
    className: "seva-fields formkit-fields"
  }, !hideName && /*#__PURE__*/React.createElement(React.Fragment, null, showLabels ? /*#__PURE__*/React.createElement("label", null, nameLabel) : null, /*#__PURE__*/React.createElement("div", {
    className: "formkit-field"
  }, /*#__PURE__*/React.createElement("input", {
    className: "formkit-input",
    "aria-label": "Your first name",
    name: "fields[first_name]",
    placeholder: namePlaceholder,
    type: "text",
    style: {
      color: 'rgb(0, 0, 0)',
      borderColor: 'rgb(227, 227, 227)',
      borderRadius: '4px',
      fontWeight: 400
    }
  }))), showLabels ? /*#__PURE__*/React.createElement("label", null, emailLabel) : null, /*#__PURE__*/React.createElement("div", {
    className: "formkit-field"
  }, /*#__PURE__*/React.createElement("input", {
    className: "formkit-input",
    name: "email_address",
    placeholder: emailPlaceholder,
    required: true,
    type: "email",
    style: {
      color: 'rgb(0, 0, 0)',
      borderColor: 'rgb(227, 227, 227)',
      borderRadius: '4px',
      fontWeight: 400
    }
  })), /*#__PURE__*/React.createElement("button", {
    "data-element": "submit",
    className: "formkit-submit formkit-submit",
    style: {
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(22, 119, 190)',
      borderRadius: '4px',
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "formkit-spinner"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("span", null, submitText))), options.settings.powered_by.show ? /*#__PURE__*/React.createElement("a", {
    href: "https://convertkit.com?utm_source=dynamic&utm_medium=referral&utm_campaign=poweredby&utm_content=form",
    className: "formkit-powered-by",
    "data-element": "powered-by",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Powered By ConvertKit") : null));
}

var options = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: ''
    },
    analytics: {
      google: null,
      facebook: null,
      segment: null,
      pinterest: null
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    powered_by: {
      show: true,
      url: 'https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form'
    },
    recaptcha: {
      enabled: false
    },
    return_visitor: {
      action: 'show',
      custom_content: ''
    },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    }
  },
  version: '5'
};

var renderTemplate = function renderTemplate(template) {
  var allTemplates = {
    clare: ClareInline,
    mills: function mills() {
      return null;
    }
  };

  if (!allTemplates.hasOwnProperty(template)) {
    var errorMessage = "The chosen template \"".concat(template, "\" is not yet supported");
    throw new ReferenceError(errorMessage);
  }

  return allTemplates[template];
};

function useTemplate(template) {
  return {
    options: options,
    Template: renderTemplate(template)
  };
}

// derive data-uid of user and use to prefix CSS classes

function InlineForm(_ref) {
  var template = _ref.template,
      props = _objectWithoutProperties(_ref, ["template"]);

  var _useTemplate = useTemplate(template),
      options = _useTemplate.options,
      Template = _useTemplate.Template;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("script", {
    src: "https://f.convertkit.com/ckjs/ck.5.js"
  }), /*#__PURE__*/React.createElement(Template, _extends({}, props, {
    options: options
  })));
}

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
  format: propTypes.string,
  template: propTypes.string,
  formId: propTypes.number.isRequired,
  submitText: propTypes.string,
  emailPlaceholder: propTypes.string,
  namePlaceholder: propTypes.string,
  nameLabel: propTypes.string,
  emailLabel: propTypes.string,
  showLabels: propTypes.bool,
  hideName: propTypes.bool,
  newTab: propTypes.bool
};
ConvertKitForm.defaultProps = {
  format: 'minimal',
  template: 'clare',
  submitText: 'Subscribe',
  emailPlaceholder: 'Your email',
  namePlaceholder: 'Your first name',
  nameLabel: 'First name',
  emailLabel: 'Email',
  showLabels: false,
  hideName: false,
  newTab: false
};

export default ConvertKitForm;
