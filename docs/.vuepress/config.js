module.exports = {
  title: 'Vuepress & TypeScript',
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  '@vue/babel-preset-jsx'
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
}
