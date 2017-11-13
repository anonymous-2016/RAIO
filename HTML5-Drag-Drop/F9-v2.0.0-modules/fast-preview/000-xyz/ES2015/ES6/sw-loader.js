// 
if ('serviceWorker'in navigator) {
    navigator.serviceWorker.register('/_/chrome/newtab-serviceworker.js', {
        scope: '.'
    }).then(function(sw) {
        console.log("SW registered");
    }, function(x) {
        console.log("SW failed to register: " + x.message);
    });
}