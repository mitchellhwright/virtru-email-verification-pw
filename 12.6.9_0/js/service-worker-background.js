/******/ (() => { // webpackBootstrap
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
// In manifest background.service_worker should be a single file.
// We need to combine node_modules (vendors file) and background script so service worker could run correctly.
if (!globalThis.window) {
  globalThis.window = globalThis;
}
importScripts(chrome.runtime.getURL('js/gmail-all-vendors.js'));
importScripts(chrome.runtime.getURL('js/background.js'));
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
// Import script in the background script
importScripts(chrome.runtime.getURL('js/vault-vendors.js'));
importScripts(chrome.runtime.getURL('js/vault-background.js'));
})();

/******/ })()
;