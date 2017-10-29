// Custom-Context-Menu

// https://github.com/callmenick/Custom-Context-Menu/blob/master/main.js

/* 

!function(){
    console.log(`old IIFE?`);
}();
// old IIFE?
// true


function(){
    console.log(`old IIFE?`);
}();
// Uncaught SyntaxError: Unexpected token (


!(function(){
    console.log(`old IIFE?`);
}());
// old IIFE?
// true

(!function(){
    console.log(`old IIFE?`);
}());
// old IIFE?
// true




(!function(){
    console.log(`old IIFE?`);
})();
// Uncaught TypeError: (!(intermediate value)) is not a function

(!function(){
    console.log(`old IIFE?`);
}())();
// Uncaught TypeError: (!(intermediate value)(...)) is not a function



*/

(function() {
    "use strict";
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //
    // H E L P E R    F U N C T I O N S
    //
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /**
     * Function to check if we clicked inside an element with a particular class
     * name.
     * 
     * @param {Object} e The event
     * @param {String} className The class name to check against
     * @return {Boolean}
     */
    function clickInsideElement( e, className ) {
      var el = e.srcElement || e.target;
      if ( el.classList.contains(className) ) {
        return el;
      } else {
        while ( el = el.parentNode ) {
          if ( el.classList && el.classList.contains(className) ) {
            return el;
          }
        }
      }
      return false;
    }
  
    /**
     * Get's exact position of event.
     * 
     * @param {Object} e The event passed in
     * @return {Object} Returns the x and y position
     */
    function getPosition(e) {
      var posx = 0;
      var posy = 0;
      if (!e) var e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      return {
        x: posx,
        y: posy
      }
    }
  
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //
    // C O R E    F U N C T I O N S
    //
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    
    /**
     * Variables.
     */
    // 
    var contextMenuClassName = "context-menu",
        contextMenuItemClassName = "context-menu__item",
        contextMenuLinkClassName = "context-menu__link",
        contextMenuActive = "context-menu--active";
    // 
    var taskItemClassName = "task";
    var taskItemInContext;
    // 
    var clickCoords,
        clickCoordsX,
        clickCoordsY;
    // 
    var menu = document.querySelector("#context-menu"),
        menuItems = menu.querySelectorAll(".context-menu__item"),
        menuState = 0,
        menuWidth,
        menuHeight,
        menuPosition,
        menuPositionX,
        menuPositionY,
        windowWidth,
        windowHeight;
    /**
     * Initialise our application's code.
     */
    function init() {
        contextListener();
        clickListener();
        keyupListener();
        resizeListener();
    }
    /**
     * Listens for contextmenu events.
     */
    function contextListener() {
      document.addEventListener( "contextmenu", function(e) {
        taskItemInContext = clickInsideElement( e, taskItemClassName );
        if ( taskItemInContext ) {
          e.preventDefault();
          toggleMenuOn();
          positionMenu(e);
        } else {
          taskItemInContext = null;
          toggleMenuOff();
        }
      });
    }
  
    /**
     * Listens for click events.
     */
    function clickListener() {
      document.addEventListener( "click", function(e) {
        var clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );
  
        if ( clickeElIsLink ) {
          e.preventDefault();
          menuItemListener( clickeElIsLink );
        } else {
          var button = e.which || e.button;
          if ( button === 1 ) {
            toggleMenuOff();
          }
        }
      });
    }
  
    /**
     * Listens for keyup events.
     */
    function keyupListener() {
      window.onkeyup = function(e) {
        if ( e.keyCode === 27 ) {
          toggleMenuOff();
        }
      }
    }
  
    /**
     * Window resize event listener
     */
    function resizeListener() {
      window.onresize = function(e) {
        toggleMenuOff();
      };
    }
  
    /**
     * Turns the custom context menu on.
     */
    function toggleMenuOn() {
      if ( menuState !== 1 ) {
        menuState = 1;
        menu.classList.add( contextMenuActive );
      }
    }
  
    /**
     * Turns the custom context menu off.
     */
    function toggleMenuOff() {
      if ( menuState !== 0 ) {
        menuState = 0;
        menu.classList.remove( contextMenuActive );
      }
    }
  
    /**
     * Positions the menu properly.
     * 
     * @param {Object} e The event
     */
    function positionMenu(e) {
      clickCoords = getPosition(e);
      clickCoordsX = clickCoords.x;
      clickCoordsY = clickCoords.y;
  
      menuWidth = menu.offsetWidth + 4;
      menuHeight = menu.offsetHeight + 4;
  
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
  
      if ( (windowWidth - clickCoordsX) < menuWidth ) {
        menu.style.left = windowWidth - menuWidth + "px";
      } else {
        menu.style.left = clickCoordsX + "px";
      }
  
      if ( (windowHeight - clickCoordsY) < menuHeight ) {
        menu.style.top = windowHeight - menuHeight + "px";
      } else {
        menu.style.top = clickCoordsY + "px";
      }
    }
  
    /**
     * Dummy action function that logs an action when a menu item link is clicked
     * 
     * @param {HTMLElement} link The link that was clicked
     */
    function menuItemListener( link ) {
      console.log( "Task ID - " + taskItemInContext.getAttribute("data-id") + ", Task action - " + link.getAttribute("data-action"));
      toggleMenuOff();
    }
    /**
     * Run the app.
     */
    init();
    // call init();
})();
// IIFE



// OOP

(!function(){
    console.log(`old IIFE?`);
    function contextListener() {
        console.log(`context`);
    }
    function clickListener() {
        console.log(`click`);
    }
    function init() {
        console.log(`init`);
        contextListener();
        clickListener();
    }
    // init();
    // return {
    //     contextListener: contextListener,
    //     clickListener: clickListener,
    //     init: init
    // };
    // {...obj}
    return {
        contextListener,
        clickListener,
        init
    };
}());
/* 
    // old IIFE?
    // init
    // context
    // click
    // true (return value)
*/



let oop = (function(){
    console.log(`old IIFE?`);
    function contextListener() {
        console.log(`context`);
    }
    function clickListener() {
        console.log(`click`);
    }
    function init() {
        console.log(`init`);
        contextListener();
        clickListener();
    }
    // init();
    // return {
    //     contextListener: contextListener,
    //     clickListener: clickListener,
    //     init: init
    // };
    // {...obj}
    return {
        contextListener,
        clickListener,
        init
    };
}());
// old IIFE?
// {contextListener: ƒ, clickListener: ƒ, init: ƒ}





