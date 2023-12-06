/// no-redirect-imgur.js
/// alias noredirect.js
/**
 * @example
 * imgur.io##+js(noredirect)
 */
(function() {
    "use strict";
    if (window.location.hostname === "imgur.io") {
        alert("Script running on imgur.io");
        // Alternatively, you can redirect to a specific page or show a message
        // window.location.href = "https://imgur.io/some-safe-page";
        // alert("Redirection to imgur.com has been blocked!");
    }
})();
