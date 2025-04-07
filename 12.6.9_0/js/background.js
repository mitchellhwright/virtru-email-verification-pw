/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1344:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _bindAllMethods: () => (/* binding */ _bindAllMethods)
/* harmony export */ });
const {
  _bindAllMethods
} = __webpack_require__(37605);


/***/ }),

/***/ 8561:
/***/ ((module) => {

/**
 * Emit `event` with the given args and allow
 * the event to be canceled.  In some circumstances
 * a listener of an event may want to signal to the
 * emitter to cancel the event.  This function allows
 * that to happen.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Boolean} Returns false if canceled
 */

module.exports.Q = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1);
  var callbacks = this._callbacks[event];
  if (callbacks && callbacks.length) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      var result = callbacks[i].apply(this, args);
      result = result === undefined ? true : result;
      if (!result) {
        return false;
      }
    }
  }
  return true;
};

/***/ }),

/***/ 9115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// patch console to send service worker logs > content script > DataDog
// DataDog's console forwarding doesn't work in service workers
__webpack_require__(36757);
var routers = __webpack_require__(12367);
var transports = __webpack_require__(58533);
var {
  storage
} = __webpack_require__(43829);
var {
  EXTENSION_KEY
} = __webpack_require__(76223);
var {
  ScriptTransport
} = transports;
// Collect the routers needed for the background script
var contentRouter = routers.router('content');
var browserActionRouter = routers.router('browserAction');

/* !
 * An event listener that handles messages from the content script. Messages
 * will be routed to the correct content background script handler via
 * ``contentRouter`` It will wrap the response to the content script in the
 * appropriate envelope.
 *
 * The envelope used by the content script::
 *
 *    {
 *      action: "nameOfTheAction",
 *      data: "The parameters for the action",
 *
 *    }
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Get the action from the request envelope
  var actionName = request.action;
  var params = request.data;
  var envelopeResponse = function (error, response) {
    var envelope = {
      uniqueExtensionKey: EXTENSION_KEY,
      data: response,
      error
    };
    if (actionName === 'readFile') {
      // Way to pass large (now any) data to content.
      // Remove payload due to the impossibility to pass large data to the content.
      storage.set(envelope.data.policyUuid, envelope.data.tdf.payload);
      delete envelope.data.tdf.payload;
    }
    sendResponse(envelope);
  };
  var requestParams = {
    params,
    tab: sender.tab
  };

  // Change router for browserActions or content script
  var currentRouter = contentRouter;

  // browserAction will not have a tab
  if (!sender.tab) {
    currentRouter = browserActionRouter;
  }

  // Run the route asynchronously, it seems to error otherwise
  setTimeout(function () {
    currentRouter.route(actionName, requestParams, envelopeResponse);
  }, 5);

  // Make sure chrome knows this is async by returning true.
  // IF THIS IS NOT SET THEN THE ACTION WILL LIKELY FAIL
  return true;
});

// We need this no operation handler to make us able to instantly identify is extension installed or not
// this identification we need for secure reader
chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  sendResponse({
    status: 'installed'
  });
});

/**
 * Content script request adapter
 *
 * It will choose a tab based on the command parameter.
 *
 * @param {String|Object} command The name of the command or an object that
 *                                includes a reference to a specific tab.
 *                                TODO... explain/test that object
 * @param {Object} params The parameters for that command
 * @param {Function} responseCallback The callback to complete the response
 * @param {Function} progressCallback The callback to progress updates
 */
function contentRequestAdapter(command, params, responseCallback, progressCallback, isBroadcast) {
  // Initialize the chrome tab to nothing
  var chromeTab = null;
  var actionName = command;

  // Create a handler to make the actual request to the content script
  var makeRequest = function (params) {
    if (chromeTab) {
      var tabId = chromeTab.id;
    }
    var envelope = {
      uniqueExtensionKey: EXTENSION_KEY,
      type: 'command',
      action: actionName,
      data: params
    };

    // Wrap the call in a try catch to ensure that any errors when trying to
    // talk to the content script are sent to the requesting code
    try {
      if (isBroadcast) {
        // Send a broadcast message, there is no response handling for a broadcast
        chrome.tabs.query({}, function (tabs) {
          for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, envelope);
          }
        });
      } else {
        // Send a message to a specific tab
        chrome.tabs.sendMessage(tabId, envelope, function (response) {
          if (chrome.runtime.lastError) {
            return responseCallback({
              message: chrome.runtime.lastError,
              name: 'ChromeError'
            });
          }
          var {
            error
          } = response;
          var {
            data
          } = response;
          responseCallback(error, data);
        });
      }
    } catch (err) {
      // Send the error to the response
      responseCallback(err);
    }
  };

  // Handle the case that the caller specified a tab
  if (Object.hasOwn(command, 'tab')) {
    chromeTab = command.tab;
    actionName = command.name;
    makeRequest(params);
  } else {
    // This command will get the currently visible tab
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      // There should only be a single element in this array.
      // That's the tab we're looking for
      chromeTab = tabs[0];
      makeRequest(params);
    });
  }
}
var chromeBackgroundToContentTransport = ScriptTransport.setup({
  requestAdapter: contentRequestAdapter
});
transports.registerTransport('content', chromeBackgroundToContentTransport);
var runExtensionScript = function () {
  // Run the script
  (__webpack_require__(21406).main)();
};

// Run the extension's adapter and main script
runExtensionScript();

/***/ }),

/***/ 10248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var precond = __webpack_require__(57128);
var {
  storage
} = __webpack_require__(43829);
const {
  _bindAllMethods
} = __webpack_require__(4424);
var DEFAULT_REFRESH_INTERVAL = 24 * 60 * 60 * 1000; // One day

/**
 * Default client configuration from the server; /api/client-config
 */
var DEFAULT_CLIENT_CONFIG = {
  features: {
    // Default to GCM for encryption
    messageIntegrityAes256Gcm: true
  }
};

/**
 * Constructore for the Command object that processes loading
 * a users profile.
 * @constructor
 */
function LoadClientConfig(accountsService, settings, options) {
  this.accountsService = accountsService;
  this.settings = settings;
  this.defaultConfig = options.defaultConfig;
  this.config = {};
  this.refreshInterval = options.refreshInterval;
  _bindAllMethods(this);
}
LoadClientConfig.create = function (accountsService, settings, options) {
  options = options || {};
  options.refreshInterval = precond.checkIsNumber(options.refreshInterval || DEFAULT_REFRESH_INTERVAL);
  options.defaultConfig = precond.checkIsObject(options.defaultConfig || DEFAULT_CLIENT_CONFIG);
  var service = new LoadClientConfig(precond.checkIsObject(accountsService), precond.checkIsObject(settings), options);
  service.refresh();
  return service;
};
LoadClientConfig.prototype.poll = function () {
  this.timeout = setTimeout(function () {
    this.refresh();
  }.bind(this), this.refreshInterval);
};
LoadClientConfig.prototype.getCachedClientConfig = async function () {
  let clientConfig;
  const EXPIRATION_TIME = 60 * 60000;
  const cachedClientConfig = await storage.get('clientConfig');
  const timestamp = Date.now();
  if (cachedClientConfig && cachedClientConfig.data && timestamp - EXPIRATION_TIME < cachedClientConfig.cacheTime) {
    clientConfig = cachedClientConfig.data;
  } else {
    clientConfig = await this.accountsService.getClientConfig(this.settings.connectOptions());
    await storage.set('clientConfig', {
      data: clientConfig,
      cacheTime: timestamp
    });
  }
  return new Promise(resolve => {
    resolve(clientConfig);
  });
};
LoadClientConfig.prototype.refresh = function () {
  clearTimeout(this.timeout);
  return this.getCachedClientConfig().then(function processConfig(config) {
    // The call failed, just return and use whatever was last there
    if (config && Object.keys(config).length === 0) {
      return;
    }
    this.config = config;

    // Save the config back to extension settings and update user settings
    return this.settings.updateClientConfigSettings(config);
  }.bind(this)).finally(function () {
    this.poll();
  }.bind(this));
};
LoadClientConfig.prototype.getClientConfig = function () {
  return {
    ...this.defaultConfig,
    ...this.config
  };
};
module.exports = LoadClientConfig;

/***/ }),

/***/ 11367:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 12367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * A script local routers registry
 */
var {
  Router
} = __webpack_require__(61526);
var {
  Dict
} = __webpack_require__(82603);

/**
 * A registry for routers
 */
function RoutersRegistry() {
  this._routers = new Dict();
}

/**
 * Get or create a named router
 */
RoutersRegistry.prototype.router = function (name) {
  var router = this._routers.get(name);
  if (!router) {
    router = new Router();
    this._routers.set(name, router);
  }
  return router;
};
module.exports = new RoutersRegistry();

/***/ }),

/***/ 12831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  setup: () => (/* binding */ setup)
});

// EXTERNAL MODULE: ./compatibility/blob-uri/index.js
var blob_uri = __webpack_require__(25235);
// EXTERNAL MODULE: ./node_modules/@virtru-private/binaryjs/index.js
var binaryjs = __webpack_require__(52938);
;// ./lib/background/utils/acm-api-patch.js
/* provided dependency */ var console = __webpack_require__(31799);
/**
 * Storage service patch. Could be removed when acm-api will be migrated to use fetch instead of xmlHttpRequest
 */


const storageConversionMap = {
  'storage.virtru.com': 'api.virtru.com/storage',
  'storage.staging.virtru.com': 'api.staging.virtru.com/storage',
  'storage.develop.virtru.com': 'api.develop.virtru.com/storage',
  'storage-develop01.develop.virtru.com': 'api-develop01.develop.virtru.com/storage'
};
async function getRemoteManifest(storageUrl, isRetry) {
  // magic is here
  try {
    const singleEndpointUrl = this._convertToSingleEndpoint(storageUrl, storageConversionMap);
    const {
      url: rawUrl
    } = await this._getUrlForCompatRequest(singleEndpointUrl);
    let url = rawUrl;
    if (isRetry) {
      url = `${url}?${Math.random().toString().substr(2)}`;
    }
    if (this._request) {
      const response = await fetch(url);
      const blob = await response.blob();
      const arrBuffer = await blob.arrayBuffer();
      return binaryjs.Binary.fromArrayBuffer(arrBuffer);
    }
  } catch (err) {
    console.error('get remote manifest error', err);
    throw err;
  }
}
// EXTERNAL MODULE: ./lib/constants/errors.js
var errors = __webpack_require__(22592);
var errors_default = /*#__PURE__*/__webpack_require__.n(errors);
;// ./lib/background/utils/policy-data-leak-monitor.js
/* provided dependency */ var policy_data_leak_monitor_console = __webpack_require__(31799);
/**
 * Checks for possible data leaks during policy creation
 *
 * @remarks This method runs asynchronously to avoid blocking the main thread. At this time
 * it is still desired that the policies get created even if there is a possible data leak,
 * so we should not block.
 *
 * @param {object} policyOptions options passed to the PolicyService.createPolicy method
 * @param {*} createdPolicy response from the PolicyService.createPolicy method
 * @returns {Promise<void>}
 */
async function checkPolicyForDataLeak(policyOptions, createdPolicy) {
  if (!['email', 'file'].includes(createdPolicy.type)) {
    // only check email and file types
    return Promise.resolve();
  }
  const errors = [];
  if (_hasRepeatedEmails(policyOptions.emailUsers)) {
    errors.push('policyOptions.emailUsers contains repeated emails');
  }
  if (_hasRepeatedEmails(policyOptions.emailUsersNoBcc)) {
    errors.push('policyOptions.emailUsersNoBcc contains repeated emails');
  }
  if (_hasRepeatedEmails(createdPolicy.simplePolicy.emailUsers)) {
    errors.push('createdPolicy.simplePolicy.emailUsers contains repeated emails');
  }
  if (policyOptions.sentFrom && policyOptions.sentFrom !== policyOptions.owner) {
    errors.push('policyOptions.sentFrom is different than policyOptions.owner');
  }
  if (createdPolicy.sentFrom && createdPolicy.sentFrom !== createdPolicy.owner) {
    errors.push('createdPolicy.sentFrom is different than createdPolicy.owner');
  }
  if (policyOptions.sentFrom && policyOptions.sentFrom !== createdPolicy.sentFrom) {
    errors.push('policyOptions.sentFrom is different than createdPolicy.sentFrom');
  }
  if (policyOptions.owner !== createdPolicy.owner) {
    errors.push('policyOptions.owner is different than createdPolicy.owner');
  }
  if (errors.length) {
    const data = {
      policyOptions: {
        type: policyOptions.type,
        owner: policyOptions.owner,
        sentFrom: policyOptions.sentFrom,
        emailUsers: policyOptions.emailUsers,
        emailUsersNoBcc: policyOptions.emailUsersNoBcc
      },
      createdPolicy: {
        uuid: createdPolicy.uuid,
        type: createdPolicy.type,
        owner: createdPolicy.owner,
        sentFrom: createdPolicy.sentFrom,
        simplePolicy: {
          emailUsers: createdPolicy.simplePolicy.emailUsers,
          activeBegin: createdPolicy.simplePolicy.activeBegin
        }
      }
    };
    policy_data_leak_monitor_console.error('Possible data leak found during policy creation:', {
      errors,
      data
    });
  }
  return Promise.resolve();
}
function _hasRepeatedEmails(emails = []) {
  const seen = {};
  for (const email of emails) {
    if (seen[email]) {
      return true;
    }
    seen[email] = true;
  }
  return false;
}
;// ./lib/background/actions.js
/* provided dependency */ var actions_console = __webpack_require__(31799);
/* provided dependency */ var Buffer = __webpack_require__(17995)["Buffer"];
// TODO: decompose for unit testing




