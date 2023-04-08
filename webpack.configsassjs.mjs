import path from "path";
const __dirname = path.resolve()

export default {
    entry: {"start_page": './public/sass/start_page.sass',
        "user": './public/sass/user.sass',
        "list_friends": './public/sass/list_friends.sass',
        "list_news": './public/sass/list_news.sass'},
    output: {path: path.resolve(__dirname, 'dist/webp/public')},
    module: {
        rules: [
            {
                test: /\.(c|sa)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};