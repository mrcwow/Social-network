import path from "path";
const __dirname = path.resolve()
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    mode: "production",
    entry: {"start_page": './public/sass/start_page.sass',
        "user": './public/sass/user.sass',
        "list_friends": './public/sass/list_friends.sass',
        "list_news": './public/sass/list_news.sass'},
    output: {path: path.resolve(__dirname, 'dist/webp/public/sass')},
    module: {
        rules: [
            {
                test: /\.(c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
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
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
};