const {
  isUid
} = __webpack_require__(55675);
const settings = __webpack_require__(89253);
const activation = __webpack_require__(57452);
const transports = __webpack_require__(58533);
const {
  runtime
} = __webpack_require__(84800);
const {
  storage
} = __webpack_require__(43829);
const precond = __webpack_require__(57128);
const {
  PolicyService,
  StorageService,
  AccountsService,
  AuditService
} = __webpack_require__(58698);
const secureLib = __webpack_require__(53911);
const RemoteContentService = __webpack_require__(20318);
const blobUtil = __webpack_require__(25235);
const {
  SecureService
} = secureLib;
const {
  Tdf
} = secureLib;
const mime = __webpack_require__(13315);
const {
  MAX_RETRY_COUNT,
  UPLOAD_RETRY_DELAY
} = __webpack_require__(76223);
var BackgroundAnalytics = __webpack_require__(21279);
var {
  AnalyticsRouter
} = BackgroundAnalytics;
var LoadUserProfile = __webpack_require__(90781);
const superagent = __webpack_require__(75522);
const acmApiConfig = {
  request: superagent,
  features: {
    singleEndpoint: true
  }
};
function error(req, res) {
  return function (errorLoc) {
    var _req$params, _req$params$connectOp;
    actions_console.error(errorLoc);
    if (errorLoc.name === (errors_default()).INVALID_APP_ID || errorLoc.name === (errors_default()).NO_APP_ID_FOR_DOMAIN && Object.keys((req === null || req === void 0 ? void 0 : (_req$params = req.params) === null || _req$params === void 0 ? void 0 : (_req$params$connectOp = _req$params.connectOptions) === null || _req$params$connectOp === void 0 ? void 0 : _req$params$connectOp.appIdDomains) || {}).length === 0) {
      var _req$params2, _req$params2$connectO;
      // activation is expired, update settings to reflect expiration
      actions_console.log('activation expired, updating user settings to reflect expiration');
      const userId = req === null || req === void 0 ? void 0 : (_req$params2 = req.params) === null || _req$params2 === void 0 ? void 0 : (_req$params2$connectO = _req$params2.connectOptions) === null || _req$params2$connectO === void 0 ? void 0 : _req$params2$connectO.userId;
      settings.update(userId === null || userId === void 0 ? void 0 : userId.toLowerCase(), {
        appIdBundle: null,
        appIdDomains: {}
      });
      // IMPORTANT: settings events fired by this broadcast method rely on the userId as-is from Gmail, DO NOT LOWERCASE IT
      transports.broadcast('content', 'refresh-settings', {
        params: {
          userId
        }
      }).catch(error => actions_console.error(error));
    }
    res.send(errorLoc);
  };
}
function activateTab(tab) {
  return chrome.tabs.update(tab.id, {
    active: true
  });
}
const makeActivationTabRejectCallback = ({
  req,
  res
}) => err => {
  activateTab(req.tab);
  actions_console.log(err);
  res.send(err);
};
function setup(router) {
  window.router = router;

  // Add properties for metrics
  var properties = {};
  try {
    var client = runtime.getClientString().split(':');
    properties['user.platform'] = client[0];
    properties['user.platform.version'] = client[1];
  } catch (err) {
    actions_console.error(err);
  }

  // Set up analytics
  AnalyticsRouter.instance(router, properties);

  /**
   * Loads the user profile requested from the content script
   */
  router.register('loadUserProfile', LoadUserProfile.process);

  /**
   * Update the user profile settings.
   *
   * This accepts the user profile updates as a dictionary. It will not destroy
   * any data that is currently stored. It will only patch with the update data
   */
  router.register('updateUserProfileSettings', function (req, res) {
    try {
      // force lowercase to handle emails with capital letters
      var userId = req.params.userId.toLowerCase();
      var userSettings = req.params.settings;
      precond.checkIsString(userId, '`userId` is a required parameter');
      precond.checkIsObject(settings, '`settings` is a required parameter');
      settings.update(userId, userSettings);
      res.send(null);
    } catch (err) {
      error(res)(err);
    }
  });

  /**
   * Save the user settings (preferences only) back to the server.
   */
  router.register('saveUserSettingsToServer', function (req, res) {
    try {
      // force lowercase to handle emails with capital letters
      var userId = req.params.userId.toLowerCase();
      settings.saveToServer(userId);
      res.send(null);
    } catch (err) {
      error(res)(err);
    }
  });

  /**
   * Attempt to load external selectors
   */
  router.register('fetchExternalSelectors', function (req, res) {
    const extensionSettings = settings.getExtensionSettings();

    // Append a random query string to prevent caching. We want this fetched anew every time.
    superagent('GET', `${extensionSettings.externalSelectors}/selectors.json?no_cache=${Date.now()}`).end((err, response) => {
      if (err) {
        res.send(err);
      } else if (response.status !== 200) {
        const err = {
          type: 'InternalServiceError',
          message: 'Failed to load external selectors',
          status: response.status
        };
        res.send(err);
      } else {
        res.send(null, response.body);
      }
    });
  });
  router.register('updateRules', function (req, res) {
    var {
      dlp
    } = req.params;
    // force lowercase to handle emails with capital letters
    var userId = req.params.userId.toLowerCase();
    settings.updateRules(userId, dlp).then(function success() {
      transports.broadcast('content', 'refresh-settings', req).catch(error => actions_console.error(error));
      res.send(null, dlp);
    }).catch(error(res));
  });
  router.register('getExtensionInfo', function (req, res) {
    try {
      chrome.management.getSelf(function callback(extensionInfo) {
        res.send(null, extensionInfo);
      });
    } catch (err) {
      res.send(err, null);
    }
  });

  /**
   * Run the federated activation
   */
  router.register('federatedActivate', function (req, res) {
    // force lowercase to handle emails with capital letters
    var userId = req.params.userId.toLowerCase();

    // Get auth provider from params
    // At the moment this is an enum of ['google', 'yahoo', 'microsoft']
    // More to come later
    var {
      provider
    } = req.params;
    // Call the federated activation method
    actions_console.log('+++++ federatedActivate');
    activation.federated(userId, provider, req.params.delegatee).then(function success() {
      // Refresh background tabs and select the mail tab
      actions_console.debug('+++++ refresh user settings in all tabs');
      transports.broadcast('content', 'refresh-settings', req).catch(error => actions_console.error(error));
    }).then(function success() {
      // Reactivate the original tab
      actions_console.log('+++++ reactivating the original tab');
      return activateTab(req.tab);
    }).then(function success() {
      // Finish!
      res.send(null, {
        status: 'success'
      });
    }).catch(makeActivationTabRejectCallback({
      req,
      res
    }));
  });
  router.register('emailActivate', (req, res) => {
    // force lowercase to handle emails with capital letters
    var userId = req.params.userId.toLowerCase();
    activation.email(userId, req.params.delegatee).then(() => {
      transports.broadcast('content', 'refresh-settings', req);
    }).then(() => activateTab(req.tab)).then(() => res.send(null, {
      status: 'success'
    })).catch(makeActivationTabRejectCallback({
      req,
      res
    }));
  });
  router.register('waitForEmailActivation', function (req, res) {
    var {
      url
    } = req.params;
    activation.waitForEmailActivation(url).then(function () {
      res.send(null, null);
    }).catch(error(res));
  });
  router.register('isSaml', function (req, res) {
    // force lowercase to handle emails with capital letters
    const userId = req.params.userId.toLowerCase();
    activation.isSaml(userId).then(() => res.send(null, {
      isSaml: true
    })).catch(err => {
      if (err.status === 404) {
        return res.send(null, {
          isSaml: false
        });
      }
      return res.send(err);
    });
  });
  router.register('samlActivate', function (req, res) {
    // force lowercase to handle emails with capital letters
    const userId = req.params.userId.toLowerCase();
    activation.saml(userId).then(function success() {
      // Refresh background tabs and select the mail tab
      actions_console.debug('+++++ refresh user settings in all tabs');
      transports.broadcast('content', 'refresh-settings', req).catch(error => actions_console.error(error));
    }).then(function success() {
      // Reactivate the original tab
      actions_console.log('+++++ reactivating the original tab');
      return activateTab(req.tab);
    }).then(function success() {
      // Finish!
      res.send(null, {
        status: 'success'
      });
    }).catch(makeActivationTabRejectCallback({
      req,
      res
    }));
  });

  /**
   * When the user saves their setting in Dashboard this function notifies
   * all the content scripts to see if they need to update.
   *
   * req contains an object like this:
   * {
        userId: userId
      }
   */
  router.register('refresh-settings', function (req, res) {
    actions_console.log('Event : refresh-settings');
    transports.broadcast('content', 'refresh-settings', req).catch(error => actions_console.error(error));
    res.send(null, null);
  });

  /**
   * When a user clicks the clear activations button in the Virtru
   * browser button popup.
   *
   */
  router.register('clear-activations', function (req, res) {
    actions_console.log('Event : clear-activations');
    activation.clearActivations();
    res.send(null, null);
  });
  router.register('getUserSettings', (req, res) => {
    res.send(null, settings.get(req.params.userId.toLowerCase()));
  });
  function deserializeTDO(tdo) {
    // Update attachment TDO to have proper class which was lost in
    // transit from page script
    var {
      Model
    } = Tdf;
    var wrappedKey = Model.WrappedKey.create(tdo.key.kek, tdo.key.remoteKeyUri, tdo.key.algorithm, tdo.key.payloadIv, tdo.key.kekIv);
    var referenceValuePayload = Model.ReferenceValuePayload.create(tdo.payload.uri, tdo.payload.filename, tdo.payload.mediaType, tdo.payload.encrypted, tdo.payload.encoding);
    return Model.TrustedDataObject.create(tdo.id, wrappedKey, referenceValuePayload);
  }
  function getSecureService(req) {
    const secureService = SecureService.setup({});

    // patch storage service to use fetch instead of xmlhttprequest (deprecated in Service Workers)
    const storageService = StorageService.setup(acmApiConfig);
    storageService.getRemoteManifest = getRemoteManifest;
    storageService.getRemoteContent = getRemoteManifest;

    // patch policy service for data leak monitoring
    const policyService = PolicyService.setup(acmApiConfig);
    const {
      createPolicy
    } = policyService;
    policyService.createPolicy = async function (policyOptions, connectOptions) {
      const newPolicy = await createPolicy.call(this, policyOptions, connectOptions);
      // let this run asynchronously so we don't block the policy creation
      checkPolicyForDataLeak(policyOptions, newPolicy.policy);
      return newPolicy;
    };
    secureService.configure({
      accountsService: AccountsService.setup(acmApiConfig),
      policyService,
      useFips: req.params.enforceFips,
      request: superagent,
      storageService
    });
    return secureService;
  }

  /**
   * Make a HEAD request to a remote URL to determine its file size.
   *
   * @param payloadUrl {String} -- remote URL of payload
   * @return {Promise<Number>} -- file size in bytes
   */
  function getFileSizeOfPayload(payloadUrl) {
    return new Promise((resolve, reject) => {
      const xhr = superagent('HEAD', payloadUrl);
      xhr.responseType('arraybuffer');
      xhr.end((err, resp) => {
        if (err) {
          reject(err);
        } else if (resp.status === 404) {
          reject(new Error('File not found'));
        } else if (resp.status < 200 || resp.status > 299) {
          reject(new Error('Request failed'));
        } else {
          const numBytes = parseInt(resp.headers['content-length'], 10);
          resolve(numBytes);
        }
      });
    });
  }

  /**
   * Method to download attachments from Google. Used when user toggle Secure mode on and have some attachments in message
   * Retries download if Google returns error message instead of file
   * @param req - Object with params
   *  url - file url
   *  isPFP - for html files we need to return `text` representation of file to parse it in content script for PFP purposes
   * @param iteration - used to retry download in case of error
   * @returns {Promise<*>}
   */
  async function downloadFileAndPlaceInBlob({
    req
  }, iteration = 0) {
    const {
      params
    } = req;
    const response = await fetch(params.url);
    try {
      if (!response.headers.get('content-length')) {
        throw Error('Google\'s throttling error');
      }
      const arrayBuffer = await response.arrayBuffer();
      response.size = arrayBuffer.byteLength;
      response.binary = Buffer.from(arrayBuffer).toString('base64');
    } catch (err) {
      // Trying to detect Google's error response
      actions_console.log(`Problem with getting file. Attempt #${iteration}`, err);
      if (iteration++ > MAX_RETRY_COUNT) {
        return {
          error: true,
          message: `Cannot download file, number attempts exceeded (${MAX_RETRY_COUNT})`
        };
      }
      await new Promise(resolve => setTimeout(resolve, UPLOAD_RETRY_DELAY * iteration));
      return downloadFileAndPlaceInBlob({
        req
      }, iteration);
    }
    if (params.isPFP) {
      response.text = await response.text();
    }
    response.mimeType = response.headers.get('mimeType');
    return response;
  }
  const secureServiceActions = {
    async getContract({
      req,
      secureService
    }) {
      return secureService._getContract(req.params.contractUri, req.params.connectOptions);
    },
    async getFileInfoByPolicyId({
      req,
      secureService
    }) {
      const {
        policyId,
        userId
      } = req.params;
      const {
        apiUrl
      } = settings.get(userId.toLowerCase());
      if (!isUid(policyId)) {
        throw new Error('Invalid policy id');
      }
      const contractUri = `${apiUrl}/acm/api/policies/${policyId}/contract`;
      const {
        displayName: fileName,
        ...policy
      } = await secureService._getContract(contractUri, req.params.connectOptions);
      const fileExtension = fileName.includes('.') ? fileName.split('.').pop() : '';

      // TODO: in future we will add mime-type to manifest. We should use it then instead this extension parse.
      const fileType = mime.lookup(fileExtension) || 'application/octet-stream';
      return {
        name: fileName,
        mimeType: fileType,
        type: fileType,
        ...policy
      };
    },
    async readSecureStandaloneTdf3File({
      req,
      secureService
    }) {
      const {
        payloadUrl,
        connectOptions
      } = req.params;
      const binary = await blobUtil.binaryConverter(payloadUrl, {
        conversionType: blob_uri.ConversionType.STRING_TO_BINARY
      });
      const source = {
        type: 'buffer',
        location: binary.asArrayBuffer()
      };
      return secureService.readRemoteStandaloneFileTdf3(source, connectOptions).then(result => window.URL.createObjectURL(new Blob([result.tdf], {
        type: 'octet/stream'
      })));
    },
    async enablePolicy({
      req,
      secureService
    }) {
      return secureService.enablePolicy(req.params.uuid, req.params.connectOptions);
    },
    async revokePolicy({
      req,
      secureService
    }) {
      return secureService.revokePolicy(req.params.uuid, req.params.connectOptions);
    },
    async forwardPolicies({
      req,
      secureService
    }) {
      return secureService._policyService.forwardPolicies(req.params.uuids, req.params.newEmailUsers, req.params.connectOptions, undefined, undefined, req.params.associatedAttachmentIds);
    },
    async sendAuditRecord({
      req
    }) {
      const auditService = new AuditService({
        request: superagent,
        // required
        features: {
          // Optional
          singleEndpoint: true
        }
      });
      return auditService.postAuditRecord(req.params.connectOptions, req.params.auditRecord);
    },
    async generateSearchTokens({
      req,
      secureService
    }) {
      return secureService.generateSearchTokens(req.params.content, req.params.key);
    },
    async buildSearchTokenQuery({
      req,
      secureService
    }) {
      return secureService.buildSearchTokenQuery(req.params.content, req.params.key);
    },
    async updatePolicy({
      req,
      secureService
    }) {
      return secureService.updatePolicy(req.params.uuid, req.params.policyUpdates, req.params.connectOptions);
    },
    async makeFile({
      req,
      secureService
    }) {
      const {
        binary,
        filename,
        policyOptions,
        connectOptions,
        processorOptions
      } = req.params;

      // get binary from req.params if it's small or from storage if it's large
      const fileBinary = await blobUtil.binaryConverter(binary || (await storage.get(filename)), {
        conversionType: blob_uri.ConversionType.STRING_TO_BINARY
      });
      let {
        mimeType
      } = req.params;
      if (!mimeType) {
        mimeType = mime.lookup(filename);
      }
      if (!binary) {
        storage.remove(filename);
      }
      return secureService.makeFile(fileBinary, filename, policyOptions, connectOptions, mimeType, processorOptions);
    },
    async readStandaloneFile({
      req,
      secureService
    }) {
      const binary = await blobUtil.blobUriToBinary(req.params.binary);
      return secureService.readStandaloneFile(binary, req.params.connectOptions).then(result => {
        result.tdf.payload = blobUtil.binaryToBlobUri(result.tdf.payload);
        return result;
      });
    },
    async makeDraft({
      req,
      secureService
    }) {
      const {
        message,
        policyOptions,
        connectOptions,
        processorOptions
      } = req.params;
      return secureService.makeDraft(message, policyOptions, connectOptions, processorOptions).then(function success(response) {
        response.tdfXml = response.tdf.asXml();
        return response;
      });
    },
    async downloadAndDecryptRemoteManifest({
      req,
      secureService
    }) {
      return secureService.downloadAndDecryptRemoteManifest(req.params.metadataUrl, req.params.metadataKey, req.params.metadataIv);
    },
    async readMessage({
      req,
      secureService
    }) {
      return secureService.readMessage(req.params.secureMessage, req.params.connectOptions, req.params.options).then(async function success(response) {
        const payload = response.tdf.payload.asString();
        response.message = payload;
        return response;
      }).catch(err => {
        // CORE-5729 - unknown decryption errors
        // adds logging to help investigate malformed XML at beginning of message
        if (/non-whitespace before first tag/i.test(err.message)) {
          const {
            secureMessage
          } = req.params;
          // log first 32 chars of base64 encoded message
          actions_console.error('background.actions.readMessage -- [TDF XML parse error] non-whitespace found before first tag:', secureMessage.substring(0, 32));
        }
        throw err;
      });
    },
    async parseLink({
      req,
      secureService
    }) {
      return secureService.parseLink(req.params.link);
    },
    async makeMessage({
      req,
      secureService
    }) {
      const {
        message,
        policyOptions,
        connectOptions,
        processorOptions
      } = req.params;
      return secureService.makeMessage(message, policyOptions, connectOptions, processorOptions).then(function success(response) {
        response.tdfXml = response.tdf.asXml();
        return response;
      });
    },
    async generateKeyPair({
      secureService
    }) {
      return secureService.generateKeyPair();
    },
    async generateAndCacheKeyPair({
      req,
      secureService
    }) {
      const {
        userId
      } = req.params;
      return secureService.generateAndCacheKeyPair(userId);
    },
    async forwardMessages({
      req,
      secureService
    }) {
      return secureService.forwardMessages(req.params.secureMessages, req.params.newEmailUsers, req.params.connectOptions);
    },
    async readFile({
      req,
      secureService
    }) {
      const tdo = deserializeTDO(req.params.tdo);
      return secureService.readFile(tdo, req.params.connectOptions, req.params.options).then(async function success(response) {
        const binary = response.tdf.payload;
        response.tdf.payload = await blobUtil.binaryConverter(binary, {
          conversionType: blob_uri.ConversionType.BINARY_TO_STRING
        });
        return response;
      });
    },
    async downloadFileAndPlaceInBlob({
      req
    }, iteration = 0) {
      return downloadFileAndPlaceInBlob({
        req
      }, iteration);
    },
    async createTdoFromParsedLink({
      req,
      secureService
    }) {
      return secureService.createTdoFromParsedLink(req.params.parsedLink);
    },
    async createTdfDataFromPreviewLink({
      req,
      secureService
    }) {
      const {
        previewLink
      } = req.params;
      const remoteContentLinkService = new RemoteContentService(null, null, null, null, null);
      const parsedLink = await remoteContentLinkService.parseLink(previewLink);

      // If we are just provided the RCA link, we can rebuild the TDO
      const tdo = await secureService.createTdoFromParsedLink(parsedLink);
      const fileSize = await getFileSizeOfPayload(parsedLink.payloadUrl);
      let contract = {
        displayName: '',
        policyId: ''
      };
      try {
        contract = await secureService._getContract(tdo.key.remoteKeyUri, req.params.connectOptions);
      } catch (e) {
        actions_console.error(e);
      }

      // Pop off the file extension, if it exists
      const displayNameParts = contract.displayName.split('.');
      const fileExtension = displayNameParts.length > 1 ? displayNameParts.pop() : '';

      // Determine the mime type from the file extension
      const fileName = contract.displayName;
      const fileType = mime.lookup(fileExtension) || 'application/octet-stream';
      return {
        previewLink,
        parsedLink,
        tdo,
        originalFile: {
          name: fileName,
          mimeType: fileType,
          type: fileType,
          size: fileSize
        },
        policyUuid: contract.policyId
      };
    }
  };
  for (const [actionName, actionHandler] of Object.entries(secureServiceActions)) {
    router.register(actionName, (req, res) => {
      const secureService = getSecureService(req);
      actions_console.debug(`Event : ${actionName}`);
      actionHandler({
        req,
        res,
        secureService
      }).then(response => res.send(null, response)).catch(error(req, res));
    });
  }
}

/***/ }),

/***/ 13315:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

var types = __webpack_require__(53026);

/**
 * Expose the types.
 */

exports.types = types;

/**
 * Lookup with `ext`.
 *
 * @param {String} ext
 * @return {String}
 * @api public
 */

exports.lookup = function (ext) {
  if (ext[0] === '.') {
    ext = ext.slice(1);
  }
  return types[ext];
};

/***/ }),

/***/ 14483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConversionType: () => (/* binding */ ConversionType),
/* harmony export */   b64ToBinary: () => (/* binding */ b64ToBinary),
/* harmony export */   binaryConverter: () => (/* binding */ binaryConverter),
/* harmony export */   binaryToBlobUri: () => (/* binding */ binaryToBlobUri),
/* harmony export */   binaryToString: () => (/* binding */ binaryToString),
/* harmony export */   blobUriToBinary: () => (/* binding */ blobUriToBinary),
/* harmony export */   deserializeBinary: () => (/* binding */ deserializeBinary),
/* harmony export */   serializeBinary: () => (/* binding */ serializeBinary)
/* harmony export */ });
/* harmony import */ var _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52938);
/* harmony import */ var _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var Buffer = __webpack_require__(17995)["Buffer"];


/**
 * Takes a {Binary} and creates a Base64 string for it.
 *
 * @param binary
 * @returns {String} Base64 string
 */
function binaryToString(binary) {
  return Buffer.from(binary.asArrayBuffer()).toString('base64'); // for sending from background script to content
}

/**
 * Takes a {Binary} and creates a Blob URL for it.
 *
 * @param binary
 * @returns {String} Blob Object URL
 */
function binaryToBlobUri(binary) {
  var blob = new Blob([binary.asArrayBuffer()], {
    type: 'octet/stream'
  });
  return window.URL.createObjectURL(blob);
}
/**
 * Takes a Base64 {string} and convert it to Binary
 *
 * @param base64 {string}
 * @returns {binary}
 */
function b64ToBinary(base64) {
  const tdfDataString = atob(base64);
  const arrayBuffer = new ArrayBuffer(tdfDataString.length);
  const bufView = new Uint8Array(arrayBuffer);
  for (let i = 0, strLen = tdfDataString.length; i < strLen; i++) {
    bufView[i] = tdfDataString.charCodeAt(i);
  }
  return _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__.Binary.fromArrayBuffer(arrayBuffer);
}

/**
 * Retrieves the data located at the Blob URL and then
 * revokes it.  So this is effectively a call once
 * function for Blob URLs.
 *
 * @param blobUrl
 * @returns A promise to resolve a {Binary} containing the
 * data
 */
function blobUriToBinary(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(_virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__.Binary.fromArrayBuffer(xhr.response));
      URL.revokeObjectURL(url);
    };
    xhr.onerror = function () {
      reject(new TypeError('Local request failed'));
      URL.revokeObjectURL(url);
    };
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', url);
    xhr.send(null);
  });
}
function serializeBinary(arrayBuffer) {
  const isArrayBuffer = arrayBuffer.toString() === '[object ArrayBuffer]';
  const binary = isArrayBuffer ? _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__.Binary.fromArrayBuffer(arrayBuffer) : arrayBuffer;
  const stringBinary = binary.asString();
  return _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__.Binary.fromString(stringBinary);
}
function deserializeBinary(stringBinary) {
  const binaryArray = Buffer.from(stringBinary, 'base64'); // get binary array from the received string
  const {
    buffer
  } = new Uint8Array(binaryArray);
  return _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_0__.Binary.fromArrayBuffer(buffer);
}
const ConversionType = {
  STRING_TO_BINARY: 'string-to-binary',
  BINARY_TO_STRING: 'binary-to-string'
};
async function binaryConverter(data, {
  conversionType
}) {
  switch (conversionType) {
    case ConversionType.STRING_TO_BINARY:
      return deserializeBinary(data);
    case ConversionType.BINARY_TO_STRING:
      return binaryToString(data);
    default:
      return null;
  }
}

/***/ }),

/***/ 20211:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 20299:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 20790:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 21279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports.AnalyticsRouter = __webpack_require__(74897);
module.exports.AnalyticsService = __webpack_require__(39441);

/***/ }),

/***/ 21406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
__webpack_require__(83676); // import polyfills for Service Worker

var {
  routers
} = __webpack_require__(29182);
var actions = __webpack_require__(12831);
var refreshTabs = __webpack_require__(88211);
exports.main = function () {
  try {
    const isProd = chrome.runtime.id === 'nemmanchfojaehgkbgcfmdiidbopakpp';
    if (isProd) {
      chrome.runtime.setUninstallURL('http://virtru.com/goodbye/');
    }
    chrome.runtime.onInstalled.addListener(function (details) {
      if (details.reason === 'install') {
        if (isProd) {
          const installUrl = 'https://www.virtru.com/get-started/';
          chrome.tabs.create({
            url: installUrl,
            active: true
          });
        }
        initBackground('install');
      } else if (details.reason === 'update') {
        initBackground('update');
      }
    });
    chrome.runtime.onStartup.addListener(function () {
      initBackground('startup');
    });
    var contentRouter = routers.router('content');
    actions.setup(contentRouter);
  } catch (err) {
    console.log('An error happened while initializing the background.', err);
    console.log('Stack: ', err.stack);
  }
};
function initBackground(reason) {
  try {
    if (reason === 'install') {
      refreshTabs(false, false);
    } else if (reason === 'update' || reason === 'upgrade') {
      refreshTabs(true);
    }
  } catch (err) {
    console.log('An error happened while initializing the background.', err);
    console.log('Stack: ', err.stack);
  }
}

/***/ }),

/***/ 21638:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 22592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module lib/constants/errors
 */

var {
  cksErrors
} = (__webpack_require__(82672).modules);
module.exports = {
  CORRUPT_TDF_PACKAGE: 'CorruptTdfPackage',
  INTEGRITY_COMPROMISED_ERROR: 'IntegrityCompromisedError',
  INTERNAL_SERVER_ERROR: 'InternalServerError',
  INVALID_APP_ID: 'InvalidAppId',
  NETWORK_CONNECTION_ERROR: 'NetworkConnectionError',
  NO_APP_ID_FOR_DOMAIN: 'NoAppIdForDomain',
  NOT_A_SECURE_EMAIL: 'NotASecureEmail',
  COMPROMISED_KEY_ERROR: 'CompromisedKeyError',
  TWO_FACTOR_REQUIRED: 'TwoFactorRequired',
  cks: cksErrors.ERRORS,
  UNAUTHORIZED: 'Unauthorized',
  ATTACHMENT_LIMIT_ERROR: 'Attachment limit',
  MAIL_MERGE_CONFLICT: 'Mail Merge Conflict',
  PFP_PARSE_ERROR: 'PfpParseError'
};

