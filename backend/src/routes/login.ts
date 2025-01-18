import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const router = express.Router();

const login = (req: any, res: any, next: any) => {
  console.log('Please login', Date.now())
  next()
}

router.use(login);

router.get('/', (req: any, res: any) => {
  res.sendFile("/frontend/index.html")
})

export default router
