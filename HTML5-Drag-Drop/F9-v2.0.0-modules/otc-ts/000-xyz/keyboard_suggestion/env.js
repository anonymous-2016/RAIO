module.exports = {
    // get: (name, env = `dev`) => this[env][name],
    get: function(name, env){
        if(env == undefined){
            env = 'dev';
        }
        return this[env][name];
    },
    dev: {
        styleurl:'/css/stocksuggest2017.css',
        apiurl: '//searchapi.eastmoney.com/api/'
    },
    test: {
        styleurl:'//emcharts.dfcfw.com/suggest/test/stocksuggest2017.css',
        apiurl: 'http://api.so.zptest.emapd.com/api/'
    },
    prod: {
        styleurl:'//emcharts.dfcfw.com/suggest/stocksuggest2017.css',
        apiurl: '//searchapi.eastmoney.com/api/'
    }
};

X = {
    // get: ,
    // dev: ,
    // test: ,
    // prod: ,
};

X.get(`apiurl`);
// "//searchapi.eastmoney.com/api/"
X.get(`apiurl`, `prod`);
// "//searchapi.eastmoney.com/api/"
X.get(`apiurl`, `test`);
// "http://api.so.zptest.emapd.com/api/"
