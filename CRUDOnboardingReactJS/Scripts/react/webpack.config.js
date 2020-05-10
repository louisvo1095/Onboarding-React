module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        home: "./index.jsx",
        customer: "./customer.jsx",
        product: "./product.jsx",
        store: "./store.jsx",
        sale: "./sale.jsx",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env', 'babel-preset-react']
                }
            }
        }]
    }
}
