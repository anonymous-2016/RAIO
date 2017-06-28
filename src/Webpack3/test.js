{
    entry: 'index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'assets/admin.html'
        })
    ]
}



{
    entry : 'index.js',
    output : {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(), // Generates default index.html
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'test.html',
            template: 'src/assets/test.html'
        })
    ]
}