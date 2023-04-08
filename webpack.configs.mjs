import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    mode: "development",
    entry: {},
    output: {},
    plugins: [
        new CopyWebpackPlugin(
            {patterns: [{from: './app.js', to: './webp', force: true},
                               {from: './router.js', to: './webp', force: true},
                               {from: './public/cert/*', to: './webp', force: true},
                               {from: './public/image/*', to: './webp', force: true},
                               {from: './public/json/*', to: './webp', force: true},
                               {from: './public/pug/*', to: './webp', force: true}]}
        )
    ]
};