const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
