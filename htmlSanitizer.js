/**
 * This service assumes html string and 
 * selector as an arguments and clear all elements 
 * that maches provided selector.
 *
 * @author Georgi Naumov
 * @email gonaumov@gmail.com for contacts
 * and suggestions.
 *
 */
yourApp.service('htmlSanitizer', function () {
    return function (inputHtmlString, selectorToClear) {
        var parser = new DOMParser();

        var doc = parser.parseFromString(inputHtmlString, "text/html");
        [].forEach.call(doc.querySelectorAll(selectorToClear), function (el) {
            el.parentNode.removeChild(el);
        });

        return doc.documentElement.outerHTML;
    };
});
