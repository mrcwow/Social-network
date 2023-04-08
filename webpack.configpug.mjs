import path from "path";
const __dirname = path.resolve()
import PugPlugin from "pug-plugin";

export default {
    mode: "development",
    entry: {"start_page": './public/pug/start_page.pug',
        "user": './public/pug/user.pug',
        "list_friends": './public/pug/list_friends.pug',
        "list_news": './public/pug/list_news.pug'},
    output: {path: path.resolve(__dirname, 'dist/webp/public/pug')},
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader
            }
        ]
    },
    plugins: [
        new PugPlugin()
    ]
};