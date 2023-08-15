import express from 'express';
import bcryptjs from 'bcryptjs';


const router =  express.Router();
//import customers from '../models/customers';
const customers = require('../models/customers.ts');
//get customer list
router.get('/customer', (req, res) => {
    res.send(customers);
});
//get single customer
router.get('/customer/:id', (req, res) => {
    const customer = customers.find((c:any) => c.id === parseInt(req.params.id));
    if(!customer) res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});
//create new customer
router.post('/customer', (req, res) => {
    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    customers.push(customer);
    res.send(customer);
});
//update customer
router.put('/customer/:id', (req, res) => {
    const customer = customers.find((c:any) => c.id === parseInt(req.params.id));
    if(!customer) res.status(404).send('The customer with the given ID was not found.');
    customer.name = req.body.name;
    customer.age = req.body.age;
    res.send(customer);
});
//delete customer
router.delete('/customer/:id', (req, res) => {
    const customer = customers.find((c:any) => c.id === parseInt(req.params.id));
    if(!customer) res.status(404).send('The customer with the given ID was not found.');
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});
router.post('/customer/signup', (req, res) => {
    const hasedPass = bcryptjs.hashSync(req.body.password, 10);
    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        age: req.body.age,
        password: hasedPass
    };
    customers.push(customer);
    res.send(customer);
});

router.post('/customer/login', (req, res) => {
    const customer = customers.find((c:any) => c.name === req.body.name);
    if(!customer) return res.status(404).send('The customer with the given name was not found.');
    const password = req.body.password;
    const pass = bcryptjs.compareSync(password, customer.password);
    console.log(bcryptjs.hashSync(password,10),password, customer.password, pass);
    if(!pass) return res.status(404).send('The password is incorrect.');
    res.send(customer);
});

export default router;