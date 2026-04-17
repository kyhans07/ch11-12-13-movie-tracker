/**
 * Description: A library of helper functions to simplify DOM manipulation.
 * Author: Kyler Hanson
 * Date: 2026-04-15
 * GitHub: https://github.com/kyhans07
 */

/** @function get - Selects an element from the DOM. */
function get(selector) {
    return document.querySelector(selector);
}
/** @function setText - Sets the text content of a DOM element. */
function setText(selector, text) {
    get(selector).textContent = text;
}
/** @function setValue - Sets the value of a DOM input element. */
function setValue(selector, value) {
    get(selector).value = value;
}
/** @function getValue - Retrieves the value of a DOM input element. */
function getValue(selector) {
    return get(selector).value;
}
/** @function clear - Clears the value or text content of a DOM element. */
function clear(selector) {
    const elem = get(selector);
    if (elem.value) elem.value = "";
    else elem.textContent = "";
}
/** @function focus - Sets focus to a DOM element. */
function focus(selector) {
    get(selector).focus();
}
/** @function select - Selects the content of a DOM input element. */
function select(selector) {
    get(selector).select();
}
/** @function load - Attaches an event listener for DOMContentLoaded. */
function load(func) {
    document.addEventListener("DOMContentLoaded", func);
}
/** @function addClick - Attaches a click event listener to a DOM element. */
function addClick(selector, func) {
    get(selector).addEventListener("click", func);
}

export {get, setText, setValue, getValue, clear, 
    focus, select, load, addClick};