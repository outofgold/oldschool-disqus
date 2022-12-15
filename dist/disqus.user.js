// ==UserScript==
// @name         Oldschool Disqus
// @namespace    http://tampermonkey.net/
// @version      0.1.5
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

const css = "/* Default Disqus styles */\n" +
".dropdown-menu, ol, ul {\n" +
"    list-style: none\n" +
"}\n" +
"\n" +
".btn-default, .dropdown, .follow-btn, sub, sup {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".clearfix:after, .clearfix:before, .input-label:after, blockquote:after, blockquote:before, q:after, q:before {\n" +
"    content: \"\"\n" +
"}\n" +
"\n" +
".actions:after, .audiencesync:after, .auth-section:after, .badges-form .badges-action:after, .badges-form .moderate:after, .children .post:after, .clearfix:after, .comment-footer__menu:after, .dropdown-menu a, .dropdown-menu--refresh a, .media:after, .moderate-form .badges-action:after, .moderate-form .moderate:after, .nav:after, .no-flexbox .align:after, .notice:after, .post-content .post-body .media-activated .media-content-placeholder, .post-content .post-menu:after, .post-content .post-message:after, .post-content footer, .post-content:after, .post-list .post:after, .row:after, .services:after, .sso__button.no-image, .textarea-outer-wrapper .textarea-wrapper:after, .tooltip__actions:after, .tooltip__footer:after {\n" +
"    clear: both\n" +
"}\n" +
"\n" +
"body, html {\n" +
"    margin: 0;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
"a, abbr, acronym, address, blockquote, button, caption, cite, code, dd, del, dfn, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, img, label, legend, li, ol, p, pre, q, s, samp, small, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    border: 0;\n" +
"    font-weight: 400;\n" +
"    font-style: normal;\n" +
"    font-size: 100%;\n" +
"    line-height: 1;\n" +
"    font-family: inherit\n" +
"}\n" +
"\n" +
"table {\n" +
"    border-collapse: collapse;\n" +
"    border-spacing: 0\n" +
"}\n" +
"\n" +
"html {\n" +
"    overflow-y: scroll;\n" +
"    font-size: 100%;\n" +
"    -webkit-text-size-adjust: 100%;\n" +
"    -ms-text-size-adjust: 100%;\n" +
"    text-size-adjust: 100%\n" +
"}\n" +
"\n" +
"a:active, a:hover {\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
"article, aside, details, figcaption, figure, footer, header, hgroup, nav, section {\n" +
"    display: block\n" +
"}\n" +
"\n" +
"audio, canvas, video {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
"audio:not([controls]) {\n" +
"    display: none\n" +
"}\n" +
"\n" +
"sub, sup {\n" +
"    font-size: 75%;\n" +
"    line-height: 0;\n" +
"    vertical-align: baseline\n" +
"}\n" +
"\n" +
"sup {\n" +
"    top: -.5em\n" +
"}\n" +
"\n" +
"sub {\n" +
"    bottom: -.25em\n" +
"}\n" +
"\n" +
"img {\n" +
"    border: 0;\n" +
"    -ms-interpolation-mode: bicubic\n" +
"}\n" +
"\n" +
"button, input, select, textarea {\n" +
"    font-size: 100%;\n" +
"    margin: 0;\n" +
"    vertical-align: baseline\n" +
"}\n" +
"\n" +
"button, input {\n" +
"    line-height: normal\n" +
"}\n" +
"\n" +
"button::-moz-focus-inner, input::-moz-focus-inner {\n" +
"    border: 0;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
"button, input[type=button], input[type=reset], input[type=submit] {\n" +
"    cursor: pointer;\n" +
"    -webkit-appearance: button\n" +
"}\n" +
"\n" +
"input[type=search] {\n" +
"    -webkit-appearance: textfield;\n" +
"    box-sizing: content-box\n" +
"}\n" +
"\n" +
"input[type=search]::-webkit-search-decoration {\n" +
"    -webkit-appearance: none\n" +
"}\n" +
"\n" +
"textarea {\n" +
"    overflow: auto;\n" +
"    vertical-align: top\n" +
"}\n" +
"\n" +
".clearfix:after, .clearfix:before {\n" +
"    display: table;\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".hide-text {\n" +
"    font: 0/0 a;\n" +
"    color: transparent;\n" +
"    text-shadow: none;\n" +
"    background-color: transparent;\n" +
"    border: 0\n" +
"}\n" +
"\n" +
".btn-default, .follow-btn, body {\n" +
"    line-height: 20px\n" +
"}\n" +
"\n" +
".btn, .btn-default {\n" +
"    border: none;\n" +
"    text-shadow: none\n" +
"}\n" +
"\n" +
".input-block-level {\n" +
"    display: block;\n" +
"    width: 100%;\n" +
"    min-height: 30px;\n" +
"    box-sizing: border-box\n" +
"}\n" +
"\n" +
"body {\n" +
"    margin: 0;\n" +
"    background-color: #fff\n" +
"}\n" +
"\n" +
"a {\n" +
"    text-decoration: none\n" +
"}\n" +
"\n" +
".hide {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".btn-block, .show {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".affix {\n" +
"    position: fixed\n" +
"}\n" +
"\n" +
".btn {\n" +
"    margin-bottom: 0;\n" +
"    font-size: 14px;\n" +
"    text-align: center;\n" +
"    vertical-align: middle;\n" +
"    cursor: pointer;\n" +
"    background-color: #f5f5f5;\n" +
"    background-image: linear-gradient(to bottom, #fff, #e6e6e6);\n" +
"    background-repeat: repeat-x;\n" +
"    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n" +
"    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .2), 0 1px 2px rgba(0, 0, 0, .05)\n" +
"}\n" +
"\n" +
".btn.active, .btn.disabled, .btn:active, .btn:hover, .btn[disabled] {\n" +
"    color: #656c7a;\n" +
"    background-color: #e6e6e6\n" +
"}\n" +
"\n" +
".btn.active, .btn:active {\n" +
"    background-color: #ccc \\9\n" +
"}\n" +
"\n" +
".btn:hover {\n" +
"    color: #656c7a;\n" +
"    text-decoration: none;\n" +
"    background-color: #e6e6e6;\n" +
"    background-position: 0 -15px;\n" +
"    transition: background-position .1s linear\n" +
"}\n" +
"\n" +
".btn:focus {\n" +
"    outline: Highlight auto 5px;\n" +
"    outline: -webkit-focus-ring-color auto 5px;\n" +
"    outline-offset: -2px\n" +
"}\n" +
"\n" +
".btn.active, .btn:active {\n" +
"    background-color: #e6e6e6;\n" +
"    background-color: #d9d9d9 \\9;\n" +
"    background-image: none;\n" +
"    outline: 0;\n" +
"    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15), 0 1px 2px rgba(0, 0, 0, .05)\n" +
"}\n" +
"\n" +
".btn.disabled, .btn[disabled] {\n" +
"    cursor: default;\n" +
"    background-color: #e6e6e6;\n" +
"    background-image: none;\n" +
"    opacity: .65;\n" +
"    filter: alpha(opacity=65);\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".btn-default {\n" +
"    overflow: hidden;\n" +
"    color: #fff;\n" +
"    background: #8e979c;\n" +
"    font-size: 14px;\n" +
"    padding: 8px 24px;\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".dropdown-menu a, .dropdown-menu--refresh a {\n" +
"    font-weight: 500;\n" +
"    line-height: 15px;\n" +
"    font-size: 15px;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".btn-danger, .btn-info, .btn-inverse, .btn-primary, .btn-success, .btn-warning {\n" +
"    text-shadow: 0 -1px 0 rgba(0, 0, 0, .25);\n" +
"    background-repeat: repeat-x;\n" +
"    color: #fff;\n" +
"    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false)\n" +
"}\n" +
"\n" +
".btn-default:hover {\n" +
"    color: #fff;\n" +
"    background-color: #8e979c\n" +
"}\n" +
"\n" +
".btn-left {\n" +
"    float: left\n" +
"}\n" +
"\n" +
".btn-right {\n" +
"    float: right\n" +
"}\n" +
"\n" +
".btn-large {\n" +
"    padding: 11px 19px;\n" +
"    font-size: 17.5px;\n" +
"    border-radius: 6px\n" +
"}\n" +
"\n" +
".btn-large [class*=\" icon-\"], .btn-large [class^=icon-] {\n" +
"    margin-top: 2px\n" +
"}\n" +
"\n" +
".btn-small {\n" +
"    padding: 2px 10px;\n" +
"    font-size: 11.9px;\n" +
"    border-radius: 3px\n" +
"}\n" +
"\n" +
".btn-small [class*=\" icon-\"], .btn-small [class^=icon-] {\n" +
"    margin-top: 0\n" +
"}\n" +
"\n" +
".btn-mini {\n" +
"    padding: 1px 6px;\n" +
"    font-size: 10.5px;\n" +
"    border-radius: 3px\n" +
"}\n" +
"\n" +
".embed-refresh body, body {\n" +
"    font-size: 15px\n" +
"}\n" +
"\n" +
".btn-block {\n" +
"    width: 100%;\n" +
"    padding-left: 0;\n" +
"    padding-right: 0;\n" +
"    box-sizing: border-box\n" +
"}\n" +
"\n" +
".btn-block + .btn-block {\n" +
"    margin-top: 5px\n" +
"}\n" +
"\n" +
"input[type=button].btn-block, input[type=reset].btn-block, input[type=submit].btn-block {\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
".btn-primary {\n" +
"    background-color: #004cd6;\n" +
"    background-image: linear-gradient(to bottom, #0069d6, #0022d6);\n" +
"    border-color: #0022d6 #0022d6 #00168a;\n" +
"    border-color: rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .25)\n" +
"}\n" +
"\n" +
".btn-primary.active, .btn-primary.disabled, .btn-primary:active, .btn-primary:hover, .btn-primary[disabled] {\n" +
"    color: #fff;\n" +
"    background-color: #0022d6\n" +
"}\n" +
"\n" +
".btn-primary.active, .btn-primary:active {\n" +
"    background-color: #001aa3 \\9\n" +
"}\n" +
"\n" +
".btn-warning {\n" +
"    background-color: #ffb57f;\n" +
"    background-image: linear-gradient(to bottom, #ffc79e, #ff9b51);\n" +
"    border-color: #ff9b51 #ff9b51 #ff6f04;\n" +
"    border-color: rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .25)\n" +
"}\n" +
"\n" +
".btn-warning.active, .btn-warning.disabled, .btn-warning:active, .btn-warning:hover, .btn-warning[disabled] {\n" +
"    color: #fff;\n" +
"    background-color: #ff9b51\n" +
"}\n" +
"\n" +
".btn-warning.active, .btn-warning:active {\n" +
"    background-color: #ff7e1e \\9\n" +
"}\n" +
"\n" +
".btn-danger {\n" +
"    background-color: #da4f49;\n" +
"    background-image: linear-gradient(to bottom, #ee5f5b, #bd362f);\n" +
"    border-color: #bd362f #bd362f #802420;\n" +
"    border-color: rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .25)\n" +
"}\n" +
"\n" +
".btn-danger.active, .btn-danger.disabled, .btn-danger:active, .btn-danger:hover, .btn-danger[disabled] {\n" +
"    color: #fff;\n" +
"    background-color: #bd362f\n" +
"}\n" +
"\n" +
".btn-danger.active, .btn-danger:active {\n" +
"    background-color: #942a25 \\9\n" +
"}\n" +
"\n" +
".btn-success {\n" +
"    background-color: #5bb75b;\n" +
"    background-image: linear-gradient(to bottom, #62c462, #51a351);\n" +
"    border-color: #51a351 #51a351 #387038;\n" +
"    border-color: rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .25)\n" +
"}\n" +
"\n" +
".btn-success.active, .btn-success.disabled, .btn-success:active, .btn-success:hover, .btn-success[disabled] {\n" +
"    color: #fff;\n" +
"    background-color: #51a351\n" +
"}\n" +
"\n" +
".btn-success.active, .btn-success:active {\n" +
"    background-color: #408140 \\9\n" +
"}\n" +
"\n" +
".btn-info {\n" +
"    background-color: #49afcd;\n" +
"    background-image: linear-gradient(to bottom, #5bc0de, #2f96b4);\n" +
"    border-color: #2f96b4 #2f96b4 #1f6377;\n" +
"    border-color: rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .25)\n" +
"}\n" +
"\n" +
".btn-info.active, .btn-info.disabled, .btn-info:active, .btn-info:hover, .btn-info[disabled] {\n" +
"    color: #fff;\n" +
"    background-color: #2f96b4\n" +
"}\n" +
"\n" +
".btn-info.active, .btn-info:active {\n" +
"    background-color: #24748c \\9\n" +
"}\n" +
"\n" +
".btn-inverse {\n" +
"    background-color: #46484c;\n" +
"    background-image: linear-gradient(to bottom, #444, #494e58);\n" +
"    border-color: #494e58 #494e58 #26292e;\n" +
"    border-color: rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .25)\n" +
"}\n" +
"\n" +
".btn-inverse.active, .btn-inverse.disabled, .btn-inverse:active, .btn-inverse:hover, .btn-inverse[disabled] {\n" +
"    color: #fff;\n" +
"    background-color: #494e58\n" +
"}\n" +
"\n" +
".btn-inverse.active, .btn-inverse:active {\n" +
"    background-color: #32353c \\9\n" +
"}\n" +
"\n" +
"button.btn::-moz-focus-inner, input[type=submit].btn::-moz-focus-inner {\n" +
"    padding: 0;\n" +
"    border: 0\n" +
"}\n" +
"\n" +
".btn-link, .btn-link:active, .btn-link[disabled] {\n" +
"    background-color: transparent;\n" +
"    background-image: none;\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".btn-link {\n" +
"    border-color: transparent;\n" +
"    cursor: pointer;\n" +
"    color: #0069d6;\n" +
"    border-radius: 0\n" +
"}\n" +
"\n" +
".btn-link:hover {\n" +
"    color: #00438a;\n" +
"    text-decoration: underline;\n" +
"    background-color: transparent\n" +
"}\n" +
"\n" +
".btn-link[disabled]:hover {\n" +
"    color: #656c7a;\n" +
"    text-decoration: none\n" +
"}\n" +
"\n" +
".dropdown-toggle:active, .open .dropdown-toggle {\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".dropdown .caret {\n" +
"    margin-top: 8px;\n" +
"    margin-left: 2px\n" +
"}\n" +
"\n" +
".dropdown:hover .caret, .open.dropdown .caret {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100)\n" +
"}\n" +
"\n" +
".dropdown-menu {\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    float: left;\n" +
"    display: none;\n" +
"    max-width: 220px;\n" +
"    padding: 4px 0;\n" +
"    margin: 0;\n" +
"    background-color: #fff;\n" +
"    background-clip: padding-box\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh {\n" +
"    background-color: #fff\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh.bottom-up {\n" +
"    top: auto;\n" +
"    bottom: 100%;\n" +
"    margin-bottom: 2px\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh .divider {\n" +
"    height: 1px;\n" +
"    margin: 5px 1px;\n" +
"    overflow: hidden;\n" +
"    background-color: #e7e9ee;\n" +
"    border-bottom: 1px solid #fff\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh a {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".dropdown-menu.bottom-up {\n" +
"    top: auto;\n" +
"    bottom: 100%;\n" +
"    margin-bottom: 2px\n" +
"}\n" +
"\n" +
".dropdown-menu .divider {\n" +
"    height: 1px;\n" +
"    margin: 5px 1px;\n" +
"    overflow: hidden;\n" +
"    background-color: #e5e5e5;\n" +
"    border-bottom: 1px solid #fff\n" +
"}\n" +
"\n" +
".dropdown-menu a {\n" +
"    display: block\n" +
"}\n" +
"\n" +
"h3, strong, strong a {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".dropdown-menu .active > a, .dropdown-menu .active > a:focus, .dropdown-menu .active > a:hover, .dropdown-menu li > a:focus, .dropdown-menu li > a:hover {\n" +
"    color: #fff;\n" +
"    text-decoration: none;\n" +
"    background-color: #2e9fff;\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".dropdown.open .dropdown-toggle {\n" +
"    color: #fff;\n" +
"    background: #ccc;\n" +
"    background: rgba(0, 0, 0, .3)\n" +
"}\n" +
"\n" +
".dropdown.open .dropdown-menu, .dropdown.open .dropdown-menu--refresh {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".typeahead {\n" +
"    margin-top: 2px;\n" +
"    border-radius: 4px\n" +
"}\n" +
"\n" +
"h3, p {\n" +
"    margin: 0 0 1.5em\n" +
"}\n" +
"\n" +
".input--text, .inputBg, .textarea-outer-wrapper .textarea-wrapper {\n" +
"    border: 2px solid #dbdfe4;\n" +
"    -webkit-appearance: none\n" +
"}\n" +
"\n" +
".inputBg {\n" +
"    background: #fff\n" +
"}\n" +
"\n" +
".inputBg:focus {\n" +
"    border: 2px solid #c2c6cc\n" +
"}\n" +
"\n" +
"* {\n" +
"    box-sizing: border-box\n" +
"}\n" +
"\n" +
"body {\n" +
"    background: 0 0;\n" +
"    color: #2a2e2e;\n" +
"    font-family: \"Helvetica Neue\", arial, sans-serif;\n" +
"    -webkit-font-smoothing: antialiased;\n" +
"    -moz-osx-font-smoothing: grayscale\n" +
"}\n" +
"\n" +
"body.dark {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
"h5, h6 {\n" +
"    color: #687a86;\n" +
"    margin: 0 0 10px;\n" +
"    line-height: 1\n" +
"}\n" +
"\n" +
"a:active, a:hover {\n" +
"    text-decoration: none\n" +
"}\n" +
"\n" +
"a:focus, button:focus {\n" +
"    outline: Highlight auto 3px;\n" +
"    outline: -webkit-focus-ring-color auto 3px;\n" +
"    outline-offset: -1px\n" +
"}\n" +
"\n" +
"a {\n" +
"    color: #288ce4;\n" +
"    transition: color linear .1s\n" +
"}\n" +
"\n" +
"a:hover {\n" +
"    color: #1977ca\n" +
"}\n" +
"\n" +
"button.alert {\n" +
"    width: 100%;\n" +
"    display: block\n" +
"}\n" +
"\n" +
"button::-moz-focus-inner {\n" +
"    border: 0\n" +
"}\n" +
"\n" +
"em {\n" +
"    font-style: italic\n" +
"}\n" +
"\n" +
"h3 {\n" +
"    font-size: 16px\n" +
"}\n" +
"\n" +
"h3 a.pull-right {\n" +
"    font-size: 12px;\n" +
"    font-weight: 400\n" +
"}\n" +
"\n" +
"h4, h5, h6 {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
"h4 {\n" +
"    font-size: 18px;\n" +
"    line-height: 1.2\n" +
"}\n" +
"\n" +
"h5 {\n" +
"    font-size: 11px\n" +
"}\n" +
"\n" +
"h6 {\n" +
"    font-size: 11px;\n" +
"    text-transform: uppercase\n" +
"}\n" +
"\n" +
".dark h6 {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".btn {\n" +
"    background: #778289;\n" +
"    background: rgba(29, 47, 58, .6);\n" +
"    display: inline-block;\n" +
"    padding: 10px 16px;\n" +
"    color: #fff;\n" +
"    line-height: 1.1;\n" +
"    border-radius: 3px;\n" +
"    font-weight: 500;\n" +
"    transition: background .2s\n" +
"}\n" +
"\n" +
".btn:not(:disabled):hover {\n" +
"    background: #606d75;\n" +
"    background: rgba(29, 47, 58, .7);\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".btn:not(:disabled).active, .btn:not(:disabled):active {\n" +
"    transition: none;\n" +
"    background: #2e9fff\n" +
"}\n" +
"\n" +
".btn.busy {\n" +
"    background: #ebeef2;\n" +
"    color: #999;\n" +
"    text-shadow: none\n" +
"}\n" +
"\n" +
".btn.busy:active, .btn.busy:hover {\n" +
"    background: #ebeef2;\n" +
"    text-shadow: none;\n" +
"    cursor: not-allowed\n" +
"}\n" +
"\n" +
".btn.btn-small {\n" +
"    font-size: 12px;\n" +
"    padding: 8px 10px;\n" +
"    background-position: 0 -10px\n" +
"}\n" +
"\n" +
".btn.btn-small.follow {\n" +
"    font-weight: 400;\n" +
"    font-size: 10px;\n" +
"    padding: 1px 4px;\n" +
"    border-radius: 3px;\n" +
"    box-shadow: 0 1px 0 rgba(0, 0, 0, .07)\n" +
"}\n" +
"\n" +
".btn.btn-small:hover {\n" +
"    background-position: 0 -40px\n" +
"}\n" +
"\n" +
".mobile .btn {\n" +
"    border: none;\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".follow-btn {\n" +
"    overflow: hidden;\n" +
"    color: #fff;\n" +
"    background: #2e9fff;\n" +
"    font-size: 14px;\n" +
"    padding: 4px 14px;\n" +
"    text-shadow: none;\n" +
"    border: none;\n" +
"    box-shadow: none;\n" +
"    transition: all .2s\n" +
"}\n" +
"\n" +
".follow-btn:hover {\n" +
"    color: #fff;\n" +
"    background-color: #8e979c\n" +
"}\n" +
"\n" +
".follow-btn .follow-text {\n" +
"    display: inline\n" +
"}\n" +
"\n" +
".follow-btn .following-text {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".follow-btn .icon-checkmark {\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    left: 9px;\n" +
"    top: 15px;\n" +
"    transition: all .2s;\n" +
"    opacity: 0;\n" +
"    filter: alpha(opacity=0)\n" +
"}\n" +
"\n" +
".follow-btn .icon-plus {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".follow-btn.private {\n" +
"    background-color: #a9b0b4 !important;\n" +
"    cursor: not-allowed\n" +
"}\n" +
"\n" +
".follow-btn.private .icon-lock {\n" +
"    display: inline;\n" +
"    padding-right: .25em\n" +
"}\n" +
"\n" +
".follow-btn.private .icon-lock:before {\n" +
"    position: relative;\n" +
"    top: 1px\n" +
"}\n" +
"\n" +
".follow-btn.edit-profile {\n" +
"    color: #fff;\n" +
"    background-color: #a9b0b4;\n" +
"    border: none;\n" +
"    box-shadow: none;\n" +
"    text-shadow: none;\n" +
"    font-weight: 700;\n" +
"    transition: all .2s\n" +
"}\n" +
"\n" +
".follow-btn.edit-profile:hover {\n" +
"    color: #fff;\n" +
"    background-color: #8e979c\n" +
"}\n" +
"\n" +
".follow-btn.following {\n" +
"    background: #8fc847 !important;\n" +
"    padding-right: 10px;\n" +
"    padding-left: 30px\n" +
"}\n" +
"\n" +
".follow-btn.following .follow-text {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".follow-btn.following .following-text, .follow-link .follow-text {\n" +
"    display: inline\n" +
"}\n" +
"\n" +
".follow-btn.following .icon-checkmark {\n" +
"    top: 6px;\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100)\n" +
"}\n" +
"\n" +
".follow-btn.btn-small {\n" +
"    font-size: 12px;\n" +
"    font-weight: 700;\n" +
"    padding: 2px 9px 1px\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.private {\n" +
"    padding: 0 4px 0 7px;\n" +
"    left: -3px\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.private--refresh {\n" +
"    padding: 2px 5px 1px 8px;\n" +
"    top: -2px\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.hover-card {\n" +
"    padding: .5px 0 0;\n" +
"    background-color: #e7e9ee;\n" +
"    bottom: 2px\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.hover-card.edit {\n" +
"    color: var(--publisher-color-safe, #2e9fff);\n" +
"    padding: 2px 2px 1px\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.hover-card.edit:hover, .follow-btn.btn-small.hover-card:hover {\n" +
"    color: #fff;\n" +
"    background-color: #8e979c\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.following {\n" +
"    padding-left: 24px\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.following.hover-card {\n" +
"    padding: 1px 0 0\n" +
"}\n" +
"\n" +
".follow-btn.btn-small.following .icon-checkmark {\n" +
"    top: 3px;\n" +
"    left: 7px\n" +
"}\n" +
"\n" +
".follow-link {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".follow-link .following-text {\n" +
"    display: none;\n" +
"    transition: all .2s\n" +
"}\n" +
"\n" +
".follow-link .icon-checkmark {\n" +
"    position: absolute;\n" +
"    left: 2px;\n" +
"    top: 10px;\n" +
"    transition: all .2s;\n" +
"    opacity: 0;\n" +
"    filter: alpha(opacity=0)\n" +
"}\n" +
"\n" +
".follow-link.following .follow-text {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".follow-link.following .following-text {\n" +
"    margin-left: 20px;\n" +
"    display: inline;\n" +
"    color: #c2c6cc\n" +
"}\n" +
"\n" +
".dark .follow-link.following .following-text {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".follow-link.following .icon-checkmark {\n" +
"    top: 2px;\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    color: #c2c6cc\n" +
"}\n" +
"\n" +
".dark .follow-link.following .icon-checkmark {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    #profile .btn.follow-btn {\n" +
"        font-size: 13px;\n" +
"        padding: 4px 9px\n" +
"    }\n" +
"\n" +
"    #profile .btn.follow-btn .icon-lock, #profile .btn.follow-btn .icon-plus {\n" +
"        position: static !important\n" +
"    }\n" +
"\n" +
"    #profile .btn.follow-btn .btn-text {\n" +
"        display: none !important\n" +
"    }\n" +
"\n" +
"    #profile .btn.follow-btn .icon-plus {\n" +
"        display: inline\n" +
"    }\n" +
"\n" +
"    #profile .btn.follow-btn .icon-checkmark {\n" +
"        display: none\n" +
"    }\n" +
"\n" +
"    #profile .btn.follow-btn.following .icon-checkmark {\n" +
"        position: static;\n" +
"        display: inline\n" +
"    }\n" +
"\n" +
"    #profile .btn.follow-btn.following .icon-plus {\n" +
"        display: none\n" +
"    }\n" +
"}\n" +
"\n" +
".outbound-link .icon-expand {\n" +
"    font-size: .6em;\n" +
"    color: #c2c6cc;\n" +
"    padding-left: 1em\n" +
"}\n" +
"\n" +
"[dir=rtl], [dir=rtl] * {\n" +
"    font-family: Tahoma, Geneva, \"Helvetica Neue\", Helvetica, Arial, Verdana, sans-serif\n" +
"}\n" +
"\n" +
"@font-face {\n" +
"    font-family: icons;\n" +
"    src: url(https://c.disquscdn.com/next/embed/assets/font/icons.4cc7a703d2fdfe684151ff8ac24d45f1.woff2) format(\"woff2\"), url(https://c.disquscdn.com/next/embed/assets/font/icons.690eabaf849f09912ee323188780339b.woff) format(\"woff\");\n" +
"    font-weight: 400;\n" +
"    font-style: normal\n" +
"}\n" +
"\n" +
"[class*=\" icon-\"]:before, [class^=icon-]:before {\n" +
"    font-family: icons;\n" +
"    speak: none;\n" +
"    font-style: normal;\n" +
"    font-weight: 400;\n" +
"    font-variant: normal;\n" +
"    text-transform: none;\n" +
"    line-height: 1;\n" +
"    -webkit-font-smoothing: antialiased;\n" +
"    -moz-osx-font-smoothing: grayscale\n" +
"}\n" +
"\n" +
".icon-allstar:before {\n" +
"    content: \"\\f101\"\n" +
"}\n" +
"\n" +
".icon-arrow-2:before {\n" +
"    content: \"\\25b3\"\n" +
"}\n" +
"\n" +
".icon-arrow-back:before {\n" +
"    content: \"\\2770\"\n" +
"}\n" +
"\n" +
".icon-arrow-down:before {\n" +
"    content: \"\\f102\"\n" +
"}\n" +
"\n" +
".icon-arrow-forward:before {\n" +
"    content: \"\\2771\"\n" +
"}\n" +
"\n" +
".icon-arrow-up:before {\n" +
"    content: \"\\f103\"\n" +
"}\n" +
"\n" +
".icon-arrow:before {\n" +
"    content: \"\\25bd\"\n" +
"}\n" +
"\n" +
".icon-bell:before {\n" +
"    content: \"\\2b26\"\n" +
"}\n" +
"\n" +
".icon-camera:before {\n" +
"    content: \"\\233c\"\n" +
"}\n" +
"\n" +
".icon-cancel:before {\n" +
"    content: \"\\2715\"\n" +
"}\n" +
"\n" +
".icon-chat-bubble:before {\n" +
"    content: \"\\f104\"\n" +
"}\n" +
"\n" +
".icon-checkmark:before {\n" +
"    content: \"\\2714\"\n" +
"}\n" +
"\n" +
".icon-clock:before {\n" +
"    content: \"\\23f2\"\n" +
"}\n" +
"\n" +
".icon-cog:before {\n" +
"    content: \"\\2699\"\n" +
"}\n" +
"\n" +
".icon-comment:before {\n" +
"    content: \"\\e603\"\n" +
"}\n" +
"\n" +
".icon-delete:before {\n" +
"    content: \"\\f105\"\n" +
"}\n" +
"\n" +
".icon-discovery:before {\n" +
"    content: \"\\2604\"\n" +
"}\n" +
"\n" +
".icon-discussion:before {\n" +
"    content: \"\\f106\"\n" +
"}\n" +
"\n" +
".icon-disqus:before {\n" +
"    content: \"\\64\"\n" +
"}\n" +
"\n" +
".icon-expand-corners:before {\n" +
"    content: \"\\2922\"\n" +
"}\n" +
"\n" +
".icon-expand:before {\n" +
"    content: \"\\23cd\"\n" +
"}\n" +
"\n" +
".icon-export:before {\n" +
"    content: \"\\2924\"\n" +
"}\n" +
"\n" +
".icon-facebook-circle:before {\n" +
"    content: \"\\46\"\n" +
"}\n" +
"\n" +
".icon-facebook:before {\n" +
"    content: \"\\66\"\n" +
"}\n" +
"\n" +
".icon-feed:before {\n" +
"    content: \"\\72\"\n" +
"}\n" +
"\n" +
".icon-flag:before {\n" +
"    content: \"\\2691\"\n" +
"}\n" +
"\n" +
".icon-forward:before {\n" +
"    content: \"\\3e\"\n" +
"}\n" +
"\n" +
".icon-google-plus-circle:before {\n" +
"    content: \"\\47\"\n" +
"}\n" +
"\n" +
".icon-google-plus:before {\n" +
"    content: \"\\67\"\n" +
"}\n" +
"\n" +
".icon-group:before {\n" +
"    content: \"\\f107\"\n" +
"}\n" +
"\n" +
".icon-heart-empty:before {\n" +
"    content: \"\\f108\"\n" +
"}\n" +
"\n" +
".icon-heart:before {\n" +
"    content: \"\\f109\"\n" +
"}\n" +
"\n" +
".icon-images:before {\n" +
"    content: \"\\26fa\"\n" +
"}\n" +
"\n" +
".icon-info:before {\n" +
"    content: \"\\24d8\"\n" +
"}\n" +
"\n" +
".icon-lightning:before {\n" +
"    content: \"\\f10a\"\n" +
"}\n" +
"\n" +
".icon-link:before {\n" +
"    content: \"\\bb\"\n" +
"}\n" +
"\n" +
".icon-location:before {\n" +
"    content: \"\\2351\"\n" +
"}\n" +
"\n" +
".icon-lock:before {\n" +
"    content: \"\\1f512\"\n" +
"}\n" +
"\n" +
".icon-mail:before {\n" +
"    content: \"\\2709\"\n" +
"}\n" +
"\n" +
".icon-map:before {\n" +
"    content: \"\\25eb\"\n" +
"}\n" +
"\n" +
".icon-megaphone:before {\n" +
"    content: \"\\e600\"\n" +
"}\n" +
"\n" +
".icon-menu:before {\n" +
"    content: \"\\2630\"\n" +
"}\n" +
"\n" +
".icon-minus:before {\n" +
"    content: \"\\2d\"\n" +
"}\n" +
"\n" +
".icon-music:before {\n" +
"    content: \"\\266b\"\n" +
"}\n" +
"\n" +
".icon-pause:before {\n" +
"    content: \"\\268c\"\n" +
"}\n" +
"\n" +
".icon-pencil-large:before {\n" +
"    content: \"\\270e\"\n" +
"}\n" +
"\n" +
".icon-pencil:before {\n" +
"    content: \"\\270f\"\n" +
"}\n" +
"\n" +
".icon-photo:before {\n" +
"    content: \"\\25f1\"\n" +
"}\n" +
"\n" +
".icon-pin:before {\n" +
"    content: \"\\2199\"\n" +
"}\n" +
"\n" +
".icon-play:before {\n" +
"    content: \"\\25ba\"\n" +
"}\n" +
"\n" +
".icon-plus:before {\n" +
"    content: \"\\2b\"\n" +
"}\n" +
"\n" +
".icon-proceed:before {\n" +
"    content: \"\\2192\"\n" +
"}\n" +
"\n" +
".icon-remove:before {\n" +
"    content: \"\\2716\"\n" +
"}\n" +
"\n" +
".icon-reply-large:before {\n" +
"    content: \"\\21a9\"\n" +
"}\n" +
"\n" +
".icon-reply:before {\n" +
"    content: \"\\3c\"\n" +
"}\n" +
"\n" +
".icon-search:before {\n" +
"    content: \"\\26b2\"\n" +
"}\n" +
"\n" +
".icon-share:before {\n" +
"    content: \"\\2945\"\n" +
"}\n" +
"\n" +
".icon-site-new:before {\n" +
"    content: \"\\f10b\"\n" +
"}\n" +
"\n" +
".icon-site:before {\n" +
"    content: \"\\f10c\"\n" +
"}\n" +
"\n" +
".icon-spam:before {\n" +
"    content: \"\\f10d\"\n" +
"}\n" +
"\n" +
".icon-star:before {\n" +
"    content: \"\\2605\"\n" +
"}\n" +
"\n" +
".icon-trophy:before {\n" +
"    content: \"\\1f3c6\"\n" +
"}\n" +
"\n" +
".icon-twitter-circle:before {\n" +
"    content: \"\\54\"\n" +
"}\n" +
"\n" +
".icon-twitter:before {\n" +
"    content: \"\\74\"\n" +
"}\n" +
"\n" +
".icon-upgrade-arrow-pro:before {\n" +
"    content: \"\\f10e\"\n" +
"}\n" +
"\n" +
".icon-video:before {\n" +
"    content: \"\\25b6\"\n" +
"}\n" +
"\n" +
".icon-warning:before {\n" +
"    content: \"\\26a0\"\n" +
"}\n" +
"\n" +
".icon-write:before {\n" +
"    content: \"\\29c4\"\n" +
"}\n" +
"\n" +
"#layout {\n" +
"    overflow: hidden;\n" +
"    max-width: 100vw\n" +
"}\n" +
"\n" +
"#layout > section {\n" +
"    min-height: 125px\n" +
"}\n" +
"\n" +
"#no-posts {\n" +
"    opacity: .6;\n" +
"    line-height: 107px;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".loading {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/loader.ba7c86e8b4b6135bb668d05223f8f127.gif) center center no-repeat;\n" +
"    min-height: 100px\n" +
"}\n" +
"\n" +
".input--text {\n" +
"    background: #fff;\n" +
"    transition: all .2s linear;\n" +
"    padding: 5px 9px;\n" +
"    margin: 0;\n" +
"    border-radius: 4px;\n" +
"    width: 100%;\n" +
"    font-size: 13px;\n" +
"    height: 32px\n" +
"}\n" +
"\n" +
".input--text:focus {\n" +
"    border: 2px solid #c2c6cc;\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".input--text:placeholder-shown {\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".has-error .input--text, .has-error .input--text:focus {\n" +
"    border-color: #f05f70\n" +
"}\n" +
"\n" +
".dark .input--text {\n" +
"    background: #fff;\n" +
"    box-shadow: none;\n" +
"    border-color: #e7e9ee\n" +
"}\n" +
"\n" +
".input-label {\n" +
"    color: #fff;\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    padding: 15px 13px;\n" +
"    margin-top: 15px;\n" +
"    margin-bottom: 25px;\n" +
"    background-color: #494e58;\n" +
"    font-weight: 700;\n" +
"    line-height: 1.5em;\n" +
"    border-radius: 4px\n" +
"}\n" +
"\n" +
".input-label:after {\n" +
"    position: absolute;\n" +
"    left: 15px;\n" +
"    top: -5px;\n" +
"    width: 10px;\n" +
"    height: 10px;\n" +
"    background-color: inherit;\n" +
"    transform: rotate(45deg)\n" +
"}\n" +
"\n" +
".active .nav-tab > a:after, .tab-conversation.active > a:after {\n" +
"    content: \" \";\n" +
"    display: block;\n" +
"    position: absolute\n" +
"}\n" +
"\n" +
".has-error .input-label {\n" +
"    border-color: #cf4847;\n" +
"    background-color: #cf4847;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".input-label .link {\n" +
"    color: #fff;\n" +
"    text-decoration: underline\n" +
"}\n" +
"\n" +
".input-label .link:hover {\n" +
"    text-decoration: none\n" +
"}\n" +
"\n" +
".avatar {\n" +
"    float: left\n" +
"}\n" +
"\n" +
".avatar img {\n" +
"    display: block;\n" +
"    width: 48px;\n" +
"    height: 48px;\n" +
"    border-radius: 3px\n" +
"}\n" +
"\n" +
".avatar .image-refresh.image-refresh.image-refresh.image-refresh.image-refresh.image-refresh {\n" +
"    width: 100%;\n" +
"    height: 100%;\n" +
"    border-radius: inherit\n" +
"}\n" +
"\n" +
".avatar .user {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    z-index: 100;\n" +
"    background: #dbdfe4;\n" +
"    border-radius: 3px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".avatar .user--refresh {\n" +
"    background-color: var(--publisher-color-safe, #2e9fff) !important;\n" +
"    color: #fff;\n" +
"    font-style: normal;\n" +
"    font-weight: 600;\n" +
"    font-size: 36px;\n" +
"    line-height: 1.2;\n" +
"    width: 48px;\n" +
"    height: 48px;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".collapsed .avatar .user--refresh, .mobile .avatar .user--refresh {\n" +
"    width: 50px;\n" +
"    height: 50px\n" +
"}\n" +
"\n" +
".post .avatar {\n" +
"    margin-right: 12px\n" +
"}\n" +
"\n" +
".acceptance-wrapper {\n" +
"    margin: 12px 0 0;\n" +
"    font-size: 13px;\n" +
"    font-weight: 500;\n" +
"    line-height: 1.5em;\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".acceptance-wrapper a {\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
".dark .acceptance-wrapper {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".acceptance-wrapper label span {\n" +
"    display: inline-block;\n" +
"    width: calc(100% - 25px);\n" +
"    vertical-align: top\n" +
"}\n" +
"\n" +
".acceptance-wrapper p {\n" +
"    margin-bottom: 5px\n" +
"}\n" +
"\n" +
".spinner {\n" +
"    z-index: 50;\n" +
"    width: 15px;\n" +
"    height: 15px;\n" +
"    border-radius: 28px;\n" +
"    border: 2px solid transparent;\n" +
"    border-color: transparent #fff;\n" +
"    margin: auto;\n" +
"    animation: rotate-loading 1.2s linear 0s infinite normal;\n" +
"    display: none\n" +
"}\n" +
"\n" +
".spinner.-button {\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    top: 0;\n" +
"    bottom: 0\n" +
"}\n" +
"\n" +
".badge {\n" +
"    color: #fff;\n" +
"    background: #687a86;\n" +
"    padding: 1px 3px;\n" +
"    font-size: 10px;\n" +
"    line-height: 1.1;\n" +
"    font-weight: 700;\n" +
"    border-radius: 3px;\n" +
"    display: inline-block;\n" +
"    position: relative;\n" +
"    margin-left: 3px\n" +
"}\n" +
"\n" +
".embed-refresh .badge {\n" +
"    color: #2a2e2e;\n" +
"    font-size: 14px;\n" +
"    line-height: 18px;\n" +
"    background: var(--publisher-color, #2e9fff);\n" +
"    vertical-align: top;\n" +
"    margin-left: 8px\n" +
"}\n" +
"\n" +
".embed-refresh .dark-anchor .badge {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
":not(.embed-refresh) .dark .badge {\n" +
"    background: rgba(255, 255, 255, .35)\n" +
"}\n" +
"\n" +
".dropdown-menu--coachmark {\n" +
"    padding: 15px;\n" +
"    text-align: center;\n" +
"    max-width: 280px;\n" +
"    width: 280px;\n" +
"    border: 1px solid #dbdfe4;\n" +
"    box-shadow: 0 1px 3px #dbdfe4;\n" +
"    top: 26px;\n" +
"    left: 3px\n" +
"}\n" +
"\n" +
"@media (min-width: 460px) {\n" +
"    .dropdown-menu--coachmark {\n" +
"        max-width: 300px;\n" +
"        width: 300px\n" +
"    }\n" +
"}\n" +
"\n" +
".dropdown-menu--coachmark:after, .dropdown-menu--coachmark:before {\n" +
"    bottom: 100%;\n" +
"    left: 81%;\n" +
"    border: solid transparent;\n" +
"    content: \" \";\n" +
"    height: 0;\n" +
"    width: 0;\n" +
"    position: absolute;\n" +
"    pointer-events: none;\n" +
"    border-width: 10px;\n" +
"    margin-left: -96px\n" +
"}\n" +
"\n" +
".dropdown-menu--coachmark:after {\n" +
"    border-color: rgba(255, 255, 255, 0);\n" +
"    border-bottom-color: #fff\n" +
"}\n" +
"\n" +
".dropdown-menu--coachmark:before {\n" +
"    border-color: rgba(204, 204, 204, 0);\n" +
"    border-bottom-color: #494e58\n" +
"}\n" +
"\n" +
".coachmark__description {\n" +
"    line-height: 1.4em;\n" +
"    margin-bottom: 10px;\n" +
"    margin-top: 5px;\n" +
"    font-size: 13px;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".coachmark__heading {\n" +
"    font-size: 14px;\n" +
"    font-weight: 700;\n" +
"    line-height: 1.4em;\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
"@media (min-width: 460px) {\n" +
"    .coachmark__description {\n" +
"        font-size: 14px\n" +
"    }\n" +
"\n" +
"    .coachmark__heading {\n" +
"        font-size: 15px\n" +
"    }\n" +
"}\n" +
"\n" +
".coachmark__button {\n" +
"    display: block;\n" +
"    padding: 10px 0;\n" +
"    background: #2e9fff;\n" +
"    color: #fff !important;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".has-highlighted-post .highlight-toggle {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".has-highlighted-post .highlighted > .post-content .highlight-toggle {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".highlighted {\n" +
"    background: 0 0;\n" +
"    border-radius: 4px\n" +
"}\n" +
"\n" +
".highlighted > .post-content {\n" +
"    background-color: #ebeef2\n" +
"}\n" +
"\n" +
".dark .highlighted > .post-content {\n" +
"    background-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".dark .highlighted > .post-content .feedback button {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".highlighted-post .highlighted-comment-header {\n" +
"    font-size: 15px;\n" +
"    font-weight: 700;\n" +
"    margin-bottom: 12px;\n" +
"    margin-top: 24px\n" +
"}\n" +
"\n" +
".highlighted-post .post-list {\n" +
"    margin-bottom: 24px\n" +
"}\n" +
"\n" +
".embed-refresh .highlighted-post .post-list, .post-list .post.advertisement .post-content {\n" +
"    margin-bottom: 0\n" +
"}\n" +
"\n" +
".highlighted-post .post-menu li {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".highlighted-post .post-menu li.moderator-menu-options {\n" +
"    display: list-item\n" +
"}\n" +
"\n" +
".highlighted-post .post-menu li.moderator-menu-options .dropdown-toggle {\n" +
"    border-left: none\n" +
"}\n" +
"\n" +
".highlighted-post .post-menu li.moderator-menu-options li {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".highlighted-post .post-menu li.moderator-menu-options li.highlight-toggle {\n" +
"    display: list-item\n" +
"}\n" +
"\n" +
".has-highlighted-post .highlighted-comment-header {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".post-list {\n" +
"    list-style-type: none;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".post-list .post:after, .post-list .post:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".post-list .post.banned, .post-list .post.collapsed .children, .post-list .post.collapsed > .post-content .post-menu .collapse {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .post-menu {\n" +
"    top: 12px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.collapsed > .post-content .post-menu {\n" +
"    top: 9px\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .post-menu .expand {\n" +
"    display: inline\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .post-body-inner {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .post-meta {\n" +
"    display: inline-block !important\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.collapsed > .post-content .post-meta {\n" +
"    display: block !important;\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.collapsed > .post-content .badge, .embed-refresh .post-list .post.collapsed > .post-content .follow-user-container, .embed-refresh .post-list .post.collapsed > .post-content .post-ratings, .embed-refresh .post-list .post.collapsed > .post-content .user-badges-collection, .embed-refresh .post-list .post.minimized > .post-content .badge, .embed-refresh .post-list .post.minimized > .post-content .follow-user-container, .embed-refresh .post-list .post.minimized > .post-content .post-ratings, .embed-refresh .post-list .post.minimized > .post-content .user-badges-collection, .post-list .post.collapsed > .post-content .post-media, .post-list .post.collapsed > .post-content .reply, .post-list .post.collapsed > .post-content .state-byline, .post-list .post.collapsed > .post-content footer, .post-list .post.minimized > .post-content .post-media, .post-list .post.minimized > .post-content .post-meta, .post-list .post.minimized > .post-content .reply, .post-list .post.minimized > .post-content .state-byline, .post-list .post.minimized > .post-content footer {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content, .post-list .post.minimized > .post-content {\n" +
"    transition: none;\n" +
"    min-height: 36px\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .post-message, .post-list .post.minimized > .post-content .post-message {\n" +
"    float: left\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .post-message p, .post-list .post.minimized > .post-content .post-message p {\n" +
"    line-height: 36px\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content header, .post-list .post.minimized > .post-content header {\n" +
"    line-height: 36px;\n" +
"    font-size: 12px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.collapsed > .post-content header, .embed-refresh .post-list .post.minimized > .post-content header {\n" +
"    line-height: 1;\n" +
"    font-size: 18px\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .indicator, .post-list .post.minimized > .post-content .indicator {\n" +
"    height: 36px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.collapsed > .post-content .indicator, .embed-refresh .post-list .post.minimized > .post-content .indicator {\n" +
"    height: 50px\n" +
"}\n" +
"\n" +
".post-list .post.collapsed > .post-content .avatar img, .post-list .post.minimized > .post-content .avatar img {\n" +
"    width: 36px;\n" +
"    height: 36px;\n" +
"    border-radius: 2px\n" +
"}\n" +
"\n" +
".post-list .post.minimized > .post-content .post-message p {\n" +
"    opacity: .7;\n" +
"    font-size: 12px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.minimized > .post-content .post-meta {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".post-list .post.advertisement {\n" +
"    height: 0\n" +
"}\n" +
"\n" +
".alert, .children .show-children-wrapper, .post-content {\n" +
"    margin-bottom: 16px\n" +
"}\n" +
"\n" +
".post-list .post.advertisement .post-content .advertisement-comment {\n" +
"    text-align: center;\n" +
"    font-size: 12px\n" +
"}\n" +
"\n" +
".post-list > .post.collapsed, .post-list > .post.minimized {\n" +
"    min-height: 36px\n" +
"}\n" +
"\n" +
".children .post {\n" +
"    margin-left: 60px\n" +
"}\n" +
"\n" +
".children .post:after, .children .post:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".embed-refresh .children .post, .highlighted .children .post {\n" +
"    margin-left: 60px\n" +
"}\n" +
"\n" +
".embed-refresh .highlighted .children .post {\n" +
"    margin-left: 88px\n" +
"}\n" +
"\n" +
".children .post .avatar .user img {\n" +
"    width: 36px;\n" +
"    height: 36px\n" +
"}\n" +
"\n" +
".children .post .indicator {\n" +
"    height: 36px\n" +
"}\n" +
"\n" +
".children .advertisement {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".children .show-children-wrapper .show-children {\n" +
"    margin-left: 60px;\n" +
"    font-size: 13px;\n" +
"    line-height: 15px;\n" +
"    color: #656c7a;\n" +
"    text-decoration: underline\n" +
"}\n" +
"\n" +
".post-content .post-menu:after, .post-content .post-menu:before, .post-content:after, .post-content:before {\n" +
"    display: table;\n" +
"    line-height: 0;\n" +
"    content: \"\"\n" +
"}\n" +
"\n" +
".highlighted .children .show-children-wrapper .show-children {\n" +
"    margin-left: 72px\n" +
"}\n" +
"\n" +
".embed-refresh .highlighted .children .show-children-wrapper .show-children {\n" +
"    margin-left: 88px\n" +
"}\n" +
"\n" +
".children .show-children-wrapper .show-children:hover {\n" +
"    color: #656c7a;\n" +
"    text-decoration: underline\n" +
"}\n" +
"\n" +
".dark .children .show-children-wrapper .show-children {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".children .children .post {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
".embed-refresh .children .children .post {\n" +
"    margin-left: 60px\n" +
"}\n" +
"\n" +
".children .children .advertisement {\n" +
"    margin-left: -60px\n" +
"}\n" +
"\n" +
".children .children .show-children {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
".children .children .children .advertisement {\n" +
"    margin-left: -108px\n" +
"}\n" +
"\n" +
".children .children .children .children .post {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".children .children .children .children .post .post-body {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
".children .children .children .children .post .indicator {\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".children .children .children .children .advertisement {\n" +
"    margin-left: -156px\n" +
"}\n" +
"\n" +
".children .children .children .children .show-children {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
".post-content {\n" +
"    position: relative;\n" +
"    transition: all .2s ease-in-out\n" +
"}\n" +
"\n" +
".post-content .indicator {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    width: 5px;\n" +
"    height: 48px;\n" +
"    border-radius: 3px\n" +
"}\n" +
"\n" +
".embed-refresh .post-content .indicator {\n" +
"    height: 48px\n" +
"}\n" +
"\n" +
".post-content.new, .post-content.target {\n" +
"    padding-left: 12px\n" +
"}\n" +
"\n" +
".post-content.new > .avatar, .post-content.target > .avatar {\n" +
"    left: 12px\n" +
"}\n" +
"\n" +
".post-content.new .indicator, .post-content.target .indicator {\n" +
"    background: #2e9fff\n" +
"}\n" +
"\n" +
".embed-refresh .post-content.new .indicator, .embed-refresh .post-content.target .indicator {\n" +
"    background: var(--publisher-color, #2e9fff)\n" +
"}\n" +
"\n" +
".post-content.target .indicator {\n" +
"    background: #ffd34f\n" +
"}\n" +
"\n" +
".post-content.post-reply .source-avatar {\n" +
"    position: absolute;\n" +
"    left: 6px;\n" +
"    top: 6px;\n" +
"    width: 42px;\n" +
"    height: 42px;\n" +
"    box-shadow: 0 0 0 1px rgba(0, 0, 0, .12)\n" +
"}\n" +
"\n" +
".post-content.post-reply .target-avatar {\n" +
"    width: 42px;\n" +
"    height: 42px\n" +
"}\n" +
"\n" +
".post-content:focus {\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".post-content .post-body .media-container img {\n" +
"    border-radius: 3px;\n" +
"    display: block;\n" +
"    max-width: 100%;\n" +
"    max-height: 480px;\n" +
"    z-index: -1\n" +
"}\n" +
"\n" +
".post-content .post-body .media-button {\n" +
"    text-align: left;\n" +
"    font-size: 10px;\n" +
"    padding: 3px 5px 4px 0;\n" +
"    border-radius: 5px;\n" +
"    border-style: solid;\n" +
"    border-width: 2px\n" +
"}\n" +
"\n" +
".post-content .post-body .media-content-placeholder {\n" +
"    display: none;\n" +
"    position: relative;\n" +
"    width: -webkit-max-content;\n" +
"    width: max-content;\n" +
"    max-width: 100%;\n" +
"    min-height: 100px\n" +
"}\n" +
"\n" +
".post-content .post-body .media-content-placeholder.media-Twitter {\n" +
"    width: auto\n" +
"}\n" +
"\n" +
".post-content .post-body .media-content-placeholder.media-video {\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
".post-content .post-body .media-button-contract, .post-content .post-body .media-button-expand, .post-content .post-body .media-container {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-content .post-body .media-container.media-activated, .post-content .post-body .media-container.media-mode-deferred, .post-content .post-body .media-container.media-show-buttons {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".post-content .post-body .media-show-buttons .media-button-expand {\n" +
"    display: inline-block;\n" +
"    cursor: zoom-in\n" +
"}\n" +
"\n" +
".post-content .post-body .media-show-buttons .media-button-contract {\n" +
"    display: none;\n" +
"    margin-bottom: 15px;\n" +
"    cursor: zoom-out\n" +
"}\n" +
"\n" +
".post-content .post-body .media-show-buttons .media-button-contract i, .post-content .post-body .media-show-buttons .media-button-expand i {\n" +
"    font-size: 8px;\n" +
"    color: #fff;\n" +
"    padding: 4px 5px 4px 4px;\n" +
"    margin-right: 2px\n" +
"}\n" +
"\n" +
".post-content .post-body .media-activated .media-content-placeholder {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".post-content .post-body .media-show-buttons.media-activated .media-button-contract {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".post-content .post-body .media-show-buttons.media-activated .media-button-expand {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-content .post-body .media-mode-deferred .media-content-placeholder {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".post-content .post-body .media-mode-deferred.media-show-buttons .media-button-contract, .post-content .post-body .media-mode-deferred.media-show-buttons .media-button-expand {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-content .post-body .media-content-loader {\n" +
"    display: none;\n" +
"    height: 300px;\n" +
"    text-align: center;\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/loader.ba7c86e8b4b6135bb668d05223f8f127.gif) center center no-repeat\n" +
"}\n" +
"\n" +
".post-content .post-body .media-loading.media-activated .media-content-placeholder {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-content .post-body .media-loading.media-activated .media-content-loader {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".post-content .post-body .media-loading.media-activated .media-Imgur {\n" +
"    position: absolute\n" +
"}\n" +
"\n" +
".post-content .post-body .media-content-placeholder .media-force-load {\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    display: block;\n" +
"    border-radius: 3px;\n" +
"    border: 2px solid rgba(0, 39, 59, .2);\n" +
"    color: rgba(0, 39, 59, .2) !important\n" +
"}\n" +
"\n" +
".post-content .post-body .media-content-placeholder .media-force-load i {\n" +
"    width: 100%;\n" +
"    position: absolute;\n" +
"    top: 50%;\n" +
"    font-size: 32px;\n" +
"    margin-top: -16px;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".post-content .post-body .media-Imgur {\n" +
"    display: block !important;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".post-content .post-body .media-webpage {\n" +
"    height: 36px;\n" +
"    border-left: 5px solid;\n" +
"    border-color: #687a86;\n" +
"    padding: 0 0 0 15px;\n" +
"    width: 100%;\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".post-content .post-body .media-webpage img {\n" +
"    float: left;\n" +
"    max-height: 36px;\n" +
"    max-width: 36px\n" +
"}\n" +
"\n" +
".post-content .post-body .media-webpage .media-webpage-title {\n" +
"    padding-top: 2px\n" +
"}\n" +
"\n" +
".post-content .post-body .media-webpage .media-webpage-domain {\n" +
"    padding-top: 3px;\n" +
"    font-size: 80%;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".post-content .post-body .post-media-link i {\n" +
"    padding-right: 4px\n" +
"}\n" +
"\n" +
".post-content .post-body .post-media-link .post-media-link-domain {\n" +
"    font-size: 11px;\n" +
"    color: #656c7a !important\n" +
"}\n" +
"\n" +
".post-content .post-body spoiler {\n" +
"    display: inline;\n" +
"    background: #687a86;\n" +
"    color: transparent;\n" +
"    padding: 0 .5em\n" +
"}\n" +
"\n" +
".post-content .post-body spoiler a {\n" +
"    visibility: hidden;\n" +
"    transition: none\n" +
"}\n" +
"\n" +
".post-content .post-body spoiler .media-content-placeholder {\n" +
"    background: #687a86\n" +
"}\n" +
"\n" +
".post-content .post-body spoiler:focus, .post-content .post-body spoiler:hover {\n" +
"    background: #e7e9ee;\n" +
"    color: inherit\n" +
"}\n" +
"\n" +
".post-content .post-body spoiler:focus a, .post-content .post-body spoiler:hover a {\n" +
"    visibility: visible\n" +
"}\n" +
"\n" +
".post-content .post-body spoiler:focus .media-content-placeholder, .post-content .post-body spoiler:hover .media-content-placeholder {\n" +
"    background: 0 0\n" +
"}\n" +
"\n" +
".dark .post-content .post-body spoiler:focus, .dark .post-content .post-body spoiler:hover {\n" +
"    background: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".post-content .post-menu {\n" +
"    opacity: 0;\n" +
"    filter: alpha(opacity=0);\n" +
"    visibility: hidden;\n" +
"    position: absolute;\n" +
"    display: -ms-inline-flexbox;\n" +
"    display: inline-flex;\n" +
"    top: 3px;\n" +
"    right: 0;\n" +
"    margin-right: 4px;\n" +
"    overflow: visible\n" +
"}\n" +
"\n" +
".post-content .post-menu--refresh {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important;\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".touch .post-content .post-menu {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".post-content .post-menu .dropdown-toggle {\n" +
"    border-left: 2px solid;\n" +
"    border-color: #e7e9ee;\n" +
"    padding-left: 5px;\n" +
"    padding-right: 8px\n" +
"}\n" +
"\n" +
".embed-refresh .post-content .post-menu .dropdown-toggle {\n" +
"    border-left: none;\n" +
"    top: -1px\n" +
"}\n" +
"\n" +
".post-content .post-menu .dropdown-toggle .dropdown-toggle-icon {\n" +
"    display: inline-block;\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/ellipsis.94b0cd31829c4ae3174ca1dff048e390.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/ellipsis.94b0cd31829c4ae3174ca1dff048e390.svg);\n" +
"    background-color: #656c7a;\n" +
"    width: 20px;\n" +
"    height: 5px;\n" +
"    -webkit-mask-size: contain;\n" +
"    mask-size: contain\n" +
"}\n" +
"\n" +
".post-content .post-menu .dropdown-toggle .dropdown-toggle-icon:hover {\n" +
"    background-color: var(--publisher-color, #2e9fff) !important\n" +
"}\n" +
"\n" +
".dark .post-content .post-menu .dropdown-toggle .dropdown-toggle-icon {\n" +
"    background-color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".post-content .post-menu .dropdown-toggle .caret {\n" +
"    margin-top: 4px\n" +
"}\n" +
"\n" +
".dark .post-content .post-menu .dropdown-toggle {\n" +
"    color: rgba(255, 255, 255, .85) !important\n" +
"}\n" +
"\n" +
".post-content .post-menu .dropdown-menu {\n" +
"    position: absolute;\n" +
"    z-index: 1001;\n" +
"    left: auto;\n" +
"    right: 0;\n" +
"    top: 15px;\n" +
"    min-width: 100px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".embed-refresh .post-content .post-menu .dropdown-menu {\n" +
"    top: 18px;\n" +
"    right: 7px\n" +
"}\n" +
"\n" +
".post-content .post-menu .dropdown-menu .dropdown-item .dropdown-link {\n" +
"    display: block;\n" +
"    padding: 6px 8px;\n" +
"    white-space: nowrap;\n" +
"    font-size: 11px\n" +
"}\n" +
"\n" +
".post-content .post-menu.open .dropdown-toggle {\n" +
"    background: 0 0;\n" +
"    color: #2e9fff !important\n" +
"}\n" +
"\n" +
".post-content .post-menu.open .dropdown-toggle .dropdown-toggle-icon {\n" +
"    background-color: var(--publisher-color, #2e9fff)\n" +
"}\n" +
"\n" +
".post-content .post-menu.open .dropdown-menu {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".post-content .post-menu .post-menu-item {\n" +
"    margin: 0 0 0 8px\n" +
"}\n" +
"\n" +
".post-content .post-menu .post-menu-item > a {\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".post-content .post-menu .collapse a, .post-content .post-menu .expand a {\n" +
"    display: block;\n" +
"    font-size: 20px;\n" +
"    opacity: .6;\n" +
"    filter: alpha(opacity=60);\n" +
"    position: relative;\n" +
"    top: -6px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".embed-refresh .post-content .post-menu .collapse a, .embed-refresh .post-content .post-menu .expand a {\n" +
"    font-size: 30px\n" +
"}\n" +
"\n" +
".embed-refresh .post-content .post-menu .collapse a:hover, .embed-refresh .post-content .post-menu .expand a:hover {\n" +
"    color: var(--publisher-color, #2e9fff)\n" +
"}\n" +
"\n" +
".post-content .post-menu .collapse a:hover, .post-content .post-menu .expand a:hover {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100)\n" +
"}\n" +
"\n" +
".dark .post-content .post-menu .collapse a, .dark .post-content .post-menu .expand a {\n" +
"    color: rgba(255, 255, 255, .85) !important\n" +
"}\n" +
"\n" +
".post-content .post-menu .expand {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-content .post-body {\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".post-content .post-message-container {\n" +
"    position: relative;\n" +
"    overflow: hidden;\n" +
"    zoom: 1;\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
".post-content .post-message {\n" +
"    line-height: 21px\n" +
"}\n" +
"\n" +
".post-content .post-message:after, .post-content .post-message:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".post-content .post-message.loading {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/waiting.d548665a1a4b8d12cc68ed9f6e2141e2.gif) center left no-repeat;\n" +
"    min-height: 21px\n" +
"}\n" +
"\n" +
".post-content .post-message p {\n" +
"    line-height: 21px;\n" +
"    margin: 0 0 15px\n" +
"}\n" +
"\n" +
".post-content .post-message p:last-child {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".post-content .post-message blockquote, .post-content .post-message pre {\n" +
"    line-height: 21px;\n" +
"    margin: 0 0 15px;\n" +
"    border-left: 4px solid #687a86;\n" +
"    padding: 0 0 0 12px\n" +
"}\n" +
"\n" +
".post-content .post-message blockquote:last-child, .post-content .post-message pre:last-child {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".post-content .post-message pre {\n" +
"    overflow-x: auto\n" +
"}\n" +
"\n" +
".post-content .post-message code, .post-content .post-message pre {\n" +
"    font-size: 12px;\n" +
"    font-family: monaco, menlo, monospace\n" +
"}\n" +
"\n" +
".debug, .sans-serif, .sans-serif input, .sans-serif select, .sans-serif textarea {\n" +
"    font-family: \"Helvetica Neue\", arial, sans-serif\n" +
"}\n" +
"\n" +
".post-content .post-menu.open, .post-content:hover .post-menu {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".post-content:focus-within .post-menu {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important;\n" +
"    transform: none\n" +
"}\n" +
"\n" +
".email .icon-checkmark, .use-opacity-transitions .post-content.new.seen .indicator, .use-opacity-transitions .post-content.target.seen .indicator {\n" +
"    opacity: 0;\n" +
"    filter: alpha(opacity=0)\n" +
"}\n" +
"\n" +
".use-opacity-transitions .post-content.new .indicator, .use-opacity-transitions .post-content.target .indicator {\n" +
"    transition: opacity 10s linear\n" +
"}\n" +
"\n" +
".use-opacity-transitions .post-content footer .voting {\n" +
"    transition: opacity .3s\n" +
"}\n" +
"\n" +
".use-opacity-transitions .post-content footer .voting .control {\n" +
"    transition: opacity .2s linear\n" +
"}\n" +
"\n" +
".use-opacity-transitions .post-content footer .voting .vote-down .tooltip {\n" +
"    transition: opacity .2s\n" +
"}\n" +
"\n" +
".use-opacity-transitions .post-content header .dropdown .dropdown-menu {\n" +
"    transition: opacity .1s linear\n" +
"}\n" +
"\n" +
".use-opacity-transitions .post-content .share ul li {\n" +
"    transition-property: opacity, right\n" +
"}\n" +
"\n" +
".disabled.post-content {\n" +
"    opacity: .5\n" +
"}\n" +
"\n" +
".disabled.post-content a, .disabled.post-content footer menu .voting .vote-down, .disabled.post-content footer menu .voting .vote-up {\n" +
"    cursor: not-allowed\n" +
"}\n" +
"\n" +
".highlighted > .post-content {\n" +
"    padding: 12px;\n" +
"    border-radius: 4px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .post.highlighted > .post-content {\n" +
"    padding: 16px;\n" +
"    /*border-radius: 30px*/\n" +
"}\n" +
"\n" +
".mobile.embed-refresh .post-list .post.highlighted > .post-content {\n" +
"    padding: 24px 20px 16px\n" +
"}\n" +
"\n" +
".highlighted > .post-content.new .indicator, .highlighted > .post-content.target .indicator {\n" +
"    margin-top: 12px;\n" +
"    margin-left: 4px\n" +
"}\n" +
"\n" +
".embed-refresh .highlighted > .post-content.new .indicator, .embed-refresh .highlighted > .post-content.target .indicator {\n" +
"    margin-top: 24px\n" +
"}\n" +
"\n" +
".highlighted > .post-content .post-menu {\n" +
"    top: 18px;\n" +
"    right: 12px\n" +
"}\n" +
"\n" +
".highlighted > .post-content.collapsed header {\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".highlighted > .post-content.collapsed .post-list .post.minimized > .post-content header {\n" +
"    line-height: 12px\n" +
"}\n" +
"\n" +
".highlighted > .post-content.collapsed .post-byline {\n" +
"    margin-left: 12px;\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".highlighted > .post-content.collapsed .state-byline {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".highlighted > .post-content.collapsed, .highlighted > .post-content.minimized {\n" +
"    min-height: 48px\n" +
"}\n" +
"\n" +
".highlighted > .post-content .pinned-icon {\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/pin.8357c3e8734b95d157afe368a2fbb6c8.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/pin.8357c3e8734b95d157afe368a2fbb6c8.svg);\n" +
"    background-color: #687a86;\n" +
"    width: 24px;\n" +
"    height: 24px;\n" +
"    position: absolute;\n" +
"    top: -2px;\n" +
"    left: 8px\n" +
"}\n" +
"\n" +
".dark .highlighted > .post-content .pinned-icon {\n" +
"    background-color: rgba(255, 255, 255, .35)\n" +
"}\n" +
"\n" +
".mention {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".mention:before {\n" +
"    content: \"@\"\n" +
"}\n" +
"\n" +
".dark .mention:before {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
".badges-form .badges-action, .badges-form .moderate, .moderate-form .badges-action, .moderate-form .moderate {\n" +
"    border: 1px solid #c2c6cc;\n" +
"    background: 0 0;\n" +
"    width: auto;\n" +
"    max-width: 800px;\n" +
"    border-radius: 5px;\n" +
"    transition: all 250ms ease-in-out;\n" +
"    padding: 0 0 12px;\n" +
"    margin: 1em auto 0 60px\n" +
"}\n" +
"\n" +
".badges-form .badges-action:after, .badges-form .badges-action:before, .badges-form .moderate:after, .badges-form .moderate:before, .moderate-form .badges-action:after, .moderate-form .badges-action:before, .moderate-form .moderate:after, .moderate-form .moderate:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".children .badges-form .badges-action, .children .badges-form .moderate, .children .moderate-form .badges-action, .children .moderate-form .moderate {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .badges-form .badges-action, .badges-form .moderate, .children .badges-form .badges-action, .children .badges-form .moderate, .children .moderate-form .badges-action, .children .moderate-form .moderate, .mobile .badges-form .badges-action, .mobile .badges-form .moderate, .mobile .moderate-form .badges-action, .mobile .moderate-form .moderate, .moderate-form .badges-action, .moderate-form .moderate {\n" +
"        margin-left: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".badges-form .badges-action.loading, .badges-form .moderate.loading, .moderate-form .badges-action.loading, .moderate-form .moderate.loading {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/waiting.d548665a1a4b8d12cc68ed9f6e2141e2.gif) center center no-repeat;\n" +
"    min-height: 22px\n" +
"}\n" +
"\n" +
".badges-form .badges-action.loading *, .badges-form .moderate.loading *, .moderate-form .badges-action.loading *, .moderate-form .moderate.loading * {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__content, .badges-form .moderate .admin-modal__content, .moderate-form .badges-action .admin-modal__content, .moderate-form .moderate .admin-modal__content {\n" +
"    color: #494e58;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    padding-bottom: 14px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__content > div, .badges-form .moderate .admin-modal__content > div, .moderate-form .badges-action .admin-modal__content > div, .moderate-form .moderate .admin-modal__content > div {\n" +
"    width: unset\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__footer, .badges-form .moderate .admin-modal__footer, .moderate-form .badges-action .admin-modal__footer, .moderate-form .moderate .admin-modal__footer {\n" +
"    border-top: 1px solid #ebeef2;\n" +
"    margin: 0;\n" +
"    padding: 10px 18px 0\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__footer .button, .badges-form .moderate .admin-modal__footer .button, .moderate-form .badges-action .admin-modal__footer .button, .moderate-form .moderate .admin-modal__footer .button {\n" +
"    font-size: 12px;\n" +
"    font-weight: 700;\n" +
"    line-height: normal;\n" +
"    border-radius: 3px;\n" +
"    padding: 8px 12px;\n" +
"    transition: all 250ms ease-in-out\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__footer .button.button-fill:hover, .badges-form .moderate .admin-modal__footer .button.button-fill:hover, .moderate-form .badges-action .admin-modal__footer .button.button-fill:hover, .moderate-form .moderate .admin-modal__footer .button.button-fill:hover {\n" +
"    background: #546673\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__footer .button:first-child, .badges-form .moderate .admin-modal__footer .button:first-child, .moderate-form .badges-action .admin-modal__footer .button:first-child, .moderate-form .moderate .admin-modal__footer .button:first-child {\n" +
"    margin-right: 6px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .admin-modal__footer .button, .badges-form .moderate .admin-modal__footer .button, .moderate-form .badges-action .admin-modal__footer .button, .moderate-form .moderate .admin-modal__footer .button, .no-touch .badges-form .badges-action .admin-modal__footer .button:hover, .no-touch .badges-form .moderate .admin-modal__footer .button:hover, .no-touch .moderate-form .badges-action .admin-modal__footer .button:hover, .no-touch .moderate-form .moderate .admin-modal__footer .button:hover {\n" +
"    border: initial;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__reason, .badges-form .badges-action .modal__config label, .badges-form .badges-action .modal__option, .badges-form .moderate .flagging__reason, .badges-form .moderate .modal__config label, .badges-form .moderate .modal__option, .moderate-form .badges-action .flagging__reason, .moderate-form .badges-action .modal__config label, .moderate-form .badges-action .modal__option, .moderate-form .moderate .flagging__reason, .moderate-form .moderate .modal__config label, .moderate-form .moderate .modal__option {\n" +
"    display: block;\n" +
"    font-size: 12px;\n" +
"    width: 100%;\n" +
"    overflow: visible;\n" +
"    white-space: normal;\n" +
"    margin-bottom: 10px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__reason input, .badges-form .badges-action .modal__config label input, .badges-form .badges-action .modal__option input, .badges-form .moderate .flagging__reason input, .badges-form .moderate .modal__config label input, .badges-form .moderate .modal__option input, .moderate-form .badges-action .flagging__reason input, .moderate-form .badges-action .modal__config label input, .moderate-form .badges-action .modal__option input, .moderate-form .moderate .flagging__reason input, .moderate-form .moderate .modal__config label input, .moderate-form .moderate .modal__option input {\n" +
"    float: left\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__reason .input--textbox, .badges-form .badges-action .modal__config label .input--textbox, .badges-form .badges-action .modal__option .input--textbox, .badges-form .moderate .flagging__reason .input--textbox, .badges-form .moderate .modal__config label .input--textbox, .badges-form .moderate .modal__option .input--textbox, .moderate-form .badges-action .flagging__reason .input--textbox, .moderate-form .badges-action .modal__config label .input--textbox, .moderate-form .badges-action .modal__option .input--textbox, .moderate-form .moderate .flagging__reason .input--textbox, .moderate-form .moderate .modal__config label .input--textbox, .moderate-form .moderate .modal__option .input--textbox {\n" +
"    float: none\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__reason .alert, .badges-form .badges-action .modal__config label .alert, .badges-form .badges-action .modal__option .alert, .badges-form .moderate .flagging__reason .alert, .badges-form .moderate .modal__config label .alert, .badges-form .moderate .modal__option .alert, .moderate-form .badges-action .flagging__reason .alert, .moderate-form .badges-action .modal__config label .alert, .moderate-form .badges-action .modal__option .alert, .moderate-form .moderate .flagging__reason .alert, .moderate-form .moderate .modal__config label .alert, .moderate-form .moderate .modal__option .alert {\n" +
"    background: #ffd34f;\n" +
"    padding: 2px 10px;\n" +
"    margin-left: 5px;\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__title, .badges-form .badges-action .modal__option .modal__option-text, .badges-form .moderate .flagging__title, .badges-form .moderate .modal__option .modal__option-text, .moderate-form .badges-action .flagging__title, .moderate-form .badges-action .modal__option .modal__option-text, .moderate-form .moderate .flagging__title, .moderate-form .moderate .modal__option .modal__option-text {\n" +
"    font-size: 14px\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .badges-form .badges-action .flagging__title, .badges-form .badges-action .modal__option .modal__option-text, .badges-form .moderate .flagging__title, .badges-form .moderate .modal__option .modal__option-text, .moderate-form .badges-action .flagging__title, .moderate-form .badges-action .modal__option .modal__option-text, .moderate-form .moderate .flagging__title, .moderate-form .moderate .modal__option .modal__option-text {\n" +
"        font-size: 13px\n" +
"    }\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option, .badges-form .moderate .modal__option, .moderate-form .badges-action .modal__option, .moderate-form .moderate .modal__option {\n" +
"    cursor: pointer;\n" +
"    background: rgba(0, 0, 0, .03);\n" +
"    border: 1px solid #ebeef2;\n" +
"    border-width: 0 1px 1px 0;\n" +
"    transition: all .2s ease-in-out;\n" +
"    margin-bottom: 0;\n" +
"    padding-right: 18px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option .modal__option-text, .badges-form .moderate .modal__option .modal__option-text, .moderate-form .badges-action .modal__option .modal__option-text, .moderate-form .moderate .modal__option .modal__option-text {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    color: #687a86;\n" +
"    height: 18px;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option .modal__option-text .icon-upgrade-arrow-pro, .badges-form .moderate .modal__option .modal__option-text .icon-upgrade-arrow-pro, .moderate-form .badges-action .modal__option .modal__option-text .icon-upgrade-arrow-pro, .moderate-form .moderate .modal__option .modal__option-text .icon-upgrade-arrow-pro {\n" +
"    font-size: 16px;\n" +
"    height: 16px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option:hover, .badges-form .moderate .modal__option:hover, .moderate-form .badges-action .modal__option:hover, .moderate-form .moderate .modal__option:hover {\n" +
"    background: rgba(0, 0, 0, .08)\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option.-selected, .badges-form .moderate .modal__option.-selected, .moderate-form .badges-action .modal__option.-selected, .moderate-form .moderate .modal__option.-selected {\n" +
"    background: 0 0;\n" +
"    border-bottom: none\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option.-selected .modal__option-text, .badges-form .moderate .modal__option.-selected .modal__option-text, .moderate-form .badges-action .modal__option.-selected .modal__option-text, .moderate-form .moderate .modal__option.-selected .modal__option-text {\n" +
"    color: #2e9fff;\n" +
"    font-weight: 600\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option.-disabled, .badges-form .moderate .modal__option.-disabled, .moderate-form .badges-action .modal__option.-disabled, .moderate-form .moderate .modal__option.-disabled {\n" +
"    cursor: default\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option.-disabled .modal__option-text, .badges-form .moderate .modal__option.-disabled .modal__option-text, .moderate-form .badges-action .modal__option.-disabled .modal__option-text, .moderate-form .moderate .modal__option.-disabled .modal__option-text {\n" +
"    color: #c2c6cc\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option.-disabled:hover, .badges-form .moderate .modal__option.-disabled:hover, .moderate-form .badges-action .modal__option.-disabled:hover, .moderate-form .moderate .modal__option.-disabled:hover {\n" +
"    background: rgba(0, 0, 0, .03)\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option input[type=radio], .badges-form .moderate .modal__option input[type=radio], .moderate-form .badges-action .modal__option input[type=radio], .moderate-form .moderate .modal__option input[type=radio] {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option:first-of-type, .badges-form .moderate .modal__option:first-of-type, .moderate-form .badges-action .modal__option:first-of-type, .moderate-form .moderate .modal__option:first-of-type {\n" +
"    border-left: none;\n" +
"    border-top-left-radius: 4px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option:last-of-type, .badges-form .moderate .modal__option:last-of-type, .moderate-form .badges-action .modal__option:last-of-type, .moderate-form .moderate .modal__option:last-of-type {\n" +
"    border-right: none;\n" +
"    border-top-right-radius: 4px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__reason-text, .badges-form .badges-action .modal__option-text, .badges-form .moderate .flagging__reason-text, .badges-form .moderate .modal__option-text, .moderate-form .badges-action .flagging__reason-text, .moderate-form .badges-action .modal__option-text, .moderate-form .moderate .flagging__reason-text, .moderate-form .moderate .modal__option-text {\n" +
"    margin-bottom: 2px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging__reason-text .icon-upgrade-arrow-pro, .badges-form .badges-action .modal__option-text .icon-upgrade-arrow-pro, .badges-form .moderate .flagging__reason-text .icon-upgrade-arrow-pro, .badges-form .moderate .modal__option-text .icon-upgrade-arrow-pro, .moderate-form .badges-action .flagging__reason-text .icon-upgrade-arrow-pro, .moderate-form .badges-action .modal__option-text .icon-upgrade-arrow-pro, .moderate-form .moderate .flagging__reason-text .icon-upgrade-arrow-pro, .moderate-form .moderate .modal__option-text .icon-upgrade-arrow-pro {\n" +
"    margin-left: 5px;\n" +
"    font-size: 15px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option-subtext, .badges-form .moderate .modal__option-subtext, .moderate-form .badges-action .modal__option-subtext, .moderate-form .moderate .modal__option-subtext {\n" +
"    font-size: 12px;\n" +
"    width: auto;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__option-subtext label, .badges-form .moderate .modal__option-subtext label, .moderate-form .badges-action .modal__option-subtext label, .moderate-form .moderate .modal__option-subtext label {\n" +
"    display: inline-block;\n" +
"    margin: 8px 6px 0 0;\n" +
"    padding-left: 6px\n" +
"}\n" +
"\n" +
".-selected .badges-form .badges-action .modal__option-subtext, .-selected .badges-form .moderate .modal__option-subtext, .-selected .moderate-form .badges-action .modal__option-subtext, .-selected .moderate-form .moderate .modal__option-subtext {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__description, .badges-form .moderate .modal__description, .moderate-form .badges-action .modal__description, .moderate-form .moderate .modal__description {\n" +
"    -ms-flex-order: 4;\n" +
"    order: 4;\n" +
"    padding: 16px 18px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__description .modal__option-subtext, .badges-form .moderate .modal__description .modal__option-subtext, .moderate-form .badges-action .modal__description .modal__option-subtext, .moderate-form .moderate .modal__description .modal__option-subtext {\n" +
"    font-size: 12px;\n" +
"    line-height: 1.5;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__description .modal__option-subtext label, .badges-form .moderate .modal__description .modal__option-subtext label, .moderate-form .badges-action .modal__description .modal__option-subtext label, .moderate-form .moderate .modal__description .modal__option-subtext label {\n" +
"    color: #494e58;\n" +
"    font-size: 12px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__description .modal__option-subtext label input, .badges-form .moderate .modal__description .modal__option-subtext label input, .moderate-form .badges-action .modal__description .modal__option-subtext label input, .moderate-form .moderate .modal__description .modal__option-subtext label input {\n" +
"    vertical-align: bottom\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__description .fieldset__block--checkbox, .badges-form .moderate .modal__description .fieldset__block--checkbox, .moderate-form .badges-action .modal__description .fieldset__block--checkbox, .moderate-form .moderate .modal__description .fieldset__block--checkbox {\n" +
"    display: block;\n" +
"    color: #494e58;\n" +
"    padding-bottom: 0\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__config, .badges-form .moderate .modal__config, .moderate-form .badges-action .modal__config, .moderate-form .moderate .modal__config {\n" +
"    padding: 4px 24px 0\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__config .modal__option-subtext label, .badges-form .moderate .modal__config .modal__option-subtext label, .moderate-form .badges-action .modal__config .modal__option-subtext label, .moderate-form .moderate .modal__config .modal__option-subtext label {\n" +
"    padding-left: 6px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__config .flagging__reason-subtext, .badges-form .moderate .modal__config .flagging__reason-subtext, .moderate-form .badges-action .modal__config .flagging__reason-subtext, .moderate-form .moderate .modal__config .flagging__reason-subtext {\n" +
"    padding-bottom: 5px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__config .modal__reason, .badges-form .moderate .modal__config .modal__reason, .moderate-form .badges-action .modal__config .modal__reason, .moderate-form .moderate .modal__config .modal__reason {\n" +
"    margin: 16px 0 5px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__config .modal__reason input, .badges-form .moderate .modal__config .modal__reason input, .moderate-form .badges-action .modal__config .modal__reason input, .moderate-form .moderate .modal__config .modal__reason input {\n" +
"    display: block;\n" +
"    margin: 5px 0 0;\n" +
"    line-height: 20px;\n" +
"    width: 100%;\n" +
"    max-width: 450px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__config .modal__error, .badges-form .moderate .modal__config .modal__error, .moderate-form .badges-action .modal__config .modal__error, .moderate-form .moderate .modal__config .modal__error {\n" +
"    color: #f05f70;\n" +
"    font-weight: 600\n" +
"}\n" +
"\n" +
".badges-form .badges-action input[type=text], .badges-form .badges-action input[type=number], .badges-form .badges-action select, .badges-form .moderate input[type=text], .badges-form .moderate input[type=number], .badges-form .moderate select, .moderate-form .badges-action input[type=text], .moderate-form .badges-action input[type=number], .moderate-form .badges-action select, .moderate-form .moderate input[type=text], .moderate-form .moderate input[type=number], .moderate-form .moderate select {\n" +
"    color: #494e58;\n" +
"    height: 20px;\n" +
"    border: 1px solid #c2c9d4;\n" +
"    border-radius: 2px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form, .badges-form .badges-action .flagging__blocking-complete, .badges-form .badges-action .flagging__blocking-form, .badges-form .moderate .flagging-form, .badges-form .moderate .flagging__blocking-complete, .badges-form .moderate .flagging__blocking-form, .moderate-form .badges-action .flagging-form, .moderate-form .badges-action .flagging__blocking-complete, .moderate-form .badges-action .flagging__blocking-form, .moderate-form .moderate .flagging-form, .moderate-form .moderate .flagging__blocking-complete, .moderate-form .moderate .flagging__blocking-form {\n" +
"    color: #494e58;\n" +
"    border-radius: 5px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__title, .badges-form .badges-action .flagging__blocking-complete .flagging__title, .badges-form .badges-action .flagging__blocking-form .flagging__title, .badges-form .moderate .flagging-form .flagging__title, .badges-form .moderate .flagging__blocking-complete .flagging__title, .badges-form .moderate .flagging__blocking-form .flagging__title, .moderate-form .badges-action .flagging-form .flagging__title, .moderate-form .badges-action .flagging__blocking-complete .flagging__title, .moderate-form .badges-action .flagging__blocking-form .flagging__title, .moderate-form .moderate .flagging-form .flagging__title, .moderate-form .moderate .flagging__blocking-complete .flagging__title, .moderate-form .moderate .flagging__blocking-form .flagging__title {\n" +
"    border-bottom: 1px solid #ebeef2;\n" +
"    padding: 10px 12px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__blocking-complete-content, .badges-form .badges-action .flagging-form .flagging__blocking-content, .badges-form .badges-action .flagging-form .flagging__content, .badges-form .badges-action .flagging__blocking-complete .flagging__blocking-complete-content, .badges-form .badges-action .flagging__blocking-complete .flagging__blocking-content, .badges-form .badges-action .flagging__blocking-complete .flagging__content, .badges-form .badges-action .flagging__blocking-form .flagging__blocking-complete-content, .badges-form .badges-action .flagging__blocking-form .flagging__blocking-content, .badges-form .badges-action .flagging__blocking-form .flagging__content, .badges-form .moderate .flagging-form .flagging__blocking-complete-content, .badges-form .moderate .flagging-form .flagging__blocking-content, .badges-form .moderate .flagging-form .flagging__content, .badges-form .moderate .flagging__blocking-complete .flagging__blocking-complete-content, .badges-form .moderate .flagging__blocking-complete .flagging__blocking-content, .badges-form .moderate .flagging__blocking-complete .flagging__content, .badges-form .moderate .flagging__blocking-form .flagging__blocking-complete-content, .badges-form .moderate .flagging__blocking-form .flagging__blocking-content, .badges-form .moderate .flagging__blocking-form .flagging__content, .moderate-form .badges-action .flagging-form .flagging__blocking-complete-content, .moderate-form .badges-action .flagging-form .flagging__blocking-content, .moderate-form .badges-action .flagging-form .flagging__content, .moderate-form .badges-action .flagging__blocking-complete .flagging__blocking-complete-content, .moderate-form .badges-action .flagging__blocking-complete .flagging__blocking-content, .moderate-form .badges-action .flagging__blocking-complete .flagging__content, .moderate-form .badges-action .flagging__blocking-form .flagging__blocking-complete-content, .moderate-form .badges-action .flagging__blocking-form .flagging__blocking-content, .moderate-form .badges-action .flagging__blocking-form .flagging__content, .moderate-form .moderate .flagging-form .flagging__blocking-complete-content, .moderate-form .moderate .flagging-form .flagging__blocking-content, .moderate-form .moderate .flagging-form .flagging__content, .moderate-form .moderate .flagging__blocking-complete .flagging__blocking-complete-content, .moderate-form .moderate .flagging__blocking-complete .flagging__blocking-content, .moderate-form .moderate .flagging__blocking-complete .flagging__content, .moderate-form .moderate .flagging__blocking-form .flagging__blocking-complete-content, .moderate-form .moderate .flagging__blocking-form .flagging__blocking-content, .moderate-form .moderate .flagging__blocking-form .flagging__content {\n" +
"    font-size: 14px;\n" +
"    padding: 12px 18px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__subtitle, .badges-form .badges-action .flagging__blocking-complete .flagging__subtitle, .badges-form .badges-action .flagging__blocking-form .flagging__subtitle, .badges-form .moderate .flagging-form .flagging__subtitle, .badges-form .moderate .flagging__blocking-complete .flagging__subtitle, .badges-form .moderate .flagging__blocking-form .flagging__subtitle, .moderate-form .badges-action .flagging-form .flagging__subtitle, .moderate-form .badges-action .flagging__blocking-complete .flagging__subtitle, .moderate-form .badges-action .flagging__blocking-form .flagging__subtitle, .moderate-form .moderate .flagging-form .flagging__subtitle, .moderate-form .moderate .flagging__blocking-complete .flagging__subtitle, .moderate-form .moderate .flagging__blocking-form .flagging__subtitle {\n" +
"    font-size: 14px;\n" +
"    margin: 0 0 10px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__reason, .badges-form .badges-action .flagging__blocking-complete .flagging__reason, .badges-form .badges-action .flagging__blocking-form .flagging__reason, .badges-form .moderate .flagging-form .flagging__reason, .badges-form .moderate .flagging__blocking-complete .flagging__reason, .badges-form .moderate .flagging__blocking-form .flagging__reason, .moderate-form .badges-action .flagging-form .flagging__reason, .moderate-form .badges-action .flagging__blocking-complete .flagging__reason, .moderate-form .badges-action .flagging__blocking-form .flagging__reason, .moderate-form .moderate .flagging-form .flagging__reason, .moderate-form .moderate .flagging__blocking-complete .flagging__reason, .moderate-form .moderate .flagging__blocking-form .flagging__reason {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    margin-bottom: 0;\n" +
"    padding: 5px 12px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__reason input[type=radio], .badges-form .badges-action .flagging__blocking-complete .flagging__reason input[type=radio], .badges-form .badges-action .flagging__blocking-form .flagging__reason input[type=radio], .badges-form .moderate .flagging-form .flagging__reason input[type=radio], .badges-form .moderate .flagging__blocking-complete .flagging__reason input[type=radio], .badges-form .moderate .flagging__blocking-form .flagging__reason input[type=radio], .moderate-form .badges-action .flagging-form .flagging__reason input[type=radio], .moderate-form .badges-action .flagging__blocking-complete .flagging__reason input[type=radio], .moderate-form .badges-action .flagging__blocking-form .flagging__reason input[type=radio], .moderate-form .moderate .flagging-form .flagging__reason input[type=radio], .moderate-form .moderate .flagging__blocking-complete .flagging__reason input[type=radio], .moderate-form .moderate .flagging__blocking-form .flagging__reason input[type=radio] {\n" +
"    margin-right: 6px\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__reason .flagging__reason-text, .badges-form .badges-action .flagging__blocking-complete .flagging__reason .flagging__reason-text, .badges-form .badges-action .flagging__blocking-form .flagging__reason .flagging__reason-text, .badges-form .moderate .flagging-form .flagging__reason .flagging__reason-text, .badges-form .moderate .flagging__blocking-complete .flagging__reason .flagging__reason-text, .badges-form .moderate .flagging__blocking-form .flagging__reason .flagging__reason-text, .moderate-form .badges-action .flagging-form .flagging__reason .flagging__reason-text, .moderate-form .badges-action .flagging__blocking-complete .flagging__reason .flagging__reason-text, .moderate-form .badges-action .flagging__blocking-form .flagging__reason .flagging__reason-text, .moderate-form .moderate .flagging-form .flagging__reason .flagging__reason-text, .moderate-form .moderate .flagging__blocking-complete .flagging__reason .flagging__reason-text, .moderate-form .moderate .flagging__blocking-form .flagging__reason .flagging__reason-text {\n" +
"    -ms-flex-item-align: center;\n" +
"    -ms-grid-row-align: center;\n" +
"    align-self: center;\n" +
"    margin-bottom: 0\n" +
"}\n" +
"\n" +
".badges-form .badges-action .flagging-form .flagging__reason-subtext, .badges-form .badges-action .flagging__blocking-complete .flagging__reason-subtext, .badges-form .badges-action .flagging__blocking-form .flagging__reason-subtext, .badges-form .moderate .flagging-form .flagging__reason-subtext, .badges-form .moderate .flagging__blocking-complete .flagging__reason-subtext, .badges-form .moderate .flagging__blocking-form .flagging__reason-subtext, .moderate-form .badges-action .flagging-form .flagging__reason-subtext, .moderate-form .badges-action .flagging__blocking-complete .flagging__reason-subtext, .moderate-form .badges-action .flagging__blocking-form .flagging__reason-subtext, .moderate-form .moderate .flagging-form .flagging__reason-subtext, .moderate-form .moderate .flagging__blocking-complete .flagging__reason-subtext, .moderate-form .moderate .flagging__blocking-form .flagging__reason-subtext {\n" +
"    font-size: 12px;\n" +
"    line-height: 1.35;\n" +
"    margin: 10px 0 0\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action, .dark .badges-form .moderate, .dark .moderate-form .badges-action, .dark .moderate-form .moderate {\n" +
"    background: rgba(255, 255, 255, .08);\n" +
"    color: rgba(255, 255, 255, .7);\n" +
"    border-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .modal__option, .dark .badges-form .moderate .modal__option, .dark .moderate-form .badges-action .modal__option, .dark .moderate-form .moderate .modal__option {\n" +
"    background: rgba(255, 255, 255, .08);\n" +
"    border-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .modal__option .modal__option-text, .dark .badges-form .moderate .modal__option .modal__option-text, .dark .moderate-form .badges-action .modal__option .modal__option-text, .dark .moderate-form .moderate .modal__option .modal__option-text {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .modal__option.-selected, .dark .badges-form .badges-action .modal__option:hover, .dark .badges-form .moderate .modal__option.-selected, .dark .badges-form .moderate .modal__option:hover, .dark .moderate-form .badges-action .modal__option.-selected, .dark .moderate-form .badges-action .modal__option:hover, .dark .moderate-form .moderate .modal__option.-selected, .dark .moderate-form .moderate .modal__option:hover {\n" +
"    background: 0 0\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .modal__option.-selected .modal__option-text, .dark .badges-form .badges-action .modal__option:hover .modal__option-text, .dark .badges-form .moderate .modal__option.-selected .modal__option-text, .dark .badges-form .moderate .modal__option:hover .modal__option-text, .dark .moderate-form .badges-action .modal__option.-selected .modal__option-text, .dark .moderate-form .badges-action .modal__option:hover .modal__option-text, .dark .moderate-form .moderate .modal__option.-selected .modal__option-text, .dark .moderate-form .moderate .modal__option:hover .modal__option-text {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .modal__option.-disabled .modal__option-text, .dark .badges-form .badges-action .modal__option.-disabled:hover .modal__option-text, .dark .badges-form .moderate .modal__option.-disabled .modal__option-text, .dark .badges-form .moderate .modal__option.-disabled:hover .modal__option-text, .dark .moderate-form .badges-action .modal__option.-disabled .modal__option-text, .dark .moderate-form .badges-action .modal__option.-disabled:hover .modal__option-text, .dark .moderate-form .moderate .modal__option.-disabled .modal__option-text, .dark .moderate-form .moderate .modal__option.-disabled:hover .modal__option-text {\n" +
"    color: rgba(255, 255, 255, .35)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .modal__option.-disabled:hover, .dark .badges-form .moderate .modal__option.-disabled:hover, .dark .moderate-form .badges-action .modal__option.-disabled:hover, .dark .moderate-form .moderate .modal__option.-disabled:hover {\n" +
"    background: rgba(255, 255, 255, .08)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .flagging-form, .dark .badges-form .badges-action .flagging__blocking-complete-content, .dark .badges-form .badges-action .flagging__blocking-content, .dark .badges-form .badges-action .modal__config, .dark .badges-form .badges-action .modal__option-subtext, .dark .badges-form .badges-action .modal__option-subtext label, .dark .badges-form .badges-action .modal__option-subtext label span, .dark .badges-form .moderate .flagging-form, .dark .badges-form .moderate .flagging__blocking-complete-content, .dark .badges-form .moderate .flagging__blocking-content, .dark .badges-form .moderate .modal__config, .dark .badges-form .moderate .modal__option-subtext, .dark .badges-form .moderate .modal__option-subtext label, .dark .badges-form .moderate .modal__option-subtext label span, .dark .moderate-form .badges-action .flagging-form, .dark .moderate-form .badges-action .flagging__blocking-complete-content, .dark .moderate-form .badges-action .flagging__blocking-content, .dark .moderate-form .badges-action .modal__config, .dark .moderate-form .badges-action .modal__option-subtext, .dark .moderate-form .badges-action .modal__option-subtext label, .dark .moderate-form .badges-action .modal__option-subtext label span, .dark .moderate-form .moderate .flagging-form, .dark .moderate-form .moderate .flagging__blocking-complete-content, .dark .moderate-form .moderate .flagging__blocking-content, .dark .moderate-form .moderate .modal__config, .dark .moderate-form .moderate .modal__option-subtext, .dark .moderate-form .moderate .modal__option-subtext label, .dark .moderate-form .moderate .modal__option-subtext label span {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .badges-form .badges-action .admin-modal__footer, .dark .badges-form .badges-action .flagging__title, .dark .badges-form .moderate .admin-modal__footer, .dark .badges-form .moderate .flagging__title, .dark .moderate-form .badges-action .admin-modal__footer, .dark .moderate-form .badges-action .flagging__title, .dark .moderate-form .moderate .admin-modal__footer, .dark .moderate-form .moderate .flagging__title {\n" +
"    border-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".badges-form.flag-form .moderate, .moderate-form.flag-form .moderate {\n" +
"    background: rgba(0, 0, 0, .03)\n" +
"}\n" +
"\n" +
".dark .badges-form.flag-form .moderate, .dark .moderate-form.flag-form .moderate {\n" +
"    background: rgba(255, 255, 255, .08)\n" +
"}\n" +
"\n" +
".voters-outer:after, .voters-outer:before {\n" +
"    background-repeat: repeat-x;\n" +
"    background-color: rgba(255, 255, 255, 0)\n" +
"}\n" +
"\n" +
".dark .badges-form.flag-form .moderate .flagging__reason-text, .dark .badges-form.flag-form .moderate .flagging__subtitle, .dark .badges-form.flag-form .moderate .flagging__title, .dark .moderate-form.flag-form .moderate .flagging__reason-text, .dark .moderate-form.flag-form .moderate .flagging__subtitle, .dark .moderate-form.flag-form .moderate .flagging__title {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".dark .badges-form.flag-form .moderate .flagging__reason-text .text-small, .dark .moderate-form.flag-form .moderate .flagging__reason-text .text-small {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".updatable {\n" +
"    transition: all .3s linear\n" +
"}\n" +
"\n" +
".updatable.update {\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
".post-count .update {\n" +
"    color: #494e58\n" +
"}\n" +
"\n" +
".voters-outer:after, .voters-outer:before {\n" +
"    content: \"\";\n" +
"    display: block;\n" +
"    height: 10px;\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    z-index: 900;\n" +
"    border-radius: 5px\n" +
"}\n" +
"\n" +
".voters-outer:before {\n" +
"    top: 0;\n" +
"    background-image: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));\n" +
"    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#00ffffff', GradientType=0)\n" +
"}\n" +
"\n" +
".voters-outer:after {\n" +
"    bottom: 0;\n" +
"    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);\n" +
"    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffffff', GradientType=0)\n" +
"}\n" +
"\n" +
".mobile .voters-outer {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".voters-outer .voters {\n" +
"    max-height: 400px;\n" +
"    width: 213px;\n" +
"    padding-right: 0;\n" +
"    padding-bottom: 0;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".voters-outer .voters .scroll-measure {\n" +
"    overflow: hidden;\n" +
"    margin-top: -15px;\n" +
"    padding-top: 15px\n" +
"}\n" +
"\n" +
".voters-outer .voters .user {\n" +
"    margin: 0 0 8px;\n" +
"    padding: 0;\n" +
"    height: 30px;\n" +
"    position: relative;\n" +
"    float: left;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".embed-refresh .voters-outer .voters .user:last-of-type {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".voters-outer .voters .user .avatar {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    top: 0 !important;\n" +
"    left: 0;\n" +
"    float: left\n" +
"}\n" +
"\n" +
".voters-outer .voters .user .avatar img {\n" +
"    width: 30px;\n" +
"    height: 30px;\n" +
"    min-width: 30px !important;\n" +
"    min-height: 30px !important\n" +
"}\n" +
"\n" +
".voters-outer .voters .user .username {\n" +
"    width: 137px;\n" +
"    padding: 5px 0 0 8px;\n" +
"    line-height: 1.2em;\n" +
"    display: block;\n" +
"    font-weight: 700;\n" +
"    text-overflow: ellipsis;\n" +
"    white-space: nowrap;\n" +
"    color: inherit;\n" +
"    float: left;\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".voters-outer .voters .user .username:hover {\n" +
"    color: #000\n" +
"}\n" +
"\n" +
".voters-outer .voters .user .username--refresh {\n" +
"    font-size: 16px;\n" +
"    font-weight: 500;\n" +
"    letter-spacing: .05em;\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".voters-outer .voters .user .username--refresh:hover {\n" +
"    color: var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
".voters-outer .voters .highlight {\n" +
"    animation-name: new-voter-insertion;\n" +
"    animation-duration: .75s;\n" +
"    animation-timing-function: ease-in-out;\n" +
"    animation-delay: 0\n" +
"}\n" +
"\n" +
".voters-outer .voters li[data-role=guest].highlight {\n" +
"    animation-name: new-voter-guest;\n" +
"    animation-duration: 1.25s;\n" +
"    animation-timing-function: ease-in-out;\n" +
"    animation-delay: 0\n" +
"}\n" +
"\n" +
".voters-outer--refresh:after, .voters-outer--refresh:before {\n" +
"    background: 0 0\n" +
"}\n" +
"\n" +
".user-activity .avatar {\n" +
"    top: 0\n" +
"}\n" +
"\n" +
".user-activity ul {\n" +
"    margin-bottom: 35px\n" +
"}\n" +
"\n" +
".user-activity img.user {\n" +
"    display: inline-block;\n" +
"    position: relative;\n" +
"    top: 5px;\n" +
"    margin-right: 5px;\n" +
"    border-radius: 3px;\n" +
"    width: 24px;\n" +
"    height: 24px\n" +
"}\n" +
"\n" +
".user-activity li {\n" +
"    padding: 0 0 0 34px;\n" +
"    position: relative;\n" +
"    line-height: 22px;\n" +
"    margin-bottom: 20px\n" +
"}\n" +
"\n" +
".user-activity li header {\n" +
"    padding-top: 4px;\n" +
"    display: block;\n" +
"    margin-bottom: 9px;\n" +
"    font-size: 12px;\n" +
"    line-height: 18px;\n" +
"    color: #888\n" +
"}\n" +
"\n" +
".bullet, .user-activity li article blockquote p {\n" +
"    line-height: 1.4\n" +
"}\n" +
"\n" +
".user-activity li article {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".caret, .help-icon {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".user-activity li article blockquote {\n" +
"    border-left: 4px solid;\n" +
"    border-color: #687a86;\n" +
"    padding-left: 12px\n" +
"}\n" +
"\n" +
".debug {\n" +
"    margin-bottom: 2em\n" +
"}\n" +
"\n" +
".debug li {\n" +
"    line-height: 1.5em\n" +
"}\n" +
"\n" +
".help-icon {\n" +
"    border-radius: 9px;\n" +
"    border: 2px solid #687a86;\n" +
"    padding: 2px 4px;\n" +
"    margin-top: -2px;\n" +
"    font-size: 12px;\n" +
"    height: 18px;\n" +
"    width: 19px\n" +
"}\n" +
"\n" +
".help-icon:before {\n" +
"    content: '?';\n" +
"    font-weight: 700;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".dark .help-icon {\n" +
"    border-color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .help-icon:before {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".caret {\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    text-indent: -99999px;\n" +
"    vertical-align: top;\n" +
"    border-left: 4px solid transparent;\n" +
"    border-right: 4px solid transparent;\n" +
"    border-top: 4px solid #000;\n" +
"    opacity: .3;\n" +
"    content: \"\\2193\"\n" +
"}\n" +
"\n" +
".caret--refresh {\n" +
"    border-left: 5px solid transparent;\n" +
"    border-right: 5px solid transparent;\n" +
"    border-top: 9px solid #000;\n" +
"    opacity: .6\n" +
"}\n" +
"\n" +
".dark .btn .caret, .dark .caret {\n" +
"    border-top-color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".dark .caret {\n" +
"    opacity: .6\n" +
"}\n" +
"\n" +
".bullet {\n" +
"    padding: 0;\n" +
"    color: #c2c6cc\n" +
"}\n" +
"\n" +
".serif, .serif input, .serif select, .serif textarea {\n" +
"    font-family: Georgia, Times, serif\n" +
"}\n" +
"\n" +
"@keyframes rotate-loading {\n" +
"    0% {\n" +
"        transform: rotate(0)\n" +
"    }\n" +
"    100% {\n" +
"        transform: rotate(360deg)\n" +
"    }\n" +
"}\n" +
"\n" +
"@keyframes new-voter-insertion {\n" +
"    0% {\n" +
"        opacity: 0;\n" +
"        margin-top: -50px\n" +
"    }\n" +
"    50% {\n" +
"        margin-top: 0\n" +
"    }\n" +
"    100% {\n" +
"        opacity: 1;\n" +
"        margin-top: 0\n" +
"    }\n" +
"}\n" +
"\n" +
"@keyframes new-voter-guest {\n" +
"    0% {\n" +
"        color: inherit\n" +
"    }\n" +
"    100% {\n" +
"        color: #656c7a\n" +
"    }\n" +
"}\n" +
"\n" +
".nav {\n" +
"    position: relative;\n" +
"    margin: 0 0 -6px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".nav:after, .nav:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".nav .caret {\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    right: 0;\n" +
"    top: 5px;\n" +
"    margin: 0;\n" +
"    transition: .2s all\n" +
"}\n" +
"\n" +
".nav-tab > a, .thread-likes .label-count {\n" +
"    transition: all .2s ease-in-out;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".nav-primary {\n" +
"    margin: 0;\n" +
"    border-bottom: 2px solid #e7e9ee\n" +
"}\n" +
"\n" +
".dark .nav-primary {\n" +
"    border-bottom-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".nav-primary--refresh {\n" +
"    border-bottom: 0\n" +
"}\n" +
"\n" +
".nav-primary--refresh .comment-count {\n" +
"    font-weight: 700;\n" +
"    font-size: 15px;\n" +
"    color: #343434\n" +
"}\n" +
"\n" +
".dark .nav-primary--refresh .comment-count {\n" +
"    color: #a9a9a9\n" +
"}\n" +
"\n" +
".nav-secondary {\n" +
"    margin: -12px 0 6px\n" +
"}\n" +
"\n" +
".no-postbox .nav-secondary {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".nav-secondary-refresh {\n" +
"    /*margin-bottom: 8px*/\n" +
"}\n" +
"\n" +
".nav-secondary-refresh__list {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: justify;\n" +
"    justify-content: space-between;\n" +
"    -ms-flex-wrap: wrap;\n" +
"    flex-wrap: wrap\n" +
"}\n" +
"\n" +
".nav-secondary-refresh__list-item {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    margin-right: 12px;\n" +
"    margin-bottom: 12px\n" +
"}\n" +
"\n" +
".nav-tab > a {\n" +
"    color: #656c7a;\n" +
"    display: block;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    line-height: 1;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".nav-tab > a:hover {\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
".dark .nav-tab > a {\n" +
"    color: #eee !important;\n" +
"    text-shadow: none\n" +
"}\n" +
"\n" +
".dark .nav-tab > a:hover {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
".active .nav-tab > a {\n" +
"    color: #2a2e2e !important\n" +
"}\n" +
"\n" +
".active .nav-tab > a:after {\n" +
"    right: 0;\n" +
"    height: 2px;\n" +
"    background: #2e9fff;\n" +
"    bottom: -2px;\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".dark .active .nav-tab > a, .dark .active .nav-tab > a:hover {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
".nav-tab--primary > a {\n" +
"    font-size: 15px;\n" +
"    padding: 12px 0;\n" +
"    margin-right: 12px\n" +
"}\n" +
"\n" +
".tab-conversation {\n" +
"    float: left\n" +
"}\n" +
"\n" +
".tab-conversation > a {\n" +
"    text-transform: capitalize\n" +
"}\n" +
"\n" +
".tab-conversation.active > a {\n" +
"    color: #2a2e2e !important\n" +
"}\n" +
"\n" +
".tab-conversation.active > a:after {\n" +
"    right: 0;\n" +
"    height: 2px;\n" +
"    background: #2e9fff;\n" +
"    bottom: -2px;\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".dark .tab-conversation.active > a {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
".tab-conversation--refresh.active > a {\n" +
"    color: #656c7a !important\n" +
"}\n" +
"\n" +
".dark .tab-conversation--refresh.active > a {\n" +
"    color: rgba(255, 255, 255, .7) !important\n" +
"}\n" +
"\n" +
".tab-conversation--refresh.active > a:after {\n" +
"    height: 0\n" +
"}\n" +
"\n" +
".tab-user {\n" +
"    float: right\n" +
"}\n" +
"\n" +
".notification-menu {\n" +
"    float: left;\n" +
"    margin-top: 11px;\n" +
"    padding: 0;\n" +
"    width: 19px\n" +
"}\n" +
"\n" +
".notification-menu > a {\n" +
"    position: relative;\n" +
"    top: -1px;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".notification-menu > a:focus {\n" +
"    outline-offset: 2px\n" +
"}\n" +
"\n" +
".post-menu, .user-menu {\n" +
"    float: right;\n" +
"    margin-left: 10px\n" +
"}\n" +
"\n" +
"@media (min-width: 500px) {\n" +
"    .post-menu, .user-menu {\n" +
"        margin-left: 6px\n" +
"    }\n" +
"\n" +
"    .post-menu .dropdown-toggle, .user-menu .dropdown-toggle {\n" +
"        overflow: hidden;\n" +
"        text-overflow: ellipsis\n" +
"    }\n" +
"}\n" +
"\n" +
".post-menu .dropdown-menu, .user-menu .dropdown-menu {\n" +
"    left: auto;\n" +
"    top: 33px;\n" +
"    right: 0\n" +
"}\n" +
"\n" +
".post-menu .dropdown-menu--refresh, .user-menu .dropdown-menu--refresh {\n" +
"    left: auto;\n" +
"    top: 33px;\n" +
"    right: 0;\n" +
"    font-size: 16px\n" +
"}\n" +
"\n" +
".post-menu .dropdown-menu--refresh :hover, .user-menu .dropdown-menu--refresh :hover {\n" +
"    color: var(--publisher-color-safe, #2e9fff) !important;\n" +
"    background-color: transparent\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle, .user-menu .dropdown-toggle {\n" +
"    max-width: 160px;\n" +
"    height: 33px;\n" +
"    margin: 0;\n" +
"    padding-right: 14px !important\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle--refresh, .user-menu .dropdown-toggle--refresh {\n" +
"    max-width: 220px;\n" +
"    height: 33px;\n" +
"    margin: 0;\n" +
"    padding-right: 14px !important;\n" +
"    color: #656c7a;\n" +
"    overflow: hidden;\n" +
"    text-overflow: ellipsis\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle--refresh:hover, .user-menu .dropdown-toggle--refresh:hover {\n" +
"    color: var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .post-menu .dropdown-toggle--refresh, .user-menu .dropdown-toggle--refresh {\n" +
"        max-width: 160px\n" +
"    }\n" +
"}\n" +
"\n" +
".post-menu .caret, .user-menu .caret {\n" +
"    top: 15px;\n" +
"    right: 0\n" +
"}\n" +
"\n" +
".favorite, .share-bar {\n" +
"    top: -2px;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper, .user-menu .dropdown-toggle-wrapper {\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper:before, .user-menu .dropdown-toggle-wrapper:before {\n" +
"    content: ''\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper .username, .user-menu .dropdown-toggle-wrapper .username {\n" +
"    display: none\n" +
"}\n" +
"\n" +
"@media (min-width: 500px) {\n" +
"    .post-menu .dropdown-toggle-wrapper .username, .user-menu .dropdown-toggle-wrapper .username {\n" +
"        display: inline\n" +
"    }\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper .username--refresh, .user-menu .dropdown-toggle-wrapper .username--refresh {\n" +
"    display: inline;\n" +
"    color: #656c7a;\n" +
"    font-size: 15px\n" +
"}\n" +
"\n" +
".dark .post-menu .dropdown-toggle-wrapper .username--refresh, .dark .user-menu .dropdown-toggle-wrapper .username--refresh {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper .username--refresh:hover, .thread-share-bar-buttons-refresh:hover .share-button-toggle, .thread-share-bar-buttons-refresh:hover .share-dropdown-refresh, .user-menu .dropdown-toggle-wrapper .username--refresh:hover {\n" +
"    color: var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper .avatar img, .user-menu .dropdown-toggle-wrapper .avatar img {\n" +
"    width: 21px;\n" +
"    height: 21px;\n" +
"    margin-top: -3px;\n" +
"    margin-right: 2px;\n" +
"    border-radius: 2px\n" +
"}\n" +
"\n" +
".post-menu .dropdown-toggle-wrapper .avatar--refresh, .user-menu .dropdown-toggle-wrapper .avatar--refresh {\n" +
"    display: none\n" +
"}\n" +
"\n" +
"@media (min-width: 500px) {\n" +
"    .post-menu .dropdown-toggle-wrapper .avatar, .user-menu .dropdown-toggle-wrapper .avatar {\n" +
"        display: none\n" +
"    }\n" +
"}\n" +
"\n" +
".media-toggle-on {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".media-collapsed .media-toggle-on {\n" +
"    display: block !important\n" +
"}\n" +
"\n" +
".media-collapsed .media-toggle-off {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".nav-tab--secondary {\n" +
"    margin-bottom: 15px\n" +
"}\n" +
"\n" +
".nav-tab--secondary > a, .nav-tab--secondary > div a {\n" +
"    width: auto;\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".favorite {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".favorite .label {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".favorite:empty {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".thread-share-bar-buttons-refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
".thread-share-bar-buttons-refresh:hover .share-dropdown-refresh {\n" +
"    visibility: visible\n" +
"}\n" +
"\n" +
".share-dropdown-refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    visibility: hidden;\n" +
"    margin-left: 10px\n" +
"}\n" +
"\n" +
".share-dropdown-refresh__item:not(:first-of-type) {\n" +
"    margin-left: 10px\n" +
"}\n" +
"\n" +
".share-bar {\n" +
"    display: inline-block;\n" +
"    max-width: none;\n" +
"    margin-left: 15px\n" +
"}\n" +
"\n" +
".share-bar .thread-share-bar-buttons {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row\n" +
"}\n" +
"\n" +
".dark .share-bar .thread-share-bar-buttons .dropdown-toggle {\n" +
"    color: #eee !important;\n" +
"    text-shadow: none\n" +
"}\n" +
"\n" +
".dark .share-bar .thread-share-bar-buttons .dropdown-toggle:hover {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
".share-bar .thread-share-bar-buttons .thread-share__text {\n" +
"    color: #656c7a;\n" +
"    padding: 4px 8px 12px;\n" +
"    font-size: 13px;\n" +
"    font-weight: 600\n" +
"}\n" +
"\n" +
".share-bar .thread-share-bar-buttons .thread-share__item {\n" +
"    display: inline;\n" +
"    background-color: #fff;\n" +
"    font-size: 24px;\n" +
"    cursor: pointer;\n" +
"    margin: 0 6px\n" +
"}\n" +
"\n" +
".share-bar .thread-share-bar-buttons .thread-share__item .share-facebook {\n" +
"    color: #3b5998;\n" +
"    background-color: #fff\n" +
"}\n" +
"\n" +
".share-bar .thread-share-bar-buttons .thread-share__item .share-twitter {\n" +
"    color: #00aced;\n" +
"    background-color: #fff\n" +
"}\n" +
"\n" +
".sorting .dropdown-toggle {\n" +
"    padding-right: 14px\n" +
"}\n" +
"\n" +
".thread-likes a {\n" +
"    position: relative;\n" +
"    z-index: 100;\n" +
"    margin-right: 0\n" +
"}\n" +
"\n" +
".thread-likes a:hover {\n" +
"    -webkit-transform: translate3d(0, 0, 0)\n" +
"}\n" +
"\n" +
".thread-likes a:hover .label-count {\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
".thread-likes .upvoted .label-default {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".thread-likes .upvoted .label-favorited {\n" +
"    display: inline\n" +
"}\n" +
"\n" +
".thread-likes .label-favorited {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".thread-likes .label-count {\n" +
"    position: relative;\n" +
"    font-size: 11px;\n" +
"    padding: 2px 5px 3px;\n" +
"    background: #e7e9ee;\n" +
"    color: #494e58;\n" +
"    border-radius: 2px;\n" +
"    margin-left: 2px\n" +
"}\n" +
"\n" +
".dark .thread-likes .label-count {\n" +
"    background: #fff;\n" +
"    color: #494e58 !important\n" +
"}\n" +
"\n" +
".thread-likes .label-count:after {\n" +
"    position: absolute;\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    margin: -25px 0 0 -25px;\n" +
"    width: 50px;\n" +
"    height: 50px;\n" +
"    border-radius: 50%;\n" +
"    content: '';\n" +
"    opacity: 0;\n" +
"    pointer-events: none;\n" +
"    background: rgba(240, 95, 112, .2)\n" +
"}\n" +
"\n" +
".thread-likes .upvoted .label-count:after {\n" +
"    animation: anim-heart .4s forwards\n" +
"}\n" +
"\n" +
".dropdown-toggle {\n" +
"    position: relative;\n" +
"    padding-right: 12px;\n" +
"    background: 0 0 !important;\n" +
"    color: #656c7a !important\n" +
"}\n" +
"\n" +
".dropdown-toggle:hover {\n" +
"    color: #2a2e2e !important\n" +
"}\n" +
"\n" +
".dark .dropdown-toggle, .dark .open .dropdown-toggle {\n" +
"    border: none\n" +
"}\n" +
"\n" +
".favorite-button-toggle {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    padding: 6px 13px;\n" +
"    /*border-radius: 20px;*/\n" +
"    border: 2px solid transparent\n" +
"}\n" +
"\n" +
".favorite-button-toggle:hover {\n" +
"    border-color: #cfd0e6\n" +
"}\n" +
"\n" +
".favorite-button-toggle.upvoted {\n" +
"    background-color: var(--publisher-color-safe, #2e9fff);\n" +
"    border-color: var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
".label-count-refresh {\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 16px;\n" +
"    color: #343434;\n" +
"    line-height: 19px;\n" +
"    margin-left: 10px\n" +
"}\n" +
"\n" +
".upvoted .label-count-refresh, .upvoted .label-count-refresh:hover {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".dropdown-menu {\n" +
"    font-size: 13px;\n" +
"    border: 2px solid #687a86;\n" +
"    border-radius: 3px;\n" +
"    background: #fff;\n" +
"    box-shadow: none;\n" +
"    min-width: 130px;\n" +
"    z-index: 1001;\n" +
"    top: 20px\n" +
"}\n" +
"\n" +
".thread-share-bar-buttons .dropdown-menu {\n" +
"    min-width: 76px;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".dropdown-menu.pull-right {\n" +
"    right: 0;\n" +
"    left: -240%\n" +
"}\n" +
"\n" +
".dropdown-menu.open {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".dropdown-menu a {\n" +
"    transition: none;\n" +
"    color: #687a86;\n" +
"    padding: 4px 15px;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".dropdown-menu a:focus {\n" +
"    background-color: #2e9fff\n" +
"}\n" +
"\n" +
".use-opacity-transitions .dropdown-menu {\n" +
"    transition: opacity .2s\n" +
"}\n" +
"\n" +
".dropdown-menu .icon-checkmark:before {\n" +
"    display: none;\n" +
"    font-size: 11px;\n" +
"    position: absolute;\n" +
"    right: 10px;\n" +
"    top: 7px\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh.open, .selected a .dropdown-menu .icon-checkmark:before {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh {\n" +
"    font-size: 13px;\n" +
"    border: 2px solid #687a86;\n" +
"    /*border-radius: 15px 3px 15px 15px;*/\n" +
"    background: #fff;\n" +
"    box-shadow: none;\n" +
"    min-width: 130px;\n" +
"    max-width: none;\n" +
"    z-index: 1001;\n" +
"    top: 20px\n" +
"}\n" +
"\n" +
".thread-share-bar-buttons .dropdown-menu--refresh {\n" +
"    min-width: 76px;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh.pull-right {\n" +
"    right: 0;\n" +
"    left: -240%\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh a {\n" +
"    transition: none;\n" +
"    color: #687a86;\n" +
"    padding: 4px 15px;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
"#thread-visibility__button::before, .use-opacity-transitions .connect__button, .use-opacity-transitions .dropdown-menu--refresh, .use-opacity-transitions .sso__button {\n" +
"    transition: opacity .2s\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh a:focus {\n" +
"    background-color: #2e9fff\n" +
"}\n" +
"\n" +
".dropdown-menu--refresh .icon-checkmark:before {\n" +
"    display: none;\n" +
"    font-size: 11px;\n" +
"    position: absolute;\n" +
"    right: 10px;\n" +
"    top: 7px\n" +
"}\n" +
"\n" +
".selected a .dropdown-menu--refresh .icon-checkmark:before {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".sort-menu-refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    overflow: visible;\n" +
"    padding-top: 3px;\n" +
"    margin-bottom: 12px\n" +
"}\n" +
"\n" +
".email .form, .email.subscribed .icon-mail, .email.subscribed .icon-wrapper, .notification-loading .notification-container {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".sort-menu-refresh__item {\n" +
"    color: #343434\n" +
"}\n" +
"\n" +
".sort-menu-refresh__item:not(:last-of-type) {\n" +
"    margin-right: 16px\n" +
"}\n" +
"\n" +
".dark .sort-menu-refresh__item {\n" +
"    color: #a9a9a9\n" +
"}\n" +
"\n" +
".sort-menu-refresh__item.selected {\n" +
"    color: var(--publisher-color-safe, #2e9fff);\n" +
"    border-bottom: 3px solid var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
".sort-menu-refresh__item a {\n" +
"    color: inherit;\n" +
"    font-style: normal;\n" +
"    font-weight: 600;\n" +
"    font-size: 14px;\n" +
"    line-height: 19px\n" +
"}\n" +
"\n" +
".notification-icon {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    font-size: 19px;\n" +
"    transition: color .1s\n" +
"}\n" +
"\n" +
".notification-icon--refresh {\n" +
"    left: 5px;\n" +
"    top: 0px;\n" +
"    font-size: 16px;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".notification-icon--refresh:hover {\n" +
"    color: #494e58\n" +
"}\n" +
"\n" +
".dark .notification-icon--refresh {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .notification-icon--refresh:hover {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .notification-icon.icon-disqus {\n" +
"        display: none\n" +
"    }\n" +
"}\n" +
"\n" +
".unread .notification-icon {\n" +
"    color: #f05f70\n" +
"}\n" +
"\n" +
".unread .notification-container:hover .notification-icon {\n" +
"    color: #ec3046\n" +
"}\n" +
"\n" +
".notification-count {\n" +
"    position: absolute;\n" +
"    top: 4px;\n" +
"    left: 0;\n" +
"    width: 20px;\n" +
"    color: #fff;\n" +
"    font-size: 10px;\n" +
"    font-weight: 700;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".notification-count--refresh {\n" +
"    left: 3px;\n" +
"    top: 4px\n" +
"}\n" +
"\n" +
".notification-count .icon-plus {\n" +
"    font-size: 6px\n" +
"}\n" +
"\n" +
".notification-loading {\n" +
"    height: 20px;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".notification-loading:before {\n" +
"    content: '';\n" +
"    display: block;\n" +
"    width: 14px;\n" +
"    height: 14px;\n" +
"    /*border-radius: 25px;*/\n" +
"    border: 2px solid transparent;\n" +
"    border-color: transparent #c2c6cc;\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    left: 1px;\n" +
"    animation: rotate-loading 1.5s linear 0s infinite normal;\n" +
"    transform-origin: 50% 50%\n" +
"}\n" +
"\n" +
".favorite-icon-wrapper, .share-bar-refresh {\n" +
"    display: -ms-flexbox;\n" +
"    -ms-flex-align: center\n" +
"}\n" +
"\n" +
".dark .notification-loading:before {\n" +
"    border-color: transparent #fff\n" +
"}\n" +
"\n" +
".icon-cog:hover, .icon-export:hover, .label:hover {\n" +
"    color: #2a2e2e;\n" +
"    transition: color 250ms ease-in-out\n" +
"}\n" +
"\n" +
".no-touch .button:hover, .no-touchevents .button:hover, .upvoted .favorite-icon, .upvoted:hover .favorite-icon {\n" +
"    transition: all .2s ease-in-out\n" +
"}\n" +
"\n" +
".dark .icon-cog, .dark .icon-export, .dark .label {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".icon-export:before {\n" +
"    position: relative;\n" +
"    top: .31em;\n" +
"    margin-right: -1px;\n" +
"    line-height: 0;\n" +
"    font-size: 19px\n" +
"}\n" +
"\n" +
".favorite-icon {\n" +
"    color: #f05f70;\n" +
"    margin-right: 1px\n" +
"}\n" +
"\n" +
".favorite-icon:before {\n" +
"    position: relative;\n" +
"    top: .18em;\n" +
"    font-size: 13px;\n" +
"    padding-left: .5px;\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".share-button-toggle, .text-item {\n" +
"    line-height: 16px;\n" +
"    font-style: normal\n" +
"}\n" +
"\n" +
".favorite-icon-refresh {\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/vote.db918335ef853b5fb09a9c6bb933ac5b.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/vote.db918335ef853b5fb09a9c6bb933ac5b.svg);\n" +
"    background-color: #656c7a;\n" +
"    width: 100%;\n" +
"    height: 100%\n" +
"}\n" +
"\n" +
".dark .favorite-icon-refresh {\n" +
"    background-color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".upvoted .favorite-icon-refresh {\n" +
"    background-color: #fff\n" +
"}\n" +
"\n" +
".favorite-icon-wrapper {\n" +
"    width: 16px;\n" +
"    height: 20px;\n" +
"    display: flex;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center\n" +
"}\n" +
"\n" +
".share-button-toggle {\n" +
"    font-weight: 600;\n" +
"    font-size: 14px;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".dark .share-button-toggle {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".share-bar-refresh {\n" +
"    display: flex;\n" +
"    align-items: center;\n" +
"    margin-left: 13px\n" +
"}\n" +
"\n" +
".share-icons-wrapper {\n" +
"    width: 30px;\n" +
"    height: 30px;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    cursor: pointer;\n" +
"    border-radius: 8px;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".share-icons-wrapper--twitter {\n" +
"    background-color: #039cda\n" +
"}\n" +
"\n" +
".share-icons-wrapper--facebook {\n" +
"    background-color: #39508d\n" +
"}\n" +
"\n" +
".round-delimiter {\n" +
"    width: 5px;\n" +
"    height: 5px;\n" +
"    border-radius: 50%;\n" +
"    background-color: #656c7a;\n" +
"    margin-right: 8px\n" +
"}\n" +
"\n" +
".dark .round-delimiter {\n" +
"    background-color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".thread-share-wrapper {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
".disqus-footer__wrapper {\n" +
"    border-top: 2px solid #e7e9ee;\n" +
"    padding: 7px 0 10px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 480px) {\n" +
"    .disqus-footer__wrapper {\n" +
"        padding-bottom: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".dark .disqus-footer__wrapper {\n" +
"    border-top: 2px solid rgba(255, 255, 255, .08)\n" +
"}\n" +
"\n" +
".disqus-footer__wrapper--refresh {\n" +
"    padding-top: 9px;\n" +
"    border-color: #d7d9e4\n" +
"}\n" +
"\n" +
".dark .disqus-footer__wrapper--refresh {\n" +
"    border-color: #a9a9a9\n" +
"}\n" +
"\n" +
".disqus-footer {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    padding: 0 4px\n" +
"}\n" +
"\n" +
".disqus-footer--refresh {\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".disqus-footer__list {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-wrap: wrap;\n" +
"    flex-wrap: wrap;\n" +
"    margin-right: auto\n" +
"}\n" +
"\n" +
".disqus-footer__item {\n" +
"    margin: 0;\n" +
"    border: none;\n" +
"    padding: 1px 5px 10px 0;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 480px) {\n" +
"    .disqus-footer__item {\n" +
"        margin-right: 10px;\n" +
"        padding-right: 0\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 480px) {\n" +
"    .disqus-footer__item .disqus-footer__item {\n" +
"        padding-bottom: 4px\n" +
"    }\n" +
"\n" +
"    .disqus-footer__item .disqus-footer__item:last-child {\n" +
"        padding-bottom: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
".disqus-footer__item--refresh:not(:last-of-type) {\n" +
"    margin-right: 17px\n" +
"}\n" +
"\n" +
".disqus-footer__item--refresh:hover .text-item {\n" +
"    color: #494e58\n" +
"}\n" +
"\n" +
".disqus-footer__item--refresh:hover .icon-wrapper {\n" +
"    background-color: #494e58\n" +
"}\n" +
"\n" +
".dark .disqus-footer__item--refresh:hover .text-item {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".disqus-footer__link {\n" +
"    font-size: 11px;\n" +
"    padding: 0 0 0 18px;\n" +
"    color: #656c7a;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".disqus-footer__link:focus {\n" +
"    outline-offset: 2px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 480px) {\n" +
"    .disqus-footer__link {\n" +
"        padding: 0 0 0 20px\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 550px) {\n" +
"    .disqus-footer__link {\n" +
"        padding: 0 0 0 22px;\n" +
"        font-size: 12px\n" +
"    }\n" +
"}\n" +
"\n" +
".dark .disqus-footer__link {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .disqus-footer__link:hover {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".disqus-footer__link--refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    padding: 0;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".disqus-footer__logo {\n" +
"    padding-top: 2px;\n" +
"    padding-right: 0;\n" +
"    margin: 0 0 0 auto\n" +
"}\n" +
"\n" +
".disqus-footer__logo .disqus-footer__link {\n" +
"    margin: 0 auto;\n" +
"    display: block;\n" +
"    text-indent: -9999em;\n" +
"    background-image: url(https://c.disquscdn.com/next/embed/assets/img/sprite.ad630a07080a45451f139a7487853ff8.png);\n" +
"    background-size: 86px 40.5px;\n" +
"    background-position: 0 -8px;\n" +
"    height: 16px;\n" +
"    width: 86px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".dark .disqus-footer__logo .disqus-footer__link {\n" +
"    background-image: url(https://c.disquscdn.com/next/embed/assets/img/sprite.ad630a07080a45451f139a7487853ff8.png);\n" +
"    background-size: 86px 40.5px;\n" +
"    background-position: 0 -24.5px;\n" +
"    height: 16px;\n" +
"    width: 86px\n" +
"}\n" +
"\n" +
".do-not-sell a, .email a, .privacy a {\n" +
"    line-height: 1.1;\n" +
"    transition: color .2s\n" +
"}\n" +
"\n" +
".do-not-sell a:hover, .email a:hover, .privacy a:hover {\n" +
"    color: #494e58\n" +
"}\n" +
"\n" +
".email .icon-checkmark, .email.subscribed .disqus-footer__link, .email.subscribed .text-item, .email.subscribed.disqus-footer__item--refresh:hover .text-item {\n" +
"    color: #5cb767\n" +
"}\n" +
"\n" +
".do-not-sell .icon, .email .icon, .privacy .icon {\n" +
"    position: absolute;\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".do-not-sell {\n" +
"    padding-right: 5px;\n" +
"    margin-right: 0\n" +
"}\n" +
"\n" +
".do-not-sell .icon, .privacy .icon {\n" +
"    font-size: 12px;\n" +
"    top: 3px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 480px) {\n" +
"    .do-not-sell .icon, .privacy .icon {\n" +
"        font-size: 16px;\n" +
"        top: 0\n" +
"    }\n" +
"\n" +
"    .privacy {\n" +
"        margin-right: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
".privacy .icon {\n" +
"    left: 3px\n" +
"}\n" +
"\n" +
".email .clip {\n" +
"    padding-left: 3px\n" +
"}\n" +
"\n" +
".email .icon {\n" +
"    font-size: 16px;\n" +
"    top: 1px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 480px) {\n" +
"    .email .icon {\n" +
"        font-size: 19px;\n" +
"        top: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".email .icon-checkmark {\n" +
"    visibility: hidden;\n" +
"    transition: top .15s ease-in-out;\n" +
"    font-size: 12px;\n" +
"    right: -19px;\n" +
"    top: -5px;\n" +
"    left: 3px\n" +
"}\n" +
"\n" +
".use-opacity-transitions .email .icon-checkmark {\n" +
"    transition-property: opacity, top\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 480px) {\n" +
"    .email .icon-checkmark {\n" +
"        left: 3px\n" +
"    }\n" +
"}\n" +
"\n" +
".email.subscribed .icon-checkmark {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important;\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".email.subscribed.disqus-footer__item--refresh .icon-checkmark {\n" +
"    position: relative;\n" +
"    width: 20px;\n" +
"    height: 20px;\n" +
"    top: 4px\n" +
"}\n" +
"\n" +
".icon-wrapper {\n" +
"    background-color: #656c7a;\n" +
"    border-radius: 6px;\n" +
"    width: 20px;\n" +
"    height: 20px;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    margin-right: 5px\n" +
"}\n" +
"\n" +
".dark .icon-wrapper {\n" +
"    background-color: #4e4e4e\n" +
"}\n" +
"\n" +
".text-item {\n" +
"    font-weight: 600;\n" +
"    font-size: 14px;\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".dark .text-item {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".icon-privacy-refresh {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/privacy.8c96be6b50de1c3fab838c5f050e0be5.svg) center no-repeat;\n" +
"    width: 15px;\n" +
"    height: 19px;\n" +
"    background-size: 13px 10px\n" +
"}\n" +
"\n" +
".icon-warning-refresh {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/warning.3bc0b4bff6c268a4ceaf404014b9be42.svg) center no-repeat;\n" +
"    width: 6px;\n" +
"    height: 23px;\n" +
"    background-size: 13px 10px\n" +
"}\n" +
"\n" +
".icon-subscribe-refresh {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/email.727e30eb9b6c1e85cb010b9c8eb04c7e.svg) center no-repeat;\n" +
"    width: 15px;\n" +
"    height: 19px;\n" +
"    background-size: 13px 10px\n" +
"}\n" +
"\n" +
".load-more {\n" +
"    margin: 0 0 24px\n" +
"}\n" +
"\n" +
".load-more__button {\n" +
"    font-size: 13px;\n" +
"    font-weight: 500;\n" +
"    display: block;\n" +
"    text-align: center;\n" +
"    padding: 11px 14px\n" +
"}\n" +
"\n" +
".dark .load-more__button {\n" +
"    background: rgba(255, 255, 255, .85);\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".dark .load-more__button:hover {\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    color: #222\n" +
"}\n" +
"\n" +
".dark .is-submitting .load-more__button {\n" +
"    opacity: .7;\n" +
"    background: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .is-submitting .load-more__button:hover {\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".load-more-refresh {\n" +
"    margin-bottom: 6px\n" +
"}\n" +
"\n" +
".load-more-refresh__button {\n" +
"    display: block;\n" +
"    text-align: center;\n" +
"    padding: 6px 0 4px;\n" +
"    /*border-radius: 15px;*/\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 15px;\n" +
"    line-height: 21px;\n" +
"}\n" +
"\n" +
".dark .load-more-refresh__button {\n" +
"    background: rgba(255, 255, 255, .85);\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".dark .load-more-refresh__button:hover {\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    color: #222\n" +
"}\n" +
"\n" +
".dark .is-submitting .load-more-refresh__button {\n" +
"    opacity: .7;\n" +
"    background: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .is-submitting .load-more-refresh__button:hover {\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".comment__footer .vote-down, .comment__footer a, .comment__header .vote-down, .comment__header a {\n" +
"    color: #656c7a;\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
".comment__footer .vote-down:hover, .comment__footer a:hover, .comment__header .vote-down:hover, .comment__header a:hover {\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
".dark .comment__footer .vote-down, .dark .comment__footer a, .dark .comment__header .vote-down, .dark .comment__header a {\n" +
"    color: rgba(255, 255, 255, .5)\n" +
"}\n" +
"\n" +
".dark .comment__footer .vote-down:hover, .dark .comment__footer a:hover, .dark .comment__header .vote-down:hover, .dark .comment__header a:hover {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".comment__footer .author, .comment__header .author {\n" +
"    color: #656c7a;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".dark .comment__footer .author, .dark .comment__header .author {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".mobile .comment__footer .bullet, .mobile .comment__header .bullet {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".embed-refresh .post-body .post-body-inner {\n" +
"    margin-top: -5px\n" +
"}\n" +
"\n" +
".post-body .comment__header .edit-time-left, .post-body .comment__header .has-edit, .post-body .comment__header .parent-link, .post-body .comment__header .state-byline, .post-body .comment__header .time-ago, .post-body .post-body-inner .edit-time-left, .post-body .post-body-inner .has-edit, .post-body .post-body-inner .parent-link, .post-body .post-body-inner .state-byline, .post-body .post-body-inner .time-ago {\n" +
"    font-weight: 500;\n" +
"    font-size: 12px;\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".embed-refresh .post-body .comment__header .edit-time-left, .embed-refresh .post-body .comment__header .has-edit, .embed-refresh .post-body .comment__header .parent-link, .embed-refresh .post-body .comment__header .state-byline, .embed-refresh .post-body .comment__header .time-ago, .embed-refresh .post-body .post-body-inner .edit-time-left, .embed-refresh .post-body .post-body-inner .has-edit, .embed-refresh .post-body .post-body-inner .parent-link, .embed-refresh .post-body .post-body-inner .state-byline, .embed-refresh .post-body .post-body-inner .time-ago {\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".dark .post-body .comment__header .edit-time-left, .dark .post-body .comment__header .has-edit, .dark .post-body .comment__header .parent-link, .dark .post-body .comment__header .state-byline, .dark .post-body .comment__header .time-ago, .dark .post-body .post-body-inner .edit-time-left, .dark .post-body .post-body-inner .has-edit, .dark .post-body .post-body-inner .parent-link, .dark .post-body .post-body-inner .state-byline, .dark .post-body .post-body-inner .time-ago {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".time-ago.icon-clock::before {\n" +
"    margin-right: 5px;\n" +
"    vertical-align: text-top\n" +
"}\n" +
"\n" +
".parent-link {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".mobile .parent-link {\n" +
"    font-size: 14px\n" +
"}\n" +
"\n" +
".post-votes {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    height: 100%\n" +
"}\n" +
"\n" +
".post-votes .vote-down, .post-votes .vote-up {\n" +
"    position: relative;\n" +
"    height: 100%;\n" +
"    overflow: hidden;\n" +
"    display: inline-block;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".post-votes .vote-down:hover, .post-votes .vote-up:hover {\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".mobile .post-votes .vote-down, .mobile .post-votes .vote-up {\n" +
"    padding: 4px 4px 4px 0;\n" +
"    border: none;\n" +
"    display: inline-block;\n" +
"    height: 2em;\n" +
"    vertical-align: text-bottom\n" +
"}\n" +
"\n" +
".mobile .post-votes .vote-down span, .mobile .post-votes .vote-up span {\n" +
"    vertical-align: middle\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-votes .vote-down span, .embed-refresh.mobile .post-votes .vote-up span, .share__button {\n" +
"    vertical-align: bottom\n" +
"}\n" +
"\n" +
".mobile .post-votes .vote-down span.control, .mobile .post-votes .vote-up span.control {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".highlighted-post .reply, .mobile .post-votes .vote-down .tooltip, .mobile .post-votes .vote-up .tooltip, .post-votes .vote-down.count-0 .count, .post-votes .vote-up.count-0 .count {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-votes .vote-down:after, .post-votes .vote-up:after {\n" +
"    content: \"\";\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    top: -10px;\n" +
"    left: -5px;\n" +
"    right: -3px;\n" +
"    bottom: -10px\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down:after, .embed-refresh .post-votes .vote-up:after {\n" +
"    content: none\n" +
"}\n" +
"\n" +
".post-votes .vote-down .control, .post-votes .vote-up .control {\n" +
"    font-size: 16px;\n" +
"    font-weight: 700;\n" +
"    opacity: .7;\n" +
"    position: relative;\n" +
"    top: 1px\n" +
"}\n" +
"\n" +
".post-votes .vote-down .count, .post-votes .vote-up .count {\n" +
"    color: gray;\n" +
"    font-size: 13px;\n" +
"    position: relative;\n" +
"    top: -2.5px\n" +
"}\n" +
"\n" +
".comment__footer, .embed-refresh .post-votes .vote-down .count, .embed-refresh .post-votes .vote-up .count {\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down .count, .embed-refresh .post-votes .vote-up .count {\n" +
"    font-size: 13px;\n" +
"    margin-left: 3px;\n" +
"    margin-right: 6px;\n" +
"    font-weight: 700;\n" +
"}\n" +
"\n" +
".mobile .post-votes .vote-down .count, .mobile .post-votes .vote-up .count {\n" +
"    top: 0\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down.count-0 .count, .embed-refresh .post-votes .vote-up.count-0 .count {\n" +
"    display: unset\n" +
"}\n" +
"\n" +
".post-votes .post-votes__separator {\n" +
"    height: 15px;\n" +
"    position: relative;\n" +
"    top: 1px;\n" +
"    border-right: 2px solid #c2c6cc;\n" +
"    margin: 0 6px\n" +
"}\n" +
"\n" +
".mobile .post-votes .post-votes__separator {\n" +
"    margin: 0 8px 0 2px\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down {\n" +
"    padding: 6px 2px 3px;\n" +
"    /*border-radius: 20px;*/\n" +
"    margin-left: 2px\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down:hover {\n" +
"    /*border: 1px solid #656c7a;*/\n" +
"    /*padding: 2px 7px*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down .control {\n" +
"    /*display: inline-block;*/\n" +
"    /*-webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/dislike.612d8ba98928c381e4c789c1b309cda1.svg);*/\n" +
"    /*mask-image: url(https://c.disquscdn.com/next/embed/assets/img/dislike.612d8ba98928c381e4c789c1b309cda1.svg);*/\n" +
"    /*-webkit-mask-repeat: no-repeat;*/\n" +
"    /*mask-repeat: no-repeat;*/\n" +
"    /*-webkit-mask-size: contain;*/\n" +
"    /*mask-size: contain;*/\n" +
"    /*background-color: #656c7a;*/\n" +
"    /*width: 19px;*/\n" +
"    /*height: 19px;*/\n" +
"    /*margin-right: 5px*/\n" +
"    border-style: solid;\n" +
"    border-width: 0.2em 0.2em 0 0;\n" +
"    content: '';\n" +
"    display: inline-block;\n" +
"    height: 0.65em;\n" +
"    left: 0;\n" +
"    position: relative;\n" +
"    top: -0.2em;\n" +
"    transform: rotate(135deg);\n" +
"    vertical-align: top;\n" +
"    width: 0.65em;\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up .control, .tooltip__content p.stats .count.like {\n" +
"    /*-webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/like.855606fb4e3a7a6448e6c782f3f54e5a.svg);*/\n" +
"    /*-webkit-mask-repeat: no-repeat;*/\n" +
"    /*-webkit-mask-size: contain*/\n" +
"    border-style: solid;\n" +
"    border-width: 0.2em 0.2em 0 0;\n" +
"    content: '';\n" +
"    display: inline-block;\n" +
"    height: 0.65em;\n" +
"    left: 0;\n" +
"    position: relative;\n" +
"    top: 0.1em;\n" +
"    transform: rotate(-45deg);\n" +
"    vertical-align: top;\n" +
"    width: 0.65em;\n" +
"}\n" +
"\n" +
".embed-refresh .dark .post-votes .vote-down:hover {\n" +
"    /*border: 1px solid rgba(255, 255, 255, .6)*/\n" +
"}\n" +
"\n" +
".embed-refresh .dark .post-votes .vote-down .count {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".embed-refresh .dark .post-votes .vote-down .control {\n" +
"    /*background-color: rgba(255, 255, 255, .6)*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down.downvoted {\n" +
"    /*background-color: var(--publisher-color, #2e9fff)*/\n" +
"}\n" +
"\n" +
".post-votes .vote-down.downvoted .control, .post-votes .vote-down.downvoted .count {\n" +
"    color: #f05f70\n" +
"}\n" +
"\n" +
".embed-refresh .dark-anchor .post-votes .vote-down.downvoted .count {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down.downvoted .count {\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
".embed-refresh .dark-anchor .post-votes .vote-down.downvoted .control {\n" +
"    /*background-color: #fff*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-down.downvoted .control {\n" +
"    /*background-color: #2a2e2e*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up {\n" +
"    padding: 6px 2px 3px;\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up:hover {\n" +
"    /*border: 1px solid #656c7a;*/\n" +
"    /*padding: 2px 7px*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up .control {\n" +
"    /*display: inline-block;*/\n" +
"    /*mask-image: url(https://c.disquscdn.com/next/embed/assets/img/like.855606fb4e3a7a6448e6c782f3f54e5a.svg);*/\n" +
"    /*mask-repeat: no-repeat;*/\n" +
"    /*mask-size: contain;*/\n" +
"    /*background-color: #656c7a;*/\n" +
"    /*width: 19px;*/\n" +
"    /*height: 19px;*/\n" +
"    /*margin-right: 5px*/\n" +
"    border-style: solid;\n" +
"    border-width: 0.2em 0.2em 0 0;\n" +
"    content: '';\n" +
"    display: inline-block;\n" +
"    height: 0.65em;\n" +
"    left: 0;\n" +
"    position: relative;\n" +
"    top: 0.1em;\n" +
"    transform: rotate(-45deg);\n" +
"    vertical-align: top;\n" +
"    width: 0.65em;\n" +
"}\n" +
"\n" +
".embed-refresh .dark .post-votes .vote-up:hover {\n" +
"    /*border: 1px solid rgba(255, 255, 255, .6)*/\n" +
"}\n" +
"\n" +
".embed-refresh .dark .post-votes .vote-up .count {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".embed-refresh .dark .post-votes .vote-up .control {\n" +
"    /*background-color: rgba(255, 255, 255, .6)*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up.upvoted {\n" +
"    /*background-color: var(--publisher-color, #2e9fff)*/\n" +
"}\n" +
"\n" +
".post-votes .vote-up.upvoted .control, .post-votes .vote-up.upvoted .count {\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".embed-refresh .dark-anchor .post-votes .vote-up.upvoted .count {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up.upvoted .count {\n" +
"    color: #2a2e2e\n" +
"}\n" +
"\n" +
".embed-refresh .dark-anchor .post-votes .vote-up.upvoted .control {\n" +
"    /*background-color: #fff*/\n" +
"}\n" +
"\n" +
".embed-refresh .post-votes .vote-up.upvoted .control {\n" +
"    /*background-color: #2a2e2e*/\n" +
"}\n" +
"\n" +
".state-byline {\n" +
"    position: relative;\n" +
"    display: block;\n" +
"    font-weight: 500;\n" +
"    margin: 8px 0 0;\n" +
"    top: 0;\n" +
"    transition: color linear .1s\n" +
"}\n" +
"\n" +
".mobile .state-byline {\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".state-byline span {\n" +
"    position: relative;\n" +
"    top: -3px\n" +
"}\n" +
"\n" +
".state-byline [class|=icon] {\n" +
"    margin-right: 4px;\n" +
"    float: left;\n" +
"    position: relative;\n" +
"    top: -3px;\n" +
"    z-index: 3\n" +
"}\n" +
"\n" +
".state-byline-warning {\n" +
"    color: #f05f70\n" +
"}\n" +
"\n" +
".state-byline-sponsored .icon-trophy {\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".allstar__icon {\n" +
"    color: #ffd34f;\n" +
"    transition: color .2s ease-in-out\n" +
"}\n" +
"\n" +
".allstar__icon:hover {\n" +
"    color: #ffc61c\n" +
"}\n" +
"\n" +
".comment__header {\n" +
"    line-height: 1;\n" +
"    font-size: 13px;\n" +
"    min-height: 20px;\n" +
"    padding-right: 46px;\n" +
"    margin-bottom: 1px\n" +
"}\n" +
"\n" +
".embed-refresh .comment__header {\n" +
"    padding-right: 80px;\n" +
"    font-size: 13px;\n" +
"    margin-top: 2px;\n" +
"    margin-bottom: 5px\n" +
"}\n" +
"\n" +
".mobile.embed-refresh .comment__header {\n" +
"    top: 0;\n" +
"    margin-right: 80px;\n" +
"    margin-left: 42px\n" +
"}\n" +
"\n" +
".comment__header .bullet {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".comment__header .author a {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".mobile .comment__header .author {\n" +
"    font-size: 15px;\n" +
"    line-height: 18px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .comment__header .author {\n" +
"    font-size: 18px\n" +
"}\n" +
"\n" +
".mobile .comment__header {\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    -ms-flex-align: start;\n" +
"    align-items: flex-start;\n" +
"    padding-right: 0;\n" +
"    margin-right: 54px;\n" +
"    margin-bottom: 6px;\n" +
"    font-size: 14px;\n" +
"    line-height: 18px;\n" +
"    height: unset;\n" +
"    position: relative;\n" +
"    top: -2px\n" +
"}\n" +
"\n" +
".mobile .comment__header .post-meta {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".comment__footer {\n" +
"    margin: 4px 0 0\n" +
"}\n" +
"\n" +
".mobile .comment__footer {\n" +
"    position: relative;\n" +
"    font-size: 18px\n" +
"}\n" +
"\n" +
".embed-refresh .comment__footer {\n" +
"    margin-top: 4px\n" +
"}\n" +
"\n" +
".comment-footer__menu {\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".comment-footer__menu:after, .comment-footer__menu:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".embed-refresh .comment-footer__menu {\n" +
"    height: auto;\n" +
"    margin-top: -4px\n" +
"}\n" +
"\n" +
".comment-footer__menu > li {\n" +
"    float: left;\n" +
"    list-style-type: none;\n" +
"    padding: 0;\n" +
"    font-size: 13px;\n" +
"    line-height: 15px;\n" +
"    margin-right: 7px\n" +
"}\n" +
"\n" +
".embed-refresh .comment-footer__menu > li {\n" +
"    font-size: 13px;\n" +
"    margin-right: 10px\n" +
"}\n" +
"\n" +
".embed-refresh .comment-footer__menu > li.bullet {\n" +
"    font-size: 20px\n" +
"}\n" +
"\n" +
".comment-footer__menu > li.comment__share {\n" +
"    margin-right: 0\n" +
"}\n" +
"\n" +
".comment-footer__menu > li.realtime {\n" +
"    float: right;\n" +
"    -ms-flex-item-align: end;\n" +
"    align-self: flex-end;\n" +
"    justify-self: flex-end;\n" +
"    text-align: right;\n" +
"    margin-left: auto\n" +
"}\n" +
"\n" +
".edit .comment-footer__action, .reply .comment-footer__action {\n" +
"    border-radius: 4px\n" +
"}\n" +
"\n" +
".edit .comment-footer__action.edit-time-message, .reply .comment-footer__action.edit-time-message {\n" +
"    color: inherit !important;\n" +
"    text-decoration: underline\n" +
"}\n" +
"\n" +
".edit.active .text, .reply.active .text {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".edit-time-left {\n" +
"    padding-left: 2px\n" +
"}\n" +
"\n" +
".embed-refresh .highlighted-post .reply:not(.hidden) {\n" +
"    display: unset\n" +
"}\n" +
"\n" +
".comment__share {\n" +
"    position: relative;\n" +
"    margin-right: 0;\n" +
"    -ms-flex: 1;\n" +
"    flex: 1;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
".comment__share .toggle {\n" +
"    position: relative;\n" +
"    z-index: 100;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".comment__share .toggle .text {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".mobile .comment__share {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".comment-share__buttons, .comment__share:hover + .realtime {\n" +
"    filter: alpha(opacity=0);\n" +
"    visibility: hidden;\n" +
"    display: none;\n" +
"    opacity: 0\n" +
"}\n" +
"\n" +
".comment__share .toggle, .edit .comment-footer__action, .reply .comment-footer__action {\n" +
"    max-height: 18px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".comment__share .toggle .text, .edit .comment-footer__action .text, .reply .comment-footer__action .text {\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".comment-share__buttons {\n" +
"    white-space: nowrap;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-pack: start;\n" +
"    justify-content: flex-start\n" +
"}\n" +
"\n" +
".comment-share__buttons .comment-share__social-share-buttons {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row\n" +
"}\n" +
"\n" +
".comment-share__buttons .share__button-container {\n" +
"    float: none;\n" +
"    transition: right .4s ease-in-out;\n" +
"    opacity: 0;\n" +
"    position: relative;\n" +
"    right: 252px;\n" +
"    padding-left: 8px\n" +
"}\n" +
"\n" +
".comment-share__buttons .share__button-container.link .link_url {\n" +
"    opacity: 0\n" +
"}\n" +
"\n" +
".comment__share:hover .comment-share__buttons {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex\n" +
"}\n" +
"\n" +
".comment__share:hover .comment-share__buttons .share__button-container {\n" +
"    opacity: 1;\n" +
"    position: relative;\n" +
"    right: 0\n" +
"}\n" +
"\n" +
".comment__share:hover .comment-share__buttons .share__button-container.link .link_url {\n" +
"    transition: opacity .3s ease-in-out .2s;\n" +
"    opacity: .6\n" +
"}\n" +
"\n" +
".comment-share__buttons-visible {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex\n" +
"}\n" +
"\n" +
".comment-share__buttons-visible .share__button-container {\n" +
"    opacity: 1;\n" +
"    position: relative;\n" +
"    right: 0\n" +
"}\n" +
"\n" +
".comment-share__buttons-visible .share__button-container.link .link_url {\n" +
"    transition: opacity .3s ease-in-out .2s;\n" +
"    opacity: .6\n" +
"}\n" +
"\n" +
".share__button {\n" +
"    display: inline-block;\n" +
"    background: rgba(104, 122, 134, .8);\n" +
"    width: 18px !important;\n" +
"    height: 18px !important;\n" +
"    overflow: hidden;\n" +
"    border: none;\n" +
"    border-radius: 3px;\n" +
"    line-height: 1;\n" +
"    cursor: pointer;\n" +
"    opacity: .6\n" +
"}\n" +
"\n" +
".close, .share__button:hover {\n" +
"    opacity: .8\n" +
"}\n" +
"\n" +
".share__button.icon::before {\n" +
"    color: rgba(247, 249, 250, .9);\n" +
"    font-size: .75rem;\n" +
"    line-height: 1.25;\n" +
"    vertical-align: top\n" +
"}\n" +
"\n" +
".link .share__button.link_url {\n" +
"    background: 0 0;\n" +
"    color: #353a3d;\n" +
"    text-decoration: underline;\n" +
"    width: auto !important;\n" +
"    padding: 0 0 0 4px\n" +
"}\n" +
"\n" +
".dark .link .share__button.link_url {\n" +
"    color: rgba(247, 249, 250, .8)\n" +
"}\n" +
"\n" +
".mobile .post-byline {\n" +
"    display: block;\n" +
"    overflow: hidden;\n" +
"    text-overflow: ellipsis;\n" +
"    white-space: nowrap;\n" +
"    padding-right: 15px\n" +
"}\n" +
"\n" +
".post-meta {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".embed-refresh .post-meta {\n" +
"    vertical-align: text-top;\n" +
"    position: relative;\n" +
"    top: -5px;\n" +
"    display: inline-block !important;\n" +
"    margin-left: 4px;\n" +
"}\n" +
"\n" +
"@media (max-width: 500px) {\n" +
"    .embed-refresh .post-meta {\n" +
"        top: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".mobile div.post-meta {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".post-ratings {\n" +
"    margin-left: 3px\n" +
"}\n" +
"\n" +
".embed-refresh .post-ratings {\n" +
"    margin-left: 8px\n" +
"}\n" +
"\n" +
".post-ratings .post-ratings-stars {\n" +
"    display: inline-block;\n" +
"    margin-left: 3px;\n" +
"    unicode-bidi: bidi-override;\n" +
"    direction: ltr;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".post-ratings .post-ratings-stars .post-stars {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".post-ratings .post-ratings-stars .post-stars.active {\n" +
"    position: absolute;\n" +
"    z-index: 1;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    overflow: hidden;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".post-ratings .post-ratings-stars .post-stars.active .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".post-ratings .post-ratings-stars .post-stars.inactive {\n" +
"    z-index: 0\n" +
"}\n" +
"\n" +
".post-ratings .post-ratings-stars .post-stars.inactive .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ebeef2\n" +
"}\n" +
"\n" +
".realtime-replies {\n" +
"    color: #687a86;\n" +
"    font-size: 85%;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".dark .realtime-button--refresh.reveal, .dark .realtime-replies--refresh {\n" +
"    color: #c2c6cc\n" +
"}\n" +
"\n" +
".realtime-replies--refresh {\n" +
"    font-style: italic;\n" +
"    font-size: 100%\n" +
"}\n" +
"\n" +
".realtime-button {\n" +
"    transition: right .2s ease-in-out;\n" +
"    display: inline;\n" +
"    font-size: 10px;\n" +
"    padding: 0 0 0 14px;\n" +
"    position: relative;\n" +
"    right: -100%\n" +
"}\n" +
"\n" +
".realtime-button--refresh {\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".realtime-button:hover, .see-more {\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".realtime-button .indicator {\n" +
"    transition: width .6s ease-in-out;\n" +
"    display: inline-block;\n" +
"    width: 300px !important;\n" +
"    height: 9px !important;\n" +
"    border-radius: 5px;\n" +
"    background: #2e9fff;\n" +
"    position: absolute !important;\n" +
"    left: 5px !important;\n" +
"    top: 2px !important\n" +
"}\n" +
"\n" +
".realtime-button .indicator--refresh {\n" +
"    background: var(--publisher-color-safe, #2e9fff);\n" +
"    height: 13.5px !important;\n" +
"    top: 0 !important\n" +
"}\n" +
"\n" +
".realtime-button.reveal {\n" +
"    right: 0;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".realtime-button.reveal .indicator {\n" +
"    width: 5px !important\n" +
"}\n" +
"\n" +
".see-more {\n" +
"    z-index: 901;\n" +
"    text-align: center;\n" +
"    font-size: 12px;\n" +
"    font-weight: 700;\n" +
"    padding: 10px 0;\n" +
"    border-top: 2px solid #e7e9ee;\n" +
"    cursor: pointer;\n" +
"    display: block\n" +
"}\n" +
"\n" +
".see-more:before {\n" +
"    content: \"\";\n" +
"    display: block;\n" +
"    height: 3px;\n" +
"    box-shadow: 0 -3px 3px rgba(0, 0, 0, .08);\n" +
"    position: relative;\n" +
"    top: -11px\n" +
"}\n" +
"\n" +
".see-more.hidden {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".dark .see-more {\n" +
"    border-color: rgba(255, 255, 255, .5);\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .see-more:before {\n" +
"    box-shadow: 0 -3px 3px rgba(255, 255, 255, .08)\n" +
"}\n" +
"\n" +
".follow-user {\n" +
"    display: inline-block;\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/follow.160e74d77da7f001267b7fc1a8230244.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/follow.160e74d77da7f001267b7fc1a8230244.svg);\n" +
"    background-color: #687a86;\n" +
"    width: 18px;\n" +
"    height: 18px;\n" +
"    vertical-align: top;\n" +
"    margin-left: 5px;\n" +
"    cursor: pointer;\n" +
"    zoom: 0.7;\n" +
"}\n" +
"\n" +
".alert .icon, .media-box, .notice__message, .sso__button.no-image, .toggle-button, .toggle-button label, .user-mention__item span {\n" +
"    vertical-align: middle\n" +
"}\n" +
"\n" +
".dark .follow-user {\n" +
"    background-color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".follow-user.is-following, .follow-user:hover, .tooltip .avatar--refresh img.user--refresh {\n" +
"    background-color: var(--publisher-color, #2e9fff)\n" +
"}\n" +
"\n" +
".follow-user.is-following {\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/follow-active.5e8b13f041592a9dd6d91843229fe169.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/follow-active.5e8b13f041592a9dd6d91843229fe169.svg)\n" +
"}\n" +
"\n" +
".follow-user.is-following:hover {\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/follow-remove.6867c941bce77b6271aa75d52b532eec.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/follow-remove.6867c941bce77b6271aa75d52b532eec.svg);\n" +
"    background-color: #f05f70\n" +
"}\n" +
"\n" +
".alert {\n" +
"    background: #3b464d;\n" +
"    padding: 10px 35px 10px 14px;\n" +
"    border: none;\n" +
"    border-radius: 4px;\n" +
"    color: #fff;\n" +
"    font-weight: 700;\n" +
"    line-height: 20px;\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".alert a, .alert a:hover {\n" +
"    color: #fff;\n" +
"    font-weight: 700;\n" +
"    text-decoration: underline\n" +
"}\n" +
"\n" +
".alert .icon {\n" +
"    padding-right: .5em\n" +
"}\n" +
"\n" +
".dark .alert {\n" +
"    background-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
"#global-alert .alert {\n" +
"    margin-bottom: 12px\n" +
"}\n" +
"\n" +
".alert.error, .dark .alert.error {\n" +
"    background: #f05f70\n" +
"}\n" +
"\n" +
".alert.alert--realtime, .alert.info, .alert.success, .dark .alert.alert--realtime, .dark .alert.info, .dark .alert.success {\n" +
"    background: #2e9fff\n" +
"}\n" +
"\n" +
".alert.alert--realtime--refresh, .dark .alert.alert--realtime--refresh {\n" +
"    background: var(--publisher-color-safe, #2e9fff);\n" +
"    display: block;\n" +
"    text-align: center;\n" +
"    padding: 6px 0 4px;\n" +
"    /*border-radius: 15px;*/\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 15px;\n" +
"    line-height: 21px\n" +
"}\n" +
"\n" +
".dark .alert.alert--realtime--refresh, .dark .dark .alert.alert--realtime--refresh {\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".dark .alert.alert--realtime--refresh:hover, .dark .dark .alert.alert--realtime--refresh:hover {\n" +
"    color: #222\n" +
"}\n" +
"\n" +
".close {\n" +
"    background: 0 0;\n" +
"    border: 0;\n" +
"    color: #fff;\n" +
"    cursor: pointer;\n" +
"    float: right;\n" +
"    font-weight: 700;\n" +
"    font-size: 20px;\n" +
"    line-height: 20px;\n" +
"    padding: 0 !important;\n" +
"    position: relative;\n" +
"    right: -21px;\n" +
"    top: -2px;\n" +
"    text-decoration: none !important\n" +
"}\n" +
"\n" +
".newsletter-box, .notice, .tooltip {\n" +
"    border-radius: 5px\n" +
"}\n" +
"\n" +
".close:hover {\n" +
"    opacity: .4;\n" +
"    text-decoration: none;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".notice {\n" +
"    padding: 20px;\n" +
"    font-size: 15px;\n" +
"    font-weight: 500;\n" +
"    background: #e7e9ee\n" +
"}\n" +
"\n" +
".notice:after, .notice:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".dark .notice {\n" +
"    background: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".notice--brand {\n" +
"    background: #2e9fff;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".notice-wrapper {\n" +
"    display: table;\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
".notice-wrapper > * {\n" +
"    display: table-cell\n" +
"}\n" +
"\n" +
".notice__icon {\n" +
"    margin-top: 2px;\n" +
"    color: #687a86;\n" +
"    font-size: 32px;\n" +
"    padding-right: 15px\n" +
"}\n" +
"\n" +
".dark .notice__icon {\n" +
"    color: #e7e9ee\n" +
"}\n" +
"\n" +
".notice--brand .notice__icon {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".notice__button {\n" +
"    width: 110px;\n" +
"    padding-left: 0;\n" +
"    padding-right: 0;\n" +
"    background: #2e9fff;\n" +
"    color: #fff;\n" +
"    transition: all 250ms ease-in-out\n" +
"}\n" +
"\n" +
".notice--brand .notice__button {\n" +
"    background: #fff;\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".notice__message {\n" +
"    max-width: 540px;\n" +
"    padding-right: .5em;\n" +
"    color: #494e58;\n" +
"    font-weight: 400;\n" +
"    text-decoration: none;\n" +
"    line-height: 1.3em\n" +
"}\n" +
"\n" +
".notice__message:hover {\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .notice {\n" +
"        text-align: center\n" +
"    }\n" +
"\n" +
"    .notice__icon {\n" +
"        display: none\n" +
"    }\n" +
"\n" +
"    .notice__button {\n" +
"        width: 100%;\n" +
"        display: inline-block\n" +
"    }\n" +
"\n" +
"    .notice__message {\n" +
"        margin-bottom: 12px;\n" +
"        display: inline-block;\n" +
"        padding-right: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".notice--brand .notice__message {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".dark .notice__message, .dark .notice__message:hover {\n" +
"    color: #e7e9ee\n" +
"}\n" +
"\n" +
".dismiss {\n" +
"    display: block;\n" +
"    text-align: right;\n" +
"    font-size: 12px;\n" +
"    font-weight: 400;\n" +
"    color: #687a86;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".dismiss .cross {\n" +
"    font-weight: 700;\n" +
"    font-size: 16px\n" +
"}\n" +
"\n" +
".dark .dismiss {\n" +
"    color: #e7e9ee\n" +
"}\n" +
"\n" +
".tooltip-outer {\n" +
"    z-index: 1000;\n" +
"    position: absolute;\n" +
"    top: -20px;\n" +
"    left: 24px\n" +
"}\n" +
"\n" +
".children .tooltip-outer {\n" +
"    left: 48px;\n" +
"    top: -24px\n" +
"}\n" +
"\n" +
".tooltip-outer .point-position-bl {\n" +
"    left: 41px;\n" +
"    bottom: -16px\n" +
"}\n" +
"\n" +
".tooltip-outer .point-position-tl {\n" +
"    left: 41px;\n" +
"    top: -16px\n" +
"}\n" +
"\n" +
".tooltip-outer .point-position-tl:after, .tooltip-outer .point-position-tl:before {\n" +
"    top: 9px\n" +
"}\n" +
"\n" +
".tooltip-outer.upgrade-card .text-normal {\n" +
"    font-size: 14px;\n" +
"    line-height: 1.4;\n" +
"    margin-bottom: 12px\n" +
"}\n" +
"\n" +
".tooltip-point {\n" +
"    width: 70px;\n" +
"    height: 16px;\n" +
"    overflow: hidden;\n" +
"    position: absolute;\n" +
"    margin-left: -35px\n" +
"}\n" +
"\n" +
".tooltip-point:after, .tooltip-point:before {\n" +
"    content: \"\";\n" +
"    position: absolute;\n" +
"    left: 20px;\n" +
"    top: -20px;\n" +
"    width: 25px;\n" +
"    height: 25px;\n" +
"    background: #fff;\n" +
"    box-shadow: 0 0 0 3px rgba(0, 0, 0, .2);\n" +
"    transform: rotate(45deg)\n" +
"}\n" +
"\n" +
".tooltip-point--refresh:after, .tooltip-point--refresh:before {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".tooltip {\n" +
"    position: relative;\n" +
"    background: #fff;\n" +
"    overflow: auto;\n" +
"    box-shadow: 0 0 0 3px rgba(0, 0, 0, .2);\n" +
"    padding: 8px 8px 0;\n" +
"    color: #7f8d99\n" +
"}\n" +
"\n" +
".tooltip--refresh {\n" +
"    padding: 0;\n" +
"    background: var(--publisher-color-safe, #2e9fff);\n" +
"    border-radius: 4px;\n" +
"    color: #fff;\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".tooltip--post-refresh.tooltip--post-refresh {\n" +
"    /*border-radius: 20px 20px 20px 0;*/\n" +
"    z-index: 1000;\n" +
"    border: 2px solid #687a86;\n" +
"    box-shadow: none;\n" +
"    padding: 15px;\n" +
"    position: relative;\n" +
"    margin-left: 12px;\n" +
"    width: 216px\n" +
"}\n" +
"\n" +
".tooltip--tl.tooltip--tl {\n" +
"    /*border-radius: 0 20px 20px;*/\n" +
"    margin-top: 12px\n" +
"}\n" +
"\n" +
".use-opacity-transitions .tooltip {\n" +
"    transition: opacity .25s linear\n" +
"}\n" +
"\n" +
".message-card .tooltip {\n" +
"    padding: 2px 5px\n" +
"}\n" +
"\n" +
".profile-card .tooltip {\n" +
"    width: 290px;\n" +
"    overflow: visible\n" +
"}\n" +
"\n" +
".profile-card--refresh .tooltip {\n" +
"    min-width: 155px;\n" +
"    width: -webkit-fit-content;\n" +
"    width: fit-content;\n" +
"    height: 62px;\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".profile-card.has-badges .tooltip {\n" +
"    width: 310px\n" +
"}\n" +
"\n" +
".upgrade-card .tooltip {\n" +
"    width: 300px;\n" +
"    text-align: center;\n" +
"    padding: 8px\n" +
"}\n" +
"\n" +
".upgrade-card .tooltip .btn {\n" +
"    color: #fff;\n" +
"    background: #2e9fff\n" +
"}\n" +
"\n" +
".tooltip .avatar {\n" +
"    position: absolute;\n" +
"    top: 8px !important;\n" +
"    left: 8px;\n" +
"    transition: left .2s linear\n" +
"}\n" +
"\n" +
".tooltip .avatar img {\n" +
"    display: block;\n" +
"    width: 75px;\n" +
"    height: 75px;\n" +
"    border-radius: 3px;\n" +
"    min-width: 75px !important;\n" +
"    min-height: 75px !important\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh {\n" +
"    /*border-radius: 20px;*/\n" +
"    top: 0 !important;\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh img {\n" +
"    display: block;\n" +
"    width: 60px;\n" +
"    height: 60px;\n" +
"    /*border-radius: 20px;*/\n" +
"    min-width: 60px !important;\n" +
"    min-height: 60px !important\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh img.user--refresh {\n" +
"    filter: blur(3px);\n" +
"    opacity: .5\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh .initials {\n" +
"    background-color: var(--publisher-color-safe, #2e9fff) !important;\n" +
"    color: #fff;\n" +
"    font-style: normal;\n" +
"    font-weight: 600;\n" +
"    font-size: 36px;\n" +
"    line-height: 1.2;\n" +
"    width: 60px;\n" +
"    height: 60px;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    /*border-radius: 20px;*/\n" +
"    border: 2px solid #fff\n" +
"}\n" +
"\n" +
".dark .tooltip .avatar--refresh .initials {\n" +
"    border-width: 4px\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh .initials.user--refresh {\n" +
"    filter: blur(3px);\n" +
"    background-color: var(--publisher-color, #2e9fff);\n" +
"    opacity: .5\n" +
"}\n" +
"\n" +
".context-card .tooltip .avatar--refresh .initials.user--refresh {\n" +
"    filter: none;\n" +
"    opacity: 1;\n" +
"    width: 40px;\n" +
"    height: 37px;\n" +
"    font-size: 25px\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh .initials--small.initials--small {\n" +
"    width: 30px;\n" +
"    height: 30px;\n" +
"    font-size: 16px;\n" +
"    font-weight: 500;\n" +
"    border-width: 0\n" +
"}\n" +
"\n" +
".tooltip .avatar--refresh .view-profile-message-container {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    position: relative;\n" +
"    top: -47px;\n" +
"    color: #fff;\n" +
"    font-weight: 700;\n" +
"    font-size: 14px;\n" +
"    z-index: 999;\n" +
"    background-color: transparent\n" +
"}\n" +
"\n" +
".context-card .tooltip {\n" +
"    border-radius: 4px;\n" +
"    padding: 5px 5px 0;\n" +
"    width: 220px\n" +
"}\n" +
"\n" +
".context-card .tooltip .avatar {\n" +
"    left: 5px !important;\n" +
"    top: 5px !important\n" +
"}\n" +
"\n" +
".context-card .tooltip .avatar img {\n" +
"    width: 36px !important;\n" +
"    height: 36px !important;\n" +
"    min-width: 36px !important;\n" +
"    min-height: 36px !important\n" +
"}\n" +
"\n" +
".tooltip__content {\n" +
"    margin-left: 84px;\n" +
"    min-height: 74px\n" +
"}\n" +
"\n" +
".tooltip__content--refresh {\n" +
"    min-height: 24px;\n" +
"    margin-left: 60px;\n" +
"    padding-left: 12px;\n" +
"    margin-right: 8px\n" +
"}\n" +
"\n" +
".tooltip__content h3 {\n" +
"    margin: 0 0 5px;\n" +
"    font-size: 16px;\n" +
"    line-height: 1.2;\n" +
"    overflow-x: hidden;\n" +
"    text-overflow: ellipsis\n" +
"}\n" +
"\n" +
".tooltip__content h3.profile-link-container {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-pack: justify;\n" +
"    justify-content: space-between;\n" +
"    gap: 6px;\n" +
"    font-size: 18px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".tooltip__content h3.profile-link-container .profile-link-username {\n" +
"    padding-top: 1px\n" +
"}\n" +
"\n" +
".tooltip__content h3.profile-link-container a {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".tooltip__content h3 a {\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".tooltip__content h3 .badge {\n" +
"    position: relative;\n" +
"    top: -1px\n" +
"}\n" +
"\n" +
".tooltip__content p {\n" +
"    margin: 0 0 2px;\n" +
"    font-size: 13px;\n" +
"    line-height: 1.3\n" +
"}\n" +
"\n" +
".tooltip__content p.bio {\n" +
"    overflow: hidden;\n" +
"    text-overflow: ellipsis;\n" +
"    display: -webkit-box;\n" +
"    -webkit-line-clamp: 3\n" +
"}\n" +
"\n" +
".tooltip__content p.stats {\n" +
"    font-size: 12px;\n" +
"    min-height: 15.6px;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".tooltip__content p.stats--refresh {\n" +
"    font-size: 13px;\n" +
"    min-height: 16.9px;\n" +
"    position: relative;\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".tooltip__content p.stats .hovercard-counters-container {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-pack: start;\n" +
"    justify-content: flex-start;\n" +
"    gap: 18px;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
".tooltip__content p.stats .hovercard-counters-container .counters {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    gap: 5px\n" +
"}\n" +
"\n" +
".tooltip__content p.stats .count {\n" +
"    display: inline-block;\n" +
"    background-color: #fff;\n" +
"    width: 14px;\n" +
"    height: 14px;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".tooltip__content p.stats .count.like {\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/like.855606fb4e3a7a6448e6c782f3f54e5a.svg);\n" +
"    mask-repeat: no-repeat;\n" +
"    mask-size: contain\n" +
"}\n" +
"\n" +
".tooltip__content p.stats .count.comment {\n" +
"    -webkit-mask-image: url(https://c.disquscdn.com/next/embed/assets/img/comment.c497957e45735cea6979492c82d0f9c8.svg);\n" +
"    mask-image: url(https://c.disquscdn.com/next/embed/assets/img/comment.c497957e45735cea6979492c82d0f9c8.svg);\n" +
"    -webkit-mask-repeat: no-repeat;\n" +
"    mask-repeat: no-repeat;\n" +
"    -webkit-mask-size: contain;\n" +
"    mask-size: contain\n" +
"}\n" +
"\n" +
".context-card .tooltip__content {\n" +
"    min-height: 40px;\n" +
"    margin-left: 44px\n" +
"}\n" +
"\n" +
".context-card .tooltip__content p {\n" +
"    white-space: nowrap;\n" +
"    overflow: hidden;\n" +
"    text-overflow: ellipsis\n" +
"}\n" +
"\n" +
".tooltip__footer {\n" +
"    display: block !important;\n" +
"    background: #e7e9ee;\n" +
"    height: 40px;\n" +
"    margin: 8px -8px 0;\n" +
"    padding: 8px;\n" +
"    border-radius: 0 0 4px 4px\n" +
"}\n" +
"\n" +
".tooltip__actions:after, .tooltip__actions:before, .tooltip__footer:after, .tooltip__footer:before {\n" +
"    display: table;\n" +
"    line-height: 0;\n" +
"    content: \"\"\n" +
"}\n" +
"\n" +
".tooltip__actions {\n" +
"    padding-right: 7px;\n" +
"    padding-top: 1px\n" +
"}\n" +
"\n" +
".full-profile {\n" +
"    color: #656c7a;\n" +
"    font-weight: 700;\n" +
"    float: right;\n" +
"    float: right !important;\n" +
"    font-size: 12px;\n" +
"    padding: 7px 13px 3px 0;\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/proceed.6846411133005c152405360d231aef13.png) center right no-repeat\n" +
"}\n" +
"\n" +
".dark .full-profile {\n" +
"    color: #7f8d99 !important\n" +
"}\n" +
"\n" +
".vote-action.tooltip {\n" +
"    cursor: default;\n" +
"    transition-delay: .4s;\n" +
"    position: absolute;\n" +
"    z-index: 1001;\n" +
"    display: inline-block;\n" +
"    width: 170px;\n" +
"    border-radius: 3px;\n" +
"    line-height: 1.1;\n" +
"    padding: 5px 10px;\n" +
"    bottom: 15px;\n" +
"    left: 6px\n" +
"}\n" +
"\n" +
".context-card {\n" +
"    display: block;\n" +
"    left: -100px;\n" +
"    right: 0;\n" +
"    top: -52px\n" +
"}\n" +
"\n" +
".context-card .notch {\n" +
"    top: auto;\n" +
"    left: 104px;\n" +
"    bottom: -9px;\n" +
"    background-position: bottom center;\n" +
"    height: 14px;\n" +
"    display: none\n" +
"}\n" +
"\n" +
".context-card h3 {\n" +
"    line-height: 1.1 !important;\n" +
"    margin-bottom: 2px !important;\n" +
"    white-space: nowrap;\n" +
"    overflow-y: hidden\n" +
"}\n" +
"\n" +
".context-card h3 a {\n" +
"    line-height: 1.2 !important;\n" +
"    display: block;\n" +
"    width: 100%;\n" +
"    overflow: hidden;\n" +
"    text-overflow: ellipsis\n" +
"}\n" +
"\n" +
".audiencesync {\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".audiencesync:after, .audiencesync:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".audiencesync p {\n" +
"    font-size: 12px;\n" +
"    line-height: 1.5em;\n" +
"    overflow: hidden;\n" +
"    float: left;\n" +
"    margin: 0;\n" +
"    max-width: 170px\n" +
"}\n" +
"\n" +
".audiencesync__icons {\n" +
"    margin-right: 10px;\n" +
"    margin-bottom: 1.5em;\n" +
"    overflow: hidden;\n" +
"    float: left\n" +
"}\n" +
"\n" +
".audiencesync__icons .icon {\n" +
"    float: left;\n" +
"    color: #939EA7\n" +
"}\n" +
"\n" +
".audiencesync__icons .icon-proceed {\n" +
"    padding: 7px\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .audiencesync__icons img {\n" +
"        width: 16px\n" +
"    }\n" +
"}\n" +
"\n" +
".connect__button, .sso__button {\n" +
"    background: 0 0;\n" +
"    font-size: 11px;\n" +
"    width: 34px;\n" +
"    height: 34px\n" +
"}\n" +
"\n" +
".auth-section {\n" +
"    display: none;\n" +
"    -ms-flex-wrap: wrap;\n" +
"    flex-wrap: wrap;\n" +
"    padding: 10px 0 0;\n" +
"    margin: 0;\n" +
"    z-index: 200\n" +
"}\n" +
"\n" +
".auth-section:after, .auth-section:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
"@media (min-width: 480px) {\n" +
"    .auth-section {\n" +
"        margin: 0 0 0 60px\n" +
"    }\n" +
"\n" +
"    .embed-refresh .auth-section {\n" +
"        margin: 0 0 0 72px\n" +
"    }\n" +
"}\n" +
"\n" +
".auth-section.logged-out__display {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex\n" +
"}\n" +
"\n" +
".auth-section.logged-out__hide {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".expanded .postbox .auth-section {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex\n" +
"}\n" +
"\n" +
".post-list .auth-section {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
".embed-refresh .post-list .auth-section {\n" +
"    margin-left: 72px\n" +
"}\n" +
"\n" +
".mobile .post-list .auth-section {\n" +
"    padding: 12px;\n" +
"    border: 2px solid #cbd2d6;\n" +
"    border-top: none\n" +
"}\n" +
"\n" +
".connect {\n" +
"    padding-right: 10px\n" +
"}\n" +
"\n" +
".connect__heading {\n" +
"    line-height: 19px\n" +
"}\n" +
"\n" +
".guest {\n" +
"    padding: 2px 0 0;\n" +
"    -ms-flex-positive: 1;\n" +
"    flex-grow: 1;\n" +
"    -ms-flex-preferred-size: 270px;\n" +
"    flex-basis: 270px\n" +
"}\n" +
"\n" +
".guest p {\n" +
"    margin: 0 0 12px\n" +
"}\n" +
"\n" +
".guest--refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    -ms-flex-line-pack: justify;\n" +
"    align-content: space-between;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".sign-up-wrapper-refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    margin-bottom: 10px\n" +
"}\n" +
"\n" +
".services {\n" +
"    margin: 0 0 18px\n" +
"}\n" +
"\n" +
".services:after, .services:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".services li {\n" +
"    float: left;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".services li.sso {\n" +
"    float: none;\n" +
"    margin: 0 0 12px\n" +
"}\n" +
"\n" +
".connect__button {\n" +
"    display: block;\n" +
"    text-indent: -9999em;\n" +
"    opacity: .9\n" +
"}\n" +
"\n" +
".connect__button:hover {\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
".sso__button {\n" +
"    display: block;\n" +
"    opacity: .9;\n" +
"    text-indent: 0\n" +
"}\n" +
"\n" +
".sso__button:hover {\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
".sso__button.image {\n" +
"    box-shadow: none;\n" +
"    width: auto\n" +
"}\n" +
"\n" +
".sso__button.no-image {\n" +
"    margin-bottom: 0;\n" +
"    font-size: 14px;\n" +
"    cursor: pointer;\n" +
"    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n" +
"    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .2), 0 1px 2px rgba(0, 0, 0, .05);\n" +
"    border: none;\n" +
"    background: #778289;\n" +
"    background: rgba(29, 47, 58, .6);\n" +
"    padding: 10px 16px;\n" +
"    color: #fff;\n" +
"    line-height: 1.1;\n" +
"    border-radius: 3px;\n" +
"    font-weight: 500;\n" +
"    transition: background .2s;\n" +
"    text-shadow: none;\n" +
"    text-align: center;\n" +
"    display: block;\n" +
"    width: 143px\n" +
"}\n" +
"\n" +
".sso__button.no-image.active, .sso__button.no-image.disabled, .sso__button.no-image:active, .sso__button.no-image:hover, .sso__button.no-image[disabled] {\n" +
"    color: #656c7a;\n" +
"    background-color: #e6e6e6\n" +
"}\n" +
"\n" +
".sso__button.no-image.active, .sso__button.no-image:active {\n" +
"    background-color: #ccc \\9\n" +
"}\n" +
"\n" +
".sso__button.no-image:hover {\n" +
"    color: #656c7a;\n" +
"    text-decoration: none;\n" +
"    background-color: #e6e6e6;\n" +
"    background-position: 0 -15px;\n" +
"    transition: background-position .1s linear\n" +
"}\n" +
"\n" +
".sso__button.no-image:focus {\n" +
"    outline: Highlight auto 5px;\n" +
"    outline: -webkit-focus-ring-color auto 5px;\n" +
"    outline-offset: -2px\n" +
"}\n" +
"\n" +
".sso__button.no-image.active, .sso__button.no-image:active {\n" +
"    background-color: #e6e6e6;\n" +
"    background-color: #d9d9d9 \\9;\n" +
"    background-image: none;\n" +
"    outline: 0;\n" +
"    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15), 0 1px 2px rgba(0, 0, 0, .05)\n" +
"}\n" +
"\n" +
".sso__button.no-image.disabled, .sso__button.no-image[disabled] {\n" +
"    cursor: default;\n" +
"    background-color: #e6e6e6;\n" +
"    background-image: none;\n" +
"    opacity: .65;\n" +
"    filter: alpha(opacity=65);\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".sso__button.no-image:not(:disabled):hover {\n" +
"    background: #606d75;\n" +
"    background: rgba(29, 47, 58, .7);\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".sso__button.no-image:not(:disabled).active, .sso__button.no-image:not(:disabled):active {\n" +
"    transition: none;\n" +
"    background: #2e9fff\n" +
"}\n" +
"\n" +
".sso__button.no-image.busy {\n" +
"    background: #ebeef2;\n" +
"    color: #999;\n" +
"    text-shadow: none\n" +
"}\n" +
"\n" +
".sso__button.no-image.busy:active, .sso__button.no-image.busy:hover {\n" +
"    background: #ebeef2;\n" +
"    text-shadow: none;\n" +
"    cursor: not-allowed\n" +
"}\n" +
"\n" +
".sso__button.no-image.btn-small {\n" +
"    font-size: 12px;\n" +
"    padding: 8px 10px;\n" +
"    background-position: 0 -10px\n" +
"}\n" +
"\n" +
".sso__button.no-image.btn-small.follow {\n" +
"    font-weight: 400;\n" +
"    font-size: 10px;\n" +
"    padding: 1px 4px;\n" +
"    border-radius: 3px;\n" +
"    box-shadow: 0 1px 0 rgba(0, 0, 0, .07)\n" +
"}\n" +
"\n" +
".sso__button.no-image.btn-small:hover {\n" +
"    background-position: 0 -40px\n" +
"}\n" +
"\n" +
".mobile .sso__button.no-image {\n" +
"    border: none;\n" +
"    box-shadow: none\n" +
"}\n" +
"\n" +
".guest-details {\n" +
"    overflow: hidden;\n" +
"    display: none\n" +
"}\n" +
"\n" +
".guest-details.expanded {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".guest-checkbox {\n" +
"    margin: 9px 2px 19px 0\n" +
"}\n" +
"\n" +
"@media (min-width: 480px) {\n" +
"    .guest-checkbox {\n" +
"        margin-bottom: 12px\n" +
"    }\n" +
"}\n" +
"\n" +
".g-recaptcha {\n" +
"    margin-bottom: 20px\n" +
"}\n" +
"\n" +
"@media (max-width: 676px) {\n" +
"    .recaptcha-challenge-container {\n" +
"        left: 0 !important\n" +
"    }\n" +
"}\n" +
"\n" +
".guest-form-title {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".guest-form-title--refresh {\n" +
"    margin: 0 10px 0 0;\n" +
"    line-height: 19px\n" +
"}\n" +
"\n" +
".guest-text {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".is-guest .guest-text, .register-text {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".is-guest .register-text, .proceed.is-submitting .icon-proceed {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".auth-twitter button {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -39px 0 no-repeat;\n" +
"    width: 38px;\n" +
"    height: 38px\n" +
"}\n" +
"\n" +
".auth-facebook button {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -38px -38px no-repeat;\n" +
"    width: 38px;\n" +
"    height: 38px\n" +
"}\n" +
"\n" +
".auth-google button {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) 0 -38px no-repeat;\n" +
"    width: 38px;\n" +
"    height: 38px\n" +
"}\n" +
"\n" +
".auth-disqus button {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) no-repeat;\n" +
"    width: 39px;\n" +
"    height: 38px\n" +
"}\n" +
"\n" +
".proceed {\n" +
"    position: relative;\n" +
"    font-size: 12px;\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
"@media (min-width: 480px) {\n" +
"    .proceed {\n" +
"        float: right;\n" +
"        clear: both;\n" +
"        width: 60px\n" +
"    }\n" +
"}\n" +
"\n" +
".proceed.active {\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
".proceed.is-submitting .spinner {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".proceed__button {\n" +
"    height: 32px;\n" +
"    padding: 9px 0;\n" +
"    width: 100%;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".dark .proceed__button {\n" +
"    background: rgba(255, 255, 255, .85);\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".dark .proceed__button:hover {\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    color: #222\n" +
"}\n" +
"\n" +
".is-submitting .proceed__button {\n" +
"    opacity: .5;\n" +
"    cursor: default\n" +
"}\n" +
"\n" +
".is-submitting .proceed__button:hover {\n" +
"    background-color: #656c7a\n" +
"}\n" +
"\n" +
".dark .is-submitting .proceed__button {\n" +
"    opacity: .7;\n" +
"    background: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark .is-submitting .proceed__button:hover {\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    color: #444\n" +
"}\n" +
"\n" +
".next {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".register .next {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".register .submit {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".help-tooltip__wrapper {\n" +
"    cursor: pointer;\n" +
"    display: inline-block;\n" +
"    position: relative;\n" +
"    background: 0 0;\n" +
"    line-height: unset;\n" +
"    text-align: left\n" +
"}\n" +
"\n" +
".help-tooltip__wrapper:hover .help-tooltip__container {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".help-tooltip__container, .post-actions {\n" +
"    visibility: hidden;\n" +
"    filter: alpha(opacity=0)\n" +
"}\n" +
"\n" +
".help-tooltip__container {\n" +
"    opacity: 0;\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    width: 300px;\n" +
"    height: auto;\n" +
"    top: 10px;\n" +
"    left: 8px;\n" +
"    margin-left: -155px;\n" +
"    padding-top: 10px;\n" +
"    z-index: 1001\n" +
"}\n" +
"\n" +
".help-tooltip__container.expanded {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".help-tooltip {\n" +
"    text-indent: 0;\n" +
"    padding: 18px 14px 4px\n" +
"}\n" +
"\n" +
".help-tooltip__heading {\n" +
"    color: #687a86;\n" +
"    padding: 0 4px;\n" +
"    margin: 0 0 14px;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
".help-tooltip__list {\n" +
"    list-style: disc;\n" +
"    padding: 0 0 0 20px;\n" +
"    margin: 0 0 14px\n" +
"}\n" +
"\n" +
".help-tooltip__list li {\n" +
"    color: #687a86;\n" +
"    list-style: disc;\n" +
"    margin: 0 0 6px;\n" +
"    line-height: 1.4;\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".help-tooltip__list li span {\n" +
"    color: #656c7a\n" +
"}\n" +
"\n" +
".help-tooltip__button {\n" +
"    font-size: 12px;\n" +
"    padding: 10px;\n" +
"    margin-bottom: -2px;\n" +
"    display: block;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper {\n" +
"    margin: 0 0 0 48px\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--refresh {\n" +
"    margin: 0 0 0 72px\n" +
"}\n" +
"\n" +
".edit .textarea-outer-wrapper {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper .textarea-wrapper {\n" +
"    background: #fff;\n" +
"    position: relative;\n" +
"    border-radius: 4px;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper .textarea-wrapper:after, .textarea-outer-wrapper .textarea-wrapper:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper .textarea-wrapper:focus {\n" +
"    border: 2px solid #c2c6cc\n" +
"}\n" +
"\n" +
".edit .textarea-outer-wrapper .textarea-wrapper {\n" +
"    padding-bottom: 36px;\n" +
"    margin: 3px 0 9px !important\n" +
"}\n" +
"\n" +
".mobile .textarea-outer-wrapper--top-level .textarea-outer-wrapper .textarea-wrapper {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".mobile .edit .textarea-outer-wrapper .textarea-wrapper {\n" +
"    margin: 0 !important\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper .textarea-wrapper.error {\n" +
"    border-color: #f05f70\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level form.reply .postbox {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level form.reply .postbox .compose-wrapper {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-negative: 0;\n" +
"    flex-shrink: 0;\n" +
"    -ms-flex-align: start;\n" +
"    align-items: flex-start\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level form.reply .postbox .compose-wrapper .avatar {\n" +
"    margin-right: auto;\n" +
"    transition: left .2s linear\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level form.reply .postbox .compose-wrapper .textarea-outer-wrapper {\n" +
"    -ms-flex: 1 0 0%;\n" +
"    flex: 1 0 0%;\n" +
"    margin-left: 12px\n" +
"}\n" +
"\n" +
"@media (max-width: 500px) {\n" +
"    .textarea-outer-wrapper--top-level form.reply .postbox .compose-wrapper .avatar {\n" +
"        display: none\n" +
"    }\n" +
"\n" +
"    .textarea-outer-wrapper--top-level form.reply .postbox .compose-wrapper .textarea-outer-wrapper {\n" +
"        margin-left: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".mobile .textarea-outer-wrapper--top-level {\n" +
"    margin-bottom: 1em\n" +
"}\n" +
"\n" +
".mobile .textarea-outer-wrapper--top-level.active {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".mobile .textarea-outer-wrapper--top-level .avatar {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".mobile .textarea-outer-wrapper--top-level .textarea-outer-wrapper {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".placeholder {\n" +
"    color: #687a86;\n" +
"    line-height: 30px;\n" +
"    font-size: 15px;\n" +
"    position: absolute;\n" +
"    top: 7px;\n" +
"    left: 10px;\n" +
"    right: 9px;\n" +
"    white-space: nowrap;\n" +
"    text-overflow: ellipsis;\n" +
"    overflow: hidden;\n" +
"    cursor: text\n" +
"}\n" +
"\n" +
"@media (min-width: 500px) {\n" +
"    .placeholder {\n" +
"        font-size: 18px\n" +
"    }\n" +
"}\n" +
"\n" +
".form-refresh .textarea.textarea {\n" +
"    min-height: 44px;\n" +
"    /*padding: 20px;*/\n" +
"    /*border-radius: 20px;*/\n" +
"    font-size: 15px\n" +
"}\n" +
"\n" +
".form-refresh .textarea-wrapper {\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".form-refresh .post-actions {\n" +
"    /*border-radius: 0 0 20px 20px*/\n" +
"}\n" +
"\n" +
".form-refresh .post-action__button.post-action__button {\n" +
"    border-radius: 3px;\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 15px;\n" +
"    line-height: 1;\n" +
"    color: #fff;\n" +
"    padding: 7px 15px;\n" +
"    background-color: var(--publisher-color-safe, #2e9fff);\n" +
"    margin-top: 3px;\n" +
"    margin-right: 2px;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".form-refresh .post-action__button.post-action__button.small-size-button {\n" +
"    padding: 7px;\n" +
"    font-size: 16px;\n" +
"    margin-top: 3px\n" +
"}\n" +
"\n" +
"@media (max-width: 768px) {\n" +
"    .form-refresh .post-action__button.post-action__button.edit-button {\n" +
"        padding: 7px 28px\n" +
"    }\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .form-refresh .post-action__button.post-action__button.edit-button {\n" +
"        padding: 7px;\n" +
"        font-size: 16px;\n" +
"        margin-top: 3px\n" +
"    }\n" +
"}\n" +
"\n" +
".form-refresh .post-action__cancel.post-action__cancel {\n" +
"    /*border-radius: 14px;*/\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 15px;\n" +
"    line-height: 1;\n" +
"    color: var(--publisher-color-safe, #2e9fff);\n" +
"    padding: 7px;\n" +
"    margin-top: 3px;\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .form-refresh .post-action__cancel.post-action__cancel {\n" +
"        font-size: 16px;\n" +
"        margin-top: 3px;\n" +
"        margin-right: 0\n" +
"    }\n" +
"}\n" +
"\n" +
".form-refresh .placeholder {\n" +
"    left: 14px;\n" +
"    right: 14px;\n" +
"    top: 14px;\n" +
"    line-height: 1.2;\n" +
"    font-size: 15px\n" +
"}\n" +
"\n" +
".form-refresh.expanded .textarea {\n" +
"    min-height: 115px\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .form-refresh.expanded .textarea {\n" +
"        min-height: 75px;\n" +
"        margin-bottom: 25px\n" +
"    }\n" +
"}\n" +
"\n" +
".textarea {\n" +
"    color: #2a2e2e;\n" +
"    cursor: text;\n" +
"    resize: none;\n" +
"    border: 0;\n" +
"    display: block;\n" +
"    padding: 6px 10px 8px;\n" +
"    margin: 0;\n" +
"    width: 100%;\n" +
"    min-height: 44px;\n" +
"    height: auto;\n" +
"    line-height: 1.4;\n" +
"    font-size: 14px;\n" +
"    overflow-y: scroll;\n" +
"    word-break: break-word;\n" +
"    transition: all .15s ease-in-out\n" +
"}\n" +
"\n" +
".dark .textarea {\n" +
"    border-color: #e7e9ee;\n" +
"    border-radius: 4px\n" +
"}\n" +
"\n" +
".expanded .textarea {\n" +
"    margin-bottom: 36px;\n" +
"    min-height: 73px\n" +
"}\n" +
"\n" +
"@media (max-width: 500px) {\n" +
"    .expanded .textarea {\n" +
"        min-height: 60px\n" +
"    }\n" +
"}\n" +
"\n" +
".mobile .textarea {\n" +
"    min-height: 35px\n" +
"}\n" +
"\n" +
".textarea div, .textarea p {\n" +
"    margin: 0;\n" +
"    line-height: 1.4\n" +
"}\n" +
"\n" +
".textarea:focus {\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".expanded.authenticated .postbox .logged-in {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".expanded.authenticated .postbox .logged-out, .media-preview .empty, .media-preview.empty, .mobile .alert .avatar {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".ratings-wrapper {\n" +
"    width: calc(100% - 60px);\n" +
"    margin-left: auto\n" +
"}\n" +
"\n" +
".embed-refresh .ratings-wrapper {\n" +
"    width: calc(100% - 82px)\n" +
"}\n" +
"\n" +
".edit .ratings-wrapper {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".mobile .ratings-wrapper {\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
"@media (max-width: 500px) {\n" +
"    .embed-refresh .ratings-wrapper, .ratings-wrapper {\n" +
"        width: 100%\n" +
"    }\n" +
"}\n" +
"\n" +
".postbox {\n" +
"    position: relative;\n" +
"    margin-left: 60px\n" +
"}\n" +
"\n" +
".reply-form-container .postbox {\n" +
"    margin: 24px 0 0 60px\n" +
"}\n" +
"\n" +
".children .postbox {\n" +
"    margin-left: 48px\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level .postbox {\n" +
"    margin: 0 0 4px\n" +
"}\n" +
"\n" +
".children .children .children .postbox, .mobile .postbox {\n" +
"    margin-left: 0 !important\n" +
"}\n" +
"\n" +
".post-list .postbox .avatar img {\n" +
"    width: 36px;\n" +
"    height: 36px\n" +
"}\n" +
"\n" +
".postbox .edit-alert .alert {\n" +
"    border-radius: 0;\n" +
"    margin: -36px -2px 36px;\n" +
"    border-top: solid 2px;\n" +
"    border-color: #dbdfe4\n" +
"}\n" +
"\n" +
".postbox section {\n" +
"    border-radius: 0 0 3px 3px\n" +
"}\n" +
"\n" +
".postbox section label {\n" +
"    font-size: 13px;\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".dark .postbox section label {\n" +
"    color: rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".postbox section small {\n" +
"    display: block;\n" +
"    font-size: 11px;\n" +
"    line-height: 1.2 !important;\n" +
"    color: #a9adb3;\n" +
"    margin: 4px 0 0 16px\n" +
"}\n" +
"\n" +
".edit .edit-alert .alert {\n" +
"    border-radius: 0;\n" +
"    margin: 0 -2px;\n" +
"    border-top: solid 2px;\n" +
"    border-color: #dbdfe4\n" +
"}\n" +
"\n" +
".edit .edit-alert .alert > a {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
".media-drag-hover {\n" +
"    position: absolute;\n" +
"    overflow: hidden;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    border-radius: 3px;\n" +
"    background-color: rgba(0, 0, 0, .4);\n" +
"    text-align: center;\n" +
"    font-weight: 700;\n" +
"    z-index: 2000;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".media-drag-hover .drag-text {\n" +
"    border: 3px dashed #fff;\n" +
"    padding: 12px;\n" +
"    position: absolute;\n" +
"    top: 50%;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    margin: -22px 30px 0;\n" +
"    text-align: center;\n" +
"    border-radius: 6px;\n" +
"    height: 45px\n" +
"}\n" +
"\n" +
".media-box, .media-ct, .media-expanded, .media-progress-box, .media-surface {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".media-preview {\n" +
"    transition: padding-bottom .15s ease-in-out;\n" +
"    background-color: #687a86;\n" +
"    background: rgba(16, 48, 68, .03);\n" +
"    border-top: solid 2px;\n" +
"    border-color: #dbdfe4;\n" +
"    padding: 10px 0 8px;\n" +
"    margin: 20px 0 0\n" +
"}\n" +
"\n" +
".dark .media-preview {\n" +
"    background: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".expanded .media-preview {\n" +
"    padding-bottom: 42px\n" +
"}\n" +
"\n" +
".media-preview ul {\n" +
"    display: inline\n" +
"}\n" +
"\n" +
".media-preview li {\n" +
"    display: inline-block;\n" +
"    zoom: 1;\n" +
"    margin: 0 0 0 8px\n" +
"}\n" +
"\n" +
".media-preview li.active {\n" +
"    border: 1px solid;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".media-expanded {\n" +
"    max-height: 300px;\n" +
"    margin: 8px 8px 0;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".media-expanded img {\n" +
"    max-height: 300px;\n" +
"    max-width: 100%\n" +
"}\n" +
"\n" +
".media-box, .media-surface img {\n" +
"    max-width: 128px;\n" +
"    max-height: 128px\n" +
"}\n" +
"\n" +
".media-box {\n" +
"    display: table-cell;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".media-ct {\n" +
"    display: inline;\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".media-surface {\n" +
"    display: table-cell\n" +
"}\n" +
"\n" +
".media-surface img {\n" +
"    border-radius: 3px\n" +
"}\n" +
"\n" +
".media-progress-box {\n" +
"    width: 128px;\n" +
"    height: 128px;\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/loader.ba7c86e8b4b6135bb668d05223f8f127.gif) center 45% no-repeat\n" +
"}\n" +
"\n" +
".media-progress {\n" +
"    position: absolute;\n" +
"    top: 65%;\n" +
"    left: 20%;\n" +
"    width: 60%;\n" +
"    height: 5px;\n" +
"    background-color: #dbdfe4\n" +
"}\n" +
"\n" +
".media-progress .bar {\n" +
"    background-color: #687a86;\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    top: 0;\n" +
"    bottom: 0\n" +
"}\n" +
"\n" +
".post-actions {\n" +
"    opacity: 0;\n" +
"    background: #f6f8f9;\n" +
"    border-radius: 0 0 2px 2px;\n" +
"    border-top: solid 2px #dbdfe4;\n" +
"    position: absolute;\n" +
"    bottom: 0;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    height: 36px;\n" +
"    transition: opacity linear .2s\n" +
"}\n" +
"\n" +
".edit .post-actions, .expanded .post-actions {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".dark .post-actions {\n" +
"    background: rgba(0, 0, 0, .05)\n" +
"}\n" +
"\n" +
".post-action__button {\n" +
"    margin: -2px -2px 0 0;\n" +
"    white-space: nowrap;\n" +
"    border-radius: 0 0 3px;\n" +
"    font-size: 12px;\n" +
"    padding: 12px 14px 13px;\n" +
"    font-weight: 700;\n" +
"    float: right\n" +
"}\n" +
"\n" +
".post-action__cancel {\n" +
"    line-height: 30px;\n" +
"    float: right;\n" +
"    color: #c2c6cc !important;\n" +
"    font-size: 12px;\n" +
"    font-weight: 500;\n" +
"    margin-right: 12px\n" +
"}\n" +
"\n" +
".post-action__cancel:hover {\n" +
"    color: #656c7a !important\n" +
"}\n" +
"\n" +
".wysiwyg {\n" +
"    position: absolute;\n" +
"    top: 6px;\n" +
"    left: 6px;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    height: 24px\n" +
"}\n" +
"\n" +
".gif-picker, .wysiwyg__item {\n" +
"    position: relative;\n" +
"    display: -ms-flexbox\n" +
"}\n" +
"\n" +
".wysiwyg .vertical-separator {\n" +
"    border-right: 2px solid #dbdfe4;\n" +
"    margin: 0 5px\n" +
"}\n" +
"\n" +
".wysiwyg__item {\n" +
"    float: left;\n" +
"    height: 24px;\n" +
"    width: 24px;\n" +
"    margin-right: 4px;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    transition: opacity .1s linear;\n" +
"    opacity: .6\n" +
"}\n" +
"\n" +
".wysiwyg__item input[type=file] {\n" +
"    visibility: hidden;\n" +
"    width: 1px\n" +
"}\n" +
"\n" +
".wysiwyg__item a span {\n" +
"    width: 14px;\n" +
"    height: 14px;\n" +
"    display: block;\n" +
"    text-indent: -9999em\n" +
"}\n" +
"\n" +
".wysiwyg__item img {\n" +
"    height: 15px\n" +
"}\n" +
"\n" +
".wysiwyg__item.active, .wysiwyg__item:active, .wysiwyg__item:hover {\n" +
"    opacity: 1;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".wysiwyg__gif {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -77px -39px no-repeat;\n" +
"    width: 23px;\n" +
"    height: 19px\n" +
"}\n" +
"\n" +
".wysiwyg__attach {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) 0 -76px no-repeat;\n" +
"    width: 23px;\n" +
"    height: 19px\n" +
"}\n" +
"\n" +
".wysiwyg__blockquote {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -77px -21px no-repeat;\n" +
"    width: 24px;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".wysiwyg__bold {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -102px -77px no-repeat;\n" +
"    width: 15px;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".wysiwyg__code {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -77px 0 no-repeat;\n" +
"    width: 25px;\n" +
"    height: 21px\n" +
"}\n" +
"\n" +
".wysiwyg__italic {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -102px -59px no-repeat;\n" +
"    width: 14px;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".wysiwyg__link {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -102px 0 no-repeat;\n" +
"    width: 20px;\n" +
"    height: 21px\n" +
"}\n" +
"\n" +
".wysiwyg__spoiler {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -77px -58px no-repeat;\n" +
"    width: 22px;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".wysiwyg__star-badge {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -23px -76px no-repeat;\n" +
"    width: 10px;\n" +
"    height: 10px\n" +
"}\n" +
"\n" +
".wysiwyg__strikethrough {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -102px -41px no-repeat;\n" +
"    width: 19px;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".wysiwyg__underline {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/svg-sprite.4da5413f5086c5755b46094b813dbfcd.svg) -102px -21px no-repeat;\n" +
"    width: 15px;\n" +
"    height: 20px\n" +
"}\n" +
"\n" +
".gif-picker {\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center\n" +
"}\n" +
"\n" +
".gif-picker .wysiwyg__item {\n" +
"    padding: 3px 0 2px\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container {\n" +
"    position: absolute;\n" +
"    z-index: 1000\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout {\n" +
"    border: 2px solid #687a86;\n" +
"    background: #fff;\n" +
"    border-radius: 4px;\n" +
"    padding: 12px 12px 4px;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    -ms-flex-pack: justify;\n" +
"    justify-content: space-between;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__search-bar {\n" +
"    width: 100%;\n" +
"    border-radius: 4px;\n" +
"    border: 2px solid #dbdfe4;\n" +
"    margin-bottom: 10px;\n" +
"    min-height: 28px;\n" +
"    resize: none;\n" +
"    white-space: normal;\n" +
"    height: auto\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view {\n" +
"    max-height: 800px;\n" +
"    overflow-y: scroll;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view .gif-picker__gifs-view-left, .gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view .gif-picker__gifs-view-right {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view .gif-picker__image {\n" +
"    border: 2px solid #fff;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view .gif-picker__image:hover {\n" +
"    cursor: pointer;\n" +
"    border: 2px solid #0064cd;\n" +
"    border-radius: 2px\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view .gif-picker__image .gif-picker__category-overlay {\n" +
"    position: absolute;\n" +
"    background: #2a2e2e;\n" +
"    opacity: .6;\n" +
"    height: 100%;\n" +
"    width: 100%;\n" +
"    top: 0;\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__gifs-view-container .gif-picker__gifs-view .gif-picker__image .gif-picker__category-title {\n" +
"    position: absolute;\n" +
"    color: #fff;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    width: 100%;\n" +
"    height: 100%;\n" +
"    text-shadow: 1px 1px #2a2e2e;\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".gif-picker .gif-picker__popout-container .gif-picker__popout .gif-picker__powered-by {\n" +
"    margin-top: 4px;\n" +
"    width: 100px\n" +
"}\n" +
"\n" +
".gif-picker .new-feature-badge {\n" +
"    top: -3px;\n" +
"    right: -2px\n" +
"}\n" +
"\n" +
".media-uploader {\n" +
"    margin-left: 4px;\n" +
"    margin-right: 2px\n" +
"}\n" +
"\n" +
".media-uploader .wysiwyg__item {\n" +
"    padding: 3px 0 2px\n" +
"}\n" +
"\n" +
".media-uploader .wysiwyg__item img {\n" +
"    height: 19px;\n" +
"    margin-top: 3px\n" +
"}\n" +
"\n" +
".user-mention__list {\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    top: 99%;\n" +
"    z-index: 1002;\n" +
"    width: 100%;\n" +
"    max-height: 200px;\n" +
"    box-sizing: content-box;\n" +
"    margin: 0 -2px -2px;\n" +
"    padding: 0;\n" +
"    list-style-type: none;\n" +
"    line-height: 1;\n" +
"    zoom: 1;\n" +
"    overflow-y: scroll;\n" +
"    -webkit-appearance: none;\n" +
"    background: #fff;\n" +
"    border: 2px solid #dbdfe4;\n" +
"    border-radius: 0 0 3px 3px;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".user-mention__header {\n" +
"    background: #fff;\n" +
"    padding: 8px;\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".user-mention__header h5 {\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    border: 0;\n" +
"    font-weight: 700;\n" +
"    font-size: 11px;\n" +
"    text-transform: uppercase;\n" +
"    line-height: 11px;\n" +
"    color: #999\n" +
"}\n" +
"\n" +
".dark .user-mention__header {\n" +
"    background: rgba(0, 0, 0, .05)\n" +
"}\n" +
"\n" +
".dark .user-mention__header h5 {\n" +
"    color: rgba(0, 0, 0, .6)\n" +
"}\n" +
"\n" +
".user-mention__item {\n" +
"    position: relative;\n" +
"    color: #656c7a;\n" +
"    padding: 8px;\n" +
"    font-weight: 500;\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level .user-mention__item span {\n" +
"    padding-left: 32px\n" +
"}\n" +
"\n" +
".user-mention__item .avatar {\n" +
"    top: 5px;\n" +
"    left: 5px;\n" +
"    width: 22px;\n" +
"    height: 22px\n" +
"}\n" +
"\n" +
".textarea-outer-wrapper--top-level .user-mention__item .avatar {\n" +
"    top: 6px;\n" +
"    left: 8px\n" +
"}\n" +
"\n" +
".user-mention__item:hover {\n" +
"    background-color: #e7e9ee\n" +
"}\n" +
"\n" +
".user-mention__item.active {\n" +
"    background-color: #2e9fff;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".user-mention__item.active:last-child {\n" +
"    border-radius: 0 0 1px 1px\n" +
"}\n" +
"\n" +
"div.new-feature-badge-star {\n" +
"    width: 9px;\n" +
"    height: 9px;\n" +
"    border-radius: 4.5px;\n" +
"    background-color: #fff;\n" +
"    line-height: 10px;\n" +
"    position: absolute;\n" +
"    top: -.5px;\n" +
"    right: 3.5px\n" +
"}\n" +
"\n" +
"#reactions-promotion {\n" +
"    border: 1px solid #dbdfe4;\n" +
"    border-radius: 4px;\n" +
"    padding-bottom: 16px\n" +
"}\n" +
"\n" +
"#reactions-promotion .striped-bar {\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/striped-bar.6bfe0ab06ab0fd0e71c7b81f1dfb78cf.svg) top repeat-x;\n" +
"    background-size: auto 15px;\n" +
"    width: 100%;\n" +
"    height: 15px;\n" +
"    margin-bottom: 5px\n" +
"}\n" +
"\n" +
"#reactions-promotion .private {\n" +
"    color: #687a86;\n" +
"    font-size: 13px;\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
"#reactions-promotion .private .icon-lock {\n" +
"    margin-right: 6px\n" +
"}\n" +
"\n" +
"#reactions-promotion .promotion-title {\n" +
"    text-align: center;\n" +
"    width: 90%;\n" +
"    margin-left: auto;\n" +
"    margin-right: auto\n" +
"}\n" +
"\n" +
"#reactions-promotion .btn-primary {\n" +
"    background-color: #2e9fff\n" +
"}\n" +
"\n" +
".no-touch #reactions-promotion .btn-primary:hover, .no-touchevents #reactions-promotion .btn-primary:hover {\n" +
"    background-color: #164B78;\n" +
"    border-color: #164B78;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".dark #reactions-promotion {\n" +
"    border-color: #6C6F73\n" +
"}\n" +
"\n" +
".dark #reactions-promotion .striped-bar {\n" +
"    filter: brightness(.5)\n" +
"}\n" +
"\n" +
".dark #reactions-promotion .private {\n" +
"    color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".dark #reactions-promotion .btn-info {\n" +
"    background-color: #6C6F73\n" +
"}\n" +
"\n" +
".dark #reactions-promotion .btn-info:not(:disabled):hover {\n" +
"    background: #535659\n" +
"}\n" +
"\n" +
".mobile .alert {\n" +
"    margin-left: 0 !important\n" +
"}\n" +
"\n" +
".mobile .post .alert .avatar {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".mobile .post-list form.edit {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .authored-by-session-user form.edit:before, .mobile .post-list .authored-by-session-user form.reply:before {\n" +
"    left: 140px\n" +
"}\n" +
"\n" +
".mobile .post-list > .post:first-child > .post-content {\n" +
"    border-top: none\n" +
"}\n" +
"\n" +
".mobile .post-list .post {\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content {\n" +
"    margin: 0;\n" +
"    padding-top: 12px\n" +
"}\n" +
"\n" +
":not(.embed-refresh).mobile .post-list .post .post-content .indicator {\n" +
"    height: 30px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu {\n" +
"    visibility: visible;\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    position: absolute;\n" +
"    min-width: 0;\n" +
"    right: 0;\n" +
"    top: -10px;\n" +
"    padding: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu * {\n" +
"    -webkit-tap-highlight-color: transparent\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-list .post .post-content .post-menu {\n" +
"    top: -13px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu .dropdown-toggle {\n" +
"    border: none;\n" +
"    padding: 15px 6px 12px 10px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu li {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu li a {\n" +
"    position: static;\n" +
"    display: block;\n" +
"    margin: 0;\n" +
"    padding: 10px 0 10px 10px\n" +
"}\n" +
"\n" +
":not(.embed-refresh) .mobile .post-list .post .post-content .post-menu li a span {\n" +
"    display: block;\n" +
"    width: 22px;\n" +
"    height: 22px;\n" +
"    line-height: 22px;\n" +
"    text-align: center;\n" +
"    border-radius: 3px;\n" +
"    box-shadow: inset 0 0 0 2px rgba(0, 39, 59, .2);\n" +
"    transition: background\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu .dropdown-menu {\n" +
"    top: 32px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-list .post .post-content .post-menu .dropdown-menu {\n" +
"    top: 36px;\n" +
"    right: 12px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-menu .dropdown-menu li a {\n" +
"    padding: 8px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-list .post .post-content .avatar {\n" +
"    margin-bottom: 9px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .avatar .user {\n" +
"    background: #c2c6cc\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .avatar .user img {\n" +
"    width: 30px;\n" +
"    height: 30px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-body {\n" +
"    overflow: visible;\n" +
"    display: block\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-body .post-byline {\n" +
"    display: block;\n" +
"    overflow: hidden;\n" +
"    text-overflow: ellipsis;\n" +
"    white-space: nowrap;\n" +
"    padding-right: 15px\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post:after, .mobile .post-list .post .post-content .post-body .badge, .mobile .post-list .post.minimized > .post-content .post-meta {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-body .post-message-container {\n" +
"    box-sizing: border-box;\n" +
"    position: static;\n" +
"    width: auto\n" +
"}\n" +
"\n" +
".mobile .post-list .post.collapsed > .post-content, .mobile .post-list .post.minimized > .post-content {\n" +
"    margin-bottom: 12px\n" +
"}\n" +
"\n" +
".mobile .post-list .post.collapsed > .post-content .post-message, .mobile .post-list .post.minimized > .post-content .post-message {\n" +
"    float: none;\n" +
"    margin-right: 24px\n" +
"}\n" +
"\n" +
".mobile .post-list .post.minimized > .post-content .avatar img {\n" +
"    width: 30px;\n" +
"    height: 30px;\n" +
"    margin-top: 4px\n" +
"}\n" +
"\n" +
".mobile .post-list .post.minimized > .post-content .post-message p {\n" +
"    line-height: 1.35em\n" +
"}\n" +
"\n" +
".mobile .post-list .post.minimized.collapsed > .post-content header {\n" +
"    line-height: 36px;\n" +
"    font-size: 14px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-list .post.collapsed > .post-content header {\n" +
"    line-height: 1\n" +
"}\n" +
"\n" +
".mobile input[type=text], .mobile input[type=email], .mobile input[type=password], .mobile input[type=checkbox], .mobile textarea {\n" +
"    font-size: 16px;\n" +
"    -ms-touch-action: none;\n" +
"    touch-action: none\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content {\n" +
"    margin-bottom: 16px;\n" +
"    padding: 0;\n" +
"    border-top: none;\n" +
"    transition: none\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content.new .avatar, .mobile .post-list .post .post-content.target .avatar {\n" +
"    margin-left: 8px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content.new .indicator {\n" +
"    width: 2px\n" +
"}\n" +
"\n" +
".mobile .post-list .post .post-content .post-body .post-body-inner {\n" +
"    clear: left;\n" +
"    position: relative;\n" +
"    top: -4px;\n" +
"    overflow: visible\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-list .post .post-content .post-body .post-body-inner {\n" +
"    top: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .children {\n" +
"    padding-left: 17px;\n" +
"    border-left: 2px solid #e7e9ee\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post .post-content {\n" +
"    margin-left: 0;\n" +
"    padding: 0;\n" +
"    border-top: none\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post .post-content .post-message-container, .mobile .post-list .children .post .post-content footer, .mobile .post-list .children .post .post-content header {\n" +
"    margin-left: 0 !important\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post .post-content .post-body, .mobile .post-list .children .post-content .reply-form-container {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post .post-content .avatar img {\n" +
"    margin-top: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .children .post-content .reply-form-container .alert, .mobile .post-list .postbox {\n" +
"    margin-top: 5px\n" +
"}\n" +
"\n" +
".mobile .post-list .children .advertisement {\n" +
"    margin-left: -17px\n" +
"}\n" +
"\n" +
".mobile .post-list .children li:only-child {\n" +
"    margin-bottom: 20px\n" +
"}\n" +
"\n" +
".mobile .post-list .children .show-children {\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".mobile .post-list .children .children .advertisement {\n" +
"    margin-left: -37px\n" +
"}\n" +
"\n" +
".mobile .post-list .children .children .children {\n" +
"    padding-left: 0;\n" +
"    border-left: none\n" +
"}\n" +
"\n" +
".mobile .post-list .children .children .children .show-children {\n" +
"    padding-left: 17px;\n" +
"    border-left: 2px solid #e7e9ee\n" +
"}\n" +
"\n" +
".mobile .post-list .children .highlighted.post-content, .mobile .post-list .highlighted .post-content {\n" +
"    padding: 12px\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .post-content .post-menu {\n" +
"    right: 12px;\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-list .highlighted .post-content .post-menu {\n" +
"    top: 11px\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .post-content .indicator {\n" +
"    margin-left: 12px\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .thread-link {\n" +
"    margin: 3px 0 0 !important\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .thread-link a {\n" +
"    line-height: 1.6em\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .thread-link .icon, .mobile .post-list .highlighted .thread-link .text {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .thread-link .mobile-text {\n" +
"    display: inline !important\n" +
"}\n" +
"\n" +
".mobile .post-list .highlighted .feedback {\n" +
"    display: none !important\n" +
"}\n" +
"\n" +
".mobile .highlighted-post .highlighted > .post-content footer menu li.reply {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-votes .control {\n" +
"    width: 15px;\n" +
"    height: 15px;\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .post-votes .count {\n" +
"    top: 2px;\n" +
"    font-size: 14px\n" +
"}\n" +
"\n" +
".mobile .dark .post-list .post .post-menu li a span {\n" +
"    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, .6)\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .dark .post-list .post .post-menu li a span {\n" +
"    box-shadow: unset\n" +
"}\n" +
"\n" +
".mobile .dark .post-list .post form.reply:before {\n" +
"    background: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".mobile .dark .post-list .children {\n" +
"    border-color: rgba(255, 255, 255, .08)\n" +
"}\n" +
"\n" +
".visually-hidden {\n" +
"    clip: rect(0 0 0 0);\n" +
"    -webkit-clip-path: inset(50%);\n" +
"    clip-path: inset(50%);\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    position: absolute;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".newsletter-box {\n" +
"    background: #ebeef2;\n" +
"    padding: 15px\n" +
"}\n" +
"\n" +
".embed-refresh .newsletter-box {\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".dark .newsletter-box {\n" +
"    color: #fff;\n" +
"    background-color: rgba(255, 255, 255, .2);\n" +
"    border-color: #353a3d\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 767px) {\n" +
"    .newsletter-box input[type=submit] {\n" +
"        margin: 10px 0 !important\n" +
"    }\n" +
"}\n" +
"\n" +
".newsletter-box__hide {\n" +
"    color: #687a86;\n" +
"    -ms-flex-item-align: end;\n" +
"    align-self: flex-end;\n" +
"    text-decoration: none;\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
"#tos__container #tos__message p a, .button-link-inverted, .comment-policy .comment-policy-text .comment-policy-link .policy-link:hover, .comment-policy-refresh__link:hover, .newsletter-box__hide:hover, .text-underline {\n" +
"    text-decoration: underline\n" +
"}\n" +
"\n" +
".dark .newsletter-box__hide {\n" +
"    color: #288ce4\n" +
"}\n" +
"\n" +
".newsletter-box__input-group {\n" +
"    border: 1px solid #2e9fff;\n" +
"    padding: 0;\n" +
"    background: #fff;\n" +
"    border-radius: 4px;\n" +
"    margin-right: 10px;\n" +
"    position: relative;\n" +
"    display: inline-block;\n" +
"    min-width: 50%\n" +
"}\n" +
"\n" +
".embed-refresh .newsletter-box__input-group {\n" +
"    /*border-radius: 10px;*/\n" +
"    border-color: var(--publisher-color, #2e9fff)\n" +
"}\n" +
"\n" +
".newsletter-box__input-group input {\n" +
"    border: none;\n" +
"    border-radius: 4px;\n" +
"    font-size: 15px;\n" +
"    width: 100%;\n" +
"    outline: 0;\n" +
"    padding: 8px 12px 8px 32px\n" +
"}\n" +
"\n" +
".embed-refresh .newsletter-box__input-group input {\n" +
"    /*border-radius: 10px*/\n" +
"}\n" +
"\n" +
".newsletter-box__input-group__icon {\n" +
"    color: #2e9fff;\n" +
"    position: absolute;\n" +
"    top: 8px;\n" +
"    left: 8px\n" +
"}\n" +
"\n" +
".embed-refresh .newsletter-box__input-group__icon {\n" +
"    color: var(--publisher-color, #2e9fff)\n" +
"}\n" +
"\n" +
".embed-refresh .newsletter-box__submit {\n" +
"    /*border-radius: 14px;*/\n" +
"    background-color: var(--publisher-color, #2e9fff);\n" +
"    border-color: var(--publisher-color, #2e9fff);\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".embed-refresh .dark-anchor .newsletter-box__submit {\n" +
"    color: #f7f9fa\n" +
"}\n" +
"\n" +
"#behind-click__container {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column\n" +
"}\n" +
"\n" +
"#behind-click__title {\n" +
"    font-size: 2rem;\n" +
"    text-align: center;\n" +
"    -ms-flex-item-align: center;\n" +
"    -ms-grid-row-align: center;\n" +
"    align-self: center;\n" +
"    margin-bottom: 1rem\n" +
"}\n" +
"\n" +
"#thread-visibility__button {\n" +
"    position: relative;\n" +
"    background: #2e9fff;\n" +
"    border: none;\n" +
"    border-radius: .25rem;\n" +
"    color: #fff;\n" +
"    font-size: 1em;\n" +
"    font-weight: 700;\n" +
"    line-height: 1.3;\n" +
"    padding: .8rem 2rem;\n" +
"    text-shadow: none;\n" +
"    transition: all .2s;\n" +
"    margin-bottom: 1.5rem;\n" +
"    width: 60%;\n" +
"    -ms-flex-item-align: center;\n" +
"    -ms-grid-row-align: center;\n" +
"    align-self: center;\n" +
"    z-index: 0\n" +
"}\n" +
"\n" +
"#thread-visibility__button::before {\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    content: \"\";\n" +
"    background: rgba(0, 0, 0, .05);\n" +
"    border-radius: .25rem;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    opacity: 0;\n" +
"    z-index: 9\n" +
"}\n" +
"\n" +
"#thread-visibility__button:hover::before {\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
"#thread-visibility__button:active {\n" +
"    box-shadow: inset 0 .125em .35em rgba(0, 0, 0, .2), inset 0 -.075em .125em rgba(0, 0, 0, .1) !important\n" +
"}\n" +
"\n" +
".comment-policy {\n" +
"    width: 100%;\n" +
"    -ms-flex-positive: 0;\n" +
"    flex-grow: 0;\n" +
"    color: #2A2E2E;\n" +
"    background-position: right 20px top 20px;\n" +
"    background-color: #ebeef2;\n" +
"    border: none;\n" +
"    border-radius: 4px;\n" +
"    line-height: 1.45em;\n" +
"    position: relative;\n" +
"    overflow: hidden;\n" +
"    margin-top: 10px;\n" +
"    padding: 15px\n" +
"}\n" +
"\n" +
".comment-policy-refresh, .toggle-button {\n" +
"    display: -ms-flexbox;\n" +
"    -ms-flex-align: center\n" +
"}\n" +
"\n" +
".comment-policy .content {\n" +
"    position: relative;\n" +
"    z-index: 1;\n" +
"    margin-right: 70px\n" +
"}\n" +
"\n" +
".comment-policy .comment-policy-text, .comment-policy .comment-policy-title {\n" +
"    line-height: 1.45em;\n" +
"    margin-bottom: 4px\n" +
"}\n" +
"\n" +
".comment-policy .comment-policy-title {\n" +
"    font-size: 15px;\n" +
"    margin-bottom: 6px\n" +
"}\n" +
"\n" +
".comment-policy .comment-policy-text {\n" +
"    font-size: 14px\n" +
"}\n" +
"\n" +
".comment-policy .comment-policy-text .comment-policy-link {\n" +
"    margin: 4px 0\n" +
"}\n" +
"\n" +
".comment-policy .comment-policy-text .comment-policy-link .policy-link {\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
".comment-policy .icon-chat-bubble {\n" +
"    position: absolute;\n" +
"    color: #e0e3e9;\n" +
"    font-size: 60px;\n" +
"    top: 50%;\n" +
"    right: 20px;\n" +
"    margin-top: -30px\n" +
"}\n" +
"\n" +
".dark .comment-policy {\n" +
"    background-color: rgba(255, 255, 255, .2);\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".dark .comment-policy .comment-policy-text {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".dark .comment-policy .icon-chat-bubble::before {\n" +
"    color: rgba(255, 255, 255, .5)\n" +
"}\n" +
"\n" +
".comment-policy__wrapper {\n" +
"    margin-top: 6px;\n" +
"    margin-left: auto\n" +
"}\n" +
"\n" +
"@media (min-width: 768px) {\n" +
"    .comment-policy__wrapper {\n" +
"        width: calc(75% - 12px)\n" +
"    }\n" +
"}\n" +
"\n" +
".comment-policy-refresh {\n" +
"    width: 100%;\n" +
"    display: flex;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: justify;\n" +
"    justify-content: space-between;\n" +
"    background-color: #f9f9f9;\n" +
"    padding: 18px;\n" +
"    /*border-radius: 20px;*/\n" +
"    margin-bottom: 10px;\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 767px) {\n" +
"    .comment-policy-refresh {\n" +
"        margin-bottom: 16px\n" +
"    }\n" +
"}\n" +
"\n" +
".dark .comment-policy-refresh {\n" +
"    background-color: rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".comment-policy-refresh__text {\n" +
"    margin-bottom: 0;\n" +
"    font-style: normal;\n" +
"    font-weight: 400;\n" +
"    font-size: 18px;\n" +
"    line-height: 1.2\n" +
"}\n" +
"\n" +
".dark .comment-policy-refresh__text {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".comment-policy-refresh__heading {\n" +
"    margin-bottom: 8px;\n" +
"    color: #343434;\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 18px;\n" +
"    line-height: 1.2\n" +
"}\n" +
"\n" +
".dark .comment-policy-refresh__heading {\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 1024px) {\n" +
"    .comment-policy-refresh {\n" +
"        -ms-flex-direction: column;\n" +
"        flex-direction: column;\n" +
"        -ms-flex-pack: start;\n" +
"        justify-content: flex-start;\n" +
"        width: 100%;\n" +
"        -ms-flex-align: start;\n" +
"        align-items: flex-start\n" +
"    }\n" +
"\n" +
"    .comment-policy-refresh__heading {\n" +
"        font-size: 20px\n" +
"    }\n" +
"}\n" +
"\n" +
".comment-policy-refresh__link {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
".comment-policy-refresh__button {\n" +
"    color: #fff;\n" +
"    padding: 8px 82px;\n" +
"    /*border-radius: 14px;*/\n" +
"    font-size: 18px;\n" +
"    font-weight: 700;\n" +
"    line-height: 1.2;\n" +
"    min-width: 215px\n" +
"}\n" +
"\n" +
".comment-policy-refresh__button.btn:hover {\n" +
"    background: rgba(29, 47, 58, .7);\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".dark .comment-policy-refresh__button {\n" +
"    color: #343434\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 1024px) {\n" +
"    .comment-policy-refresh__button {\n" +
"        margin-top: 12px\n" +
"    }\n" +
"}\n" +
"\n" +
".comment-policy-refresh__prompt {\n" +
"    margin: 8px 0 0\n" +
"}\n" +
"\n" +
".button {\n" +
"    border-radius: 3px;\n" +
"    border: 1px solid transparent;\n" +
"    line-height: 1.1em;\n" +
"    text-align: center;\n" +
"    font-weight: 500;\n" +
"    padding: 8px 10px 9px;\n" +
"    display: inline-block;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".button:disabled {\n" +
"    opacity: .35;\n" +
"    cursor: default;\n" +
"    -webkit-user-select: none;\n" +
"    -ms-user-select: none;\n" +
"    user-select: none\n" +
"}\n" +
"\n" +
".button-smaller {\n" +
"    font-size: 13px;\n" +
"    padding: 6px 10px\n" +
"}\n" +
"\n" +
".button-small {\n" +
"    font-size: 13px;\n" +
"    padding: 8px 10px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .button-small {\n" +
"        padding: 8px 11px\n" +
"    }\n" +
"}\n" +
"\n" +
".button-medium {\n" +
"    font-size: 15px;\n" +
"    padding: 9px 17px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .button-medium {\n" +
"        padding: 10px 24px\n" +
"    }\n" +
"}\n" +
"\n" +
".button-large {\n" +
"    font-size: 18px;\n" +
"    padding: 10px 25px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .button-large {\n" +
"        padding: 12px 36px\n" +
"    }\n" +
"}\n" +
"\n" +
".button-wide {\n" +
"    display: block;\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 767px) {\n" +
"    .button-wide--mobile {\n" +
"        display: block;\n" +
"        width: 100%\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 480px) {\n" +
"    .comment-policy-refresh__button {\n" +
"        width: 100%\n" +
"    }\n" +
"\n" +
"    .button-wide--footer {\n" +
"        display: block;\n" +
"        width: 100%;\n" +
"        position: absolute;\n" +
"        bottom: 0;\n" +
"        height: 50px;\n" +
"        border-radius: 0;\n" +
"        font-size: 18px\n" +
"    }\n" +
"}\n" +
"\n" +
".button-inline {\n" +
"    padding: 0;\n" +
"    border-width: 0\n" +
"}\n" +
"\n" +
".button-padding-taller {\n" +
"    padding-top: 12px;\n" +
"    padding-bottom: 13px\n" +
"}\n" +
"\n" +
".button-padding-wide {\n" +
"    padding-left: 20px;\n" +
"    padding-right: 20px\n" +
"}\n" +
"\n" +
".button-padding-wider {\n" +
"    padding-left: 30px;\n" +
"    padding-right: 30px\n" +
"}\n" +
"\n" +
".button-disabled {\n" +
"    background-color: #687a86;\n" +
"    border-color: #687a86;\n" +
"    color: #fff;\n" +
"    cursor: default;\n" +
"    -webkit-user-select: none;\n" +
"    -ms-user-select: none;\n" +
"    user-select: none\n" +
"}\n" +
"\n" +
".no-touch .button-disabled:hover, .no-touchevents .button-disabled:hover {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".button-link {\n" +
"    color: #2e9fff;\n" +
"    font-size: inherit\n" +
"}\n" +
"\n" +
".no-touch .button-link:hover, .no-touchevents .button-link:hover {\n" +
"    color: #546673\n" +
"}\n" +
"\n" +
".button-link-inverted {\n" +
"    color: #fff;\n" +
"    font-size: inherit\n" +
"}\n" +
"\n" +
".no-touch .button-link-inverted:hover, .no-touchevents .button-link-inverted:hover {\n" +
"    color: #cce9ff\n" +
"}\n" +
"\n" +
".button-outline {\n" +
"    border-color: #cce9ff;\n" +
"    background-color: #fff;\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".no-touch .button-outline:hover, .no-touchevents .button-outline:hover {\n" +
"    border-color: #2e9fff;\n" +
"    background-color: #f2f9ff;\n" +
"    color: #2e87e7\n" +
"}\n" +
"\n" +
".button-outline.-thick {\n" +
"    border-width: 2px\n" +
"}\n" +
"\n" +
".button-outline.-blue-darker {\n" +
"    border-color: #fff;\n" +
"    color: #164b78\n" +
"}\n" +
"\n" +
".no-touch .button-outline.-blue-darker:hover, .no-touchevents .button-outline.-blue-darker:hover {\n" +
"    color: #164b78;\n" +
"    border-color: #fff;\n" +
"    background-color: rgba(255, 255, 255, .8)\n" +
"}\n" +
"\n" +
".button-outline.-border-muted {\n" +
"    border-color: #e0e3e9\n" +
"}\n" +
"\n" +
".button-outline.-border-light {\n" +
"    border-color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-outline.-border-light:hover, .no-touchevents .button-outline.-border-light:hover {\n" +
"    border-color: #f2f9ff;\n" +
"    background-color: rgba(255, 255, 255, .7)\n" +
"}\n" +
"\n" +
".button-outline.-border-blue-dark {\n" +
"    border-color: currentColor\n" +
"}\n" +
"\n" +
".no-touch .button-outline.-border-blue-dark:hover, .no-touchevents .button-outline.-border-blue-dark:hover {\n" +
"    color: #2e87e7;\n" +
"    background-color: #cce9ff;\n" +
"    border-color: #2e87e7\n" +
"}\n" +
"\n" +
".button-outline.-border-red {\n" +
"    color: #f05f70;\n" +
"    border-color: #f05f70;\n" +
"    background-color: transparent\n" +
"}\n" +
"\n" +
".button-outline.-border-red:hover {\n" +
"    background-color: #f05f70\n" +
"}\n" +
"\n" +
".no-touch .button-outline.-border-red:hover, .no-touchevents .button-outline.-border-red:hover {\n" +
"    color: #fff;\n" +
"    border-color: #f05f70;\n" +
"    background-color: #f05f70\n" +
"}\n" +
"\n" +
".button-inverted {\n" +
"    border-color: #fff;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-inverted:hover, .no-touchevents .button-inverted:hover {\n" +
"    color: #fff;\n" +
"    background-color: #164b78;\n" +
"    border-color: #164b78\n" +
"}\n" +
"\n" +
".button-inverted.-thick {\n" +
"    border-width: 2px\n" +
"}\n" +
"\n" +
".no-touch .button-inverted.-thick:hover, .no-touchevents .button-inverted.-thick:hover {\n" +
"    background-color: transparent;\n" +
"    border-color: #cce9ff;\n" +
"    color: #cce9ff\n" +
"}\n" +
"\n" +
".no-touch .button-inverted.-hover-opaque:hover, .no-touchevents .button-inverted.-hover-opaque:hover {\n" +
"    background-color: transparent;\n" +
"    background-color: rgba(255, 255, 255, .1);\n" +
"    border-color: #fff\n" +
"}\n" +
"\n" +
".button-inverted.-border-blue-dark {\n" +
"    color: #2e87e7;\n" +
"    border-color: currentColor\n" +
"}\n" +
"\n" +
".no-touch .button-inverted.-border-blue-dark:hover, .no-touchevents .button-inverted.-border-blue-dark:hover {\n" +
"    color: #164b78;\n" +
"    border-color: currentColor;\n" +
"    background-color: rgba(255, 255, 255, .1)\n" +
"}\n" +
"\n" +
".button-inverted.-border-gray {\n" +
"    border-color: #687a86;\n" +
"    border-width: 2px\n" +
"}\n" +
"\n" +
".no-touch .button-inverted.-border-gray:hover, .no-touchevents .button-inverted.-border-gray:hover {\n" +
"    color: #fff;\n" +
"    border-color: currentColor\n" +
"}\n" +
"\n" +
".button-fill {\n" +
"    border-color: #687a86;\n" +
"    background-color: #687a86;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill:hover, .no-touchevents .button-fill:hover {\n" +
"    border-color: #2e9fff;\n" +
"    background-color: #2e9fff;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill.-dark-hover:hover, .no-touchevents .button-fill.-dark-hover:hover {\n" +
"    border-color: #164b78;\n" +
"    background-color: #164b78;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".button-fill--gray-light {\n" +
"    border-color: #e0e3e9;\n" +
"    background-color: #e0e3e9;\n" +
"    color: #353a3d\n" +
"}\n" +
"\n" +
".no-touch .button-fill--gray-light:hover, .no-touchevents .button-fill--gray-light:hover {\n" +
"    border-color: #c2c9d4;\n" +
"    background-color: #c2c9d4;\n" +
"    color: #164b78\n" +
"}\n" +
"\n" +
".button-fill--white {\n" +
"    border-color: #fff;\n" +
"    background-color: #fff;\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--white:hover, .no-touchevents .button-fill--white:hover {\n" +
"    border-color: #164b78;\n" +
"    background-color: #164b78;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".button-fill--brand {\n" +
"    border-color: #2e9fff;\n" +
"    background-color: #2e9fff;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--brand:hover, .no-touchevents .button-fill--brand:hover {\n" +
"    background-color: #164b78;\n" +
"    border-color: #164b78;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--brand:disabled:hover, .no-touchevents .button-fill--brand:disabled:hover {\n" +
"    background-color: #2e9fff;\n" +
"    border-color: #2e9fff\n" +
"}\n" +
"\n" +
".button-fill--blue-light {\n" +
"    border-color: #cce9ff;\n" +
"    background-color: #f2f9ff;\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--blue-light:hover, .no-touchevents .button-fill--blue-light:hover {\n" +
"    background-color: #cce9ff;\n" +
"    border-color: #2e9fff;\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--blue-light:disabled:hover, .no-touchevents .button-fill--blue-light:disabled:hover {\n" +
"    background-color: #f2f9ff;\n" +
"    border-color: #f2f9ff\n" +
"}\n" +
"\n" +
".button-fill--red {\n" +
"    border-color: #f05f70;\n" +
"    background-color: #f05f70;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--red:hover, .no-touchevents .button-fill--red:hover {\n" +
"    border-color: #ec3046;\n" +
"    background-color: #ec3046;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".button-fill--green {\n" +
"    border-color: #5cb767;\n" +
"    background-color: #5cb767;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--green:hover, .no-touchevents .button-fill--green:hover {\n" +
"    border-color: #5e9164;\n" +
"    background-color: #5e9164;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".button-fill--green-light {\n" +
"    border-color: #8bcf93;\n" +
"    background-color: #8bcf93;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".no-touch .button-fill--green-light:hover, .no-touchevents .button-fill--green-light:hover {\n" +
"    background-color: #5cb767;\n" +
"    border-color: #5cb767;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".button-fill--yellow {\n" +
"    border-color: #ffefb7;\n" +
"    background-color: #fffBED;\n" +
"    color: #c19219\n" +
"}\n" +
"\n" +
".no-touch .button-fill--yellow:hover, .no-touchevents .button-fill--yellow:hover {\n" +
"    background-color: #fff9cf;\n" +
"    border-color: #ffe070;\n" +
"    color: #a47703\n" +
"}\n" +
"\n" +
".button-fill--orange {\n" +
"    border-color: #ff9b51;\n" +
"    background-color: #ff9b51;\n" +
"    color: #fffaf6\n" +
"}\n" +
"\n" +
".no-touch .button-fill--orange:hover, .no-touchevents .button-fill--orange:hover {\n" +
"    background-color: #ffb884;\n" +
"    border-color: #ffb884;\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".toggle-button {\n" +
"    display: flex;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center\n" +
"}\n" +
"\n" +
".toggle-button .label-prefix {\n" +
"    display: inline-block;\n" +
"    color: #687a86;\n" +
"    font-size: 21px;\n" +
"    font-weight: 500;\n" +
"    line-height: 1\n" +
"}\n" +
"\n" +
".toggle-button label {\n" +
"    position: relative;\n" +
"    display: inline-block;\n" +
"    background: #e0e3e9;\n" +
"    color: #687a86;\n" +
"    font-size: 16px;\n" +
"    font-weight: 500;\n" +
"    line-height: 1.6;\n" +
"    text-align: right;\n" +
"    height: 32px;\n" +
"    /*border-radius: 32px;*/\n" +
"    box-shadow: inset 2px 0 9px -2px rgba(0, 0, 0, .2);\n" +
"    margin: 0 10px;\n" +
"    padding: 2px 14px 0;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items:focus-within, .ratings-score .ratings-items:hover, .toggle-button.disabled label, .toggle-button.static label {\n" +
"    cursor: default\n" +
"}\n" +
"\n" +
".toggle-button input:checked + label {\n" +
"    background: #53c060;\n" +
"    color: #fff;\n" +
"    text-align: left\n" +
"}\n" +
"\n" +
".toggle-button label:after {\n" +
"    content: '';\n" +
"    position: absolute;\n" +
"    background: #fff;\n" +
"    width: 32px;\n" +
"    height: 32px;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    border: 1px solid rgba(0, 0, 0, .08);\n" +
"    /*border-radius: 32px;*/\n" +
"    box-shadow: 1px 1px 6px -2px rgba(0, 0, 0, .25);\n" +
"    transition: .3s;\n" +
"    z-index: 99\n" +
"}\n" +
"\n" +
".toggle-button input:checked + label:after {\n" +
"    left: 100%;\n" +
"    box-shadow: -1px 1px 6px -2px rgba(0, 0, 0, .25);\n" +
"    transform: translateX(-100%)\n" +
"}\n" +
"\n" +
".toggle-button:not(.static) label:active:after {\n" +
"    width: 32px\n" +
"}\n" +
"\n" +
".toggle-button.disabled label {\n" +
"    background: #e0e3e9;\n" +
"    color: #9facb5\n" +
"}\n" +
"\n" +
".toggle-button.disabled label:active:after {\n" +
"    width: 32px\n" +
"}\n" +
"\n" +
".toggle-button input[type=checkbox] {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".button-one-line {\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".align {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row\n" +
"}\n" +
"\n" +
".no-flexbox .align:after, .no-flexbox .align:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".no-flexbox .align > * {\n" +
"    float: left;\n" +
"    padding-right: 10px\n" +
"}\n" +
"\n" +
".align-inline {\n" +
"    display: -ms-inline-flexbox;\n" +
"    display: inline-flex\n" +
"}\n" +
"\n" +
".no-flexbox .align-inline {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 480px) {\n" +
"    .align-mid-mobile {\n" +
"        display: -ms-flexbox;\n" +
"        display: flex;\n" +
"        -ms-flex-direction: row;\n" +
"        flex-direction: row\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-mid-mobile:after, .no-flexbox .align-mid-mobile:before {\n" +
"        display: table;\n" +
"        content: \"\";\n" +
"        line-height: 0\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-mid-mobile:after {\n" +
"        clear: both\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-mid-mobile > * {\n" +
"        float: left;\n" +
"        padding-right: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 767px) {\n" +
"    .align-max-mobile {\n" +
"        display: -ms-flexbox;\n" +
"        display: flex;\n" +
"        -ms-flex-direction: row;\n" +
"        flex-direction: row\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-max-mobile:after, .no-flexbox .align-max-mobile:before {\n" +
"        display: table;\n" +
"        content: \"\";\n" +
"        line-height: 0\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-max-mobile:after {\n" +
"        clear: both\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-max-mobile > * {\n" +
"        float: left;\n" +
"        padding-right: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .align-min-tablet {\n" +
"        display: -ms-flexbox;\n" +
"        display: flex;\n" +
"        -ms-flex-direction: row;\n" +
"        flex-direction: row\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-min-tablet:after, .no-flexbox .align-min-tablet:before {\n" +
"        display: table;\n" +
"        content: \"\";\n" +
"        line-height: 0\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-min-tablet:after {\n" +
"        clear: both\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-min-tablet > * {\n" +
"        float: left;\n" +
"        padding-right: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 1025px) {\n" +
"    .align-min-desktop {\n" +
"        display: -ms-flexbox;\n" +
"        display: flex;\n" +
"        -ms-flex-direction: row;\n" +
"        flex-direction: row\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-min-desktop:after, .no-flexbox .align-min-desktop:before {\n" +
"        display: table;\n" +
"        content: \"\";\n" +
"        line-height: 0\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-min-desktop:after {\n" +
"        clear: both\n" +
"    }\n" +
"\n" +
"    .no-flexbox .align-min-desktop > * {\n" +
"        float: left;\n" +
"        padding-right: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
".align--column {\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column\n" +
"}\n" +
"\n" +
".align--column-reverse {\n" +
"    -ms-flex-direction: column-reverse;\n" +
"    flex-direction: column-reverse\n" +
"}\n" +
"\n" +
".align--row-reverse {\n" +
"    -ms-flex-direction: row-reverse;\n" +
"    flex-direction: row-reverse\n" +
"}\n" +
"\n" +
".align--middle {\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
".align--stretch {\n" +
"    -ms-flex-align: stretch;\n" +
"    align-items: stretch\n" +
"}\n" +
"\n" +
".align--start {\n" +
"    -ms-flex-align: start;\n" +
"    align-items: flex-start\n" +
"}\n" +
"\n" +
".align--between {\n" +
"    -ms-flex-pack: justify;\n" +
"    justify-content: space-between\n" +
"}\n" +
"\n" +
".no-flexbox .align--between .align__item:last-child {\n" +
"    float: right\n" +
"}\n" +
"\n" +
".align--center {\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center\n" +
"}\n" +
"\n" +
".align--around {\n" +
"    -ms-flex-pack: distribute;\n" +
"    justify-content: space-around\n" +
"}\n" +
"\n" +
".align--wrap {\n" +
"    -ms-flex-wrap: wrap;\n" +
"    flex-wrap: wrap\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 480px) {\n" +
"    .align--wrap-mobile {\n" +
"        -ms-flex-wrap: wrap;\n" +
"        flex-wrap: wrap\n" +
"    }\n" +
"}\n" +
"\n" +
".no-flexbox .align__item {\n" +
"    float: left;\n" +
"    padding-right: 10px\n" +
"}\n" +
"\n" +
".align__item--swap-first {\n" +
"    -ms-flex-order: 2;\n" +
"    order: 2\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .align__item--swap-first {\n" +
"        -ms-flex-order: 1;\n" +
"        order: 1\n" +
"    }\n" +
"}\n" +
"\n" +
".align__item--swap-last {\n" +
"    -ms-flex-order: 1;\n" +
"    order: 1\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .align__item--swap-last {\n" +
"        -ms-flex-order: 2;\n" +
"        order: 2\n" +
"    }\n" +
"}\n" +
"\n" +
".align__item--grow {\n" +
"    -ms-flex-positive: 1;\n" +
"    flex-grow: 1\n" +
"}\n" +
"\n" +
".align__item--no-shrink {\n" +
"    -ms-flex-negative: 0;\n" +
"    flex-shrink: 0\n" +
"}\n" +
"\n" +
".align__item--equal {\n" +
"    -ms-flex-preferred-size: 0;\n" +
"    flex-basis: 0\n" +
"}\n" +
"\n" +
".align__item--flex-1 {\n" +
"    -ms-flex: 1;\n" +
"    flex: 1\n" +
"}\n" +
"\n" +
".media:after, .media:before {\n" +
"    display: table;\n" +
"    content: \"\";\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".media-right, .media > .pull-right {\n" +
"    padding-left: 10px\n" +
"}\n" +
"\n" +
".media-left, .media > .pull-left {\n" +
"    padding-right: 10px\n" +
"}\n" +
"\n" +
".media-body, .media-left, .media-right {\n" +
"    display: table-cell;\n" +
"    vertical-align: top\n" +
"}\n" +
"\n" +
".media-heading {\n" +
"    padding-top: 5px;\n" +
"    margin-bottom: 5px\n" +
"}\n" +
"\n" +
".text-huge {\n" +
"    font-size: 36px;\n" +
"    line-height: 1.1em\n" +
"}\n" +
"\n" +
".text-largest {\n" +
"    font-size: 28px;\n" +
"    line-height: 1.1em\n" +
"}\n" +
"\n" +
".text-larger {\n" +
"    font-size: 22px;\n" +
"    line-height: 1.1em\n" +
"}\n" +
"\n" +
".text-large {\n" +
"    font-size: 18px;\n" +
"    line-height: 1.25em\n" +
"}\n" +
"\n" +
".text-medium {\n" +
"    font-size: 15px\n" +
"}\n" +
"\n" +
".text-base {\n" +
"    font-size: 17px\n" +
"}\n" +
"\n" +
".text-small {\n" +
"    font-size: 13px;\n" +
"    line-height: 1.305em\n" +
"}\n" +
"\n" +
".text-smallish {\n" +
"    font-size: 14px;\n" +
"    line-height: 1.45em\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 768px) {\n" +
"    .text-smallish {\n" +
"        font-size: 16px\n" +
"    }\n" +
"}\n" +
"\n" +
".text-smaller {\n" +
"    font-size: 12px\n" +
"}\n" +
"\n" +
".text-smallest {\n" +
"    font-size: 11px\n" +
"}\n" +
"\n" +
".text-subheading {\n" +
"    font-size: 12px;\n" +
"    color: #687a86;\n" +
"    letter-spacing: .5px;\n" +
"    text-transform: uppercase;\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
".text-bold {\n" +
"    font-weight: 600\n" +
"}\n" +
"\n" +
".text-semibold {\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
".ratings-rate, .text-normal {\n" +
"    font-weight: 400\n" +
"}\n" +
"\n" +
".text-gray-darker {\n" +
"    color: #353a3d\n" +
"}\n" +
"\n" +
".text-gray-dark {\n" +
"    color: #546673\n" +
"}\n" +
"\n" +
".text-gray {\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".text-gray-light {\n" +
"    color: #c2c9d4\n" +
"}\n" +
"\n" +
".text-light {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".text-drop-shadow {\n" +
"    text-shadow: 0 0 5px rgba(0, 0, 0, .3)\n" +
"}\n" +
"\n" +
".text-error, .text-red {\n" +
"    color: #f05f70\n" +
"}\n" +
"\n" +
".text-green, .text-success {\n" +
"    color: #5cb767\n" +
"}\n" +
"\n" +
".text-blue, .text-brand {\n" +
"    color: #2e9fff\n" +
"}\n" +
"\n" +
".text-blue-darker {\n" +
"    color: #164b78\n" +
"}\n" +
"\n" +
".text-warning, .text-yellow {\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".text-orange {\n" +
"    color: #ff9b51\n" +
"}\n" +
"\n" +
".text-violet {\n" +
"    color: #b180c9\n" +
"}\n" +
"\n" +
".text-center {\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
".text-right {\n" +
"    text-align: right\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 1024px) {\n" +
"    .text-center-mobile {\n" +
"        text-align: center\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 768px) {\n" +
"    .text-center-min-mobile {\n" +
"        text-align: center\n" +
"    }\n" +
"\n" +
"    .text-left-mobile {\n" +
"        text-align: left\n" +
"    }\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 767px) {\n" +
"    .text-center-sm {\n" +
"        text-align: center\n" +
"    }\n" +
"}\n" +
"\n" +
".text-left {\n" +
"    text-align: left\n" +
"}\n" +
"\n" +
".text-capitalized {\n" +
"    text-transform: capitalize\n" +
"}\n" +
"\n" +
".text-uppercase {\n" +
"    text-transform: uppercase\n" +
"}\n" +
"\n" +
".text-strikethrough {\n" +
"    text-decoration: line-through\n" +
"}\n" +
"\n" +
".spacing-narrow {\n" +
"    margin: 7.5px 0\n" +
"}\n" +
"\n" +
".spacing-default {\n" +
"    margin: 10px\n" +
"}\n" +
"\n" +
".spacing-double {\n" +
"    margin: 20px\n" +
"}\n" +
"\n" +
".spacing-default-narrow {\n" +
"    margin: 5px\n" +
"}\n" +
"\n" +
".spacing-left-large {\n" +
"    margin-left: 20px\n" +
"}\n" +
"\n" +
".spacing-left {\n" +
"    margin-left: 10px\n" +
"}\n" +
"\n" +
".spacing-left-small {\n" +
"    margin-left: 5px\n" +
"}\n" +
"\n" +
".spacing-left-tiny {\n" +
"    margin-left: 3px\n" +
"}\n" +
"\n" +
".spacing-right-large {\n" +
"    margin-right: 25px\n" +
"}\n" +
"\n" +
".spacing-right {\n" +
"    margin-right: 10px\n" +
"}\n" +
"\n" +
".spacing-right-small {\n" +
"    margin-right: 5px\n" +
"}\n" +
"\n" +
".spacing-top {\n" +
"    margin-top: 15px\n" +
"}\n" +
"\n" +
".spacing-top-narrow {\n" +
"    margin-top: 7.5px\n" +
"}\n" +
"\n" +
".spacing-top-tiny {\n" +
"    margin-top: 3px\n" +
"}\n" +
"\n" +
".spacing-top-small {\n" +
"    margin-top: 5px\n" +
"}\n" +
"\n" +
".spacing-top-double {\n" +
"    margin-top: 30px\n" +
"}\n" +
"\n" +
".spacing-top-quad {\n" +
"    margin-top: 60px\n" +
"}\n" +
"\n" +
".spacing-bottom {\n" +
"    margin-bottom: 8px\n" +
"}\n" +
"\n" +
".spacing-bottom-narrow {\n" +
"    margin-bottom: 7.5px\n" +
"}\n" +
"\n" +
".spacing-bottom-small {\n" +
"    margin-bottom: 5px\n" +
"}\n" +
"\n" +
".spacing-bottom-large {\n" +
"    margin-bottom: 10px;\n" +
"    margin-top: 10px;\n" +
"}\n" +
"\n" +
".spacing-bottom-double {\n" +
"    margin-bottom: 30px\n" +
"}\n" +
"\n" +
".spacing-bottom-quad {\n" +
"    margin-bottom: 60px\n" +
"}\n" +
"\n" +
".spacing-bottom-none {\n" +
"    margin-bottom: 0 !important\n" +
"}\n" +
"\n" +
".spacing-top-bottom {\n" +
"    margin: 10px 0 !important\n" +
"}\n" +
"\n" +
".spacing-top-bottom-double {\n" +
"    margin: 15px 0\n" +
"}\n" +
"\n" +
".spacing-quad {\n" +
"    margin: 60px\n" +
"}\n" +
"\n" +
".spacing-quad-desktop {\n" +
"    margin: 15px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 1025px) {\n" +
"    .spacing-quad-desktop {\n" +
"        margin: 60px\n" +
"    }\n" +
"}\n" +
"\n" +
".spacing-top-none {\n" +
"    margin-top: 0\n" +
"}\n" +
"\n" +
".spacing-center {\n" +
"    margin-left: auto;\n" +
"    margin-right: auto\n" +
"}\n" +
"\n" +
".spacing-inner p {\n" +
"    margin: 7.5px 0\n" +
"}\n" +
"\n" +
".spacing-inner.-medium p {\n" +
"    margin: 10px 0\n" +
"}\n" +
"\n" +
".padding-small {\n" +
"    padding: 5px\n" +
"}\n" +
"\n" +
".padding-gutter {\n" +
"    padding: 15px\n" +
"}\n" +
"\n" +
".padding-top-bottom-gutter {\n" +
"    padding: 10px 15px\n" +
"}\n" +
"\n" +
".padding-default {\n" +
"    padding: 10px\n" +
"}\n" +
"\n" +
".padding-double {\n" +
"    padding: 20px\n" +
"}\n" +
"\n" +
".padding-quad {\n" +
"    padding: 40px\n" +
"}\n" +
"\n" +
".padding-top-bottom-quad {\n" +
"    padding-top: 40px;\n" +
"    padding-bottom: 40px\n" +
"}\n" +
"\n" +
".padding-left-right {\n" +
"    padding: 0 15px\n" +
"}\n" +
"\n" +
".padding-left-right-large {\n" +
"    padding: 0 22.5px\n" +
"}\n" +
"\n" +
".padding-left-right-quad {\n" +
"    padding: 0 40px\n" +
"}\n" +
"\n" +
".padding-top-bottom {\n" +
"    padding: 10px 0\n" +
"}\n" +
"\n" +
".padding-top {\n" +
"    padding-top: 15px\n" +
"}\n" +
"\n" +
".padding-top-half {\n" +
"    padding-top: 7.5px\n" +
"}\n" +
"\n" +
".padding-top-double {\n" +
"    padding-top: 30px\n" +
"}\n" +
"\n" +
".padding-top-none {\n" +
"    padding-top: 0 !important\n" +
"}\n" +
"\n" +
".padding-bottom {\n" +
"    padding-bottom: 15px\n" +
"}\n" +
"\n" +
".padding-bottom-double {\n" +
"    padding-bottom: 30px\n" +
"}\n" +
"\n" +
".padding-bottom-none {\n" +
"    padding-bottom: 0\n" +
"}\n" +
"\n" +
"@media only screen and (max-width: 480px) {\n" +
"    .padding-bottom-mobile {\n" +
"        padding-bottom: 15px\n" +
"    }\n" +
"}\n" +
"\n" +
".border-gray-light {\n" +
"    border: 1px solid #c2c9d4\n" +
"}\n" +
"\n" +
".border-gray-lighter {\n" +
"    border: 1px solid #ebeef2\n" +
"}\n" +
"\n" +
".border-bottom-none {\n" +
"    border-bottom: 0\n" +
"}\n" +
"\n" +
"#reactions, #reactions-promotion {\n" +
"    margin-bottom: 10px\n" +
"}\n" +
"\n" +
"#reactions-promotion.reactions-refresh, #reactions.reactions-refresh {\n" +
"    margin-bottom: 5px;\n" +
"    margin-top: 15px;\n" +
"}\n" +
"\n" +
"#reactions .err, #reactions-promotion .err {\n" +
"    text-align: center;\n" +
"    color: #f05f70\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.is-submitting, #reactions-promotion .reaction-items.is-submitting {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.is-submitting .reaction-item, #reactions-promotion .reaction-items.is-submitting .reaction-item {\n" +
"    opacity: .7\n" +
"}\n" +
"\n" +
"#reactions .reaction-items:not(.is-submitting):not(.readonly) .reaction-item:not(.reaction-item__disabled):hover .reaction-item__button, #reactions-promotion .reaction-items:not(.is-submitting):not(.readonly) .reaction-item:not(.reaction-item__disabled):hover .reaction-item__button {\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
"#reactions .reaction-items:not(.is-submitting):not(.readonly) .reaction-item:not(.reaction-item__disabled):hover .reaction-item__button--refresh, #reactions-promotion .reaction-items:not(.is-submitting):not(.readonly) .reaction-item:not(.reaction-item__disabled):hover .reaction-item__button--refresh {\n" +
"    background-color: var(--publisher-color-safe, #2e9fff);\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
"#reactions .reaction-items:not(.is-submitting):not(.readonly) .reaction-item:not(.reaction-item__disabled):hover .reaction-tooltip, #reactions-promotion .reaction-items:not(.is-submitting):not(.readonly) .reaction-item:not(.reaction-item__disabled):hover .reaction-tooltip {\n" +
"    display: block\n" +
"}\n" +
"\n" +
"#reactions .reaction-items:not(.is-submitting):not(.readonly) .reaction-item__enabled .reaction-item__button:active .reaction-item__image, #reactions .reaction-items:not(.is-submitting):not(.readonly) .reaction-item__enabled .reaction-item__button:focus .reaction-item__image, #reactions .reaction-items:not(.is-submitting):not(.readonly) .reaction-item__enabled .reaction-item__button:hover .reaction-item__image, #reactions-promotion .reaction-items:not(.is-submitting):not(.readonly) .reaction-item__enabled .reaction-item__button:active .reaction-item__image, #reactions-promotion .reaction-items:not(.is-submitting):not(.readonly) .reaction-item__enabled .reaction-item__button:focus .reaction-item__image, #reactions-promotion .reaction-items:not(.is-submitting):not(.readonly) .reaction-item__enabled .reaction-item__button:hover .reaction-item__image {\n" +
"    transform: scale(1.15);\n" +
"    transition: transform 250ms ease-in-out\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-items__container, #reactions-promotion .reaction-items .reaction-items__container {\n" +
"    margin: 0 auto;\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-items__container--refresh, #reactions-promotion .reaction-items .reaction-items__container--refresh {\n" +
"    gap: 24px\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.has-selection .reaction-item, #reactions-promotion .reaction-items.has-selection .reaction-item {\n" +
"    opacity: .65;\n" +
"    transition: opacity 250ms ease-in-out .2s\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.has-selection .reaction-item.reaction-item__selected, #reactions-promotion .reaction-items.has-selection .reaction-item.reaction-item__selected {\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.has-selection .reaction-item.reaction-item__selected .reaction-item__image--refresh.reaction-item__image--refresh, #reactions-promotion .reaction-items.has-selection .reaction-item.reaction-item__selected .reaction-item__image--refresh.reaction-item__image--refresh {\n" +
"    transform: scale(1.15)\n" +
"}\n" +
"\n" +
".dark #reactions .reaction-items.has-selection .reaction-item, .dark #reactions-promotion .reaction-items.has-selection .reaction-item {\n" +
"    opacity: .5\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.has-selection .reaction-item--refresh, #reactions-promotion .reaction-items.has-selection .reaction-item--refresh, .dark #reactions .reaction-items.has-selection .reaction-item--refresh, .dark #reactions .reaction-items.has-selection .reaction-item.reaction-item__selected, .dark #reactions-promotion .reaction-items.has-selection .reaction-item--refresh, .dark #reactions-promotion .reaction-items.has-selection .reaction-item.reaction-item__selected {\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
"#reactions .reaction-items.counts-visible .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper, #reactions-promotion .reaction-items.counts-visible .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper {\n" +
"    animation: vote-expand 350ms forwards\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item--refresh, #reactions-promotion .reaction-items .reaction-item--refresh {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button, #reactions-promotion .reaction-items .reaction-item .reaction-item__button {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    position: relative;\n" +
"    font-size: 14px;\n" +
"    padding: 5px;\n" +
"    margin: 0 8px 10px;\n" +
"    border-radius: 6px;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 300px) and (max-width: 480px) {\n" +
"    #reactions .reaction-items .reaction-items__container, #reactions-promotion .reaction-items .reaction-items__container {\n" +
"        width: 300px\n" +
"    }\n" +
"\n" +
"    #reactions .reaction-items.has-selection .reaction-item, #reactions-promotion .reaction-items.has-selection .reaction-item {\n" +
"        width: 100px\n" +
"    }\n" +
"\n" +
"    #reactions .reaction-items .reaction-item .reaction-item__button, #reactions-promotion .reaction-items .reaction-item .reaction-item__button {\n" +
"        white-space: normal;\n" +
"        font-size: 12px\n" +
"    }\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button--refresh {\n" +
"    background-color: #f9f9f9;\n" +
"    color: #343434;\n" +
"    padding: 4px 12px;\n" +
"    margin: 0;\n" +
"    /*border-radius: 20px;*/\n" +
"}\n" +
"\n" +
".dark #reactions .reaction-items .reaction-item .reaction-item__button--refresh, .dark #reactions-promotion .reaction-items .reaction-item .reaction-item__button--refresh {\n" +
"    background-color: rgba(255, 255, 255, .2);\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__text, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__text {\n" +
"    text-align: center\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__text--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__text--refresh {\n" +
"    -ms-flex-item-align: start;\n" +
"    align-self: flex-start;\n" +
"    margin-left: 5px;\n" +
"    font-size: 16px;\n" +
"    text-align: start\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper--refresh {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    min-width: 45px\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__image, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__image {\n" +
"    position: relative;\n" +
"    width: 22px;\n" +
"    height: 22px;\n" +
"    object-fit: cover;\n" +
"    margin-bottom: 6px;\n" +
"    transform: scale(1);\n" +
"    transition: transform 250ms ease-in-out\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__image--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__image--refresh {\n" +
"    margin: 0\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper {\n" +
"    position: absolute;\n" +
"    background: var(--publisher-color-safe, #2e9fff);\n" +
"    min-width: 18px;\n" +
"    height: 18px;\n" +
"    /*border-radius: 18px;*/\n" +
"    top: -4px;\n" +
"    right: -5px;\n" +
"    transform: scale(0)\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper--refresh {\n" +
"    position: relative;\n" +
"    background: 0 0;\n" +
"    height: auto;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    min-width: auto;\n" +
"    margin-left: 16px\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper--refresh .reaction-item__votes--refresh.reaction-item__votes--refresh.reaction-item__votes--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper--refresh .reaction-item__votes--refresh.reaction-item__votes--refresh.reaction-item__votes--refresh {\n" +
"    color: inherit\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper .reaction-item__votes, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper .reaction-item__votes {\n" +
"    color: #fff;\n" +
"    font-weight: 700;\n" +
"    text-align: center;\n" +
"    line-height: 18px;\n" +
"    padding: 0 2px\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper .reaction-item__votes--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__votes-wrapper .reaction-item__votes--refresh {\n" +
"    font-size: 17px\n" +
"}\n" +
"\n" +
"@media only screen and (min-width: 300px) and (max-width: 480px) {\n" +
"    #reactions .reaction-items .reaction-item .reaction-item__button, #reactions-promotion .reaction-items .reaction-item .reaction-item__button {\n" +
"        margin: 0 6px 8px\n" +
"    }\n" +
"\n" +
"    #reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__image, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__image-wrapper .reaction-item__image {\n" +
"        width: 38px;\n" +
"        height: 38px;\n" +
"        margin-bottom: 3px\n" +
"    }\n" +
"\n" +
"    #reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__text, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__text {\n" +
"        width: 90px;\n" +
"        word-break: break-all\n" +
"    }\n" +
"\n" +
"    #reactions .reaction-items .reaction-item .reaction-item__button .reaction-item__text--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button .reaction-item__text--refresh {\n" +
"        width: 100%\n" +
"    }\n" +
"\n" +
"    #reactions .reaction-items .reaction-item .reaction-item__button--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__button--refresh {\n" +
"        margin: 0\n" +
"    }\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected {\n" +
"    color: var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected.reaction-item--refresh, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected.reaction-item--refresh {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected .reaction-item__text, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected .reaction-item__text {\n" +
"    color: var(--publisher-color-safe, #2e9fff);\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected .reaction-item__text--refresh, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected .reaction-item__text--refresh {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected .reaction-item__button--refresh, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected .reaction-item__button--refresh {\n" +
"    background-color: var(--publisher-color-safe, #2e9fff);\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected .reaction-item__votes--refresh, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected .reaction-item__votes--refresh, .dark #reactions .reaction-items .reaction-item.reaction-item__selected, .dark #reactions-promotion .reaction-items .reaction-item.reaction-item__selected {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item.reaction-item__selected .reaction-item__votes:after, #reactions-promotion .reaction-items .reaction-item.reaction-item__selected .reaction-item__votes:after {\n" +
"    animation: anim-heart 350ms forwards\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__votes, #reactions-promotion .reaction-items .reaction-item .reaction-item__votes {\n" +
"    position: relative;\n" +
"    transition: all .2s ease-in-out\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__votes:after, #reactions-promotion .reaction-items .reaction-item .reaction-item__votes:after {\n" +
"    position: absolute;\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    margin: -25px 0 0 -25px;\n" +
"    width: 50px;\n" +
"    height: 50px;\n" +
"    border-radius: 50%;\n" +
"    content: '';\n" +
"    opacity: 0;\n" +
"    background: var(--publisher-color-safe, #2e9fff)\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__votes--refresh, #reactions-promotion .reaction-items .reaction-item .reaction-item__votes--refresh {\n" +
"    transition: none\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-item__votes--refresh:after, #reactions-promotion .reaction-items .reaction-item .reaction-item__votes--refresh:after {\n" +
"    content: none\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-tooltip, #reactions-promotion .reaction-items .reaction-item .reaction-tooltip {\n" +
"    top: -52px;\n" +
"    padding: 8px;\n" +
"    display: none;\n" +
"    position: absolute;\n" +
"    width: 100%;\n" +
"    text-align: center;\n" +
"    background-color: #fff;\n" +
"    /*border-radius: 20px;*/\n" +
"    border: 1px solid #e8e9ef\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-tooltip__text, #reactions-promotion .reaction-items .reaction-item .reaction-tooltip__text {\n" +
"    font-style: normal;\n" +
"    font-weight: 700;\n" +
"    font-size: 14px;\n" +
"    line-height: 16px;\n" +
"    color: #343434;\n" +
"    display: block;\n" +
"    word-break: break-word\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-tooltip__triangle, #reactions-promotion .reaction-items .reaction-item .reaction-tooltip__triangle {\n" +
"    bottom: -12px;\n" +
"    left: 16px;\n" +
"    position: absolute;\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    border-left: 11px solid transparent;\n" +
"    border-right: 11px solid transparent;\n" +
"    border-top: 12px solid #e8e9ef\n" +
"}\n" +
"\n" +
"#reactions .reaction-items .reaction-item .reaction-tooltip__inner-triangle, #reactions-promotion .reaction-items .reaction-item .reaction-tooltip__inner-triangle {\n" +
"    position: relative;\n" +
"    top: -12px;\n" +
"    left: -10px;\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    border-left: 10px solid transparent;\n" +
"    border-right: 10px solid transparent;\n" +
"    border-top: 10px solid #fff\n" +
"}\n" +
"\n" +
"@keyframes anim-heart {\n" +
"    0% {\n" +
"        opacity: 0;\n" +
"        transform: scale(.2, .2)\n" +
"    }\n" +
"    50% {\n" +
"        opacity: .2;\n" +
"        transform: scale(1.2, 1.2)\n" +
"    }\n" +
"    100% {\n" +
"        opacity: 0;\n" +
"        transform: scale(.75, .75)\n" +
"    }\n" +
"}\n" +
"\n" +
"@keyframes vote-expand {\n" +
"    0% {\n" +
"        transform: scale(0)\n" +
"    }\n" +
"    100% {\n" +
"        transform: scale(1)\n" +
"    }\n" +
"}\n" +
"\n" +
".ratings-score {\n" +
"    margin-bottom: 10px\n" +
"}\n" +
"\n" +
".ratings-score .err {\n" +
"    text-align: center;\n" +
"    color: #f05f70\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items {\n" +
"    height: 30px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-stars {\n" +
"    unicode-bidi: bidi-override;\n" +
"    direction: ltr;\n" +
"    font-size: 25px;\n" +
"    line-height: 29px;\n" +
"    margin: 0 10px 0 35px;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-stars .stars {\n" +
"    display: block\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-stars .stars.score-stars {\n" +
"    position: absolute;\n" +
"    z-index: 2;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    overflow: hidden;\n" +
"    white-space: nowrap\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-stars .stars.score-stars .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-stars .stars.base-stars {\n" +
"    position: static;\n" +
"    z-index: 0\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-stars .stars.base-stars .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ebeef2\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average {\n" +
"    width: 25px;\n" +
"    line-height: 29px;\n" +
"    font-size: 18px;\n" +
"    font-weight: 500;\n" +
"    text-align: right;\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown {\n" +
"    display: none;\n" +
"    position: absolute;\n" +
"    z-index: 1000;\n" +
"    padding: 4px 8px;\n" +
"    background-color: #fff;\n" +
"    border: thin solid #c2c9d4;\n" +
"    border-radius: 5px;\n" +
"    min-width: 165px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown.expand-below {\n" +
"    top: 38.8px;\n" +
"    left: -152.5px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown.expand-below .ratings-breakdown-notch-border {\n" +
"    position: absolute;\n" +
"    top: -10px;\n" +
"    left: calc(50% - 12.5px);\n" +
"    border-top: 0;\n" +
"    border-right: 10px solid transparent;\n" +
"    border-bottom: 10px solid #c2c9d4;\n" +
"    border-left: 10px solid transparent\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown.expand-below .ratings-breakdown-notch {\n" +
"    position: absolute;\n" +
"    top: -9px;\n" +
"    left: calc(50% - 12.5px);\n" +
"    border-top: 0;\n" +
"    border-right: 10px solid transparent;\n" +
"    border-bottom: 10px solid #fff;\n" +
"    border-left: 10px solid transparent\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown.expand-right {\n" +
"    top: -45.6px;\n" +
"    left: 40px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown.expand-right .ratings-breakdown-notch-border {\n" +
"    position: absolute;\n" +
"    top: calc(50% - 10px);\n" +
"    left: -10px;\n" +
"    border-top: 10px solid transparent;\n" +
"    border-right: 10px solid #c2c9d4;\n" +
"    border-bottom: 10px solid transparent;\n" +
"    border-left: 0\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown.expand-right .ratings-breakdown-notch {\n" +
"    position: absolute;\n" +
"    top: calc(50% - 10px);\n" +
"    left: -9px;\n" +
"    border-top: 10px solid transparent;\n" +
"    border-right: 10px solid #fff;\n" +
"    border-bottom: 10px solid transparent;\n" +
"    border-left: 0\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-unit-row {\n" +
"    line-height: 20px;\n" +
"    margin: 1px 2px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-text {\n" +
"    white-space: nowrap;\n" +
"    font-size: 12px;\n" +
"    color: #687a86\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-text .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-outer-bar {\n" +
"    display: inline-block;\n" +
"    margin: 0 8px;\n" +
"    height: 13px;\n" +
"    width: 50px;\n" +
"    background-color: #ebeef2;\n" +
"    box-shadow: inset 0 0 1px #687a86;\n" +
"    border-radius: 2px;\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-outer-bar .ratings-breakdown-inner-bar {\n" +
"    height: 13px;\n" +
"    background-color: #ffd34f;\n" +
"    border: 1px solid #d8b858;\n" +
"    border-radius: 2px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-outer-bar .ratings-breakdown-inner-bar.no-rating {\n" +
"    border: none\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items .ratings-average .ratings-breakdown .ratings-breakdown-units .ratings-breakdown-percentage {\n" +
"    white-space: nowrap;\n" +
"    min-width: auto;\n" +
"    color: #687a86;\n" +
"    text-align: right;\n" +
"    font-size: 12px\n" +
"}\n" +
"\n" +
".ratings-score .ratings-items:focus-within .ratings-breakdown, .ratings-score .ratings-items:hover .ratings-breakdown {\n" +
"    display: inline\n" +
"}\n" +
"\n" +
".ratings-rate {\n" +
"    font-size: 16px;\n" +
"    line-height: 20px;\n" +
"    width: 100%;\n" +
"    padding: 0 5px 5px;\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-text {\n" +
"    display: inline-block;\n" +
"    color: #546673;\n" +
"    margin-right: 4px;\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
".dark .ratings-rate .ratings-text {\n" +
"    color: #a5b2b9\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars {\n" +
"    display: inline-block;\n" +
"    unicode-bidi: bidi-override;\n" +
"    direction: ltr;\n" +
"    margin: 0 0 0 5px;\n" +
"    position: relative;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars {\n" +
"    display: inline-block\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.selection-stars {\n" +
"    position: absolute;\n" +
"    z-index: 2;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    white-space: nowrap;\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.selection-stars .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.voting-stars {\n" +
"    position: absolute;\n" +
"    z-index: 1;\n" +
"    top: 0;\n" +
"    left: 0\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.voting-stars .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ebeef2\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.voting-stars .rating-star:active {\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.voting-stars .rating-star.selected-star {\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.base-stars {\n" +
"    position: static;\n" +
"    z-index: 0\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.base-stars .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ebeef2\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.animation-star-container {\n" +
"    display: none;\n" +
"    position: absolute;\n" +
"    z-index: 3\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.animation-star-container.animate-star {\n" +
"    z-index: 100;\n" +
"    text-align: right;\n" +
"    display: inline-block;\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    width: 100%;\n" +
"    height: 100%\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.animation-star-container.animate-star .animation-star .rating-star {\n" +
"    display: inline-block;\n" +
"    color: #ffd34f\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars .stars.animation-star-container.animate-star .animation-star .rating-star:last-child {\n" +
"    animation-name: anim-pop;\n" +
"    animation-duration: .5s\n" +
"}\n" +
"\n" +
".ratings-rate .ratings-stars:focus-within .stars.selection-stars, .ratings-rate .ratings-stars:hover .stars.selection-stars {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".user-badges-collection {\n" +
"    position: relative;\n" +
"    padding: 0;\n" +
"    margin-left: 3px\n" +
"}\n" +
"\n" +
".embed-refresh .user-badges-collection {\n" +
"    margin-left: 8px\n" +
"}\n" +
"\n" +
".mobile .user-badges-collection {\n" +
"    display: inline-block;\n" +
"    height: 21px\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .user-badges-collection {\n" +
"    display: inline;\n" +
"    height: auto\n" +
"}\n" +
"\n" +
".user-badge, .user-badge-image {\n" +
"    position: relative;\n" +
"    width: 18px;\n" +
"    height: 18px;\n" +
"    border-radius: 100%\n" +
"}\n" +
"\n" +
".embed-refresh .user-badge, .embed-refresh .user-badge-image {\n" +
"    width: 20px;\n" +
"    height: 20px;\n" +
"    vertical-align: top\n" +
"}\n" +
"\n" +
".user-badge {\n" +
"    display: inline-block;\n" +
"    vertical-align: middle;\n" +
"    margin: 0 1px;\n" +
"    white-space: normal;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".mobile .user-badge {\n" +
"    position: unset\n" +
"}\n" +
"\n" +
".embed-refresh.mobile .user-badge .user-badge-image {\n" +
"    width: 18px;\n" +
"    height: 18px\n" +
"}\n" +
"\n" +
".mobile .user-badge .user-badge-image:focus, .mobile .user-badge .user-badge-image:hover {\n" +
"    transform: none\n" +
"}\n" +
"\n" +
".user-badge .user-badge-image {\n" +
"    display: block;\n" +
"    border-radius: 100%;\n" +
"    object-fit: contain;\n" +
"    overflow: hidden;\n" +
"    transform: scale(1);\n" +
"    transition: transform .2s ease-in-out\n" +
"}\n" +
"\n" +
".user-badge .badge-tooltip__container {\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    height: auto;\n" +
"    padding-top: 4px;\n" +
"    white-space: nowrap;\n" +
"    visibility: hidden;\n" +
"    opacity: 0;\n" +
"    transition: opacity .3s ease-in-out;\n" +
"    z-index: 1030\n" +
"}\n" +
"\n" +
".user-badge .badge-tooltip__container .badge-tooltip {\n" +
"    background: #fff;\n" +
"    color: #546673;\n" +
"    width: intrinsic;\n" +
"    width: -webkit-max-content;\n" +
"    border-radius: 3px;\n" +
"    box-shadow: 0 0 0 2px rgba(0, 0, 0, .2);\n" +
"    padding: 4px 6px\n" +
"}\n" +
"\n" +
".user-badge.truncate-badge:focus, .user-badge:focus .user-badge-image {\n" +
"    border: 2px solid #0079e1\n" +
"}\n" +
"\n" +
".dark .user-badge .badge-tooltip__container .badge-tooltip {\n" +
"    background: #494e58;\n" +
"    color: rgba(255, 255, 255, .85)\n" +
"}\n" +
"\n" +
".user-badge:focus .user-badge-image, .user-badge:hover .user-badge-image {\n" +
"    transform: scale(1.15)\n" +
"}\n" +
"\n" +
".user-badge:focus .badge-tooltip__container, .user-badge:focus .badge-tooltip__container .tooltip, .user-badge:hover .badge-tooltip__container, .user-badge:hover .badge-tooltip__container .tooltip {\n" +
"    visibility: visible;\n" +
"    opacity: 1\n" +
"}\n" +
"\n" +
".mobile .user-badge:focus .badge-tooltip__container, .mobile .user-badge:focus .badge-tooltip__container .tooltip, .mobile .user-badge:hover .badge-tooltip__container, .mobile .user-badge:hover .badge-tooltip__container .tooltip {\n" +
"    visibility: hidden;\n" +
"    opacity: 0\n" +
"}\n" +
"\n" +
".user-badge:focus {\n" +
"    outline: 0\n" +
"}\n" +
"\n" +
".user-badge.truncate-badge {\n" +
"    color: rgba(255, 255, 255, .9);\n" +
"    box-shadow: none;\n" +
"    transition: all .2s ease-in-out\n" +
"}\n" +
"\n" +
".user-badge.truncate-badge .user-badge-more {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    font-size: 11px;\n" +
"    font-weight: 700;\n" +
"    letter-spacing: -.05em;\n" +
"    line-height: 18px;\n" +
"    text-align: center;\n" +
"    left: -.5px\n" +
"}\n" +
"\n" +
".embed-refresh .user-badge.truncate-badge .user-badge-more {\n" +
"    line-height: 20px\n" +
"}\n" +
"\n" +
".user-badge.truncate-badge:focus, .user-badge.truncate-badge:hover {\n" +
"    color: #fff;\n" +
"    box-shadow: inset 0 0 18px rgba(0, 0, 0, .2)\n" +
"}\n" +
"\n" +
".embed-refresh .user-badge.truncate-badge:focus, .embed-refresh .user-badge.truncate-badge:hover {\n" +
"    box-shadow: inset 0 0 20px rgba(0, 0, 0, .2)\n" +
"}\n" +
"\n" +
".user-badge.truncate-badge:focus .user-badge-more {\n" +
"    line-height: calc(14px)\n" +
"}\n" +
"\n" +
".embed-refresh .user-badge.truncate-badge:focus .user-badge-more {\n" +
"    line-height: calc(16px)\n" +
"}\n" +
"\n" +
".dark .user-badge.truncate-badge {\n" +
"    color: rgba(0, 0, 0, .65)\n" +
"}\n" +
"\n" +
".dark .user-badge.truncate-badge:focus, .dark .user-badge.truncate-badge:hover {\n" +
"    color: #000;\n" +
"    box-shadow: inset 0 0 18px rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".embed-refresh .dark .user-badge.truncate-badge:focus, .embed-refresh .dark .user-badge.truncate-badge:hover {\n" +
"    box-shadow: inset 0 0 20px rgba(255, 255, 255, .2)\n" +
"}\n" +
"\n" +
".hovercard-badges {\n" +
"    position: relative;\n" +
"    left: -4px;\n" +
"    margin-top: 8px\n" +
"}\n" +
"\n" +
".hovercard-badges .user-badges-collection {\n" +
"    height: 24px;\n" +
"    margin-left: 0\n" +
"}\n" +
"\n" +
".hovercard-badges .user-badges-collection .user-badge, .hovercard-badges .user-badges-collection .user-badge-image {\n" +
"    width: 24px;\n" +
"    height: 24px\n" +
"}\n" +
"\n" +
".hovercard-badges .user-badges-collection .user-badge .badge-tooltip__container .badge-tooltip {\n" +
"    background: #fff;\n" +
"    color: #546673;\n" +
"    font-size: 13px;\n" +
"    max-width: 140px;\n" +
"    overflow: visible\n" +
"}\n" +
"\n" +
".publisher-background-color {\n" +
"    background-color: #2e9fff\n" +
"}\n" +
"\n" +
".badges-form .badges-action .modal__description .modal__option-subtext, .badges-manage-form .badges-action .modal__description .modal__option-subtext {\n" +
"    font-size: 13px\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list, .badges-manage-form .badge-options_list {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: row;\n" +
"    flex-direction: row;\n" +
"    -ms-flex-wrap: wrap;\n" +
"    flex-wrap: wrap;\n" +
"    width: 95%;\n" +
"    margin: 4px auto\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option, .badges-manage-form .badge-options_list .badge-option {\n" +
"    height: 125px;\n" +
"    margin-bottom: 10px\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option:last-child, .badges-manage-form .badge-options_list .badge-option:last-child {\n" +
"    margin-right: 0\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_input + .badge-option_label, .badges-form .badge-options_list .badge-option .badge-option_label, .badges-form .badge-options_list .badge-option .badge-option_link, .badges-manage-form .badge-options_list .badge-option .badge-option_input + .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_link {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    -ms-flex-direction: column;\n" +
"    flex-direction: column;\n" +
"    background: #fff;\n" +
"    width: 100px;\n" +
"    height: 100%;\n" +
"    border: 2px solid #dce1e8;\n" +
"    border-radius: 4px;\n" +
"    padding: 4px 6px 8px;\n" +
"    transition: all 250ms ease-in-out;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option .badge-option_input + .badge-option_label, .dark .badges-form .badge-options_list .badge-option .badge-option_label, .dark .badges-form .badge-options_list .badge-option .badge-option_link, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_link {\n" +
"    background: rgba(255, 255, 255, .15);\n" +
"    border-color: rgba(255, 255, 255, .05)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option .badge-option_input + .badge-option_label .badge-option_title, .dark .badges-form .badge-options_list .badge-option .badge-option_label .badge-option_title, .dark .badges-form .badge-options_list .badge-option .badge-option_link .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input + .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_link .badge-option_title {\n" +
"    color: rgba(255, 255, 255, .8)\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_input, .badges-manage-form .badge-options_list .badge-option .badge-option_input {\n" +
"    position: absolute;\n" +
"    opacity: 0;\n" +
"    z-index: -1\n" +
"}\n" +
"\n" +
".badges-message, .icon__position {\n" +
"    position: relative\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_input:focus + .badge-option_label, .badges-form .badge-options_list .badge-option .badge-option_input:hover + .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_input:focus + .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_input:hover + .badge-option_label {\n" +
"    background: rgba(46, 159, 255, .1);\n" +
"    border-color: rgba(46, 159, 255, .15)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option .badge-option_input:focus + .badge-option_label, .dark .badges-form .badge-options_list .badge-option .badge-option_input:hover + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input:focus + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input:hover + .badge-option_label {\n" +
"    background: rgba(255, 255, 255, .25);\n" +
"    border-color: rgba(255, 255, 255, .15)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option .badge-option_input:focus + .badge-option_label .badge-option_title, .dark .badges-form .badge-options_list .badge-option .badge-option_input:hover + .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input:focus + .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input:hover + .badge-option_label .badge-option_title {\n" +
"    color: rgba(255, 255, 255, .9)\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_input:checked + .badge-option_label, .badges-form .badge-options_list .badge-option.selected .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_input:checked + .badge-option_label, .badges-manage-form .badge-options_list .badge-option.selected .badge-option_label {\n" +
"    background: rgba(46, 159, 255, .15);\n" +
"    border-color: #2e9fff\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option .badge-option_input:checked + .badge-option_label, .dark .badges-form .badge-options_list .badge-option.selected .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input:checked + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option.selected .badge-option_label {\n" +
"    background: rgba(46, 159, 255, .5)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option .badge-option_input:checked + .badge-option_label .badge-option-title, .dark .badges-form .badge-options_list .badge-option.selected .badge-option_label .badge-option-title, .dark .badges-manage-form .badge-options_list .badge-option .badge-option_input:checked + .badge-option_label .badge-option-title, .dark .badges-manage-form .badge-options_list .badge-option.selected .badge-option_label .badge-option-title {\n" +
"    color: #fff\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option.disabled .badge-option_input + .badge-option_label, .badges-form .badge-options_list .badge-option.disabled .badge-option_input:focus + .badge-option_label, .badges-form .badge-options_list .badge-option.disabled .badge-option_input:hover + .badge-option_label, .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input + .badge-option_label, .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input:focus + .badge-option_label, .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input:hover + .badge-option_label {\n" +
"    background: #f7f9fa;\n" +
"    color: #c2c9d4;\n" +
"    border-color: #ebeef2;\n" +
"    cursor: default;\n" +
"    opacity: .5\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option.disabled .badge-option_input + .badge-option_label, .dark .badges-form .badge-options_list .badge-option.disabled .badge-option_input:focus + .badge-option_label, .dark .badges-form .badge-options_list .badge-option.disabled .badge-option_input:hover + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input:focus + .badge-option_label, .dark .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input:hover + .badge-option_label {\n" +
"    background: rgba(255, 255, 255, .05);\n" +
"    border-color: rgba(255, 255, 255, .025)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option.disabled .badge-option_input + .badge-option_label .badge-option_title, .dark .badges-form .badge-options_list .badge-option.disabled .badge-option_input:focus + .badge-option_label .badge-option_title, .dark .badges-form .badge-options_list .badge-option.disabled .badge-option_input:hover + .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input + .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input:focus + .badge-option_label .badge-option_title, .dark .badges-manage-form .badge-options_list .badge-option.disabled .badge-option_input:hover + .badge-option_label .badge-option_title {\n" +
"    color: rgba(255, 255, 255, .3)\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_image-wrapper, .badges-manage-form .badge-options_list .badge-option .badge-option_image-wrapper {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    width: 55px;\n" +
"    min-height: 55px;\n" +
"    border-radius: 100%;\n" +
"    -ms-flex-align: center;\n" +
"    align-items: center;\n" +
"    vertical-align: middle;\n" +
"    margin: 6px auto;\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_image-wrapper .badge-option_image, .badges-manage-form .badge-options_list .badge-option .badge-option_image-wrapper .badge-option_image {\n" +
"    width: 55px;\n" +
"    height: 55px;\n" +
"    border-radius: 100%;\n" +
"    vertical-align: middle;\n" +
"    object-fit: contain;\n" +
"    overflow: hidden\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_link, .badges-manage-form .badge-options_list .badge-option .badge-option_link {\n" +
"    background: #f7f9fa\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option .badge-option_link .badge-option_title, .badges-form .badge-options_list .badge-option .badge-option_title, .badges-manage-form .badge-options_list .badge-option .badge-option_link .badge-option_title, .badges-manage-form .badge-options_list .badge-option .badge-option_title {\n" +
"    color: #546673;\n" +
"    font-size: 13px;\n" +
"    font-weight: 500;\n" +
"    line-height: 1.3;\n" +
"    text-align: center;\n" +
"    margin: auto\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper, .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper {\n" +
"    border: 4px solid #687a86;\n" +
"    transition: opacity 250ms ease-in-out;\n" +
"    opacity: .65\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper .badge-option_add-icon, .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper .badge-option_add-icon {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex;\n" +
"    color: #687a86;\n" +
"    font-size: 32px;\n" +
"    line-height: 1;\n" +
"    -ms-flex-pack: center;\n" +
"    justify-content: center;\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
".actions:after, .actions:before, .row:after, .row:before {\n" +
"    display: table;\n" +
"    content: \"\"\n" +
"}\n" +
"\n" +
".badges-form .badge-options_list .badge-option.create-badge .badge-option_link:focus, .badges-form .badge-options_list .badge-option.create-badge .badge-option_link:hover, .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link:focus, .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link:hover {\n" +
"    background: #ebeef2\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option.create-badge .badge-option_link:focus, .dark .badges-form .badge-options_list .badge-option.create-badge .badge-option_link:hover, .dark .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link:focus, .dark .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link:hover {\n" +
"    background: rgba(255, 255, 255, .25);\n" +
"    border-color: rgba(255, 255, 255, .15)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper, .dark .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper {\n" +
"    border-color: rgba(255, 255, 255, .65)\n" +
"}\n" +
"\n" +
".dark .badges-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper .badge-option_add-icon, .dark .badges-manage-form .badge-options_list .badge-option.create-badge .badge-option_link .badge-option_image-wrapper .badge-option_add-icon {\n" +
"    color: rgba(255, 255, 255, .65)\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .badges-form .badge-options_list, .badges-manage-form .badge-options_list {\n" +
"        width: 100%\n" +
"    }\n" +
"\n" +
"    .badges-form .badge-options_list .badge-option, .badges-manage-form .badge-options_list .badge-option {\n" +
"        height: 115px\n" +
"    }\n" +
"\n" +
"    .badges-form .badge-options_list .badge-option .badge-option_input + .badge-option_label, .badges-form .badge-options_list .badge-option .badge-option_label, .badges-form .badge-options_list .badge-option .badge-option_link, .badges-manage-form .badge-options_list .badge-option .badge-option_input + .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_label, .badges-manage-form .badge-options_list .badge-option .badge-option_link {\n" +
"        width: 85px\n" +
"    }\n" +
"}\n" +
"\n" +
".badges-form .badge-options_empty, .badges-manage-form .badge-options_empty {\n" +
"    text-align: center;\n" +
"    margin: 16px auto 30px;\n" +
"    padding: 0 12px;\n" +
"    opacity: .7\n" +
"}\n" +
"\n" +
".actions:after, .actions:before {\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".actions .forgot {\n" +
"    color: #dbdfe4;\n" +
"    font-size: 12px;\n" +
"    padding: 3px 0;\n" +
"    line-height: 2.5\n" +
"}\n" +
"\n" +
".dark .actions .forgot {\n" +
"    text-shadow: none\n" +
"}\n" +
"\n" +
".row:after, .row:before {\n" +
"    line-height: 0\n" +
"}\n" +
"\n" +
".invisible {\n" +
"    opacity: 0;\n" +
"    filter: alpha(opacity=0);\n" +
"    visibility: hidden\n" +
"}\n" +
"\n" +
".visible {\n" +
"    opacity: 1;\n" +
"    filter: alpha(opacity=100);\n" +
"    visibility: visible !important\n" +
"}\n" +
"\n" +
".hidden {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".icon__position {\n" +
"    min-width: 12px\n" +
"}\n" +
"\n" +
".icon__position.-inline {\n" +
"    margin-right: 3px\n" +
"}\n" +
"\n" +
".icon__position.-allstar {\n" +
"    top: 2px\n" +
"}\n" +
"\n" +
"img[data-src] {\n" +
"    visibility: hidden\n" +
"}\n" +
"\n" +
".pull-right {\n" +
"    float: right !important\n" +
"}\n" +
"\n" +
".pull-left {\n" +
"    float: left !important\n" +
"}\n" +
"\n" +
"@media screen and (min-width: 480px) {\n" +
"    .visible-sm {\n" +
"        display: none !important\n" +
"    }\n" +
"}\n" +
"\n" +
"@media screen and (max-width: 480px) {\n" +
"    .hidden-sm {\n" +
"        display: none !important\n" +
"    }\n" +
"}\n" +
"\n" +
"@media screen and (min-width: 550px) {\n" +
"    .visible-md {\n" +
"        display: none !important\n" +
"    }\n" +
"}\n" +
"\n" +
"@media screen and (max-width: 550px) {\n" +
"    .hidden-md {\n" +
"        display: none !important\n" +
"    }\n" +
"}\n" +
"\n" +
"@media screen and (min-width: 320px) {\n" +
"    .visible-xs {\n" +
"        display: none !important\n" +
"    }\n" +
"}\n" +
"\n" +
"@media screen and (max-width: 320px) {\n" +
"    .hidden-xs {\n" +
"        display: none !important\n" +
"    }\n" +
"}\n" +
"\n" +
".embed-hidden {\n" +
"    display: none\n" +
"}\n" +
"\n" +
".admin-modal__content {\n" +
"    display: -ms-flexbox;\n" +
"    display: flex\n" +
"}\n" +
"\n" +
".admin-modal__content > div {\n" +
"    width: 50%\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    .admin-modal__content {\n" +
"        -ms-flex-wrap: wrap;\n" +
"        flex-wrap: wrap\n" +
"    }\n" +
"\n" +
"    .admin-modal__content > div {\n" +
"        width: 100%\n" +
"    }\n" +
"}\n" +
"\n" +
".media-middle {\n" +
"    vertical-align: middle\n" +
"}\n" +
"\n" +
".comment-policy {\n" +
"    margin-bottom: 25px\n" +
"}\n" +
"\n" +
".badges-message.comment-policy-refresh .content {\n" +
"    margin-right: 70px\n" +
"}\n" +
"\n" +
".badges-message .comment-policy-refresh__link {\n" +
"    margin-top: 8px\n" +
"}\n" +
"\n" +
".badges-message .badges-message-close {\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    width: 15px;\n" +
"    height: 15px;\n" +
"    top: 8px;\n" +
"    right: 10px;\n" +
"    opacity: .4;\n" +
"    transition: opacity .2s ease-in-out;\n" +
"    cursor: pointer\n" +
"}\n" +
"\n" +
".badges-message .badges-message-close:active, .badges-message .badges-message-close:focus, .badges-message .badges-message-close:hover {\n" +
"    opacity: .8\n" +
"}\n" +
"\n" +
".badges-message .badges-message-close::after, .badges-message .badges-message-close::before {\n" +
"    content: '';\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    background: #546673;\n" +
"    width: 3px;\n" +
"    height: 15px;\n" +
"    left: 6px\n" +
"}\n" +
"\n" +
".dark .badges-message .badges-message-close::after, .dark .badges-message .badges-message-close::before {\n" +
"    background: #fff\n" +
"}\n" +
"\n" +
".badges-message .badges-message-close::before {\n" +
"    transform: rotate(-45deg)\n" +
"}\n" +
"\n" +
".badges-message .badges-message-close::after {\n" +
"    transform: rotate(45deg)\n" +
"}\n" +
"\n" +
".badges-message .badges-message-icon {\n" +
"    display: block;\n" +
"    position: absolute;\n" +
"    background: url(https://c.disquscdn.com/next/embed/assets/img/badges-message.b69d2b061f341fd85f0b2e8284c4b800.svg) center no-repeat;\n" +
"    background-size: auto 60px;\n" +
"    width: 60px;\n" +
"    min-height: 60px;\n" +
"    top: 50%;\n" +
"    right: 25px;\n" +
"    margin-top: -30px;\n" +
"    opacity: .35\n" +
"}\n" +
"\n" +
".dark .badges-message .badges-message-icon {\n" +
"    filter: invert(1);\n" +
"    opacity: .25\n" +
"}\n" +
"\n" +
".badges-message .comment-policy-text .comment-policy-link {\n" +
"    margin: 8px 0 4px\n" +
"}\n" +
"\n" +
"#tos__container {\n" +
"    position: fixed;\n" +
"    top: 10px;\n" +
"    bottom: 0;\n" +
"    z-index: 1000;\n" +
"    background: rgba(255, 255, 255, .7);\n" +
"    -webkit-transform: translate3d(0, 0, 0);\n" +
"    max-width: 100%\n" +
"}\n" +
"\n" +
"#tos__container #tos__message {\n" +
"    background-color: #25557D;\n" +
"    border: 1px solid #2e87e7;\n" +
"    color: #fff;\n" +
"    padding: 20px;\n" +
"    margin: 10px;\n" +
"    border-radius: 5px;\n" +
"    z-index: 1000\n" +
"}\n" +
"\n" +
"#tos__container #tos__message a, #tos__container #tos__message a:active, #tos__container #tos__message a:hover, #tos__container #tos__message a:visited {\n" +
"    color: #fff !important\n" +
"}\n" +
"\n" +
"#tos__container #tos__message h1 {\n" +
"    font-size: 30px;\n" +
"    margin-bottom: 20px;\n" +
"    font-weight: 700\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    #tos__container #tos__message h1 {\n" +
"        font-size: 24px;\n" +
"        margin-bottom: 10px\n" +
"    }\n" +
"}\n" +
"\n" +
"#tos__container #tos__message p {\n" +
"    font-size: 17px;\n" +
"    line-height: 19px;\n" +
"    margin: 0 0 7px;\n" +
"    width: 100%\n" +
"}\n" +
"\n" +
"#tos__container #tos__message p a {\n" +
"    color: #000;\n" +
"    font-weight: 500\n" +
"}\n" +
"\n" +
"@media (max-width: 480px) {\n" +
"    #tos__container #tos__message p {\n" +
"        font-size: 13px;\n" +
"        line-height: 15px\n" +
"    }\n" +
"}\n" +
"\n" +
"#tos__container #tos__message span {\n" +
"    display: inline-block;\n" +
"    width: calc(100% - 25px);\n" +
"    vertical-align: top;\n" +
"    margin-top: 3px\n" +
"}\n" +
"\n" +
"#tos__container #tos__message > p:last-of-type {\n" +
"    margin-bottom: 0\n" +
"}\n" +
"\n" +
"#tos__container #tos__message .checkbox-wrapper {\n" +
"    max-width: 600px\n" +
"}\n" +
"\n" +
"#tos__container #accept_tos {\n" +
"    background-color: buttonface;\n" +
"    margin: 10px auto 0\n" +
"}\n" +
"\n" +
"li.voting {\n" +
"    margin-right: 0 !important;\n" +
"}";
