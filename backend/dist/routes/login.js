import express from 'express';
import path from 'path';
const router = express.Router();
const login = (req, res, next) => {
    console.log('Please login', Date.now());
    next();
};
router.use(login);
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/index.html"));
});
export default router;
