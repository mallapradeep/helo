module.exports = {
    
  login: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { username, password } = req.body;
    dbInstance
      .verifyUser([username, password])
      .then(response => {
        res.status(200).send(response[0]);
      })
      .catch(err => res.status(404).semd(err));
  },

  register: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { username, password } = req.body;
    dbInstance
      .createUser([username, password])
      .then(response => {
        res.status(200).send(response[0]);
      })
      .catch(err => res.status(404).semd(err));
  },

  getUserPosts: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { search, userposts } = req.query;
    let { userid } = req.params;

    
  },

  createUserPosts: (req, res, next) => {
    let { userid } = req.params;
    let { title, img, content } = req.body;
    userid =+ userid;

    let dbInstance = req.app.get('db');
    dbInstance.createUserPosts([title, img, content, userid].then(response => {
      res.status(200).send(resonse);
    }))
  },

  getSinglePost: (req, res, next) => {
    let { postid } = req.params;
    postid =+ postid;

    let dbInstance = req.app.get('db');
    dbInstance.getSinglePost([postid]).then(response => {
      res.status(200).send(response);
    })
  }
};
