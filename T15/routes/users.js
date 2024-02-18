var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/toka', function(request,response) 
  {
      response.send('Olen toka reitti');
      console.log('Toka');
  }
);

router.get('/kolmas/:name', function(request,response) 
  {
      response.send('Heippa '+request.params.name);
      console.log(request.params.name);
  }
);

router.get('/neljas/:fname/:lname', function(request,response) 
  {
      response.send('Heippa '+request.params.fname+' '+request.params.lname);
      console.log(request.params.fname+' '+request.params.lname);
  }
);

router.post('/',function(request,response)
  {
    response.send(request.body.fname+' '+request.body.lname)
    console.log(request.body.fname+' '+request.body.lname)
    
  }
);
module.exports = router;