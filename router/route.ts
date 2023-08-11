import express from 'express';

const router =  express.Router();

router.get('/', (req: express.Request, res:express.Response) => {
    res.status(200).send('Hello bye World');
});
//Home page
router.get('/home', (req: express.Request, res:express.Response) => {
    res.status(200).send('Home page');
});
//About page
router.get('/about', (req: express.Request, res:express.Response) => {
    res.status(200).send('About page');
});
//Contact page
router.get('/contact', (req: express.Request, res:express.Response) => {
    res.status(200).send('Contact page');
});

export default router;