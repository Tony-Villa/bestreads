const router = require('express').Router();
const auth = require('../functions/verifyToken');

router.get('/', (req, res) => {
  if (req.session.currentUser) {
    const context = {
      user: req.session.currentUser.name,
    };
    // console.log(user.name);
    return res.render('loggedIndex.ejs', context);
  } else {
    res.render('index.ejs');
  }
});

module.exports = router;
