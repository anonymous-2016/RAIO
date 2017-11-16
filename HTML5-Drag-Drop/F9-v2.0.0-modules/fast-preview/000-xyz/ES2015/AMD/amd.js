// no dependency
define([], function(){
    function funcA() {
        // 
    };
    return {
        funcA: funcA
    };
});

// dependency
// no need `.js`
define(['a', 'b', ...obj], function(a, b){
    // 
});