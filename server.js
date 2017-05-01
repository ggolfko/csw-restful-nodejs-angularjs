// server.js
// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

//Database setup
var Crms = [
  {
    "id": 0,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    "picUrl": "https://freeiconshop.com/wp-content/uploads/edd/person-flat.png"
  },
  {
    "id": 1,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    },
    "picUrl": "https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png"
  },
  {
    "id": 2,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    },
    "picUrl": "https://www.freevpn.us/img/chuck.png"
  },
  {
    "id": 3,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    },
    "picUrl": "https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png"
  },
  {
    "id": 4,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    },
    "picUrl": "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46af6a2bf9.png"
  },
  {
    "id": 5,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    },
    "picUrl": "https://s-media-cache-ak0.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
  },
  {
    "id": 6,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    },
    "picUrl": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"
  },
  {
    "id": 7,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    },
    "picUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
  },
  {
    "id": 8,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    },
    "picUrl": "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b0401f49.png"
  },
  {
    "id": 9,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    },
    "picUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ95RIhDPOvYH6Vk8CUcmUKa3-kw1xzoLmgIyEiAFD2DTDXpHkb1g"
  }
];
var crmsIndex = 10;
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});

// more routes for our API will happen here
// on routes that end in /crms

// get all the crms (accessed at GET http://localhost:8080/api/crms)
router.route('/crms')
  .get(function(req, res) {
    // res.json(crms.findAll());
    res.json(Crms);
  });

// create a crm (accessed at POST http://localhost:8080/api/crms)
router.route('/crms')
  .post(function(req, res) {
    var crm = {};
    var address = {};
    var geo = {};
    var company = {}
    crm.id = crmsIndex++;
    crm.name = req.body.name;
    crm.username = req.body.username;
    crm.email = req.body.email;
    //address
    address.street = req.body.address.street;
    address.suite = req.body.address.suite;
    address.city = req.body.address.city;
    address.zipcode = req.body.address.zipcode;
    //geo
    geo.lat = req.body.address.geo.lat;
    geo.lng = req.body.address.geo.lng;
    address.geo = geo
    crm.address = address;
    crm.phone = req.body.phone;
    crm.website = req.body.website;
    //company
    company.name = req.body.company.name;
    company.catchPhrase = req.body.company.catchPhrase;
    company.bs = req.body.company.bs;
    crm.company = company;
    crm.picUrl = req.body.picUrl;
    //crms.save(crm);
    Crms.push(crm);
    res.json({
      message: 'Crm created!'
    });
  });

// on routes that end in /crms/:crm_id
router.route('/crms/:crm_id')

  // get the crm with that id (accessed at GET http://localhost:8080/api/crms/:crm_id)
  .get(function(req, res) {
    res.json(Crms[req.params.crm_id]);
  })

  // update the crm with this id (accessed at PUT http://localhost:8080/api/crms/:crm_id)
  .put(function(req, res) {
    var id = req.params.crm_id;
    // use our crm model to find the crm we want
    Crms[id].name = req.body.name; // update the crms info
    Crms[id].username = req.body.username;
    Crms[id].email = req.body.email;
    Crms[id].address.street = req.body.address.street;
    Crms[id].address.suite = req.body.address.suite;
    Crms[id].address.city = req.body.address.city;
    Crms[id].address.zipcode = req.body.address.zipcode;
    Crms[id].address.geo.lat = req.body.address.geo.lat;
    Crms[id].address.geo.lng = req.body.address.geo.lng;
    Crms[id].phone = req.body.phone;
    Crms[id].website = req.body.website;
    Crms[id].company.name = req.body.company.name;
    Crms[id].company.catchPhrase = req.body.company.catchPhrase;
    Crms[id].company.bs = req.body.company.bs;
    Crms[id].picUrl = req.body.picUrl;
    res.json({
      message: 'Crm updated!'
    });
  })

  // delete the crm with this id (accessed at DELETE http://localhost:8080/api/crms/:crm_id)
  .delete(function(req, res) {
    delete Crms[req.params.crm_id]
    res.json({
      message: 'Crm deleted!'
    });
  })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//static directory
app.use(express.static('public'))

// use the router and 401 anything falling through
app.use("*", function(req, res) {
  // res.status(404).send('404 Not found');
  res.sendFile(__dirname + "/public/src/page-404.html");
  // res.sendFile(__dirname + "/public/src/extra-maintenance.html")
  // res.sendFile(__dirname + "/public/src/extra-coming-soon.html")
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
