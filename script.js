// ==UserScript==
// @name         Whatsapp Web
// @namespace    web.whatsapp.com
// @version      1.8
// @match        https://web.whatsapp.com/
// @author       talenelat-elin
// @grant        none
// date          2023-01-28
// ==/UserScript==

document.addEventListener("keydown", function(zEvent) {
  if (zEvent.ctrlKey && zEvent.altKey && zEvent.key === "f") { // case sensitive
    // DO YOUR STUFF HERE
    document.querySelector(".Er7QU").focus();
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
    // _5kRIK is the classname for the chats container, and _1-FMR is the class name for the chat bubbles themselves.
    document.querySelector("._5kRIK > .n5hs2j7m > div:last-of-type > div > ._1-FMR").focus()
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
