// For discussion and comments, see: http://remysharp.com/2009/01/07/html5-enabling-script/

/* @cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@ */

var addEvent = (function () {
    if (document.addEventListener) {
      return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
          el.addEventListener(type, fn, false);
        } else if (el && el.length) {
          for (var i = 0; i < el.length; i++) {
            addEvent(el[i], type, fn);
          }
        }
      };
    } else {
      return function (el, type, fn) {
        if (el && el.nodeName || el === window) {
          el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
        } else if (el && el.length) {
          for (var i = 0; i < el.length; i++) {
            addEvent(el[i], type, fn);
          }
        }
      };
    }
  })();

  (function () {

  var pre = document.createElement('pre');
  pre.id = "view-source"

  // private scope to avoid conflicts with demos
  addEvent(window, 'click', function (event) {
    if (event.target.hash == '#view-source') {
      // event.preventDefault();
      if (!document.getElementById('view-source')) {
        // pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
        var xhr = new XMLHttpRequest();

        // original source - rather than rendered source
        xhr.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            pre.innerHTML = this.responseText.replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
            prettyPrint();
          }
        };

        document.body.appendChild(pre);
        // really need to be sync? - I like to think so
        xhr.open("GET", location.origin + '/demos' + window.location.pathname.replace(/\/$/, '') + '.html', true);
        xhr.send();
      }
      document.body.className = 'view-source';

      var sourceTimer = setInterval(function () {
        if (window.location.hash != '#view-source') {
          clearInterval(sourceTimer);
          document.body.className = '';
        }
      }, 200);
    }
  });

})();


/*

https://html5demos.com/history/

https://html5demos.com/history/#view-source


*/




var $ = function (s) { return document.getElementById(s); },
    state = $('status'),
    lastevent = $('lastevent'),
    urlhistory = $('urlhistory'),
    examples = $('examples'),
    output = $('output'),
    template = '<p>URL: <strong>{url}</strong>, name: <strong>{name}</strong>, location: <strong>{location}</strong></p>',
    data = { // imagine these are ajax requests :)
      first : {
        name: "Remy",
        location: "Brighton, UK"
      },
      second: {
        name: "John",
        location: "San Francisco, USA"
      },
      third: {
        name: "Jeff",
        location: "Vancover, Canada"
      },
      fourth: {
        name: "Simon",
        location: "London, UK"
      }
    };

function reportEvent(event) {
  lastevent.innerHTML = event.type;
}

function reportData(data) {
  output.innerHTML = template.replace(/(:?\{(.*?)\})/g, function (a,b,c) {
    return data[c];
  });
}

if (typeof history.pushState === 'undefined') {
  state.className = 'fail';
} else {
  state.className = 'success';
  state.innerHTML = 'HTML5 History API available';
}

addEvent(examples, 'click', function (event) {
  var title;

  event.preventDefault();
  if (event.target.nodeName == 'A') {
    title = event.target.innerHTML;
    data[title].url = event.target.getAttribute('href'); // slightly hacky (the setting), using getAttribute to keep it short
    history.pushState(data[title], title, event.target.href);
    reportData(data[title]);
  }
});

addEvent(window, 'popstate', function (event) {
  var data = event.state;
  reportEvent(event);
  reportData(event.state || { url: "unknown", name: "undefined", location: "undefined" });
});

addEvent(window, 'hashchange', function (event) {
  reportEvent(event);

  // we won't do this for now - let's stay focused on states
  /*
  if (event.newURL) {
    urlhistory.innerHTML = event.oldURL;
  } else {
    urlhistory.innerHTML = "no support for <code>event.newURL/oldURL</code>";
  }
  */
});

addEvent(window, 'pageshow', function (event) {
  reportEvent(event);
});

addEvent(window, 'pagehide', function (event) {
  reportEvent(event);
});

