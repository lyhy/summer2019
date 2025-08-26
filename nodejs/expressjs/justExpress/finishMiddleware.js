async function FinishMiddleware(req, res, next) {
    res.once('finish', () => {
        console.log('finished')
        // console.log('res.statusCode=', res?.statusCode ? res?.statusCode : 'empty code')
      });
    next();
    return res;
  }
  
  module.exports = { FinishMiddleware };