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
          bts: {
            test: /[\\/](icons[\\/]bts)[\\/]/,
            name: 'icon-bts-vendor',
            chunks: 'all',
          },
          ccp: {
            test: /[\\/](icons[\\/]ccp)[\\/]/,
            name: 'icon-ccp-vendor',
            chunks: 'all',
          },
          cg: {
            test: /[\\/](icons[\\/]cg)[\\/]/,
            name: 'icon-cg-vendor',
            chunks: 'all',
          },
          di: {
            test: /[\\/](icons[\\/]di)[\\/]/,
            name: 'icon-di-vendor',
            chunks: 'all',
          },
          ei: {
            test: /[\\/](icons[\\/]ei)[\\/]/,
            name: 'icon-ei-vendor',
            chunks: 'all',
          },
          ev: {
            test: /[\\/](icons[\\/]ev)[\\/]/,
            name: 'icon-ev-vendor',
            chunks: 'all',
          },
          fa: {
            test: /[\\/](icons[\\/]fa)[\\/]/,
            name: 'icon-fa-vendor',
            chunks: 'all',
          },
          fc: {
            test: /[\\/](icons[\\/]fc)[\\/]/,
            name: 'icon-fc-vendor',
            chunks: 'all',
          },
          fd: {
            test: /[\\/](icons[\\/]fd)[\\/]/,
            name: 'icon-fd-vendor',
            chunks: 'all',
          },
          fg: {
            test: /[\\/](icons[\\/]fg)[\\/]/,
            name: 'icon-fg-vendor',
            chunks: 'all',
          },
          fi: {
            test: /[\\/](icons[\\/]fi)[\\/]/,
            name: 'icon-fi-vendor',
            chunks: 'all',
          },
          gi: {
            test: /[\\/](icons[\\/]gi)[\\/]/,
            name: 'icon-gi-vendor',
            chunks: 'all',
          },
          go: {
            test: /[\\/](icons[\\/]go)[\\/]/,
            name: 'icon-go-vendor',
            chunks: 'all',
          },
          gr: {
            test: /[\\/](icons[\\/]gr)[\\/]/,
            name: 'icon-gr-vendor',
            chunks: 'all',
          },
          hi: {
            test: /[\\/](icons[\\/]hi)[\\/]/,
            name: 'icon-hi-vendor',
            chunks: 'all',
          },
          ii: {
            test: /[\\/](icons[\\/]ii)[\\/]/,
            name: 'icon-ii-vendor',
            chunks: 'all',
          },
          io: {
            test: /[\\/](icons[\\/]io)[\\/]/,
            name: 'icon-io-vendor',
            chunks: 'all',
          },
          lg: {
            test: /[\\/](icons[\\/]lg)[\\/]/,
            name: 'icon-lg-vendor',
            chunks: 'all',
          },
          md: {
            test: /[\\/](icons[\\/]md)[\\/]/,
            name: 'icon-md-vendor',
            chunks: 'all',
          },
          mi: {
            test: /[\\/](icons[\\/]mi)[\\/]/,
            name: 'icon-mi-vendor',
            chunks: 'all',
          },
          mp: {
            test: /[\\/](icons[\\/]mp)[\\/]/,
            name: 'icon-mp-vendor',
            chunks: 'all',
          },
          pk: {
            test: /[\\/](icons[\\/]pk)[\\/]/,
            name: 'icon-pk-vendor',
            chunks: 'all',
          },
          ri: {
            test: /[\\/](icons[\\/]ri)[\\/]/,
            name: 'icon-ri-vendor',
            chunks: 'all',
          },
          scwi: {
            test: /[\\/](icons[\\/]scwi)[\\/]/,
            name: 'icon-scwi-vendor',
            chunks: 'all',
          },
          si: {
            test: /[\\/](icons[\\/]si)[\\/]/,
            name: 'icon-si-vendor',
            chunks: 'all',
          },
          sti: {
            test: /[\\/](icons[\\/]sti)[\\/]/,
            name: 'icon-sti-vendor',
            chunks: 'all',
          },
          tb: {
            test: /[\\/](icons[\\/]tb)[\\/]/,
            name: 'icon-tb-vendor',
            chunks: 'all',
          },
          ti: {
            test: /[\\/](icons[\\/]ti)[\\/]/,
            name: 'icon-ti-vendor',
            chunks: 'all',
          },
          uiw: {
            test: /[\\/](icons[\\/]uiw)[\\/]/,
            name: 'icon-uiw-vendor',
            chunks: 'all',
          },
          vsc: {
            test: /[\\/](icons[\\/]vsc)[\\/]/,
            name: 'icon-vsc-vendor',
            chunks: 'all',
          },
          wi: {
            test: /[\\/](icons[\\/]wi)[\\/]/,
            name: 'icon-wi-vendor',
            chunks: 'all',
          },
        }
      }
    }
  }
  return conf;
};
