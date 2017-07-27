import article from './article/article.js'
import tag from './tag/tag.js'
import user from './user/user.js'

export default app => {
  app.use('/user', user);
  app.use('/article', article);
  app.use('/tag', tag);
  app.use('/*', function (req,res,next) {
        return res.json({status:'success',data:'恭喜'});
    })
}
