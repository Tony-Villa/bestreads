const express = require('express').Router();
const {Books} = require('../models');
const router = require('./landing_controller');

router.get('/', async function (req, res){
    try{
        const books = await Books.find({});

        const context = {
            books,
        }

        res.render('books/index', context);
    
    } catch (error) {
        return console.log(error);
    }
});