const router = require('koa-router')()
const fs = require('fs/promises')
const path = require('path')

require('fs').Dirent

router.prefix('/disk')

router.get('/', async (ctx, next) => {
  let p = path.resolve('C:/Users/1/Desktop/temp/')
  let list = await fs.readdir(p, {
    withFileTypes: true,
  })
  list = Array.from(list).map((fItem) => {
    return {
      name: fItem.name,
      isDirectory: fItem.isDirectory(),
    }
  })

  ctx.body = {
    code: 0,
    msg: '',
    data: list,
  }
})
// 上传文件
// 删除文件
// 下载文件

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
