const db = require("../models");
const passport = require("../config/passport");
const jwt = require('jsonwebtoken');

module.exports = {
    create: function(req, res) {   
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name
          }).then((result, err) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
          })
    },
    login: function(req, res) {
        if(!req.body.email){ 
            res.json({success: false, message: "Email was not given"}) 
          } else { 
            if(!req.body.password){ 
              res.json({success: false, message: "Password was not given"}) 
            }else{ 
              passport.authenticate('local', function (err, user, info) {  
                 if(err){ 
                   res.json({success: false, message: err}) 
                 } else{ 
                  if (! user) { 
                    res.json({success: false, message: 'Your email and/or password is incorrect'}) 
                  } else{ 
                    req.login(user, function(err){ 
                      if(err){ 
                        res.json({success: false, message: err}) 
                      }else{ 
                        const token =  jwt.sign({userId : user.id,  
                           email:user.email, isSeller: user.isSeller }, process.env.tokenSecret,  
                              {expiresIn: '2h'}); 
                        res.json({success:true, message:"Authentication successful", token: token }); 
                      }; 
                    }); 
                  }; 
                 }; 
              })(req, res); 
            }; 
          }; 
    }
};