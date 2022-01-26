module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: true,
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        },
      ],
    });

    return config;
  },
};