/***/ }),

/***/ 23235:
/***/ ((__unused_webpack_module, exports) => {

/**
 * The activation tab was closed.
 *
 * @class ActivationTabClosed
 * @param message
 * @constructor
 */
class ActivationTabClosed extends Error {
  constructor(message) {
    super(message);
    this.name = 'ActivationTabClosed';
  }
}

/**
 * Activation failed in the activation tab.
 *
 * @class ActivationFailed
 * @param message
 * @constructor
 */
class ActivationFailed extends Error {
  constructor(message) {
    super(message);
    this.name = 'ActivationFailed';
  }
}

/**
 * User has invalid user settings.
 *
 * @class InvalidUserSettings
 * @param message
 * @constructor
 */
class InvalidUserSettings extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidUserSettings';
  }
}

/**
 * In incognito or private mode.
 *
 * @class PrivateBrowsingModeNotSupported
 * @param message
 * @constructor
 */
class PrivateBrowsingModeNotSupported extends Error {
  constructor(message) {
    super(message);
    this.name = 'PrivateBrowsingModeNotSupported';
  }
}
exports.ActivationTabClosed = ActivationTabClosed;
exports.ActivationFailed = ActivationFailed;
exports.PrivateBrowsingModeNotSupported = PrivateBrowsingModeNotSupported;
exports.InvalidUserSettings = InvalidUserSettings;

/***/ }),

/***/ 25235:
/***/ ((module, exports, __webpack_require__) => {

var blobUri = __webpack_require__(14483);
module.exports = exports = blobUri;

/***/ }),

/***/ 27939:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 29182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports.routers = __webpack_require__(12367);
module.exports.request = __webpack_require__(50344);
module.exports.transports = __webpack_require__(58533);

/***/ }),

/***/ 35476:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 36757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55675);
/* provided dependency */ var console = __webpack_require__(31799);

const {
  info,
  error
} = console;
const command = 'serviceWorkerLog';
console.info = (...args) => {
  (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.callContentScript)(command, {
    args,
    level: 'info'
  });
  info(...args);
};
console.error = (...args) => {
  // all Error objects must be serialized to strings before sending to content script
  // this ensures they show up in the logs properly instead of as the very unhelpful "{}" value
  const contentScriptArgs = args.map(arg => {
    if (arg instanceof Error) {
      return arg.stack || arg.message;
    }
    return arg;
  });
  (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.callContentScript)(command, {
    args: contentScriptArgs,
    level: 'error'
  });
  error(...args);
};

/***/ }),

/***/ 37605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _bindAllMethods: () => (/* binding */ _bindAllMethods)
/* harmony export */ });
/**
 * Replacing lodash/underscore functionality: _.bindAll(this, _.functions(this));
 * @param {this} obj
 */

function _bindAllMethods(obj) {
  const propertyNames = getAllProperties(obj);
  propertyNames.forEach(propertyName => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
    if (descriptor && (descriptor.get || descriptor.set)) {
      Object.defineProperty(obj, propertyName, {
        get: descriptor.get ? descriptor.get.bind(obj) : undefined,
        set: descriptor.set ? descriptor.set.bind(obj) : undefined,
        configurable: true
      });
    } else if (typeof obj[propertyName] === 'function') {
      obj[propertyName] = obj[propertyName].bind(obj);
    }
  });
}
function getAllProperties(obj) {
  const propertyNames = new Set();
  let currentPrototype = Object.getPrototypeOf(obj);
  while (currentPrototype) {
    const ownPropertyNames = Object.getOwnPropertyNames(currentPrototype);
    ownPropertyNames.forEach(propertyName => {
      propertyNames.add(propertyName);
    });
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }
  return Array.from(propertyNames);
}

/***/ }),

/***/ 39441:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
var Platform = __webpack_require__(76651);
const DEFAULT_CONTEXT = {
  /**
   * This is here so that Amplitude can associate the browser with the event.
   */
  userAgent: navigator.userAgent,
  /**
   * This is here so that Amplitude will use the client IP address as the
   * source for the event.
   */
  direct: true,
  /**
   * Identifies our library as the emitting source
   */
  library: {
    name: 'virtru-analytics-node',
    version: '1.0.0'
  }
};

// Initialize the analytics-node library with our customized version
// of superagent
var {
  AnalyticsService
} = __webpack_require__(65551);
function Amplitude() {
  this.properties = {};
  this.analytics = new AnalyticsService({
    key: 'd34d3d2c70eb854183143c56c470dcb4',
    frontEnd: true
  });
}

/**
 * Static instance of the {Amplitude} class
 * @type {Amplitude}
 */
Amplitude.service = undefined;

/**
 * Creates a new instance of the {Amplitude} object.  This class is a
 * singleton.
 *
 * @returns {Amplitude}
 */
Amplitude.instance = function () {
  if (Amplitude.service === undefined) {
    Amplitude.service = new Amplitude();
  }
  return Amplitude.service;
};

/**
 * This function preventing send of blacklisted props to analytics
 *
 * @param  {Object} props   The properties to send with the event
 * @param  {Object} props   The santized properties object
 */
function santizeEventProps(props) {
  let copy;
  try {
    copy = JSON.parse(JSON.stringify(props));
  } catch (e) {
    console.error('We were not able to parse event props object. Looks like it containst circle linkage');
    return props;
  }
  removeRemoteContentLink(copy);
  return copy;
}
function removeRemoteContentLink(obj) {
  if (Array.isArray(obj)) {
    return obj.forEach(removeRemoteContentLink);
  }
  for (const prop in obj) {
    // eslint-disable-line
    if (prop === 'remoteContentLink') {
      delete obj[prop];
    } else if (typeof obj[prop] === 'object') {
      removeRemoteContentLink(obj[prop]);
    }
  }
}
function getIPv4Address() {
  return fetch('https://api.ipify.org').then(res => res.text());
}

/**
 * This function provides analytics track functionality.
 * The properties passed in will extend base properties for this client.
 *
 * @param  {String} eventName The name of the event to track
 * @param  {Object} properties   The options to send with the event
 * @param  {Object} context   The options to send with the event
 */
Amplitude.prototype.track = function (eventName, properties, context) {
  if (properties && properties.userId) {
    properties['user.email'] = properties.userId;
    var parts = properties.userId.split('@');
    properties['user.domain'] = parts[1] ? parts[1] : '';
  }
  var message = {
    userId: properties.userId,
    event: eventName,
    properties: santizeEventProps(properties),
    context: Object.assign({}, DEFAULT_CONTEXT, context)
  };
  this.analytics.track(message);
};

/**
 * Identifies a user that is logged in.
 * @param properties {Array} with userId
 * @param context {String}
 */
Amplitude.prototype.identify = function (properties, context) {
  var amplitudeContext = {
    os: {
      name: Platform.os.family,
      version: Platform.os.version
    },
    device: {
      model: Platform.product,
      manufacturer: Platform.manufacturer
    }
  };
  var traits = {
    browser: {
      name: Platform.name,
      version: Platform.version
    },
    user_agent: {
      raw: navigator.userAgent,
      description: Platform.description
    },
    library: {
      name: 'bp-analytics'
    }
  };
  var message = {
    userId: properties.userId,
    traits: Object.assign({}, properties, traits),
    context: Object.assign({}, DEFAULT_CONTEXT, amplitudeContext, context || {})
  };
  getIPv4Address().then(ip => {
    message.traits['user.ip'] = ip;
  });
  this.analytics.identify(message);
};
module.exports = Amplitude;

/***/ }),

/***/ 42634:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 43829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
/**
 * Background storage class
 *
 * Note: As a rule of thumb, data stored in the storage class must be JSON
 * serializable. If it is not, the data is not guaranteed to be stored
 * correctly on all browsers.
 */
const storage = {
  // this simplifies testing and also allows for quick swapping of backends
  get backend() {
    return chrome.storage.local;
  },
  /**
   * Get a value from the storage
   *
   * @param {String} key The key for the item
   *
   * @returns {Promise} Promise to the data
   */
  async get(key) {
    const items = await this.backend.get(key);
    var value = undefined;
    if (items) {
      value = items[key];
    }
    return value;
  },
  /**
   * Set a value in the storage
   *
   * @param {String} key The key for the item
   * @param {Any} value The value to store
   *
   * @returns {Promise} Promise to it's completion
   */
  async set(key, value) {
    await this.backend.set({
      [key]: value
    });
  },
  /**
   * Removes a value from the storage
   *
   * @param {String} key The key for the item
   *
   * @returns {Promise} Promise to it's completion
   */
  async remove(key) {
    await this.backend.remove(key);
  },
  /**
   * Return all the values in the storage
   *
   * @returns {Promise} Promise for all the data
   */
  async all() {
    const items = await this.backend.get(null);
    return items;
  },
  /**
   * Clears all the data in the storage
   *
   * @returns {Promise} Promise for it's completion
   */
  async clear() {
    await this.backend.clear();
  }
};


/***/ }),

/***/ 47206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callContentScript: () => (/* binding */ callContentScript),
/* harmony export */   cancelableEmit: () => (/* reexport safe */ _emitter__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   formatForTransport: () => (/* binding */ formatForTransport),
/* harmony export */   getAttachmentData: () => (/* binding */ getAttachmentData),
/* harmony export */   getFileExtension: () => (/* binding */ getFileExtension),
/* harmony export */   getFileType: () => (/* binding */ getFileType),
/* harmony export */   hasPfpFileExtensions: () => (/* binding */ hasPfpFileExtensions),
/* harmony export */   isFeatureEnabled: () => (/* binding */ isFeatureEnabled),
/* harmony export */   isPfpFile: () => (/* binding */ isPfpFile),
/* harmony export */   isTdf3Html: () => (/* binding */ isTdf3Html),
/* harmony export */   isUid: () => (/* binding */ isUid),
/* harmony export */   mergeSelectors: () => (/* binding */ mergeSelectors),
/* harmony export */   onA11yClick: () => (/* binding */ onA11yClick),
/* harmony export */   pdftronFileTypes: () => (/* binding */ pdftronFileTypes),
/* harmony export */   processError: () => (/* binding */ processError),
/* harmony export */   supportsExpandedWatermarking: () => (/* binding */ supportsExpandedWatermarking),
/* harmony export */   supportsLegacyWatermarking: () => (/* binding */ supportsLegacyWatermarking)
/* harmony export */ });
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63985);
/* harmony import */ var _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52938);
/* harmony import */ var _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75522);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76223);
/* harmony import */ var _lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8561);
/* provided dependency */ var console = __webpack_require__(31799);





// MIME types supported by the PDFTron WebViewer renderer
const pdftronFileTypes = ['pdf', 'docx', 'xlsx', 'pptx', 'jpeg', 'jpg', 'png'];

// Attach a click listener that also triggers on space + enter to better support screenreaders
function onA11yClick(element, callback) {
  const $ = __webpack_require__(91089);
  $(element).on('click keypress', e => {
    if (isA11yClick(e)) {
      callback(e);
    }
  });
}

// Determine if an event is either a click or a screenreader simulated click (with ENTER or SPACE key codes)
function isA11yClick(event) {
  return event.type === 'click' || event.type === 'keypress' && (event.charCode === 32 || event.charCode === 13);
}

// Serialize an error message so that it can be transferred in between extension scripts
function formatForTransport(obj) {
  var type = toString.call(obj);
  if (type === '[object Error]' || type === '[object DOMException]') {
    return processError(obj);
  }
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    // We need to make a copy for cases when obj property has only a getter
    const objectCopy = {};
    Object.entries(obj).forEach(([key, value]) => {
      objectCopy[key] = formatForTransport(value);
    });
    return objectCopy;
  }
  return obj;
}
const ERROR_PROPERTIES = ['name', 'message', 'type', 'status', 'stack', 'arguments', 'reason'];
function processError(err) {
  var info = {};
  ERROR_PROPERTIES.forEach(function (name) {
    if (err[name] !== null) {
      info[name] = err[name];
    }
  });
  return info;
}

/**
 * Check for feature enablement. If the feature has a GA_date specified, check if the current date exceeds it yet.
 *
 * @param featureName
 * @returns {*}
 */
function isFeatureEnabled(profile, featureName) {
  var _profile$settings, _profile$settings$cli, _profile$settings2;
  // Allow for feature flag OR user permission to enable the functionality.
  const featureObj = (profile === null || profile === void 0 ? void 0 : (_profile$settings = profile.settings) === null || _profile$settings === void 0 ? void 0 : (_profile$settings$cli = _profile$settings.clientConfig) === null || _profile$settings$cli === void 0 ? void 0 : _profile$settings$cli.features[featureName]) || (profile === null || profile === void 0 ? void 0 : (_profile$settings2 = profile.settings) === null || _profile$settings2 === void 0 ? void 0 : _profile$settings2.permissions[featureName]) || false;
  if (typeof featureObj === 'object' && typeof featureObj.GA_date === 'string') {
    return Date.now() >= new Date(featureObj.GA_date).getTime();
  }
  return !!featureObj;
}

/**
 * Helper function to merge selectors by iterating through the selectors in newest
 * to oldest order and build up our merged selectors as we go
 *
 * @param {Object} selectors - Selectors to merge
 * @param {String} gmailVersion - Gmail Version
 */
function mergeSelectors(selectors, gmailVersion) {
  let mergedSelectors;
  const versions = Object.keys(selectors).filter(Number) // filter out non BP selectors
  .sort((a, b) => b - a);
  for (const version of versions) {
    if (Number(gmailVersion) >= Number(version)) {
      mergedSelectors = {
        ...selectors[version],
        ...mergedSelectors
      };
    }
  }
  return mergedSelectors;
}

/**
 * Determine if a filename is a TDF.html file, i.e. a PFP file
 *
 * @param {String} filename - the filename of a Virtru attachment
 */
function isPfpFile(filename) {
  const lowerCaseFileName = filename.toLowerCase();
  return filename.indexOf('tdf') >= 0 && (lowerCaseFileName.endsWith('.htm') || lowerCaseFileName.endsWith('.html'));
}

/**
 * Determine if a file is a tdf3 html file
 *
 * @param {String} filename - the filename of a Virtru attachment
 */
function isTdf3Html(filename, html) {
  const $ = __webpack_require__(91089);
  const lowerCaseFileName = filename.toLowerCase();
  const isHtml = /\.html?$/.test(lowerCaseFileName);
  if (!isHtml) {
    return false;
  }
  const iframeSrc = $('<div></div>').append(html).find('iframe').attr('src') || '';
  return iframeSrc.includes('virtru.com/start?htmlProtocol=1');
}
const isUid = str => /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/.test(str);

/**
 * Determine if a filename is a TDF.html file, i.e. a PFP file
 *
 * [IMPORTANT]
 * The only safe way to check if file is PFP is `previewLink` extraction
 * Use this check only if its not possible: e.g. before the file is uploaded
 *
 * This check may return incorrect `true` result for file names like XXX.tdfXXX.html
 *
 * We don't check if it ends with `.tdf.hmtl` because file copy may look like `.tdf (1).hmtl`
 * We don't use regular expression because we don't know all the possible cases of how do
 * the copies' names look like: it depends on OS, number of times file has been copied, etc.
 *
 * @param {String} fileName - the filename of a Virtru attachment
 * @return {Boolean} - whether the file is PFP file
 */
function hasPfpFileExtensions(fileName) {
  if (typeof fileName === 'string') {
    const lowerCaseFileName = fileName.toLowerCase();
    const filenameParts = lowerCaseFileName.split('.');
    if (filenameParts.length > 2 && filenameParts[0]) {
      const extension = filenameParts[filenameParts.length - 1];
      const subExtension = filenameParts[filenameParts.length - 2];
      return (extension === 'htm' || extension === 'html') && subExtension.startsWith('tdf');
    }
  }
  return false;
}

/**
 * Simply checks a filename to determine whether it's a PDF media type.
 *
 * @param {String} filename - the filename of an attachment
 * @return {Boolean} - whether the file is supported
 */
function supportsLegacyWatermarking(filename) {
  return filenameIsSupportedType(filename, ['pdf']);
}

/**
 * Simply checks a filename to determine whether it's a PFP-supported media type.
 *
 * @param {String} filename - the filename of an attachment
 * @return {Boolean} - whether the file is supported
 */
function supportsExpandedWatermarking(filename) {
  return filenameIsSupportedType(filename, ['pdf', 'docx', 'xlsx', 'pptx', 'jpg', 'jpeg', 'png']);
}

/**
 * Checks a filename to determine whether it has an extension in the provided list.
 *
 * @param {String} filename - the filename of an attachment
 * @param {Array[String]} supportedFileTypes - array of extensions to check
 * @return {Boolean} - whether the file is supported
 */
function filenameIsSupportedType(filename, supportedFileTypes) {
  return supportedFileTypes.indexOf(getFileExtension(filename)) >= 0;
}

/**
 * Function for get file extension from its name
 * @param fileName - name ex. file.ext
 * @return {String} file extension
 */
function getFileExtension(fileName) {
  if (typeof fileName === 'string') {
    const filenameParts = fileName.toLowerCase().split('.');
    if (filenameParts.length > 1 && filenameParts[0]) {
      return filenameParts.pop();
    }
  }
  return false;
}
function getAttachmentData(_attachment) {
  var attachment = {
    file: {
      type: 'regular',
      name: _attachment.name,
      binary: _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1__.Binary.fromString('')
    }
  };

  // no need to fetch inline image content
  if (_attachment.url && !_attachment.inlineImageUuid) {
    if (_attachment.binary) {
      return Promise.resolve({
        file: {
          ..._attachment
        }
      });
    }
    return superagent__WEBPACK_IMPORTED_MODULE_2___default().get(_attachment.url).responseType('arraybuffer').retry(25).then(resp => {
      attachment.file.type = 'broken';
      if (resp.status === 404) {
        console.error('File not found:', attachment);
        return resolve(attachment); // eslint-disable-line
      }
      if (resp.status < 200 || resp.status > 299) {
        console.error('Request failed:', attachment);
        return resolve(attachment); // eslint-disable-line
      }
      var binary = _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1__.Binary.fromArrayBuffer(resp.body);
      attachment.file.binary = binary;
      attachment.file.type = resp.type;
      return attachment;
    });
  }
  return attachment;
}

/**
 * Allows the popup & background to communicate to the content script.
 *
 * This is a similar idea to the transports object available on the sdk.
 * However, the sdk is not yet available to the popup. It may not ever be
 * available.
 *
 * @param {String} command The name of the command to call on the content
 *                         script
 * @param {Object} params The parameters to the command
 * @returns {Any} Response from the content script
 *
 * @deferred
 */
const callContentScript = function (command, params) {
  return new Promise((resolve, reject) => {
    const envelope = {
      uniqueExtensionKey: _lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3__.EXTENSION_KEY,
      type: 'command',
      action: command,
      target: 'content',
      data: params
    };
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      if (tabs.length > 0) {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, envelope, function (response) {
          if (typeof response === 'undefined') {
            reject(new Error('No response'));
          } else if (response.error) {
            reject(response.error);
          } else {
            resolve(response.data);
          }
        });
      } else {
        reject(new Error('No active tabs found'));
      }
    });
  });
};
const getFileType = function (name) {
  // Determine the file extension in order to lookup the mime type
  const displayNameParts = typeof name === 'string' ? name.split('.') : [];
  const fileExtension = displayNameParts.length > 1 ? displayNameParts.pop() : '';
  return mime__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getType(fileExtension) || 'application/octet-stream';
};


/***/ }),

/***/ 47790:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 49374:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 50310:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 50344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var request = __webpack_require__(75522);

// Provide setXHRAdapter as a method on request
request.setXHRAdapter = function (xhrAdapter) {
  request.getXHR = xhrAdapter;
};

// Pass the custom superagent as the request
module.exports = request;

/***/ }),

