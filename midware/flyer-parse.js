/**
 * Created by Administrator on 2015/8/12.
 */
'use strict'
let Flyer = require('./../lib/flyer')
let url = require('url');

class Flyer_Parse extends Flyer{
    constructor(){
        super();
    }

    *do(){
        this.res.method = this.req.method;
    }
}

module .exports = Flyer_Parse;