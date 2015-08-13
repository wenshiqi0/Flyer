/**
 * Created by Administrator on 2015/8/10.
 */
'use strict'
let Flyer = require('./../lib/flyer');
let url = require('url');

class Flyer_Route extends Flyer {
    constructor(url,mtype,mfunc) {
        super();
        this.arg = {'url':url,'mtype':mtype,'mfunc':mfunc};
    }

    *do(){
        let id = match(this.req.url);
        if(this.req.url.replace(id,"") == this.url.replace(match(this.url),"")){
            if(this.mtype.toUpperCase() == this.req.method){
                yield this.mfunc(id);
            }
        }else{
            this.done = true;
        }
    }
}

function match(url){
    var reg = /^[a-zA-Z0-9\/]*:?([a-zA-Z0-9\.]*)?$/i
    var res = reg.exec(url);
    return res[1];
}

module.exports = Flyer_Route;

