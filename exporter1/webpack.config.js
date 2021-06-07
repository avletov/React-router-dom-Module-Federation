const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
    entry: "./src/index.js",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                exclude: /fonts/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            }

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new ModuleFederationPlugin({
            name: 'app1', //Наименование контейнера, где находятся компоненты
            library: { type: 'var', name: 'app1' }, //Дублируем наименование контейнера
            filename: 'components.js', //Файл, в который помещается контейнер с компонентами
            exposes: {
                './Letter_app_1': './src/components/Letter_app_1' // По url получить компонент из папки components
            },
            shared: {
                react: {
                    requiredVersion: deps.react, //берем версию react из package.json
                    singleton: true, // единcтвенная версия глобально во всех приложениях
                },
                'react-dom': {
                    requiredVersion: deps['react-dom'],
                    singleton: true,
                },
            },
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};