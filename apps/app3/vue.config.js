/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-26 09:15:50
 */
module.exports = {
  lintOnSave:false,
  outputDir: 'app3',
  publicPath: '/app3',
  devServer: {
    port: '8081',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
