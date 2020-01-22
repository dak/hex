const path = require('path');
const WorkerPlugin = require('worker-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: [`${__dirname}/src/styles`]
                }
            }
        }
    },
    productionSourceMap: false,
    configureWebpack: {
        devServer: {
            historyApiFallback: true,
            hot: true,
            overlay: {
                warnings: false,
                errors: false
            }
        },
        plugins: [
            new WorkerPlugin()
        ],
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            modules: [
                resolve('src'),
                resolve('node_modules')
            ],
            alias: {
                vue$: 'vue/dist/vue.common.js',
                src: path.resolve(__dirname, 'src'),
                assets: path.resolve(__dirname, 'src/assets'),
                components: path.resolve(__dirname, 'src/components'),
                directives: path.resolve(__dirname, 'src/directives'),
                handlers: path.resolve(__dirname, 'src/handlers'),
                helpers: path.resolve(__dirname, 'src/helpers'),
                models: path.resolve(__dirname, 'src/models'),
                pages: path.resolve(__dirname, 'src/pages'),
                styles: path.resolve(__dirname, 'src/styles'),
                views: path.resolve(__dirname, 'src/views')
            }
        }
    },
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
};
