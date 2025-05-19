/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from "./react.production.js";

function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++) {
      url += "&args[]=" + encodeURIComponent(arguments[i]);
    }
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function noop() {}
var Internals = {
    d: {
      f: noop,
      r: function () {
        throw Error(formatProdErrorMessage(522));
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
  REACT_PORTAL_TYPE = Symbol.for("react.portal");
function createPortal$1(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && undefined !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation,
  };
}
var ReactSharedInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getCrossOriginStringAs(as, input) {
  if ("font" === as) {
    return "";
  }
  if ("string" === typeof input) {
    return "use-credentials" === input ? input : "";
  }
}
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
    throw Error(formatProdErrorMessage(299));
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
      Internals.d.f();
  }
};
export const preconnect = function (href, options) {
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
  "string" === typeof href && Internals.d.D(href);
};
export const preinit = function (href, options) {
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
  if ("string" === typeof href) {
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        var crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin,
        );
        Internals.d.M(href, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity
              ? options.integrity
              : undefined,
          nonce: "string" === typeof options.nonce ? options.nonce : undefined,
        });
      }
    } else {
      null == options && Internals.d.M(href);
    }
  }
};
export const preload = function (href, options) {
  if (
    "string" === typeof href &&
    "object" === typeof options &&
    null !== options &&
    "string" === typeof options.as
  ) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
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
  if ("string" === typeof href) {
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as:
          "string" === typeof options.as && "script" !== options.as
            ? options.as
            : undefined,
        crossOrigin: crossOrigin,
        integrity:
          "string" === typeof options.integrity ? options.integrity : undefined,
      });
    } else {
      Internals.d.m(href);
    }
  }
};
export const requestFormReset = function (form) {
  Internals.d.r(form);
};
export const unstable_batchedUpdates = function (fn, a) {
  return fn(a);
};
export const useFormState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
};
export const useFormStatus = function () {
  return ReactSharedInternals.H.useHostTransitionStatus();
};
export const version = "19.1.0";
