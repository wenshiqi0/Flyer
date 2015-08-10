/**
 * Created by Administrator on 2015/8/10.
 */
'use strict'
let Flyer = require('./../lib/flyer');

class Flyer_Route extends Flyer {
    constructor(url, func) {
        super();
        this.arg = {'url':url,'func':func};
    }

    *do(){
        if(this.req.url == this.url){
            yield this.func();
        }
    }
}

module.exports = Flyer_Route;