/***/ 51069:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 53026:
/***/ ((module) => {

module.exports = {
  '123': 'application/vnd.lotus-1-2-3',
  ez: 'application/andrew-inset',
  aw: 'application/applixware',
  atom: 'application/atom+xml',
  atomcat: 'application/atomcat+xml',
  atomsvc: 'application/atomsvc+xml',
  ccxml: 'application/ccxml+xml',
  cdmia: 'application/cdmi-capability',
  cdmic: 'application/cdmi-container',
  cdmid: 'application/cdmi-domain',
  cdmio: 'application/cdmi-object',
  cdmiq: 'application/cdmi-queue',
  cu: 'application/cu-seeme',
  davmount: 'application/davmount+xml',
  dbk: 'application/docbook+xml',
  dssc: 'application/dssc+der',
  xdssc: 'application/dssc+xml',
  ecma: 'application/ecmascript',
  emma: 'application/emma+xml',
  epub: 'application/epub+zip',
  exi: 'application/exi',
  pfr: 'application/font-tdpfr',
  gml: 'application/gml+xml',
  gpx: 'application/gpx+xml',
  gxf: 'application/gxf',
  stk: 'application/hyperstudio',
  ink: 'application/inkml+xml',
  inkml: 'application/inkml+xml',
  ipfix: 'application/ipfix',
  jar: 'application/java-archive',
  ser: 'application/java-serialized-object',
  class: 'application/java-vm',
  js: 'application/javascript',
  json: 'application/json',
  jsonml: 'application/jsonml+json',
  lostxml: 'application/lost+xml',
  hqx: 'application/mac-binhex40',
  cpt: 'application/mac-compactpro',
  mads: 'application/mads+xml',
  mrc: 'application/marc',
  mrcx: 'application/marcxml+xml',
  ma: 'application/mathematica',
  nb: 'application/mathematica',
  mb: 'application/mathematica',
  mathml: 'application/mathml+xml',
  mbox: 'application/mbox',
  mscml: 'application/mediaservercontrol+xml',
  metalink: 'application/metalink+xml',
  meta4: 'application/metalink4+xml',
  mets: 'application/mets+xml',
  mods: 'application/mods+xml',
  m21: 'application/mp21',
  mp21: 'application/mp21',
  mp4s: 'application/mp4',
  doc: 'application/msword',
  dot: 'application/msword',
  mxf: 'application/mxf',
  bin: 'application/octet-stream',
  dms: 'application/octet-stream',
  lrf: 'application/octet-stream',
  mar: 'application/octet-stream',
  so: 'application/octet-stream',
  dist: 'application/octet-stream',
  distz: 'application/octet-stream',
  pkg: 'application/octet-stream',
  bpk: 'application/octet-stream',
  dump: 'application/octet-stream',
  elc: 'application/octet-stream',
  deploy: 'application/octet-stream',
  oda: 'application/oda',
  opf: 'application/oebps-package+xml',
  ogx: 'application/ogg',
  omdoc: 'application/omdoc+xml',
  onetoc: 'application/onenote',
  onetoc2: 'application/onenote',
  onetmp: 'application/onenote',
  onepkg: 'application/onenote',
  oxps: 'application/oxps',
  xer: 'application/patch-ops-error+xml',
  pdf: 'application/pdf',
  pgp: 'application/pgp-encrypted',
  asc: 'application/pgp-signature',
  sig: 'application/pgp-signature',
  prf: 'application/pics-rules',
  p10: 'application/pkcs10',
  p7m: 'application/pkcs7-mime',
  p7c: 'application/pkcs7-mime',
  p7s: 'application/pkcs7-signature',
  p8: 'application/pkcs8',
  ac: 'application/pkix-attr-cert',
  cer: 'application/pkix-cert',
  crl: 'application/pkix-crl',
  pkipath: 'application/pkix-pkipath',
  pki: 'application/pkixcmp',
  pls: 'application/pls+xml',
  ai: 'application/postscript',
  eps: 'application/postscript',
  ps: 'application/postscript',
  cww: 'application/prs.cww',
  pskcxml: 'application/pskc+xml',
  rdf: 'application/rdf+xml',
  rif: 'application/reginfo+xml',
  rnc: 'application/relax-ng-compact-syntax',
  rl: 'application/resource-lists+xml',
  rld: 'application/resource-lists-diff+xml',
  rs: 'application/rls-services+xml',
  gbr: 'application/rpki-ghostbusters',
  mft: 'application/rpki-manifest',
  roa: 'application/rpki-roa',
  rsd: 'application/rsd+xml',
  rss: 'application/rss+xml',
  rtf: 'application/rtf',
  sbml: 'application/sbml+xml',
  scq: 'application/scvp-cv-request',
  scs: 'application/scvp-cv-response',
  spq: 'application/scvp-vp-request',
  spp: 'application/scvp-vp-response',
  sdp: 'application/sdp',
  setpay: 'application/set-payment-initiation',
  setreg: 'application/set-registration-initiation',
  shf: 'application/shf+xml',
  smi: 'application/smil+xml',
  smil: 'application/smil+xml',
  rq: 'application/sparql-query',
  srx: 'application/sparql-results+xml',
  gram: 'application/srgs',
  grxml: 'application/srgs+xml',
  sru: 'application/sru+xml',
  ssdl: 'application/ssdl+xml',
  ssml: 'application/ssml+xml',
  tei: 'application/tei+xml',
  teicorpus: 'application/tei+xml',
  tfi: 'application/thraud+xml',
  tsd: 'application/timestamped-data',
  plb: 'application/vnd.3gpp.pic-bw-large',
  psb: 'application/vnd.3gpp.pic-bw-small',
  pvb: 'application/vnd.3gpp.pic-bw-var',
  tcap: 'application/vnd.3gpp2.tcap',
  pwn: 'application/vnd.3m.post-it-notes',
  aso: 'application/vnd.accpac.simply.aso',
  imp: 'application/vnd.accpac.simply.imp',
  acu: 'application/vnd.acucobol',
  atc: 'application/vnd.acucorp',
  acutc: 'application/vnd.acucorp',
  air: 'application/vnd.adobe.air-application-installer-package+zip',
  fcdt: 'application/vnd.adobe.formscentral.fcdt',
  fxp: 'application/vnd.adobe.fxp',
  fxpl: 'application/vnd.adobe.fxp',
  xdp: 'application/vnd.adobe.xdp+xml',
  xfdf: 'application/vnd.adobe.xfdf',
  ahead: 'application/vnd.ahead.space',
  azf: 'application/vnd.airzip.filesecure.azf',
  azs: 'application/vnd.airzip.filesecure.azs',
  azw: 'application/vnd.amazon.ebook',
  acc: 'application/vnd.americandynamics.acc',
  ami: 'application/vnd.amiga.ami',
  apk: 'application/vnd.android.package-archive',
  cii: 'application/vnd.anser-web-certificate-issue-initiation',
  fti: 'application/vnd.anser-web-funds-transfer-initiation',
  atx: 'application/vnd.antix.game-component',
  mpkg: 'application/vnd.apple.installer+xml',
  m3u8: 'application/vnd.apple.mpegurl',
  swi: 'application/vnd.aristanetworks.swi',
  iota: 'application/vnd.astraea-software.iota',
  aep: 'application/vnd.audiograph',
  mpm: 'application/vnd.blueice.multipass',
  bmi: 'application/vnd.bmi',
  rep: 'application/vnd.businessobjects',
  cdxml: 'application/vnd.chemdraw+xml',
  mmd: 'application/vnd.chipnuts.karaoke-mmd',
  cdy: 'application/vnd.cinderella',
  cla: 'application/vnd.claymore',
  rp9: 'application/vnd.cloanto.rp9',
  c4g: 'application/vnd.clonk.c4group',
  c4d: 'application/vnd.clonk.c4group',
  c4f: 'application/vnd.clonk.c4group',
  c4p: 'application/vnd.clonk.c4group',
  c4u: 'application/vnd.clonk.c4group',
  c11amc: 'application/vnd.cluetrust.cartomobile-config',
  c11amz: 'application/vnd.cluetrust.cartomobile-config-pkg',
  csp: 'application/vnd.commonspace',
  cdbcmsg: 'application/vnd.contact.cmsg',
  cmc: 'application/vnd.cosmocaller',
  clkx: 'application/vnd.crick.clicker',
  clkk: 'application/vnd.crick.clicker.keyboard',
  clkp: 'application/vnd.crick.clicker.palette',
  clkt: 'application/vnd.crick.clicker.template',
  clkw: 'application/vnd.crick.clicker.wordbank',
  wbs: 'application/vnd.criticaltools.wbs+xml',
  pml: 'application/vnd.ctc-posml',
  ppd: 'application/vnd.cups-ppd',
  car: 'application/vnd.curl.car',
  pcurl: 'application/vnd.curl.pcurl',
  dart: 'application/vnd.dart',
  rdz: 'application/vnd.data-vision.rdz',
  uvf: 'application/vnd.dece.data',
  uvvf: 'application/vnd.dece.data',
  uvd: 'application/vnd.dece.data',
  uvvd: 'application/vnd.dece.data',
  uvt: 'application/vnd.dece.ttml+xml',
  uvvt: 'application/vnd.dece.ttml+xml',
  uvx: 'application/vnd.dece.unspecified',
  uvvx: 'application/vnd.dece.unspecified',
  uvz: 'application/vnd.dece.zip',
  uvvz: 'application/vnd.dece.zip',
  fe_launch: 'application/vnd.denovo.fcselayout-link',
  dna: 'application/vnd.dna',
  mlp: 'application/vnd.dolby.mlp',
  dpg: 'application/vnd.dpgraph',
  dfac: 'application/vnd.dreamfactory',
  kpxx: 'application/vnd.ds-keypoint',
  ait: 'application/vnd.dvb.ait',
  svc: 'application/vnd.dvb.service',
  geo: 'application/vnd.dynageo',
  mag: 'application/vnd.ecowin.chart',
  nml: 'application/vnd.enliven',
  esf: 'application/vnd.epson.esf',
  msf: 'application/vnd.epson.msf',
  qam: 'application/vnd.epson.quickanime',
  slt: 'application/vnd.epson.salt',
  ssf: 'application/vnd.epson.ssf',
  es3: 'application/vnd.eszigno3+xml',
  et3: 'application/vnd.eszigno3+xml',
  ez2: 'application/vnd.ezpix-album',
  ez3: 'application/vnd.ezpix-package',
  fdf: 'application/vnd.fdf',
  mseed: 'application/vnd.fdsn.mseed',
  seed: 'application/vnd.fdsn.seed',
  dataless: 'application/vnd.fdsn.seed',
  gph: 'application/vnd.flographit',
  ftc: 'application/vnd.fluxtime.clip',
  fm: 'application/vnd.framemaker',
  frame: 'application/vnd.framemaker',
  maker: 'application/vnd.framemaker',
  book: 'application/vnd.framemaker',
  fnc: 'application/vnd.frogans.fnc',
  ltf: 'application/vnd.frogans.ltf',
  fsc: 'application/vnd.fsc.weblaunch',
  oas: 'application/vnd.fujitsu.oasys',
  oa2: 'application/vnd.fujitsu.oasys2',
  oa3: 'application/vnd.fujitsu.oasys3',
  fg5: 'application/vnd.fujitsu.oasysgp',
  bh2: 'application/vnd.fujitsu.oasysprs',
  ddd: 'application/vnd.fujixerox.ddd',
  xdw: 'application/vnd.fujixerox.docuworks',
  xbd: 'application/vnd.fujixerox.docuworks.binder',
  fzs: 'application/vnd.fuzzysheet',
  txd: 'application/vnd.genomatix.tuxedo',
  ggb: 'application/vnd.geogebra.file',
  ggt: 'application/vnd.geogebra.tool',
  gex: 'application/vnd.geometry-explorer',
  gre: 'application/vnd.geometry-explorer',
  gxt: 'application/vnd.geonext',
  g2w: 'application/vnd.geoplan',
  g3w: 'application/vnd.geospace',
  gmx: 'application/vnd.gmx',
  kml: 'application/vnd.google-earth.kml+xml',
  kmz: 'application/vnd.google-earth.kmz',
  gqf: 'application/vnd.grafeq',
  gqs: 'application/vnd.grafeq',
  gac: 'application/vnd.groove-account',
  ghf: 'application/vnd.groove-help',
  gim: 'application/vnd.groove-identity-message',
  grv: 'application/vnd.groove-injector',
  gtm: 'application/vnd.groove-tool-message',
  tpl: 'application/vnd.groove-tool-template',
  vcg: 'application/vnd.groove-vcard',
  hal: 'application/vnd.hal+xml',
  zmm: 'application/vnd.handheld-entertainment+xml',
  hbci: 'application/vnd.hbci',
  les: 'application/vnd.hhe.lesson-player',
  hpgl: 'application/vnd.hp-hpgl',
  hpid: 'application/vnd.hp-hpid',
  hps: 'application/vnd.hp-hps',
  jlt: 'application/vnd.hp-jlyt',
  pcl: 'application/vnd.hp-pcl',
  pclxl: 'application/vnd.hp-pclxl',
  'sfd-hdstx': 'application/vnd.hydrostatix.sof-data',
  mpy: 'application/vnd.ibm.minipay',
  afp: 'application/vnd.ibm.modcap',
  listafp: 'application/vnd.ibm.modcap',
  list3820: 'application/vnd.ibm.modcap',
  irm: 'application/vnd.ibm.rights-management',
  sc: 'application/vnd.ibm.secure-container',
  icc: 'application/vnd.iccprofile',
  icm: 'application/vnd.iccprofile',
  igl: 'application/vnd.igloader',
  ivp: 'application/vnd.immervision-ivp',
  ivu: 'application/vnd.immervision-ivu',
  igm: 'application/vnd.insors.igm',
  xpw: 'application/vnd.intercon.formnet',
  xpx: 'application/vnd.intercon.formnet',
  i2g: 'application/vnd.intergeo',
  qbo: 'application/vnd.intu.qbo',
  qfx: 'application/vnd.intu.qfx',
  rcprofile: 'application/vnd.ipunplugged.rcprofile',
  irp: 'application/vnd.irepository.package+xml',
  xpr: 'application/vnd.is-xpr',
  fcs: 'application/vnd.isac.fcs',
  jam: 'application/vnd.jam',
  rms: 'application/vnd.jcp.javame.midlet-rms',
  jisp: 'application/vnd.jisp',
  joda: 'application/vnd.joost.joda-archive',
  ktz: 'application/vnd.kahootz',
  ktr: 'application/vnd.kahootz',
  karbon: 'application/vnd.kde.karbon',
  chrt: 'application/vnd.kde.kchart',
  kfo: 'application/vnd.kde.kformula',
  flw: 'application/vnd.kde.kivio',
  kon: 'application/vnd.kde.kontour',
  kpr: 'application/vnd.kde.kpresenter',
  kpt: 'application/vnd.kde.kpresenter',
  ksp: 'application/vnd.kde.kspread',
  kwd: 'application/vnd.kde.kword',
  kwt: 'application/vnd.kde.kword',
  htke: 'application/vnd.kenameaapp',
  kia: 'application/vnd.kidspiration',
  kne: 'application/vnd.kinar',
  knp: 'application/vnd.kinar',
  skp: 'application/vnd.koan',
  skd: 'application/vnd.koan',
  skt: 'application/vnd.koan',
  skm: 'application/vnd.koan',
  sse: 'application/vnd.kodak-descriptor',
  lasxml: 'application/vnd.las.las+xml',
  lbd: 'application/vnd.llamagraphics.life-balance.desktop',
  lbe: 'application/vnd.llamagraphics.life-balance.exchange+xml',
  apr: 'application/vnd.lotus-approach',
  pre: 'application/vnd.lotus-freelance',
  nsf: 'application/vnd.lotus-notes',
  org: 'application/vnd.lotus-organizer',
  scm: 'application/vnd.lotus-screencam',
  lwp: 'application/vnd.lotus-wordpro',
  portpkg: 'application/vnd.macports.portpkg',
  mcd: 'application/vnd.mcd',
  mc1: 'application/vnd.medcalcdata',
  cdkey: 'application/vnd.mediastation.cdkey',
  mwf: 'application/vnd.mfer',
  mfm: 'application/vnd.mfmp',
  flo: 'application/vnd.micrografx.flo',
  igx: 'application/vnd.micrografx.igx',
  mif: 'application/vnd.mif',
  daf: 'application/vnd.mobius.daf',
  dis: 'application/vnd.mobius.dis',
  mbk: 'application/vnd.mobius.mbk',
  mqy: 'application/vnd.mobius.mqy',
  msl: 'application/vnd.mobius.msl',
  plc: 'application/vnd.mobius.plc',
  txf: 'application/vnd.mobius.txf',
  mpn: 'application/vnd.mophun.application',
  mpc: 'application/vnd.mophun.certificate',
  xul: 'application/vnd.mozilla.xul+xml',
  cil: 'application/vnd.ms-artgalry',
  cab: 'application/vnd.ms-cab-compressed',
  xls: 'application/vnd.ms-excel',
  xlm: 'application/vnd.ms-excel',
  xla: 'application/vnd.ms-excel',
  xlc: 'application/vnd.ms-excel',
  xlt: 'application/vnd.ms-excel',
  xlw: 'application/vnd.ms-excel',
  xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
  xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
  xltm: 'application/vnd.ms-excel.template.macroenabled.12',
  eot: 'application/vnd.ms-fontobject',
  chm: 'application/vnd.ms-htmlhelp',
  ims: 'application/vnd.ms-ims',
  lrm: 'application/vnd.ms-lrm',
  thmx: 'application/vnd.ms-officetheme',
  cat: 'application/vnd.ms-pki.seccat',
  stl: 'application/vnd.ms-pki.stl',
  ppt: 'application/vnd.ms-powerpoint',
  pps: 'application/vnd.ms-powerpoint',
  pot: 'application/vnd.ms-powerpoint',
  ppam: 'application/vnd.ms-powerpoint.addin.macroenabled.12',
  pptm: 'application/vnd.ms-powerpoint.presentation.macroenabled.12',
  sldm: 'application/vnd.ms-powerpoint.slide.macroenabled.12',
  ppsm: 'application/vnd.ms-powerpoint.slideshow.macroenabled.12',
  potm: 'application/vnd.ms-powerpoint.template.macroenabled.12',
  mpp: 'application/vnd.ms-project',
  mpt: 'application/vnd.ms-project',
  docm: 'application/vnd.ms-word.document.macroenabled.12',
  dotm: 'application/vnd.ms-word.template.macroenabled.12',
  wps: 'application/vnd.ms-works',
  wks: 'application/vnd.ms-works',
  wcm: 'application/vnd.ms-works',
  wdb: 'application/vnd.ms-works',
  wpl: 'application/vnd.ms-wpl',
  xps: 'application/vnd.ms-xpsdocument',
  mseq: 'application/vnd.mseq',
  mus: 'application/vnd.musician',
  msty: 'application/vnd.muvee.style',
  taglet: 'application/vnd.mynfc',
  nlu: 'application/vnd.neurolanguage.nlu',
  ntf: 'application/vnd.nitf',
  nitf: 'application/vnd.nitf',
  nnd: 'application/vnd.noblenet-directory',
  nns: 'application/vnd.noblenet-sealer',
  nnw: 'application/vnd.noblenet-web',
  ngdat: 'application/vnd.nokia.n-gage.data',
  'n-gage': 'application/vnd.nokia.n-gage.symbian.install',
  rpst: 'application/vnd.nokia.radio-preset',
  rpss: 'application/vnd.nokia.radio-presets',
  edm: 'application/vnd.novadigm.edm',
  edx: 'application/vnd.novadigm.edx',
  ext: 'application/vnd.novadigm.ext',
  odc: 'application/vnd.oasis.opendocument.chart',
  otc: 'application/vnd.oasis.opendocument.chart-template',
  odb: 'application/vnd.oasis.opendocument.database',
  odf: 'application/vnd.oasis.opendocument.formula',
  odft: 'application/vnd.oasis.opendocument.formula-template',
  odg: 'application/vnd.oasis.opendocument.graphics',
  otg: 'application/vnd.oasis.opendocument.graphics-template',
  odi: 'application/vnd.oasis.opendocument.image',
  oti: 'application/vnd.oasis.opendocument.image-template',
  odp: 'application/vnd.oasis.opendocument.presentation',
  otp: 'application/vnd.oasis.opendocument.presentation-template',
  ods: 'application/vnd.oasis.opendocument.spreadsheet',
  ots: 'application/vnd.oasis.opendocument.spreadsheet-template',
  odt: 'application/vnd.oasis.opendocument.text',
  odm: 'application/vnd.oasis.opendocument.text-master',
  ott: 'application/vnd.oasis.opendocument.text-template',
  oth: 'application/vnd.oasis.opendocument.text-web',
  xo: 'application/vnd.olpc-sugar',
  dd2: 'application/vnd.oma.dd2+xml',
  oxt: 'application/vnd.openofficeorg.extension',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  sldx: 'application/vnd.openxmlformats-officedocument.presentationml.slide',
  ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  mgp: 'application/vnd.osgeo.mapguide.package',
  dp: 'application/vnd.osgi.dp',
  esa: 'application/vnd.osgi.subsystem',
  pdb: 'application/vnd.palm',
  pqa: 'application/vnd.palm',
  oprc: 'application/vnd.palm',
  paw: 'application/vnd.pawaafile',
  str: 'application/vnd.pg.format',
  ei6: 'application/vnd.pg.osasli',
  efif: 'application/vnd.picsel',
  wg: 'application/vnd.pmi.widget',
  plf: 'application/vnd.pocketlearn',
  pbd: 'application/vnd.powerbuilder6',
  box: 'application/vnd.previewsystems.box',
  mgz: 'application/vnd.proteus.magazine',
  qps: 'application/vnd.publishare-delta-tree',
  ptid: 'application/vnd.pvi.ptid1',
  qxd: 'application/vnd.quark.quarkxpress',
  qxt: 'application/vnd.quark.quarkxpress',
  qwd: 'application/vnd.quark.quarkxpress',
  qwt: 'application/vnd.quark.quarkxpress',
  qxl: 'application/vnd.quark.quarkxpress',
  qxb: 'application/vnd.quark.quarkxpress',
  bed: 'application/vnd.realvnc.bed',
  mxl: 'application/vnd.recordare.musicxml',
  musicxml: 'application/vnd.recordare.musicxml+xml',
  cryptonote: 'application/vnd.rig.cryptonote',
  cod: 'application/vnd.rim.cod',
  rm: 'application/vnd.rn-realmedia',
  rmvb: 'application/vnd.rn-realmedia-vbr',
  link66: 'application/vnd.route66.link66+xml',
  st: 'application/vnd.sailingtracker.track',
  see: 'application/vnd.seemail',
  sema: 'application/vnd.sema',
  semd: 'application/vnd.semd',
  semf: 'application/vnd.semf',
  ifm: 'application/vnd.shana.informed.formdata',
  itp: 'application/vnd.shana.informed.formtemplate',
  iif: 'application/vnd.shana.informed.interchange',
  ipk: 'application/vnd.shana.informed.package',
  twd: 'application/vnd.simtech-mindmapper',
  twds: 'application/vnd.simtech-mindmapper',
  mmf: 'application/vnd.smaf',
  teacher: 'application/vnd.smart.teacher',
  sdkm: 'application/vnd.solent.sdkm+xml',
  sdkd: 'application/vnd.solent.sdkm+xml',
  dxp: 'application/vnd.spotfire.dxp',
  sfs: 'application/vnd.spotfire.sfs',
  sdc: 'application/vnd.stardivision.calc',
  sda: 'application/vnd.stardivision.draw',
  sdd: 'application/vnd.stardivision.impress',
  smf: 'application/vnd.stardivision.math',
  sdw: 'application/vnd.stardivision.writer',
  vor: 'application/vnd.stardivision.writer',
  sgl: 'application/vnd.stardivision.writer-global',
  smzip: 'application/vnd.stepmania.package',
  sm: 'application/vnd.stepmania.stepchart',
  sxc: 'application/vnd.sun.xml.calc',
  stc: 'application/vnd.sun.xml.calc.template',
  sxd: 'application/vnd.sun.xml.draw',
  std: 'application/vnd.sun.xml.draw.template',
  sxi: 'application/vnd.sun.xml.impress',
  sti: 'application/vnd.sun.xml.impress.template',
  sxm: 'application/vnd.sun.xml.math',
  sxw: 'application/vnd.sun.xml.writer',
  sxg: 'application/vnd.sun.xml.writer.global',
  stw: 'application/vnd.sun.xml.writer.template',
  sus: 'application/vnd.sus-calendar',
  susp: 'application/vnd.sus-calendar',
  svd: 'application/vnd.svd',
  sis: 'application/vnd.symbian.install',
  sisx: 'application/vnd.symbian.install',
  xsm: 'application/vnd.syncml+xml',
  bdm: 'application/vnd.syncml.dm+wbxml',
  xdm: 'application/vnd.syncml.dm+xml',
  tao: 'application/vnd.tao.intent-module-archive',
  pcap: 'application/vnd.tcpdump.pcap',
  cap: 'application/vnd.tcpdump.pcap',
  dmp: 'application/vnd.tcpdump.pcap',
  tmo: 'application/vnd.tmobile-livetv',
  tpt: 'application/vnd.trid.tpt',
  mxs: 'application/vnd.triscape.mxs',
  tra: 'application/vnd.trueapp',
  ufd: 'application/vnd.ufdl',
  ufdl: 'application/vnd.ufdl',
  utz: 'application/vnd.uiq.theme',
  umj: 'application/vnd.umajin',
  unityweb: 'application/vnd.unity',
  uoml: 'application/vnd.uoml+xml',
  vcx: 'application/vnd.vcx',
  vsd: 'application/vnd.visio',
  vst: 'application/vnd.visio',
  vss: 'application/vnd.visio',
  vsw: 'application/vnd.visio',
  vis: 'application/vnd.visionary',
  vsf: 'application/vnd.vsf',
  wbxml: 'application/vnd.wap.wbxml',
  wmlc: 'application/vnd.wap.wmlc',
  wmlsc: 'application/vnd.wap.wmlscriptc',
  wtb: 'application/vnd.webturbo',
  nbp: 'application/vnd.wolfram.player',
  wpd: 'application/vnd.wordperfect',
  wqd: 'application/vnd.wqd',
  stf: 'application/vnd.wt.stf',
  xar: 'application/vnd.xara',
  xfdl: 'application/vnd.xfdl',
  hvd: 'application/vnd.yamaha.hv-dic',
  hvs: 'application/vnd.yamaha.hv-script',
  hvp: 'application/vnd.yamaha.hv-voice',
  osf: 'application/vnd.yamaha.openscoreformat',
  osfpvg: 'application/vnd.yamaha.openscoreformat.osfpvg+xml',
  saf: 'application/vnd.yamaha.smaf-audio',
  spf: 'application/vnd.yamaha.smaf-phrase',
  cmp: 'application/vnd.yellowriver-custom-menu',
  zir: 'application/vnd.zul',
  zirz: 'application/vnd.zul',
  zaz: 'application/vnd.zzazz.deck+xml',
  vxml: 'application/voicexml+xml',
  wgt: 'application/widget',
  hlp: 'application/winhlp',
  wsdl: 'application/wsdl+xml',
  wspolicy: 'application/wspolicy+xml',
  '7z': 'application/x-7z-compressed',
  abw: 'application/x-abiword',
  ace: 'application/x-ace-compressed',
  dmg: 'application/x-apple-diskimage',
  aab: 'application/x-authorware-bin',
  x32: 'application/x-authorware-bin',
  u32: 'application/x-authorware-bin',
  vox: 'application/x-authorware-bin',
  aam: 'application/x-authorware-map',
  aas: 'application/x-authorware-seg',
  bcpio: 'application/x-bcpio',
  torrent: 'application/x-bittorrent',
  blb: 'application/x-blorb',
  blorb: 'application/x-blorb',
  bz: 'application/x-bzip',
  bz2: 'application/x-bzip2',
  boz: 'application/x-bzip2',
  cbr: 'application/x-cbr',
  cba: 'application/x-cbr',
  cbt: 'application/x-cbr',
  cbz: 'application/x-cbr',
  cb7: 'application/x-cbr',
  vcd: 'application/x-cdlink',
  cfs: 'application/x-cfs-compressed',
  chat: 'application/x-chat',
  pgn: 'application/x-chess-pgn',
  nsc: 'application/x-conference',
  cpio: 'application/x-cpio',
  csh: 'application/x-csh',
  deb: 'application/x-debian-package',
  udeb: 'application/x-debian-package',
  dgc: 'application/x-dgc-compressed',
  dir: 'application/x-director',
  dcr: 'application/x-director',
  dxr: 'application/x-director',
  cst: 'application/x-director',
  cct: 'application/x-director',
  cxt: 'application/x-director',
  w3d: 'application/x-director',
  fgd: 'application/x-director',
  swa: 'application/x-director',
  wad: 'application/x-doom',
  ncx: 'application/x-dtbncx+xml',
  dtb: 'application/x-dtbook+xml',
  res: 'application/x-dtbresource+xml',
  dvi: 'application/x-dvi',
  evy: 'application/x-envoy',
  eva: 'application/x-eva',
  bdf: 'application/x-font-bdf',
  gsf: 'application/x-font-ghostscript',
  psf: 'application/x-font-linux-psf',
  otf: 'application/x-font-otf',
  pcf: 'application/x-font-pcf',
  snf: 'application/x-font-snf',
  ttf: 'application/x-font-ttf',
  ttc: 'application/x-font-ttf',
  pfa: 'application/x-font-type1',
  pfb: 'application/x-font-type1',
  pfm: 'application/x-font-type1',
  afm: 'application/x-font-type1',
  woff: 'application/x-font-woff',
  arc: 'application/x-freearc',
  spl: 'application/x-futuresplash',
  gca: 'application/x-gca-compressed',
  ulx: 'application/x-glulx',
  gnumeric: 'application/x-gnumeric',
  gramps: 'application/x-gramps-xml',
  gtar: 'application/x-gtar',
  hdf: 'application/x-hdf',
  install: 'application/x-install-instructions',
  iso: 'application/x-iso9660-image',
  jnlp: 'application/x-java-jnlp-file',
  latex: 'application/x-latex',
  lzh: 'application/x-lzh-compressed',
  lha: 'application/x-lzh-compressed',
  mie: 'application/x-mie',
  prc: 'application/x-mobipocket-ebook',
  mobi: 'application/x-mobipocket-ebook',
  application: 'application/x-ms-application',
  lnk: 'application/x-ms-shortcut',
  wmd: 'application/x-ms-wmd',
  wmz: 'application/x-msmetafile',
  xbap: 'application/x-ms-xbap',
  mdb: 'application/x-msaccess',
  obd: 'application/x-msbinder',
  crd: 'application/x-mscardfile',
  clp: 'application/x-msclip',
  exe: 'application/x-msdownload',
  dll: 'application/x-msdownload',
  com: 'application/x-msdownload',
  bat: 'application/x-msdownload',
  msi: 'application/x-msdownload',
  mvb: 'application/x-msmediaview',
  m13: 'application/x-msmediaview',
  m14: 'application/x-msmediaview',
  wmf: 'application/x-msmetafile',
  emf: 'application/x-msmetafile',
  emz: 'application/x-msmetafile',
  mny: 'application/x-msmoney',
  pub: 'application/x-mspublisher',
  scd: 'application/x-msschedule',
  trm: 'application/x-msterminal',
  wri: 'application/x-mswrite',
  nc: 'application/x-netcdf',
  cdf: 'application/x-netcdf',
  nzb: 'application/x-nzb',
  p12: 'application/x-pkcs12',
  pfx: 'application/x-pkcs12',
  p7b: 'application/x-pkcs7-certificates',
  spc: 'application/x-pkcs7-certificates',
  p7r: 'application/x-pkcs7-certreqresp',
  rar: 'application/x-rar-compressed',
  ris: 'application/x-research-info-systems',
  sh: 'application/x-sh',
  shar: 'application/x-shar',
  swf: 'application/x-shockwave-flash',
  xap: 'application/x-silverlight-app',
  sql: 'application/x-sql',
  sit: 'application/x-stuffit',
  sitx: 'application/x-stuffitx',
  srt: 'application/x-subrip',
  sv4cpio: 'application/x-sv4cpio',
  sv4crc: 'application/x-sv4crc',
  t3: 'application/x-t3vm-image',
  gam: 'application/x-tads',
  tar: 'application/x-tar',
  tcl: 'application/x-tcl',
  tex: 'application/x-tex',
  tfm: 'application/x-tex-tfm',
  texinfo: 'application/x-texinfo',
  texi: 'application/x-texinfo',
  obj: 'application/x-tgif',
  ustar: 'application/x-ustar',
  src: 'application/x-wais-source',
  der: 'application/x-x509-ca-cert',
  crt: 'application/x-x509-ca-cert',
  fig: 'application/x-xfig',
  xlf: 'application/x-xliff+xml',
  xpi: 'application/x-xpinstall',
  xz: 'application/x-xz',
  z1: 'application/x-zmachine',
  z2: 'application/x-zmachine',
  z3: 'application/x-zmachine',
  z4: 'application/x-zmachine',
  z5: 'application/x-zmachine',
  z6: 'application/x-zmachine',
  z7: 'application/x-zmachine',
  z8: 'application/x-zmachine',
  xaml: 'application/xaml+xml',
  xdf: 'application/xcap-diff+xml',
  xenc: 'application/xenc+xml',
  xhtml: 'application/xhtml+xml',
  xht: 'application/xhtml+xml',
  xml: 'application/xml',
  xsl: 'application/xml',
  dtd: 'application/xml-dtd',
  xop: 'application/xop+xml',
  xpl: 'application/xproc+xml',
  xslt: 'application/xslt+xml',
  xspf: 'application/xspf+xml',
  mxml: 'application/xv+xml',
  xhvml: 'application/xv+xml',
  xvml: 'application/xv+xml',
  xvm: 'application/xv+xml',
  yang: 'application/yang',
  yin: 'application/yin+xml',
  zip: 'application/zip',
  adp: 'audio/adpcm',
  au: 'audio/basic',
  snd: 'audio/basic',
  mid: 'audio/midi',
  midi: 'audio/midi',
  kar: 'audio/midi',
  rmi: 'audio/midi',
  mp4a: 'audio/mp4',
  mpga: 'audio/mpeg',
  mp2: 'audio/mpeg',
  mp2a: 'audio/mpeg',
  mp3: 'audio/mpeg',
  m2a: 'audio/mpeg',
  m3a: 'audio/mpeg',
  oga: 'audio/ogg',
  ogg: 'audio/ogg',
  spx: 'audio/ogg',
  s3m: 'audio/s3m',
  sil: 'audio/silk',
  uva: 'audio/vnd.dece.audio',
  uvva: 'audio/vnd.dece.audio',
  eol: 'audio/vnd.digital-winds',
  dra: 'audio/vnd.dra',
  dts: 'audio/vnd.dts',
  dtshd: 'audio/vnd.dts.hd',
  lvp: 'audio/vnd.lucent.voice',
  pya: 'audio/vnd.ms-playready.media.pya',
  ecelp4800: 'audio/vnd.nuera.ecelp4800',
  ecelp7470: 'audio/vnd.nuera.ecelp7470',
  ecelp9600: 'audio/vnd.nuera.ecelp9600',
  rip: 'audio/vnd.rip',
  weba: 'audio/webm',
  aac: 'audio/x-aac',
  aif: 'audio/x-aiff',
  aiff: 'audio/x-aiff',
  aifc: 'audio/x-aiff',
  caf: 'audio/x-caf',
  flac: 'audio/x-flac',
  mka: 'audio/x-matroska',
  m3u: 'audio/x-mpegurl',
  wax: 'audio/x-ms-wax',
  wma: 'audio/x-ms-wma',
  ram: 'audio/x-pn-realaudio',
  ra: 'audio/x-pn-realaudio',
  rmp: 'audio/x-pn-realaudio-plugin',
  wav: 'audio/x-wav',
  xm: 'audio/xm',
  cdx: 'chemical/x-cdx',
  cif: 'chemical/x-cif',
  cmdf: 'chemical/x-cmdf',
  cml: 'chemical/x-cml',
  csml: 'chemical/x-csml',
  xyz: 'chemical/x-xyz',
  bmp: 'image/bmp',
  cgm: 'image/cgm',
  g3: 'image/g3fax',
  gif: 'image/gif',
  ief: 'image/ief',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  jpe: 'image/jpeg',
  ktx: 'image/ktx',
  png: 'image/png',
  btif: 'image/prs.btif',
  sgi: 'image/sgi',
  svg: 'image/svg+xml',
  svgz: 'image/svg+xml',
  tiff: 'image/tiff',
  tif: 'image/tiff',
  psd: 'image/vnd.adobe.photoshop',
  uvi: 'image/vnd.dece.graphic',
  uvvi: 'image/vnd.dece.graphic',
  uvg: 'image/vnd.dece.graphic',
  uvvg: 'image/vnd.dece.graphic',
  sub: 'text/vnd.dvb.subtitle',
  djvu: 'image/vnd.djvu',
  djv: 'image/vnd.djvu',
  dwg: 'image/vnd.dwg',
  dxf: 'image/vnd.dxf',
  fbs: 'image/vnd.fastbidsheet',
  fpx: 'image/vnd.fpx',
  fst: 'image/vnd.fst',
  mmr: 'image/vnd.fujixerox.edmics-mmr',
  rlc: 'image/vnd.fujixerox.edmics-rlc',
  mdi: 'image/vnd.ms-modi',
  wdp: 'image/vnd.ms-photo',
  npx: 'image/vnd.net-fpx',
  wbmp: 'image/vnd.wap.wbmp',
  xif: 'image/vnd.xiff',
  webp: 'image/webp',
  '3ds': 'image/x-3ds',
  ras: 'image/x-cmu-raster',
  cmx: 'image/x-cmx',
  fh: 'image/x-freehand',
  fhc: 'image/x-freehand',
  fh4: 'image/x-freehand',
  fh5: 'image/x-freehand',
  fh7: 'image/x-freehand',
  ico: 'image/x-icon',
  sid: 'image/x-mrsid-image',
  pcx: 'image/x-pcx',
  pic: 'image/x-pict',
  pct: 'image/x-pict',
  pnm: 'image/x-portable-anymap',
  pbm: 'image/x-portable-bitmap',
  pgm: 'image/x-portable-graymap',
  ppm: 'image/x-portable-pixmap',
  rgb: 'image/x-rgb',
  tga: 'image/x-tga',
  xbm: 'image/x-xbitmap',
  xpm: 'image/x-xpixmap',
  xwd: 'image/x-xwindowdump',
  eml: 'message/rfc822',
  mime: 'message/rfc822',
  igs: 'model/iges',
  iges: 'model/iges',
  msh: 'model/mesh',
  mesh: 'model/mesh',
  silo: 'model/mesh',
  dae: 'model/vnd.collada+xml',
  dwf: 'model/vnd.dwf',
  gdl: 'model/vnd.gdl',
  gtw: 'model/vnd.gtw',
  mts: 'model/vnd.mts',
  vtu: 'model/vnd.vtu',
  wrl: 'model/vrml',
  vrml: 'model/vrml',
  x3db: 'model/x3d+binary',
  x3dbz: 'model/x3d+binary',
  x3dv: 'model/x3d+vrml',
  x3dvz: 'model/x3d+vrml',
  x3d: 'model/x3d+xml',
  x3dz: 'model/x3d+xml',
  appcache: 'text/cache-manifest',
  ics: 'text/calendar',
  ifb: 'text/calendar',
  css: 'text/css',
  csv: 'text/csv',
  html: 'text/html',
  htm: 'text/html',
  n3: 'text/n3',
  txt: 'text/plain',
  text: 'text/plain',
  conf: 'text/plain',
  def: 'text/plain',
  list: 'text/plain',
  log: 'text/plain',
  in: 'text/plain',
  dsc: 'text/prs.lines.tag',
  rtx: 'text/richtext',
  sgml: 'text/sgml',
  sgm: 'text/sgml',
  tsv: 'text/tab-separated-values',
  t: 'text/troff',
  tr: 'text/troff',
  roff: 'text/troff',
  man: 'text/troff',
  me: 'text/troff',
  ms: 'text/troff',
  ttl: 'text/turtle',
  uri: 'text/uri-list',
  uris: 'text/uri-list',
  urls: 'text/uri-list',
  vcard: 'text/vcard',
  curl: 'text/vnd.curl',
  dcurl: 'text/vnd.curl.dcurl',
  scurl: 'text/vnd.curl.scurl',
  mcurl: 'text/vnd.curl.mcurl',
  fly: 'text/vnd.fly',
  flx: 'text/vnd.fmi.flexstor',
  gv: 'text/vnd.graphviz',
  '3dml': 'text/vnd.in3d.3dml',
  spot: 'text/vnd.in3d.spot',
  jad: 'text/vnd.sun.j2me.app-descriptor',
  wml: 'text/vnd.wap.wml',
  wmls: 'text/vnd.wap.wmlscript',
  s: 'text/x-asm',
  asm: 'text/x-asm',
  c: 'text/x-c',
  cc: 'text/x-c',
  cxx: 'text/x-c',
  cpp: 'text/x-c',
  h: 'text/x-c',
  hh: 'text/x-c',
  dic: 'text/x-c',
  f: 'text/x-fortran',
  for: 'text/x-fortran',
  f77: 'text/x-fortran',
  f90: 'text/x-fortran',
  java: 'text/x-java-source',
  opml: 'text/x-opml',
  p: 'text/x-pascal',
  pas: 'text/x-pascal',
  nfo: 'text/x-nfo',
  etx: 'text/x-setext',
  sfv: 'text/x-sfv',
  uu: 'text/x-uuencode',
  vcs: 'text/x-vcalendar',
  vcf: 'text/x-vcard',
  '3gp': 'video/3gpp',
  '3g2': 'video/3gpp2',
  h261: 'video/h261',
  h263: 'video/h263',
  h264: 'video/h264',
  jpgv: 'video/jpeg',
  jpm: 'video/jpm',
  jpgm: 'video/jpm',
  mj2: 'video/mj2',
  mjp2: 'video/mj2',
  mp4: 'video/mp4',
  mp4v: 'video/mp4',
  mpg4: 'video/mp4',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  mpe: 'video/mpeg',
  m1v: 'video/mpeg',
  m2v: 'video/mpeg',
  ogv: 'video/ogg',
  qt: 'video/quicktime',
  mov: 'video/quicktime',
  uvh: 'video/vnd.dece.hd',
  uvvh: 'video/vnd.dece.hd',
  uvm: 'video/vnd.dece.mobile',
  uvvm: 'video/vnd.dece.mobile',
  uvp: 'video/vnd.dece.pd',
  uvvp: 'video/vnd.dece.pd',
  uvs: 'video/vnd.dece.sd',
  uvvs: 'video/vnd.dece.sd',
  uvv: 'video/vnd.dece.video',
  uvvv: 'video/vnd.dece.video',
  dvb: 'video/vnd.dvb.file',
  fvt: 'video/vnd.fvt',
  mxu: 'video/vnd.mpegurl',
  m4u: 'video/vnd.mpegurl',
  pyv: 'video/vnd.ms-playready.media.pyv',
  uvu: 'video/vnd.uvvu.mp4',
  uvvu: 'video/vnd.uvvu.mp4',
  viv: 'video/vnd.vivo',
  webm: 'video/webm',
  f4v: 'video/x-f4v',
  fli: 'video/x-fli',
  flv: 'video/x-flv',
  m4v: 'video/x-m4v',
  mkv: 'video/x-matroska',
  mk3d: 'video/x-matroska',
  mks: 'video/x-matroska',
  mng: 'video/x-mng',
  asf: 'video/x-ms-asf',
  asx: 'video/x-ms-asf',
  vob: 'video/x-ms-vob',
  wm: 'video/x-ms-wm',
  wmv: 'video/x-ms-wmv',
  wmx: 'video/x-ms-wmx',
  wvx: 'video/x-ms-wvx',
  avi: 'video/x-msvideo',
  movie: 'video/x-sgi-movie',
  smv: 'video/x-smv',
  ice: 'x-conference/x-cooltalk'
};

/***/ }),

