"use strict";
// run Even to DOMContentLoaded sur window
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document === null || document === void 0 ? void 0 : document.getElementById(selector);
        if (element)
            element.innerText = text;
    };
    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
