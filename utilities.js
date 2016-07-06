var apiKey = require('./api-key.js');
var wolfram = require('wolfram-alpha').createClient(apiKey);


module.exports = {
  query : function(req, res, next) {
    var place = req.body.place;
    console.log('req: ', place);
    wolfram.query(place, function (err, result ) {

      if (err) {
        console.log('err', err);
      }

      console.log('results :', result);
      res.json(result);

    });


  }
};