/***/ 55675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(47206);

/***/ }),

/***/ 56183:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 57452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
/* istanbul ignore file */
// TODO: decompose for unit testing
var urls = __webpack_require__(69266);
var errors = __webpack_require__(23235);
var {
  AccountsService
} = __webpack_require__(58698);
var request = __webpack_require__(50344);
var settings = __webpack_require__(89253);
var refreshTabs = __webpack_require__(88211);
var accountService = AccountsService.setup({
  request,
  features: {
    singleEndpoint: true
  }
});

/**
 * @private
 *
 * Waits for authentication to complete
 */
function waitForCompleteAuth(tab) {
  console.log(tab);
  return new Promise((resolve, reject) => {
    if (tab.incognito) {
      reject(new errors.PrivateBrowsingModeNotSupported('private-browsing'));
      chrome.tabs.remove(tab.id);
      return;
    }
    var tabClosed = function () {
      reject(new errors.ActivationTabClosed('activation-tab-closed'));
    };
    var checkCompletion = function () {
      // ensures latest tab info is retrieved
      chrome.tabs.get(tab.id).then(latestTab => {
        const {
          url
        } = latestTab;
        console.log('[TAB URL] ', url);

        // If tab status is "loading" there is no URL present
        // so skip this event and keep checking
        if (!url) {
          return;
        }

        // Check activation success
        var successLoc = url.indexOf(urls.activateSuccessUrl()) >= 0 || url.indexOf(urls.samlActivationSuccessUrl()) >= 0;
        var failure = url.indexOf(urls.activateFailureUrl()) >= 0;
        if (successLoc || failure) {
          chrome.tabs.onUpdated.removeListener(checkCompletion);
          chrome.tabs.onRemoved.removeListener(tabClosed);
          chrome.tabs.remove(latestTab.id);
          successLoc ? resolve(latestTab) : reject(new errors.ActivationFailed('Activation failure.'));
        }
      }).catch(function error(errorLoc) {
        console.error('An error occurred accessing the tab.', errorLoc);
      });
    };
    chrome.tabs.onUpdated.addListener(checkCompletion);
    chrome.tabs.onRemoved.addListener(tabClosed);

    // Do an initial check for the url if it matches
    // This is to make sure we do not miss the event
    checkCompletion();
  });
}

