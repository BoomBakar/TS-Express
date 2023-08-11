import express from 'express';
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


export default router;