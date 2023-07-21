// ==UserScript==
// @name         Stegi Overlay
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Overlay für Stegi :)
// @author       Sushiaaa
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener("load", () => {
        const overlay = document.createElement("img");
        overlay.src = `Sushiaaa.github.io/screenoverlay.png?time=${ (new Date()).getTime().toString() }`;
        overlay.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 4000px;height: 4000px;";
    }, false);
}
