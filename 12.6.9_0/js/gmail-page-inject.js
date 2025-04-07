/******/ (() => { // webpackBootstrap
/**
 * Shortcut for using chrome extension urls
 */
function cxURL(path) {
  return chrome.runtime.getURL(path);
}
function virtruInjectScripts(scriptURLs) {
  var currentIndex = 0;
  var finalIndex = scriptURLs.length;
  var documentEl = document.head || document.documentElement;
  var loadScript = function () {
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = cxURL(scriptURLs[currentIndex]);
    documentEl.appendChild(newScript);
    currentIndex += 1;
    if (currentIndex != finalIndex) {
      newScript.onload = function () {
        loadScript();
      };
    }
  };
  loadScript();
}
var scriptUrls = ['js/gmail-all-vendors.js', 'js/gmail-page.js'];
virtruInjectScripts(scriptUrls);
/******/ })()
;