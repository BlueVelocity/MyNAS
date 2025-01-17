import express from 'express';

const router = express.Router();

const login = (req: any, res: any, next: any) => {
  console.log('Please login', Date.now())
  next()
}

router.use(login);

router.get('/', (req: any, res: any) => {
  res.send('Please login')
})

export default router
