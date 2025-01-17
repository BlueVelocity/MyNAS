import express from 'express';
const router = express.Router();
const login = (req, res, next) => {
    console.log('Please login', Date.now());
    next();
};
router.use(login);
router.get('/', (req, res) => {
    res.send('Please login');
});
export default router;
