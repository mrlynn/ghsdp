const request = require("superagent");
require('dotenv').config();
module.exports = app => {
    app.get('/signin/callback', (req, res, next) => {
        const { query } = req;
        const { code }  = query;
        if (!code) {
            res.send({
                success: false, 
                message: 'No code'
            })
        }
    })
  app.get("/redirect", (req, res, next) => {
    const { query } = req;
    const { code } = query;
    if (!code) {
      res.send({
        success: false,
        message: "Error: code not received"
      });
    }
    console.log("code: " + code);
    const data = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code
    };
    request.post("https://education.github.com/api/user")
    .send({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code
    })
    .set('Accept', 'application/json')
    .set('Authorization', 'token ' + code)
    .then(function(res, err) {
      const result = req.body;
      console.log("Got: " + JSON.stringify(result));
      res.send(result);
    })
    .catch(err=>{
      res.send({
        success: false,
        message: err.message
      })
    })
  });
};