/**
 * Email activation method
 *
 * @param {String} userId The userId
 * @param {String} delegatee - The delegatee's email
 * @returns {Promise}
 *
 * @deferred
 */
function email(userId, delegatee) {
  const appIdDomains = settings.get(userId).appIdDomains || {};
  const connectOptions = settings.connectOptions(delegatee, {
    addAppIdDomains: true
  });
  return accountService.sendLoginEmail({
    emailAddress: userId
  }, connectOptions).then(() => request.post(urls.currentAppIdUrl()).withCredentials()).then(res => res.body.find(appIdObject => appIdObject.mostRecentLogin)).then(res => {
    res.authorizedDomains.forEach(function (domain) {
      appIdDomains[domain] = res.appId;
    });

    // Update the app id settings
    settings.update(userId, {
      appIdDomains
    });
  });
}

/**
 * Federated activation method
 *
 * @param {String} userId The userId
 * @param {String} provider The federated provider key
 * @param {String} delegatee - The delegatee's email
 * @returns {Promise<Tab>}
 *
 * @deferred
 */
function federated(userId, provider, delegatee) {
  var activationMethod = delegatee ? 'email' : 'federated';
  var appIdDomains = settings.get(userId).appIdDomains || {};
  var connectOptions = settings.connectOptions();
  var platform = 'Browser_Extension_Chrome';

  // @NOTE: Catch is used higher up the chain, could move it closer
  return accountService.register(userId, platform, activationMethod, connectOptions, delegatee)
  // Process the result from the register request and save the new appIdBundle
  .then(function success(res) {
    res.authorizedDomains.forEach(function (domain) {
      appIdDomains[domain] = res.appId;
    });

    // Update the app id settings
    settings.update(userId, {
      appIdDomains
    });
    var url = urls.activateUrl(res.appId, userId, provider);
    if (activationMethod !== 'email') {
      return chrome.tabs.create({
        url,
        active: true
      });
    }
  }).then(function success(tab) {
    if (tab) {
      return waitForCompleteAuth(tab);
    }
  });
}
function isSaml(userId) {
  return request.get(urls.samlConfigUrl()).query({
    userId
  });
}

/**
 * SAML activation method
 *
 * @param {String} userId The userId
 * @returns {Promise<Tab>}
 *
 * @deferred
 */
function saml(userId) {
  const platform = 'Browser_Extension_Chrome';
  const url = urls.samlUrl(userId, platform);
  const appIdDomains = settings.get(userId).appIdDomains || {};
  return chrome.tabs.create({
    url,
    active: true
  }).then(waitForCompleteAuth).then(() => request.post(urls.currentAppIdUrl()).withCredentials()).then(res => {
    for (const bundle of res.body) {
      bundle.authorizedDomains.forEach(function (domain) {
        appIdDomains[domain] = bundle.appId;
      });
    }
    // Update the app id settings
    settings.getOrCreate(userId);
    settings.update(userId, {
      appIdDomains,
      appIdBundles: res.body
    });
  });
}

/**
 * Email activation method
 *
 * @param {String} url - The email activation url to open
 * @returns {Promise<Tab>}
 *
 * @deferred
 */
function waitForEmailActivation(url) {
  // @NOTE: Catch is used higher up the chain, could move it closer
  return chrome.tabs.create({
    url,
    active: false
  }).then(function (tab) {
    return waitForCompleteAuth(tab);
  });
}

/**
 * Revoke and delete all local appIds.
 */
function clearActivations() {
  var connectOptions = settings.connectOptions();
  var appIdDomains = settings.get(connectOptions.userId).appIdDomains || {};
  connectOptions.appIdDomains = appIdDomains;

  // Get the current AppId(s)
  var appIds = [];
  var userSettings = settings.all();
  Object.keys(userSettings).forEach(user => {
    var {
      appIdBundle
    } = userSettings[user];
    if (appIdBundle && appIdBundle.appId) {
      appIds.push(appIdBundle.appId);
    }
  });

  // Return if no appId exists
  if (!appIds.length) {
    console.log('There are no activations to clear on this app.');
    console.debug('Attempted to revoke AppIds but none exist.');
    return;
  }

  // Send revoke request
  accountService.appIdBundlesRevoke(appIds, connectOptions).then(function appIdBundlesRevokeSuccess(res) {
    if (res.body && res.body.length) {
      console.error('Failed to revoke appIds: ', res.body);
      settings.clear();
      refreshTabs();
    } else {
      console.debug('AppId revoke successful.');
      settings.clear();
      refreshTabs();
    }
  }).catch(function appIdBundlesRevokeFail(err) {
    console.error('Error logging out.', err);
  });
}
module.exports = {
  federated,
  isSaml,
  saml,
  clearActivations,
  waitForEmailActivation,
  email
};

/***/ }),

/***/ 58533:
/***/ ((module, exports, __webpack_require__) => {

const Utils = __webpack_require__(55675);

/**
 * Handles transports between script layers
 */
function ScriptTransport(options) {
  this._requestAdapter = options.requestAdapter;
}

/**
 * @static
 *
 * Create a new script transport
 *
 * @param {Object} options The options for the transport
 * @param {Function} options.requestAdapter The adapter used to communicate
 *                                          across transport layers. This is
 *                                          meant to be defined per browser.
 *
 * @returns {ScriptTransport} The new script transport
 */
ScriptTransport.setup = function (options) {
  return new ScriptTransport(options);
};

/**
 * Calls the script with a given command
 *
 * @param {String} command The command to call at the other script
 * @param {Object} params An object containing the command parameters
 */
ScriptTransport.prototype.call = function (command, params) {
  return new Promise((resolve, reject) => {
    const responder = function (err, responseMessage) {
      if (err) {
        reject(Utils.formatForTransport(err));
      } else {
        resolve(responseMessage);
      }
    };
    const progressUpdater = function () {
      /* noop */
    };
    this._requestAdapter(command, params, responder, progressUpdater, false);
  });
};

/**
 * Calls the script with a given command
 *
 * @param {String} command The command to call at the other script
 * @param {Object} params An object containing the command parameters
 */
ScriptTransport.prototype.broadcast = function (command, params) {
  return new Promise((resolve, reject) => {
    const responder = function (err, responseMessage) {
      if (err) {
        reject(Utils.formatForTransport(err));
      } else {
        resolve(responseMessage);
      }
    };
    const progressUpdater = function () {
      /* noop */
    };
    this._requestAdapter(command, params, responder, progressUpdater, true);
  });
};

/**
 * A registry of script transports
 */
function ScriptTransportRegistry() {
  this._registry = {};
}

/**
 * @static
 *
 * Setup a registry
 *
 * @returns {ScriptTransportRegistry} The new registry
 */
ScriptTransportRegistry.setup = function () {
  return new ScriptTransportRegistry();
};

/**
 * Register a new script transport
 *
 * @param {String} scriptType The name of the script transport
 * @param {ScriptTransport} transport The script transport to register
 */
ScriptTransportRegistry.prototype.registerTransport = function (scriptType, transport) {
  this._registry[scriptType] = transport;
};

/**
 * Call a script transport of a particular name
 *
 * @param {String} scriptType The name of the script transport to call
 * @param {String} command The command to call
 * @param {Object} params Parameters for command. Optional
 */
ScriptTransportRegistry.prototype.call = function (scriptType, command, params) {
  const transport = this._registry[scriptType];
  if (transport === undefined) {
    throw new Error(`Transport ${scriptType} does not exist`);
  }
  return transport.call(command, params);
};

/**
 * Call a script transport of a particular name
 *
 * @param {String} scriptType The name of the script transport to call
 * @param {String} command The command to call
 * @param {Object} params Parameters for command. Optional
 */
ScriptTransportRegistry.prototype.broadcast = function (scriptType, command, params) {
  const transport = this._registry[scriptType];
  if (transport === undefined) {
    throw new Error(`Transport ${scriptType} does not exist`);
  }
  return transport.broadcast(command, params);
};

// Make a singleton script transport registry
exports = module.exports = ScriptTransportRegistry.setup();
// Also expose the ScriptTransport classes
exports.ScriptTransport = ScriptTransport;
exports.ScriptTransportRegistry = ScriptTransportRegistry;

/***/ }),

/***/ 59169:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 60952:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61526:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @class RoutingError
 *
 * Error for routing errors
 */
class RoutingError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RoutingError';
  }
}
exports.RoutingError = RoutingError;

/**
 * Routes actions to specific handlers. This is a very general router it is
 * meant to be wrapped in something that adapts the communication for both
 * sides of the router.
 */
function Router() {
  this._actions = {};
}

/**
 * Registers a handler to an action
 *
 * @param {String} action The action name
 * @param {Function} handler Handler for the action
 */
Router.prototype.register = function (action, handler) {
  this._actions[action] = handler;
};

/**
 * Route an action
 *
 * @param {String} action The action name
 * @param {Object} params The parameters
 * @param {Function} sendResponse The response callback
 * @param {Function} sendProgress The progress callback
 */
Router.prototype.route = function (action, params, sendResponse, sendProgress) {
  var handler = this._actions[action];
  if (handler === undefined) {
    throw new RoutingError(`Action ${action} does not exist.`);
  }
  var response = {
    send: sendResponse,
    progress: sendProgress
  };
  handler.apply(null, [params, response]);
};

// Add to the namespace
exports.Router = Router;

/***/ }),

/***/ 64688:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 64975:
/***/ ((__unused_webpack_module, exports) => {

var mailDomains = {
  gmail: ['mail.google.com'],
  outlook: ['mail.live.com']
};

// Simply checks to see if the provided URL is for one of our supported mail domains.
// This works, but we could probably come up with a better regular expression.

exports.isMailDomain = function (url) {
  for (var ind in mailDomains) {
    for (var i = 0, len = mailDomains[ind].length; i < len; ++i) {
      var reg = new RegExp(mailDomains[ind][i]);
      if (reg.test(url)) {
        return true;
      }
    }
  }
  return false;
};

/***/ }),

/***/ 66089:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 67712:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
/**
 * XMLHttpRequest polyfill
 */

if (!globalThis.XMLHttpRequest) {
  globalThis.XMLHttpRequest = (__webpack_require__(40358)/* .XMLHttpRequest */ .z);
  globalThis.root = globalThis;
  console.log('Using XMLHttpRequest polyfill');
}

// Should be removed after OIDC migration
if (!globalThis.window) {
  globalThis.window = globalThis;
}

/***/ }),

/***/ 69266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var settings = __webpack_require__(89253);

/**
 * The URLs to contact the server.
 *
 */
exports.accountsUrl = function (opts = {}) {
  const config = settings.connectOptions();
  if (config.singleEndpoint || opts.isSingleEndpoint) {
    return `${config.apiUrl}/accounts`;
  }
  return settings.getExtensionSettings().accountsUrl;
};
exports.authUrl = combine('/api/register');
exports.appIdUrl = combine('/api/appIdBundle');
exports.userSettingsUrl = combine('/api/userSettings');
exports.activateUrl = (appId, userId, provider) => {
  const generateUrl = combine(`/federated-activation?appId=${appId}&userId=${userId}&provider=${provider}`);
  return generateUrl();
};
exports.activateSuccessUrl = combine('/activation-success');
exports.activateFailureUrl = combine('/activation-failure');
exports.samlConfigUrl = combine('/api/org/saml-config/active');
exports.samlUrl = (userId, loginPlatform) => {
  const queryString = new URLSearchParams({
    loginPlatform,
    loginRedirectUrl: exports.samlActivationSuccessUrl(),
    userId
  });
  const generator = combine(`/saml-login?${queryString}`, {
    isSingleEndpoint: true
  });
  return generator();
};
exports.samlActivationSuccessUrl = combine('/activation-success', {
  isSingleEndpoint: true
});
exports.currentAppIdUrl = combine('/api/currentAppIdBundle', {
  isSingleEndpoint: true
});
function combine(str, opts = {}) {
  return function () {
    return exports.accountsUrl(opts) + str;
  };
}

/***/ }),

