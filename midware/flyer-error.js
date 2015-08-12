/**
 * Created by Administrator on 2015/8/12.
 */
'use strict'
let Flyer = require('./../lib/flyer');

class Flyer_error extends Flyer{
    constructor(){
        super();
    }

    *do(){
        this.res.on('error',function(){
            this.statusCode = 500;
            this.end("Error 500")
        })
    }
}

module .exports = Flyer_error;