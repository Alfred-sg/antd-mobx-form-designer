module.exports = {
  output: {
    library: 'antdx',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'antd': 'antd'
  },
  compress: false,
  devtool: false,
  // module: {
  //   babel: {
  //     plugins: [
  //       [
  //         require.resolve('babel-plugin-import'),
  //         {
  //           "libraryName": "antd",
  //           "style": 'css'
  //         }
  //       ]
  //     ]
  //   }
  // }
};