import * as React from "./react.development.js";

/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function noop() {}
function testStringCoercion(value) {
  return "" + value;
}
function createPortal$1(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && undefined !== arguments[3] ? arguments[3] : null;
  try {
    testStringCoercion(key);
    var JSCompiler_inline_result = !1;
  } catch (e) {
    JSCompiler_inline_result = !0;
  }
  JSCompiler_inline_result &&
    (console.error(
      "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
      ("function" === typeof Symbol &&
        Symbol.toStringTag &&
        key[Symbol.toStringTag]) ||
        key.constructor.name ||
        "Object",
    ),
    testStringCoercion(key));
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation,
  };
}
function getCrossOriginStringAs(as, input) {
  if ("font" === as) {
    return "";
  }
  if ("string" === typeof input) {
    return "use-credentials" === input ? input : "";
  }
}
function getValueDescriptorExpectingObjectForWarning(thing) {
  return null === thing
    ? "`null`"
    : undefined === thing
      ? "`undefined`"
      : "" === thing
        ? "an empty string"
        : 'something with type "' + typeof thing + '"';
}
function getValueDescriptorExpectingEnumForWarning(thing) {
  return null === thing
    ? "`null`"
    : undefined === thing
      ? "`undefined`"
      : "" === thing
        ? "an empty string"
        : "string" === typeof thing
          ? JSON.stringify(thing)
          : "number" === typeof thing
            ? "`" + thing + "`"
            : 'something with type "' + typeof thing + '"';
}
function resolveDispatcher() {
  var dispatcher = ReactSharedInternals.H;
  null === dispatcher &&
    console.error(
      "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.",
    );
  return dispatcher;
}
var Internals = {
    d: {
      f: noop,
      r: function () {
        throw Error(
          "Invalid form element. requestFormReset must be passed a form that was rendered by React.",
        );
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop,
    },
    p: 0,
    findDOMNode: null,
  },
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  ReactSharedInternals =
    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
export const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  Internals;
export const createPortal = function (children, container) {
  var key =
    2 < arguments.length && undefined !== arguments[2] ? arguments[2] : null;
  if (
    !container ||
    (1 !== container.nodeType &&
      9 !== container.nodeType &&
      11 !== container.nodeType)
  ) {
    throw Error("Target container is not a DOM element.");
  }
  return createPortal$1(children, container, null, key);
};
export const flushSync = function (fn) {
  var previousTransition = ReactSharedInternals.T,
    previousUpdatePriority = Internals.p;
  try {
    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) {
      return fn();
    }
  } finally {
    (ReactSharedInternals.T = previousTransition),
      (Internals.p = previousUpdatePriority),
      Internals.d.f() &&
        console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.",
        );
  }
};
export const preconnect = function (href, options) {
  "string" === typeof href && href
    ? null != options && "object" !== typeof options
      ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options),
        )
      : null != options &&
        "string" !== typeof options.crossOrigin &&
        console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options.crossOrigin),
        )
    : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        getValueDescriptorExpectingObjectForWarning(href),
      );
  "string" === typeof href &&
    (options
      ? ((options = options.crossOrigin),
        (options =
          "string" === typeof options
            ? "use-credentials" === options
              ? options
              : ""
            : undefined))
      : (options = null),
    Internals.d.C(href, options));
};
export const prefetchDNS = function (href) {
  if ("string" !== typeof href || !href) {
    console.error(
      "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
      getValueDescriptorExpectingObjectForWarning(href),
    );
  } else if (1 < arguments.length) {
    var options = arguments[1];
    "object" === typeof options && options.hasOwnProperty("crossOrigin")
      ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          getValueDescriptorExpectingEnumForWarning(options),
        )
      : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          getValueDescriptorExpectingEnumForWarning(options),
        );
  }
  "string" === typeof href && Internals.d.D(href);
};
export const preinit = function (href, options) {
  "string" === typeof href && href
    ? null == options || "object" !== typeof options
      ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options),
        )
      : "style" !== options.as &&
        "script" !== options.as &&
        console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options.as),
        )
    : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        getValueDescriptorExpectingObjectForWarning(href),
      );
  if ("string" === typeof href && options && "string" === typeof options.as) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
      integrity =
        "string" === typeof options.integrity ? options.integrity : undefined,
      fetchPriority =
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : undefined;
    "style" === as
      ? Internals.d.S(
          href,
          "string" === typeof options.precedence
            ? options.precedence
            : undefined,
          {
            crossOrigin: crossOrigin,
            integrity: integrity,
            fetchPriority: fetchPriority,
          },
        )
      : "script" === as &&
        Internals.d.X(href, {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : undefined,
        });
  }
};
export const preinitModule = function (href, options) {
  var encountered = "";
  ("string" === typeof href && href) ||
    (encountered +=
      " The `href` argument encountered was " +
      getValueDescriptorExpectingObjectForWarning(href) +
      ".");
  undefined !== options && "object" !== typeof options
    ? (encountered +=
        " The `options` argument encountered was " +
        getValueDescriptorExpectingObjectForWarning(options) +
        ".")
    : options &&
      "as" in options &&
      "script" !== options.as &&
      (encountered +=
        " The `as` option encountered was " +
        getValueDescriptorExpectingEnumForWarning(options.as) +
        ".");
  if (encountered) {
    console.error(
      "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
      encountered,
    );
  } else {
    switch (
      ((encountered =
        options && "string" === typeof options.as ? options.as : "script"),
      encountered)
    ) {
      case "script":
        break;
      default:
        (encountered = getValueDescriptorExpectingEnumForWarning(encountered)),
          console.error(
            'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
            encountered,
            href,
          );
    }
  }
  if ("string" === typeof href) {
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        (encountered = getCrossOriginStringAs(options.as, options.crossOrigin)),
          Internals.d.M(href, {
            crossOrigin: encountered,
            integrity:
              "string" === typeof options.integrity
                ? options.integrity
                : undefined,
            nonce:
              "string" === typeof options.nonce ? options.nonce : undefined,
          });
      }
    } else {
      null == options && Internals.d.M(href);
    }
  }
};
export const preload = function (href, options) {
  var encountered = "";
  ("string" === typeof href && href) ||
    (encountered +=
      " The `href` argument encountered was " +
      getValueDescriptorExpectingObjectForWarning(href) +
      ".");
  null == options || "object" !== typeof options
    ? (encountered +=
        " The `options` argument encountered was " +
        getValueDescriptorExpectingObjectForWarning(options) +
        ".")
    : ("string" === typeof options.as && options.as) ||
      (encountered +=
        " The `as` option encountered was " +
        getValueDescriptorExpectingObjectForWarning(options.as) +
        ".");
  encountered &&
    console.error(
      'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
      encountered,
    );
  if (
    "string" === typeof href &&
    "object" === typeof options &&
    null !== options &&
    "string" === typeof options.as
  ) {
    encountered = options.as;
    var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
    Internals.d.L(href, encountered, {
      crossOrigin: crossOrigin,
      integrity:
        "string" === typeof options.integrity ? options.integrity : undefined,
      nonce: "string" === typeof options.nonce ? options.nonce : undefined,
      type: "string" === typeof options.type ? options.type : undefined,
      fetchPriority:
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : undefined,
      referrerPolicy:
        "string" === typeof options.referrerPolicy
          ? options.referrerPolicy
          : undefined,
      imageSrcSet:
        "string" === typeof options.imageSrcSet
          ? options.imageSrcSet
          : undefined,
      imageSizes:
        "string" === typeof options.imageSizes ? options.imageSizes : undefined,
      media: "string" === typeof options.media ? options.media : undefined,
    });
  }
};
export const preloadModule = function (href, options) {
  var encountered = "";
  ("string" === typeof href && href) ||
    (encountered +=
      " The `href` argument encountered was " +
      getValueDescriptorExpectingObjectForWarning(href) +
      ".");
  undefined !== options && "object" !== typeof options
    ? (encountered +=
        " The `options` argument encountered was " +
        getValueDescriptorExpectingObjectForWarning(options) +
        ".")
    : options &&
      "as" in options &&
      "string" !== typeof options.as &&
      (encountered +=
        " The `as` option encountered was " +
        getValueDescriptorExpectingObjectForWarning(options.as) +
        ".");
  encountered &&
    console.error(
      'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
      encountered,
    );
  "string" === typeof href &&
    (options
      ? ((encountered = getCrossOriginStringAs(
          options.as,
          options.crossOrigin,
        )),
        Internals.d.m(href, {
          as:
            "string" === typeof options.as && "script" !== options.as
              ? options.as
              : undefined,
          crossOrigin: encountered,
          integrity:
            "string" === typeof options.integrity
              ? options.integrity
              : undefined,
        }))
      : Internals.d.m(href));
};
export const requestFormReset = function (form) {
  Internals.d.r(form);
};
export const unstable_batchedUpdates = function (fn, a) {
  return fn(a);
};
export const useFormState = function (action, initialState, permalink) {
  return resolveDispatcher().useFormState(action, initialState, permalink);
};
export const useFormStatus = function () {
  return resolveDispatcher().useHostTransitionStatus();
};
export const version = "19.1.0";
