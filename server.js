// require exp
const express=require("express")
// create instance
const app=express()
// middelware  pour tester le requiste si elle a de error ou nn  y3adihbech mayti7ach serveura onn b ev=*/
app.use(express.json())   /* ou bien body parser instead */
//create port
const PORT =5000

//create server

    // create route
    app.set('view engine', 'pug');

    app.use(express.static('public'));


  

    app.get('/', (req, res) => {
        res.render('home.pug', {
            title: 'Home Page'
        });
    });

    app.get('/contactus', (req, res) => {
        res.render('contactus.pug', {
            title: 'contactus Page'
        });
    });
    
    app.get('/services', (req, res) => {
        res.render('services.pug', {
            title: 'services Page'
        });
    });
    app.get('/offinepage', (req, res) => {
        res.render('offinepage.pug', {
            title: 'offinepage Page'
        });
    });
  // midelwar
  app.use(express.json())
  app.use(function(req,res,next){
      var date = new Date();
     if ((date.getDay == 0)|| (date.getDay==6) ||(date.getHours()<9)  || (date.getHours>17))
     {
      res.redirect('/offinepage');
     }else {
      next();
     }
  })

    
        app.listen(PORT,(error)=>{
            error?console.log(error):console.log("server created seccessfuly")})
        
    
// app.all("/secret", function (req, res, next) {
//     console.log("Accessing the secret section…");
//     next(); // pass control to the next handler
//   });
