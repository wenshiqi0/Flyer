/**
 * Created by Administrator on 2015/8/10.
 */
'use strict'
let Flyer = require('./../lib/flyer');

class Flyer_Logger extends Flyer{
    constructor(){
        super();
    }

    *do(){
        let start = Date.now();
        function onFinish(){
            let come_out = '<-- '+this.method+' '+this.statusCode;
            let finish = Date.now();
            let ms = finish-start;
            console.log(come_out+' '+ms+'ms');
            this.removeListener('finish',onFinish);
        }

        try{
            let come_in = '--> '+this.req.method +" "+ this.req.url;
            console.log(come_in);
            this.res.once('finish',onFinish);
        }catch(e){
            console.error(e);
            throw e;
        }
    }
}

module .exports = Flyer_Logger;