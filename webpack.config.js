const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/', // Dossier de sortie pour les PDF
            },
          },
        ],
      },
    ],
  },
};