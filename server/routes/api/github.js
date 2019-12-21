const request = require("superagent");
require("dotenv").config();
module.exports = app => {
  app.get("/signin/callback", (req, res, next) => {
    const { query } = req;
    const { code } = query;
    if (!code) {
      res.send({
        success: false,
        message: "No code"
      });
    }
  });
  // app.get("/redirect", function(req, res){
  //   console.log("started oauth");
  //   return githubOAuth.login(req, res);
  // });

  app.get("/auth/github/callback", (req, res, next) => {
    const { query } = req;
    const { code } = query;
    if (!code) {
      res.send({
        success: false,
        message: "Error: code not received"
      });
    }

    console.log("STEP 1 - Click Login with GitHub - User clicked button to send client id to github for permissions.");
    console.log("STEP 2 - Users are redirected to request their GitHub identity - If user accepted permissions, they'll be redirected back here.");
    console.log("STEP 3 - Receive a code - Now we check for a code " + code + " - done");
    console.log("STEP 4 - Send code back to get a bearer token -  Next, we send " + code + " back to https://github.com/login/oauth/access_token to request a bearer token")
    request
      .post("https://github.com/login/oauth/access_token")
      .send({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
      .set("Accept", "application/json")
      .set("Authorization", "token " + code)
      .then(response => {
        const token = response.body.access_token;
        console.log("STEP 5 - Receive Token -  Got a response from step 2 including a bearer token: " + token + " - done");
        request
          // .post("https://api.github.com/user")
          // .send({
          //   client_id: process.env.GITHUB_CLIENT_ID,
          //   client_secret: process.env.GITHUB_CLIENT_SECRET,
          //   token: token
          // })
          .get("https://education.github.com/api/user")
          .set("Accept", "application/json")
          .set("Authorization", "token " + token)
          .then(response => {
            console.log("STEP 6 - Send token back to api (https://education.github.com/api/user) to get user details -  Next, ent token back to github to get user data and got this response: " + JSON.stringify(res.body));
            console.log("Is this person a student?" + JSON.stringify(response.body));
            if (response.body.student==false) {
              res.redirect("/notstudent");
            } else {
                request
                .get("https://api.github.com/user")
                .set("Accept", "application/json")
                .set("Authorization", "token " + token)
                .then(response => {
                  console.log("Sent token to get details on user and got " + JSON.stringify(response.body));
                }) 
              }
          })
          .catch(err => {
            console.log("STEP 6 - Send token back to api (https://education.github.com/api/user) to get user details - Got error trying to get user data: " + JSON.stringify(err.message));
          });
      })
      .catch(err => {
        console.log("STEP 4 Send code back to get a bearer token - Got error trying to get token: " + JSON.stringify(err.message));
      });
  });
};
