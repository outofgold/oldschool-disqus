// ==UserScript==
// @name         Oldschool Disqus
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Bring back the old design of Disqus comments
// @author       outofgold
// @match        https://disqus.com/embed/comments/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=disqus.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/outofgold/oldschool-disqus/master/dist/disqus.user.js
// @downloadURL  https://raw.githubusercontent.com/outofgold/oldschool-disqus/master/dist/disqus.user.js
// ==/UserScript==

(function () {
    'use strict';

    const waitForElement = (selector) => new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

    waitForElement('link[rel="stylesheet"][href^="https://c.disquscdn.com/next/embed/styles/lounge"]')
        .then((element) => {
            element.remove();

            document.head.appendChild(
                Object.assign(document.createElement('style'), { innerHTML: css })
            );
        });
})();