/***/ 70119:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 73776:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 74897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
/* istanbul ignore file */
const Guard = __webpack_require__(57128);
let AnalyticsService = __webpack_require__(39441);
const {
  _bindAllMethods
} = __webpack_require__(4424);
const EVENT_MAP = {
  cksInfoDisplayed: {
    name: 'CKS - Info Displayed',
    properties: {
      'event.version': '1.1.0',
      initialized: true
    }
  },
  cksMoreInfoDisplayed: {
    name: 'CKS - More Info Displayed',
    properties: {
      'event.version': '1.1.0',
      initialized: true
    }
  },
  activationAttempt: {
    name: 'Activation Attempt',
    properties: {
      'event.version': '1.0.0'
    }
  },
  activationSuccess: {
    name: 'Activation Success',
    properties: {
      'event.version': '1.0.0'
    }
  },
  clientInfo: {
    name: 'Client Info',
    properties: {
      'event.version': '1.1.0'
    }
  },
  clientError: {
    name: 'Client Error',
    properties: {
      'event.version': '1.1.0'
    }
  },
  composeInfo: {
    name: 'Compose Info',
    properties: {
      'event.version': '1.1.0'
    }
  },
  integrityCompromised: {
    name: 'Integrity Compromised',
    properties: {
      'event.version': '1.0.0'
    }
  },
  personalIntroOpen: {
    name: 'Personal Intro Open',
    properties: {
      'event.version': '1.0.0'
    }
  },
  secureModeToggleOff: {
    name: 'Secure Mode Toggled',
    properties: {
      'event.version': '1.0.0',
      state: 'off'
    }
  },
  secureModeToggleOn: {
    name: 'Secure Mode Toggled',
    properties: {
      'event.version': '1.0.0',
      state: 'on'
    }
  },
  viewSecureEmail: {
    name: 'View Secure Email',
    properties: {
      'event.version': '1.0.0'
    }
  },
  decryptionAnimation: {
    name: 'Secure Email Animation Duration',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sssViolation: {
    name: 'SSS Violation',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sssBegin: {
    name: 'SSS Begin',
    properties: {
      'event.version': '1.0.1'
    }
  },
  sssProcessed: {
    name: 'SSS Processed',
    properties: {
      'event.version': '1.1.0'
    }
  },
  sssCancelSend: {
    name: 'SSS Cancel Send',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sssSentUnsecure: {
    name: 'SSS Sent Unsecure',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sssSentSecure: {
    name: 'SSS Sent Secure',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sssAutoEncrypt: {
    name: 'SSS Auto Encrypt',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sssSecureModeOn: {
    name: 'SSS Secure Mode On',
    properties: {
      'event.version': '1.0.0'
    }
  },
  dlpModalOpened: {
    name: 'DLP - Modal Opened to the User',
    properties: {
      'event.version': '1.0.0'
    }
  },
  dlpRuleTriggered: {
    name: 'DLP - Rule triggered',
    properties: {
      'event.version': '1.1.0'
    }
  },
  dlpSendSecureAttempt: {
    name: 'DLP - Attempt to send secure',
    properties: {
      'event.version': '1.0.0'
    }
  },
  dlpSendSecureSuccess: {
    name: 'DLP - Sent Securely',
    properties: {
      'event.version': '1.0.0'
    }
  },
  dlpSendSecureFailed: {
    name: 'DLP - Send Secure Failed',
    properties: {
      'event.version': '1.0.0'
    }
  },
  secureAttachmentPressed: {
    name: 'Secure Attachment Pressed',
    properties: {
      'event.version': '1.0.0'
    }
  },
  secureAttachmentDownloaded: {
    name: 'Secure Attachment Downloaded',
    properties: {
      'event.version': '1.0.0'
    }
  },
  secureAttachmentPreviewed: {
    name: 'Secure Attachment Previewed',
    properties: {
      'event.version': '1.0.0'
    }
  },
  attachmentAdded: {
    name: 'Attachment Added',
    properties: {
      'event.version': '1.0.0'
    }
  },
  attachmentRemoved: {
    name: 'Attachment Removed',
    properties: {
      'event.version': '1.0.0'
    }
  },
  unsupportedFileFormat: {
    name: 'Unsupported File Format',
    properties: {
      'event.version': '1.0.0'
    }
  },
  onboardingTourInitiated: {
    name: 'Onboarding Tour Initiated',
    properties: {
      'event.version': '1.0.0'
    }
  },
  onboardingTourCanceled: {
    name: 'Onboarding Tour Canceled',
    properties: {
      'event.version': '1.0.0'
    }
  },
  onboardingTourCompleted: {
    name: 'Onboarding Tour Complete',
    properties: {
      'event.version': '1.0.0'
    }
  },
  onboardingTourRestarted: {
    name: 'Onboarding Tour Restarted',
    properties: {
      'event.version': '1.0.0'
    }
  },
  onboardingTourFirstEmail: {
    name: 'Onboarding Tour First Email Sent',
    properties: {
      'event.version': '1.0.0'
    }
  },
  popoverDisplayError: {
    name: 'Popover Display Error',
    properties: {
      'event.version': '1.0.0'
    }
  },
  popoverInvalidPosition: {
    name: 'Popover Invalid Position',
    properties: {
      'event.version': '1.0.0'
    }
  },
  /**
   * Drive Extension events
   * Events are included here and not in the drive-extension repo because
   * the Drive extension doesn't have its own background script, so it uses
   * the BP's background script for analytics.
   *
   * See https://docs.google.com/document/d/1hXvsHx7SeQDC9kQ8fXJkxzMFioOe_yRKiCoTLyTSrgE
   */

  driveActivationPermission: {
    name: 'Drive Activation Permission',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveAuthGoogle: {
    name: 'Drive Google Auth',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveAuthNotNeeded: {
    name: 'Drive Authorized Session',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveAuthVirtru: {
    name: 'Drive Virtru Auth',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveDecrypt: {
    name: 'Drive Decrypt Completed',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveEncrypt: {
    name: 'Drive Encrypt Completed',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveFileShared: {
    name: 'Drive File Shared',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveFileSharedPerRecipient: {
    name: 'Drive File Shared per Recipient',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveTagsUpdated: {
    name: 'Drive Tags Updated',
    properties: {
      'event.version': '1.0.0'
    }
  },
  driveTrialBegin: {
    name: 'Drive Trial Begin',
    properties: {
      'event.version': '1.0.0'
    }
  },
  encryptedSearchSubmitted: {
    name: 'Encrypted Search Submitted',
    properties: {
      'event.version': '1.0.0'
    }
  },
  tryUseDisabledDomain: {
    name: 'User Attempting to Use Disabled Domain',
    properties: {
      'event.version': '1.0.0'
    }
  },
  securityOptionToggled: {
    name: 'Security Option Toggle',
    properties: {
      'event.version': '1.0.0'
    }
  },
  sendInitiated: {
    name: 'Send Initiated',
    properties: {
      'event.version': '1.0.0'
    }
  },
  errorApplyingAuthorization: {
    name: 'Error Applying Authorization',
    properties: {
      'event.version': '1.0.0'
    }
  },
  /**
   * vault extension events
   * events are included here and not in the vault-extension repo because
   * the vault extension doesn't have its own background script, so it uses
   * the bp's background script for analytics.
   */
  vaultFeatureRequested: {
    name: 'Vault Feature Requested',
    properties: {
      'event.version': '1.0.0'
    }
  },
  suggestSecureShareModalShown: {
    name: 'BP Attachments - GoTo Secure Share Shown',
    properties: {
      'event.version': '1.0.0'
    }
  },
  accessedSecureShareFromBP: {
    name: 'BP Attachments - User Nav to Secure Share',
    properties: {
      'event.version': '1.0.0'
    }
  }
};
function AnalyticsRouter(router, properties) {
  Guard.checkIsObject(router, 'router');
  this.router = router;
  this.properties = properties;
  this.methods = ['track', 'updateProperties', 'identify'];
  _bindAllMethods(this);
}

/**
 * Singleton for configured analytics.
 *
 * @type {AnalyticsRouter}
 */
let INSTANCE = undefined;
AnalyticsRouter.create = function (router, properties) {
  const analyticsRouter = new AnalyticsRouter(router, properties);
  analyticsRouter._register();
  analyticsRouter._setup();
  return analyticsRouter;
};
AnalyticsRouter.instance = function (router, properties) {
  if (!INSTANCE) {
    INSTANCE = AnalyticsRouter.create(router, properties);
  }
  return INSTANCE;
};
AnalyticsRouter.prototype._register = function () {
  // Handles all routed actions
  this.router.register('analytics-track', this._routeTrack);
  this.router.register('analytics-identify', this._routeIdentify);

  // Handles the query for methods
  this.router.register('analytics-methods', this._analyticsMethods);
};
AnalyticsRouter.prototype._setup = function () {
  for (const event in EVENT_MAP) {
    // eslint-disable-line
    if (Object.hasOwn(EVENT_MAP, event)) {
      const eventName = event;
      this.methods.push(eventName);
      this[event] = this._trackFunc(eventName);
    }
  }
  AnalyticsService = AnalyticsService.instance();
};
AnalyticsRouter.prototype._trackFunc = function (eventName) {
  return function (properties) {
    console.debug(eventName, properties);
    const info = EVENT_MAP[eventName];
    AnalyticsService.track(info.name, Object.assign({}, this.properties, info.properties, properties));
  }.bind(this);
};
AnalyticsRouter.prototype._analyticsMethods = function (req, res) {
  try {
    res.send(null, this.methods);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Handles tracking an event.
 *
 * @param {*} req
 *  @property {*} params - See below
 *    @property {String} method - The method name of the event
 *    @property {*} properties - an object containing all properties
 * @param {*} res
 * @private
 */
AnalyticsRouter.prototype._routeTrack = function (req, res) {
  try {
    // Handle nuances between routers
    const params = req.params ? req.params : req;
    this[params.method].call(this, params.properties, params.context);
    res.send(null);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
AnalyticsRouter.prototype._routeIdentify = function (req, res) {
  try {
    // Handle nuances between routers
    const params = req.params ? req.params : req;
    AnalyticsService.identify(params.properties, params.context);
    res.send(null);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
module.exports = AnalyticsRouter;

/***/ }),

/***/ 76223:
/***/ ((module) => {

module.exports = {
  // The selector that finds the TDF within something we believe to be a
  // secure email
  TDF_SELECTOR: 'div pre:contains("--- START PROTECTED MESSAGE TDF")',
  TDF_METADATA_SELECTOR: 'div pre:contains("Virtru Metadata:")',
  SECURE_MESSAGE: '.virtru-open',
  ANIMATION: '.virtru-animation-widget',
  NESTED_SECURE_MESSAGE: '.virtru-nested-secure-message-default',
  DRAFT_SELECTOR: 'input[name*="virtru-secure-draft"]',
  SENDER_HEADER: 'h3.iw span[email]',
  SENDER_EMAIL_HEADER: 'h3.iw .go',
  TIMESTAMP_HEADER: '.gK .g3',
  METADATA_SELECTOR: 'input[name="virtru-metadata"]',
  // Maximum number of attached files
  ATTACHMENTS_LIMIT: 150,
  MAX_RETRY_COUNT: 5,
  UPLOAD_RETRY_DELAY: 2500,
  START_DECRYPTION: 'starting_decryption',
  DONE_DECRYPTION: 'decryption_done',
  DECRYPTION_ANIMATION_START: 'begin_decryption_animation',
  DECRYPTION_ANIMATION_END: 'end_decryption_animation',
  EXTENSION_KEY: 'BP'
};

/***/ }),

/***/ 77965:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 78982:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 79145:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 79328:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 79368:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 82603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dict = __webpack_require__(96663);
module.exports = dict;

/***/ }),

/***/ 83676:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * polyfills
 */
__webpack_require__(67712);
if (!globalThis.history) {
  globalThis.history = {
    replaceState: () => {}
  };
}

// HTMLAnchorElement polyfill for the Virtru SDK v2.3.4
const isBrowser = typeof window !== 'undefined';
class HTMLAnchorElement {
  constructor() {}
}
if (!isBrowser && !__webpack_require__.g.HTMLAnchorElement) {
  __webpack_require__.g.HTMLAnchorElement = HTMLAnchorElement;
} else if (isBrowser && !window.HTMLAnchorElement) {
  window.HTMLAnchorElement = HTMLAnchorElement;
}

/***/ }),

/***/ 84800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runtime: () => (/* binding */ runtime)
/* harmony export */ });
const runtime = {
  getClientString() {
    var browser = 'chrome';
    var {
      version
    } = chrome.runtime.getManifest();

    // Cut off anything after the patch version.  This allows our alpha and beta channel
    // builds to have 4 levels (to work around limitations on build versioning) and still
    // return the correct client config.  i.e. 7.1.7.24 => 7.1.7 for lookup purposes.
    version = version.split('.').filter((value, index) => value.length !== 0 && index < 3).join('.');
    return `browser_extension_${browser}:${version}`;
  }
};


/***/ }),

/***/ 86476:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 86833:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 88211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const domains = __webpack_require__(64975);
async function refreshTabs(waitForCompose, activateMailTab = true) {
  // Refresh all mail tabs, and activate the the first one found
  let mailTabActive = false;
  const rawTabs = await chrome.tabs.query({});
  rawTabs.forEach(rawTab => {
    if (domains.isMailDomain(rawTab.url)) {
      refreshTab(rawTab, waitForCompose);
      if (!mailTabActive && activateMailTab) {
        chrome.tabs.update(rawTab.id, {
          active: true
        });
        mailTabActive = true;
      }
    }
  });
}

/**
 * Refreshes the tab; conditionally waiting for compose windows to
 * disapear before doing so.  The code will fire every 2 seconds to
 * check whether or not a compose window is shown.
 *
 * @param {*} tab - The current tab
 * @param waitForCompose - True if it should poll until compose windows are gone
 * @returns {void|*}
 */
function refreshTab(tab, waitForCompose) {
  if (!waitForCompose) {
    return chrome.tabs.reload(tab.id, {});
  }
  new Promise(resolve => setTimeout(resolve, 2000))
  // ensure we have latest tab information
  .then(() => chrome.tabs.get(tab.id)).then(latestTab => {
    const parsed = new URL(latestTab.url);
    const hash = (parsed === null || parsed === void 0 ? void 0 : parsed.hash) || '';

    // If a compose window is shown the hash of the URL will contain
    // the word 'compose'.  Don't refresh yet until that goes away.
    if (hash.match('compose=')) {
      refreshTab(latestTab, waitForCompose);
    } else {
      chrome.tabs.reload(latestTab.id, {});
    }
  });
}
module.exports = refreshTabs;

/***/ }),

/***/ 89253:
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
var request = __webpack_require__(50344);
var {
  storage
} = __webpack_require__(43829);
var {
  runtime
} = __webpack_require__(84800);
var {
  AccountsService,
  RulesService,
  SearchKeyService
} = __webpack_require__(58698);
var errors = __webpack_require__(23235);
var ClientConfigService = __webpack_require__(10248);
const SINGLE_ENDPOINT = true;
const options = {
  request,
  features: {
    singleEndpoint: SINGLE_ENDPOINT
  }
};
var APP_STORAGE_PREFIX = '%%%___';
var EXT_SETTINGS_KEY = `${APP_STORAGE_PREFIX}extension`;
var CLIENT_CONFIG_KEY = `${APP_STORAGE_PREFIX}client-config`;
var DEFAULT_EXTENSION_SETTINGS = {
  configVersion: '1',
  acmUrl: 'https://acm.virtru.com',
  accountsUrl: 'https://accounts.virtru.com',
  eventsUrl: 'https://events.virtru.com',
  remoteContentBaseUrl: 'https://secure.virtru.com/start/',
  dashboardUrl: 'https://secure.virtru.com/control-center/',
  checkoutUrl: 'https://secure.virtru.com/checkout/',
  externalSelectors: 'https://cdn.virtru.com/external-selectors/bp',
  apiUrl: 'https://api.virtru.com',
  singleEndpoint: SINGLE_ENDPOINT,
  heartbeatInterval: 60000,
  offlineLeaseTime: 60000,
  logLevel: 'ERROR'
};
var currentUserId;

/**
 * These are the default user settings.  It's a function b/c
 * it's a deep object and we want to make sure to get a fresh
 * copy.
 *
 * @constructor
 */
var DEFAULT_USER_SETTINGS = function () {
  return {
    appIdDomains: {},
    showOnboarding: true,
    onboarding: {
      isActive: true
    },
    firstTime: true,
    permissions: {},
    userSettingsRefreshInterval: 60 * 60000,
    // 60 minute default
    secureSendRules: getSecureSendRules(),
    preferences: {
      sendUsageData: true
    },
    org: {
      data: null
    }
  };
};

// Settings keys that are not secret and can be sent along with metrics for debugging purposes
// Keep this up to date with any changes to user settings
var DEBUG_SETTINGS_KEYS = ['acmUrl', 'accountsUrl', 'eventsUrl', 'remoteContentBaseUrl', 'dashboardUrl', 'checkoutUrl', 'heartbeatInterval', 'offlineLeaseTime', 'logLevel', 'showOnboarding', 'onboarding', 'firstTime', 'permissions', 'userSettingsRefreshInterval', 'preferences', 'org'];

// This is the master settings object that holds everything
var settings = null;
var accountsService = AccountsService.setup(options);
var rulesService = RulesService.setup(options);
var searchKeyService = SearchKeyService.setup(options);
let resolveInit;
let rejectInit;
// this initializedPromise used for testing purposes
const initializedPromise = new Promise((resolve, reject) => {
  resolveInit = resolve;
  rejectInit = reject;
});
var clientConfigService;
/**
 * Initializes the settings object
 */
function initializeSettings() {
  storage.all().then(allSettings => {
    settings = allSettings;
    initializeDefaultSettings();

    // Set up the client configuration service
    const optionsLoc = {
      defaultConfig: settings[CLIENT_CONFIG_KEY] || undefined
    };
    clientConfigService = ClientConfigService.create(accountsService, module.exports, optionsLoc);
    resolveInit();
  }).catch(err => {
    console.log('Settings couldn\'t be loaded...');
    console.log(err);
    rejectInit();
  });
}
initializeSettings();
const mergeSettings = (defaultSettings, extensionSettings) => {
  // If setting versions are not equal extension settings should be overridden be default ones

  if (defaultSettings.configVersion !== extensionSettings.configVersion) {
    return Object.assign({}, extensionSettings, defaultSettings);
  }
  return Object.assign({}, defaultSettings, extensionSettings);
};
function initializeDefaultSettings() {
  // Make sure non-existent properties are added in
  const extensionSettings = settings[EXT_SETTINGS_KEY] || {};
  settings[EXT_SETTINGS_KEY] = mergeSettings(DEFAULT_EXTENSION_SETTINGS, extensionSettings);
  storage.set(EXT_SETTINGS_KEY, settings[EXT_SETTINGS_KEY]);
  applyExtensionToUserSettings();
}
var EXTENSION_SETTINGS_OVERRIDE = ['acmUrl', 'accountsUrl', 'checkoutUrl', 'eventsUrl', 'dashboardUrl', 'remoteContentBaseUrl', 'logLevel'];

/**
 * Iterates through the extension settings and applies each one to the user settings.
 */
function applyExtensionToUserSettings() {
  var extensionSettings = settings[EXT_SETTINGS_KEY];
  Object.entries(settings).forEach(([key, value]) => {
    // Filter out:
    // 1. Built in application storage keys
    // 2. String type keys, these are used for CKS
    // @TODO: Move users under a `user` key so we don't have to do dumb shit like this
    if (key.startsWith(APP_STORAGE_PREFIX) || typeof value === 'string') {
      return;
    }
    EXTENSION_SETTINGS_OVERRIDE.forEach(item => {
      value[item] = extensionSettings[item];
    });
    storage.set(key, value);
  });
}
class UserDoesNotExist extends Error {
  constructor(message) {
    super(message);
    this.type = 'UserDoesNotExist';
  }
}
function connectOptions(userId, opts) {
  opts = opts || {};
  const extensionSettings = settings[EXT_SETTINGS_KEY];
  userId = userId || currentUserId;
  var connectOpts = {
    clientString: runtime.getClientString(),
    accountsUrl: extensionSettings.accountsUrl,
    mainAcmUrl: extensionSettings.acmUrl,
    eventsUrl: extensionSettings.eventsUrl,
    remoteContentBaseUrl: extensionSettings.remoteContentBaseUrl,
    dashboardUrl: extensionSettings.dashboardUrl,
    apiUrl: extensionSettings.apiUrl,
    singleEndpoint: SINGLE_ENDPOINT,
    userId
  };
  if (opts.addAppIdDomains) {
    connectOpts.appIdDomains = getUserSettings(userId).appIdDomains || {};
  }
  return connectOpts;
}

/**
 * Gets user settings from the server
 *
 * @param userId
 * @returns {Promise} Extended userSettings with defaults applied
 */
function getUserSettingsFromServer(userId) {
  currentUserId = userId;
  var opts = connectOptions(userId, {
    addAppIdDomains: true
  });
  var localSettings = settings[userId];
  return new Promise((resolve, reject) => {
    // fetch the client config first to make sure we have up to date feature flags
    clientConfigService.refresh()
    // it's okay if we fail on this request, proceed as planned anyway
    .finally(() => {
      accountsService.getUserSettings(opts).then(userSettings => {
        if (!userSettings || typeof userSettings !== 'object') {
          const message = `Invalid userSettings returned from server: ${userSettings}`;
          throw new errors.InvalidUserSettings(message);
        }

        // Merge in the default settings always to ensure all settings
        // are in the object and defaulted
        var settingsLoc = Object.assign({}, DEFAULT_EXTENSION_SETTINGS, DEFAULT_USER_SETTINGS(), localSettings, userSettings[0]);
        settingsLoc.preferences = Object.assign({}, DEFAULT_USER_SETTINGS().preferences, userSettings[0].preferences);
        settingsLoc.orgSettings = Object.assign({}, userSettings[0].orgSettings);

        // Set the client configuration
        settingsLoc.clientConfig = clientConfigService.getClientConfig() || {};

        // Set trialEndDate to false if it no longer exists
        if (!userSettings[0].trialEndDate) {
          settingsLoc.trialEndDate = null;
        }
        resolve(settingsLoc);
      }).catch(err => {
        if (!localSettings) {
          // local cache DOES NOT exist for this user, so this is a true failure
          return reject(err);
        }
        // local cache EXISTS for this user, so fallback and resolve with those to avoid 2014 error
        console.error('Error retrieving latest user settings from server, falling back to local cache:', err);
        resolve(localSettings);
      });
    });
  });
}
function getRulesFromServer(userId) {
  var opts = connectOptions(userId, {
    addAppIdDomains: true
  });
  return rulesService.getDlpPolicy(opts).then(function (dlp) {
    return dlp;
  });
}
function setUserSettingsOnServer(userId, settingsObj) {
  var opts = connectOptions(userId, {
    addAppIdDomains: true
  });
  // Filter preferences that should not be sent to server
  delete settingsObj.preferences.secureMode;
  delete settingsObj.preferences.previousSecureMode;
  accountsService.updateUserSettings(settingsObj.preferences, opts);
}
/**
 * Get the user settings
 *
 * @param {String} userId The user identifier (usually just an email address)
 */
function getUserSettings(userId) {
  // Merge in the default settings always to ensure all settings
  // are in the object and defaulted
  var userSettings = settings[userId];
  var merged = Object.assign({}, DEFAULT_EXTENSION_SETTINGS, DEFAULT_USER_SETTINGS(), userSettings);
  merged.preferences = Object.assign({}, DEFAULT_USER_SETTINGS().preferences, merged.preferences);

  /*
   * WARN: Do not remove this (at least several months)
   * It is required, because some of our old app id bundles does not have api.virtru.com in appIdDomains
   * See RCA for additional details: https://docs.google.com/document/d/1zJT6MTQVYNh7RBMSLEwaISfrug7KnHlIKgnrvytsa1w/edit
   */
  const apiDomain = merged.apiUrl.replace('https://', '');
  if (!merged.appIdDomains[apiDomain]) {
    const appIdBundle = merged.appIdBundle && merged.appIdBundle.appId;
    const appIdBundleFallback = merged.appIdDomains && Object.values(merged.appIdDomains)[0]; // take first if there is any

    merged.appIdDomains[apiDomain] = appIdBundle || appIdBundleFallback;
  }
  return merged;
}
function getExtensionSettings() {
  return Object.assign({}, settings[EXT_SETTINGS_KEY]);
}

/**
 * Get or create user settings
 *
 * @param {String} userId The user identifier
 */
function getOrCreateUserSettings(userId) {
  // make sure settings exists for user
  if (!settings[userId]) {
    settings[userId] = initializeUserSettings(userId);
  }
  return getUserSettings(userId);
}

/**
 * Initialize default settings for a given user
 *
 * @param {String} userId The user identifier
 */
function initializeUserSettings(userId) {
  const initialSettings = Object.assign({}, DEFAULT_USER_SETTINGS());
  const extensionSettings = settings[EXT_SETTINGS_KEY];

  // Set the initial ACM urls to what's stored in the extension settings
  initialSettings.acmUrl = extensionSettings.acmUrl;
  initialSettings.accountsUrl = extensionSettings.accountsUrl;
  initialSettings.eventsUrl = extensionSettings.eventsUrl;
  initialSettings.remoteContentBaseUrl = extensionSettings.remoteContentBaseUrl;
  initialSettings.dashboardUrl = extensionSettings.dashboardUrl;
  initialSettings.apiUrl = extensionSettings.apiUrl;
  initialSettings.singleEndpoint = SINGLE_ENDPOINT;

  // NOTE: this is not guaranteed to be synchronous!
  // TODO: promisify everything that saves to storage
  storage.set(userId, initialSettings).catch(console.log);
  return initialSettings;
}

/**
 * Update the user settings
 *
 * @param {String} userId The user identifier (usually just an email address)
 * @param {Object} settingsPatch Data to add to the settings
 */
function updateUserSettings(userId, settingsPatch) {
  console.debug(`Updating user settings... - ${new Date().toISOString()}`);

  // Pull current user settings
  var currentSettings = settings[userId];
  if (currentSettings === undefined) {
    var message = `User "${userId}" does not exist`;
    throw new UserDoesNotExist(message);
  }
  settingsPatch.singleEndpoint = SINGLE_ENDPOINT;
  var updatedSettings = Object.assign(currentSettings, settingsPatch);

  // Sometimes this sneaky little bastard gets saved back to the settings storage...
  delete updatedSettings.error;
  delete updatedSettings.clientConfig;
  storage.set(userId, updatedSettings);
}

/**
 * Save the user settings to the server
 *
 * @param {String} userId The user identifier (usually just an email address)
 * @param {Object} settingsPatch Data to add to the settings
 */
function saveToServer(userId) {
  console.info(`Saving user settings to server... - ${new Date().toISOString()}`);

  // Pull current user settings
  var currentSettings = settings[userId];
  if (currentSettings === undefined) {
    var message = `User "${userId}" does not exist`;
    throw new UserDoesNotExist(message);
  }

  // Update settings on the database
  setUserSettingsOnServer(userId, currentSettings);
}

/**
 * Get all the users
 */
function allUserSettings() {
  var users = {};
  // Aggregate all the users
  Object.entries(settings).forEach(([key, value]) => {
    // If the item starts with the app storage prefix then it is not user
    // settings
    if (key.startsWith(APP_STORAGE_PREFIX)) {
      return;
    }
    users[key] = value;
  });
  return users;
}

/**
 * Clears all storage.
 * @returns {*}
 */
function clear() {
  settings = {};
  return storage.clear().then(function success() {
    initializeDefaultSettings();
  });
}

/**
 * Updates the client config settings saved from the last call
 * @param clientConfig
 * @returns {*}
 */
function updateClientConfigSettings(clientConfig) {
  // Patch update the extension settings
  settings[CLIENT_CONFIG_KEY] = clientConfig;
  return storage.set(CLIENT_CONFIG_KEY, settings[CLIENT_CONFIG_KEY]);
}
function updateRules(userId, dlp) {
  var opts = connectOptions(userId, {
    addAppIdDomains: true
  });
  return new Promise((resolve, reject) => {
    rulesService.updateDlpPolicy(opts, dlp).then(function success(response) {
      resolve(response);
    }).catch(function error(err) {
      reject(err);
    });
  });
}

/**
 * Returns a set of rules that will force secure mode to be enabled when composing an email
 * Currently only the senderDomains object is supported. All other properties will be ignored and are ther
 * just as a placeholder.
 * Also, this structure of this object my change when we completely flesh out this functionality
 */

function getSecureSendRules() {
  return {
    senderDomains: {
      secureOnly: [],
      secureDefault: [],
      nonSecureDefault: []
    },
    recipientDomains: {
      secureOnly: [],
      secureDefault: [],
      nonSecureDefault: []
    },
    words: {
      secureOnly: [],
      secureDefault: [],
      nonSecureDefault: []
    }
  };
}
function getSearchKeyFromServer(userId) {
  var opts = connectOptions(userId, {
    addAppIdDomains: true
  });
  return searchKeyService.getOrgSearchKey(opts).then(function getSearchKeySuccess(res) {
    return res.key;
  });
}
module.exports = exports = {
  initializedPromise,
  all: allUserSettings,
  get: getUserSettings,
  getOrCreate: getOrCreateUserSettings,
  update: updateUserSettings,
  saveToServer,
  getUserSettingsFromServer,
  updateClientConfigSettings,
  getExtensionSettings,
  connectOptions,
  getSecureSendRules,
  updateRules,
  getRulesFromServer,
  getSearchKeyFromServer,
  mergeSettings,
  clear,
  DEBUG_SETTINGS_KEYS
};

/***/ }),

/***/ 90781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(31799);
var {
  runtime
} = __webpack_require__(84800);
var {
  storage
} = __webpack_require__(43829);
var {
  AnalyticsService
} = __webpack_require__(21279);
var Utils = __webpack_require__(55675);
var settings = __webpack_require__(89253);
const {
  _bindAllMethods
} = __webpack_require__(4424);

// 7 days
const PROFILE_CACHE_DURATION = 1000 * 60 * 60 * 24 * 7;
const PROFILE_CACHE_PREFIX = 'profile-';

/**
 * Constructor for the Command object that processes loading
 * a users profile.
 *
 * @param userId
 * @param res
 * @constructor
 */
function LoadUserProfile(userId, res) {
  this.res = res;
  this.userId = userId;
  this.profile = {
    settings: {},
    auth: {
      permissions: {}
    },
    clientString: runtime.getClientString(),
    createdDate: Date.now()
  };
  _bindAllMethods(this);
}
LoadUserProfile.process = async function (req, res) {
  var userId = req.params.userId.toLowerCase();
  var loadUserProfile = new LoadUserProfile(userId, res);
  var userSettings = settings.getOrCreate(userId);
  try {
    var _profile$settings, _profile$settings$per, _profile$settings2, _profile$settings2$pe;
    let didFetchProfile = false;
    try {
      // Attempt to fetch profile from server and cache it if successful
      await _retryPromiseFunction(() => loadUserProfile.execute(userSettings), 1000, 10);
      await _saveToChromeStorage(PROFILE_CACHE_PREFIX + userId, loadUserProfile.profile);
      didFetchProfile = true;
    } catch (e) {
      console.error('Could not cache user profile', e);
    }

    // Pull the user profile from cache, but only use it if it's less than a week old
    const profile = await _loadFromChromeStorage(PROFILE_CACHE_PREFIX + userId);
    if (Date.now() - profile.createdDate > PROFILE_CACHE_DURATION) {
      throw new Error('Cached profile too old');
    }

    // Abort if we don't have a fresh profile, and we don't have permission in any cached profile
    if (!didFetchProfile && !Utils.isFeatureEnabled(profile, 'canUseOffline')) {
      throw new Error('User does not have permission to use profile offline');
    }
    let environment = /acm-([^.]+)(?=\.)/g.exec(userSettings.acmUrl);
    environment = environment ? environment[1] : '';
    const manifest = chrome.runtime.getManifest();
    AnalyticsService.instance().identify({
      userId,
      canSearchEncryptedEmails: (profile === null || profile === void 0 ? void 0 : (_profile$settings = profile.settings) === null || _profile$settings === void 0 ? void 0 : (_profile$settings$per = _profile$settings.permissions) === null || _profile$settings$per === void 0 ? void 0 : _profile$settings$per.canSearchEncryptedEmails) || false,
      canIndexEncryptedEmails: (profile === null || profile === void 0 ? void 0 : (_profile$settings2 = profile.settings) === null || _profile$settings2 === void 0 ? void 0 : (_profile$settings2$pe = _profile$settings2.permissions) === null || _profile$settings2$pe === void 0 ? void 0 : _profile$settings2$pe.canIndexEncryptedEmails) || false,
      pluginName: manifest && manifest.name,
      pluginVersion: manifest && manifest.version,
      pluginEnvironment: environment
    }, {});
    // signal to the content script that we are finished
    res.send(null, profile);
  } catch (err) {
    // Add more contextual details to the error message for better debugging
    // Avoid sending the actual user settings which can have secrets
    // Note: don't worry about deep cloning objects because postMessage will do that
    var serializedError = Object.assign(Utils.formatForTransport(err), {
      contextSnapshot: {
        connectOptions: settings.connectOptions(userId),
        userSettings: settings.DEBUG_SETTINGS_KEYS.reduce((prev, next) => {
          prev[next] = userSettings[next];
          return prev;
        }, {})
      },
      // If we know the user is an active sender, show a modal to inform them the plugin has broke
      doShowErrorMessageModal: userSettings.permissions && userSettings.permissions.canCreatePolicies
    });
    console.error(serializedError);
    res.send(serializedError);
  }
};
LoadUserProfile.prototype.execute = function (userSettings) {
  const {
    userId
  } = this;
  const appId = _selectAppId(userSettings.appIdDomains, userSettings.acmUrl);
  // Start building the profile to return
  this.profile.settings = userSettings;

  // Before we fetch user settings, make sure we are activated
  // No app id generally means we need to activate
  if (userSettings.appIdDomains === undefined || appId === undefined) {
    return this.processUserSettings(userSettings);
  }
  return settings.getUserSettingsFromServer(userId, appId)
  // DO NOT CHANGE THE ORDER OF THIS CODE.  See Zack first.
  .then(this.processUserSettings).then(this.doRequiredSettingsOverrides)
  // NOTE: the following requests may fail, but they are not as important
  .then(this.getRules).then(this.getSearchKey);
};

/**
 * Performs any overrides needed on the user settings.
 *
 * @param userSettings
 * @returns {*}
 */
LoadUserProfile.prototype.doRequiredSettingsOverrides = function (userSettings) {
  return new Promise(resolve => {
    // Cache the existing profile settings. We don't want to half-set the URLs in the case of an exception
    var profileCache = JSON.parse(JSON.stringify(this.profile.settings));
    try {
      this.alterRemoteContentURLs(userSettings);
    } catch (e) {
      AnalyticsService.instance().track('Client Error', {
        userId: this.userId,
        context: 'alterRemoteContentURLs',
        error_obj: e
      });

      // Reset the profile settings to what they were before if we encounter an exception
      this.profile.settings = profileCache;
    } finally {
      resolve();
    }
  });
};

/**
*
* Since the profile loading process uses an existing environment configuration and merges it with
* another from the server, we want to go back now and write over the desired URLs to what's returned
* as a single value (e.g., secureAppsBaseUrl) in the response.
*
* @param userSettings
* @returns {*}
*/
LoadUserProfile.prototype.alterRemoteContentURLs = function (userSettings) {
  if (userSettings && userSettings.secureAppsBaseUrl) {
    var newURLStart = userSettings.secureAppsBaseUrl;

    // In the event that the new url contains a trailing '/', remove it
    newURLStart = newURLStart.substr(-1) === '/' ? newURLStart.slice(0, -1) : newURLStart;
    this.profile.settings = this.profile.settings || {};
    this.profile.settings.remoteContentBaseUrl = processURLString(this.profile.settings.remoteContentBaseUrl);
    this.profile.settings.dashboardUrl = processURLString(this.profile.settings.dashboardUrl);
    this.profile.settings.checkoutUrl = processURLString(this.profile.settings.checkoutUrl);
  }

  // Instead of hardcoding the paths <url>/start, <url>/dashboard etc., pull them out of the loaded user profile
  // This way if they change in the future we don't need to update this
  function processURLString(originalURL) {
    return originalURL && newURLStart ? newURLStart + '/' + originalURL.split('/')[3] : originalURL; // eslint-disable-line
  }
};

/**
 * Processes the raw response from the server.
 *
 * @param userSettings
 */
LoadUserProfile.prototype.processUserSettings = function (userSettings) {
  // Update auth status based on the given user settings
  if (userSettings.error) {
    // .. otherwise set this to empty to signify that we need to activate..
    // Leaving this code expanded b/c it's more explicit what's going on..
    var status = '';
    if (userSettings.error.name === 'InvalidCredentialComboError') {
      console.log('InvalidCredentialComboError, treating as expired.');
      status = 'expired';
    } else if (userSettings.error.name === 'MalformedAuthorizationHeaderError') {
      console.log('MalformedAuthorizationHeaderError, treating as new.');
      status = 'new';
    } else {
      console.log('Not sure what happened.. treating as new', userSettings.error);
      status = 'new';
    }
    this.profile.auth = {
      status
    };
  } else if (userSettings.appIdBundle) {
    this.profile.auth = {
      status: userSettings.appIdBundle.state
    };
  } else if (!userSettings.firstTime) {
    // activation is expired because user has previously activated
    this.profile.auth = {
      status: 'expired'
    };
  } else {
    // Default to 'new' activation
    this.profile.auth = {
      status: 'new'
    };
  }
  userSettings.permissions = Object.assign({
    canCreatePolicies: true,
    canDisableForwardingOwnedPolicies: false,
    canToggleNoAuth: false,
    canCreateNoAuthPolicies: false,
    canRevokeOwnedPolicies: false,
    canExpireOwnedPolicies: false,
    canUseSms2Fa: false,
    canAccessDashboardEmailsTab: false,
    canAccessDashboardFilesTab: false,
    canUseVirtru: true
  }, userSettings.permissions);

  // If there is a local copy of `secureMode` set but no copy from the server, assign the value to `previousVirtruState`
  // and delete the local copy of `secureMode`. This is keep the existing behavior of Virtru.
  if (this.profile.settings.preferences.secureMode !== undefined && userSettings.preferences.secureMode === undefined) {
    this.profile.settings.preferences.previousVirtruState = this.profile.settings.preferences.secureMode;
    delete this.profile.settings.preferences.secureMode;
  }
  userSettings.preferences = Object.assign(this.profile.settings.preferences, userSettings.preferences);

  // Merge local settings with server settings
  this.profile.settings = Object.assign(this.profile.settings, userSettings);
  this.profile.settings.secureSendRules = settings.getSecureSendRules();
  if (this.profile.settings.error) {
    // Sometimes this sneaky little bastard gets saved back to the settings storage...
    delete this.profile.settings.error;
  }

  // Update user settings with what's on the server
  settings.update(this.userId, this.profile.settings);
  return Promise.resolve(userSettings);
};

/**
 * Retrieves rules for the user.
 *
 * ** This should be done AFTER activation status is resolved.
 *
 * @returns {*}
 */
LoadUserProfile.prototype.getRules = function () {
  const {
    userId
  } = this.profile.settings;
  return new Promise(resolve => {
    // Only grab rules if they're active
    if (this.profile.auth.status === 'active') {
      const appId = _selectAppId(this.profile.settings.appIdDomains, this.profile.settings.acmUrl);
      if (appId) {
        settings.getRulesFromServer(userId).then(dlp => {
          this.profile.settings.dlp = dlp;
        }).catch(() => {}).finally(() => {
          resolve(this.profile.settings.dlp);
        });
      } else {
        console.warn('No appId found, no rules fetched');
        resolve();
      }
    } else {
      console.warn('Auth status not active, no rules fetched');
      resolve();
    }
  });
};

/**
 * Request and store the org's search key
 */
LoadUserProfile.prototype.getSearchKey = function () {
  return new Promise(resolve => {
    const {
      hasSearchKey,
      permissions = {}
    } = this.profile.settings;
    const {
      canIndexEncryptedEmails,
      canSearchEncryptedEmails
    } = permissions;
    const appId = _selectAppId(this.profile.settings.appIdDomains, this.profile.settings.acmUrl);
    const {
      userId
    } = this.profile.settings;

    // WS-4695: Delete search key if hasSearchKey is false
    if (!hasSearchKey) {
      delete this.profile.settings.searchKey;
    }
    // Only fetch the search key if they're active, have search permissions, and
    // a search key exists on their org.
    if (appId && this.profile.auth.status === 'active' && hasSearchKey && (canIndexEncryptedEmails || canSearchEncryptedEmails)) {
      // NOTE: this is a bluebird promise! Unlike many of the other promises used.
      settings.getSearchKeyFromServer(userId).then(searchKey => {
        this.profile.settings.searchKey = searchKey;
      }).catch(() => {}).finally(() => {
        resolve(this.profile.settings.searchKey);
      });
    } else {
      console.warn('No appId found, no search key fetched');
      resolve();
    }
  });
};
async function _loadFromChromeStorage(key) {
  const value = await storage.get([key]);
  return value;
}
async function _saveToChromeStorage(key, obj) {
  await storage.set(key, obj);
}

// Retries a function that returns a promise at a given interval, up to the number of tries
function _retryPromiseFunction(promiseFunction, interval, numRetries) {
  //eslint-disable-line
  return new Promise(function (resolve, reject) {
    (function _executePromiseFunction() {
      promiseFunction().then(ret => {
        resolve(ret);
      }).catch(err => {
        if (--numRetries <= 0) {
          reject(err);
        } else {
          console.error('Promise rejected, retrying. Number of tries left:', numRetries);
          setTimeout(_executePromiseFunction, interval);
        }
      });
    })();
  });
}

/**
 * Utility function to create an app id selector.
 */
function _selectAppId(appIdDomains, acmUrl) {
  if (appIdDomains === undefined) {
    return undefined;
  }
  var {
    hostname: domain
  } = new URL(acmUrl);
  return appIdDomains[domain];
}
module.exports = LoadUserProfile;

/***/ }),

/***/ 91464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aws4": 87807,
	"./aws4.js": 87807,
	"./plain": 47346,
	"./plain.js": 47346
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 91464;

/***/ }),

/***/ 92668:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 93139:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 96663:
/***/ ((__unused_webpack_module, exports) => {

/**
 * dict.js
 *
 * Provides a dictionary that can use any object as a key
 */
function Dict(initial) {
  this._keys = [];
  this._values = [];
  if (initial !== undefined) {
    this._setupInitial(initial);
  }
}
Dict.prototype._setupInitial = function (initial) {
  var keys = this._keys;
  var values = this._values;
  if (initial.length === undefined) {
    for (var key in initial) {
      keys.push(key);
      values.push(initial[key]);
    }
  } else {
    for (var i = 0; i < initial.length; i++) {
      var tuple = initial[i];
      keys.push(tuple[0]);
      values.push(tuple[1]);
    }
  }
};
Dict.prototype.get = function (key) {
  var index = this._keys.indexOf(key);
  if (index === -1) {
    return undefined;
  }
  return this._values[index];
};
Dict.prototype.set = function (key, value) {
  var keys = this._keys;
  var values = this._values;
  var existingIndex = keys.indexOf(key);
  if (existingIndex !== -1) {
    values[existingIndex] = value;
  } else {
    keys.push(key);
    values.push(value);
  }
};
Dict.prototype.has = function (key) {
  return this._keys.indexOf(key) !== -1;
};
Dict.prototype.toArray = function () {
  var keys = this._keys;
  var values = this._values;
  var newArray = [];
  for (var i = 0; i < keys.length; i++) {
    newArray.push([keys[i], values[i]]);
  }
  return newArray;
};
Dict.prototype.del = function (key) {
  var keys = this._keys;
  var values = this._values;
  var index = keys.indexOf(key);
  if (index === -1) {
    return;
  }
  keys.splice(index, 1);
  values.splice(index, 1);
};
Dict.prototype.pop = function (key) {
  var keys = this._keys;
  var values = this._values;
  var index = keys.indexOf(key);
  if (index === -1) {
    return undefined;
  }
  keys.splice(index, 1);
  var valueArray = values.splice(index, 1);
  return valueArray[0];
};
Dict.prototype.length = function () {
  return this._keys.length;
};
Dict.prototype.popitem = function () {
  var key = this._keys.pop();
  var value = this._values.pop();
  if (!key) {
    return undefined;
  }
  return [key, value];
};
exports.Dict = Dict;

/***/ }),

/***/ 99776:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en-au": 69300,
	"./en-au.js": 69300,
	"./en-ca": 91174,
	"./en-ca.js": 91174,
	"./en-gb": 58199,
	"./en-gb.js": 58199,
	"./en-ie": 7516,
	"./en-ie.js": 7516,
	"./en-il": 39531,
	"./en-il.js": 39531,
	"./en-in": 48493,
	"./en-in.js": 48493,
	"./en-nz": 85070,
	"./en-nz.js": 85070,
	"./en-sg": 58304,
	"./en-sg.js": 58304,
	"./fr": 86078,
	"./fr-ca": 91959,
	"./fr-ca.js": 91959,
	"./fr-ch": 89384,
	"./fr-ch.js": 89384,
	"./fr.js": 86078,
	"./ja": 81375,
	"./ja.js": 81375,
	"./sv": 48279,
	"./sv.js": 48279
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 99776;

/***/ }),

/***/ 99777:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 99928:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 471;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			471: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvirtru_browser_extension"] = self["webpackChunkvirtru_browser_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [99], () => (__webpack_require__(9115)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;