// ==UserScript==
// @name         Whatsapp Web
// @namespace    web.whatsapp.com
// @version      1.7
// @match        https://web.whatsapp.com/
// @author       You
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function(zEvent) {
  if (zEvent.ctrlKey && zEvent.altKey && zEvent.key === "f") { // case sensitive
    // DO YOUR STUFF HERE
    document.querySelector("._13NKt").focus();
  }


  if (zEvent.ctrlKey && zEvent.key === "ArrowDown") { // case sensitive
    // DO YOUR STUFF HERE
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Tab",
        ctrlKey: true,
        bubbles: true,
        altKey: true
      })
    );

  }

  if (zEvent.ctrlKey && zEvent.key === "ArrowUp") { // case sensitive
    // DO YOUR STUFF HERE
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Tab",
        ctrlKey: true,
        shiftKey: true,
        bubbles: true,
        altKey: true
      })
    );

  }


  if (zEvent.altKey && zEvent.key === "ArrowUp") { // case sensitive
    // DO YOUR STUFF HERE
    // _3K4-L is the classname for the chats container, and _1-FMR is the class name for the chat bubbles themselves.
    document.querySelector("._33LGR > div > div:last-of-type > ._1-FMR").focus()

  }


  if (zEvent.altKey && zEvent.key === "Enter") { // case sensitive

    var event = new MouseEvent('dblclick', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    document.querySelector('div[class*="_1-FMR"][tabindex="0"]').dispatchEvent(event);
  }

});
