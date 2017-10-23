
window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
});

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

document.readyState === "complete";
// true


// alternative to DOMContentLoaded
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        initApplication();
    }
}


switch (document.readyState) {
    case "loading":
        // The document is still loading.
        break;
    case "interactive":
        // The document has finished loading. We can now access the DOM elements.
        var span = document.createElement("span");
        span.textContent = "A <span> element.";
        document.body.appendChild(span);
        break;
    case "complete":
        // The page is fully loaded.
        console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
        break;
}

// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }

// alternative to load event
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        initApplication();
    }
}


// early manipulation of the document <body> using an external script
var bootstrap = function(evt){
    if (evt.target.readyState === "interactive") {
        initLoader();
    }
    else if (evt.target.readyState === "complete") {
        initApp();
    }
}
document.addEventListener('readystatechange', bootstrap, false);

