import express from 'express';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const router = express.Router();
const login = (req, res, next) => {
    console.log('Please login', Date.now());
    next();
};
router.use(login);
router.get('/', (req, res) => {
    res.sendFile("/frontend/index.html");
});
export default router;
