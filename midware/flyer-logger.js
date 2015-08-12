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
        try{
            let come_in = this.req.url + " " + this.req.method +'-->';
            let start = Date.now();
            console.log(come_in);
            this.res.on('finish',function(){
                let come_out = '<--'+this.method+' '+this.statusCode;
                let finish = Date.now();
                let ms = finish-start;
                console.log(come_out+' '+ms+'ms');
            });
        }catch(e){
            console.error(e);
            throw e;
        }
    }
}

module .exports = Flyer_Logger;