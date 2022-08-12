import webpack from 'webpack';
import lessModules from '@kkt/less-modules';
import { LoaderConfOptions, WebpackConfiguration } from 'kkt';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import { disableScopePlugin } from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (conf: WebpackConfiguration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = mdCodeModulesLoader(conf);
  conf = disableScopePlugin(conf);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        // maxSize: 500000,
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          momentlodash: {
            test: /[\\/]node_modules[\\/](moment-mini|lodash|d3-array|d3-geo|d3-shape|dagre)[\\/]/,
            name: 'momentlodash-vendor',
            chunks: 'all',
          },
          dagred3: {
            test: /[\\/]node_modules[\\/](dagre-d3)[\\/]/,
            name: 'dagre-d3-vendor',
            chunks: 'all',
          },
          d3: {
            test: /[\\/]node_modules[\\/](d3-\w+(-?\w+))[\\/]/,
            name: 'd3-vendor',
            chunks: 'all',
          },
          micromark: {
            test: /[\\/]node_modules[\\/](micromark-\w+(-?\w+))[\\/]/,
            name: 'micromark-vendor',
            chunks: 'all',
          },
          prismjs: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-prismjs-vendor',
            chunks: 'all',
          },
          runtime: {
            test: /[\\/]node_modules[\\/](@babel[\\/]runtime)[\\/]/,
            name: 'babel-runtime-vendor',
            chunks: 'all',
          },
          parse5: {
            test: /[\\/]node_modules[\\/](parse5)[\\/]/,
            name: 'parse5-vendor',
            chunks: 'all',
          },
          bi: {
            test: /[\\/](icons[\\/]bi)[\\/]/,
            name: 'icon-bi-vendor',
            chunks: 'all',
          },
          bs: {
            test: /[\\/](icons[\\/]bs)[\\/]/,
            name: 'icon-bs-vendor',
            chunks: 'all',
          },
          di: {
            test: /[\\/](icons[\\/]di)[\\/]/,
            name: 'icon-di-vendor',
            chunks: 'all',
          },
          sti: {
            test: /[\\/](icons[\\/]sti)[\\/]/,
            name: 'icon-sti-vendor',
            chunks: 'all',
          },
        }
      }
    }
  }
  return conf;
};
