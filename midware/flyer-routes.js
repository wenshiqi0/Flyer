/**
 * Created by Administrator on 2015/8/18.
 */
'use strict'
let Flyer = require('./../lib/flyer');
let url = require('url');

//@params urls -> ["GET:/do:1","POST:/do:1",]
class Flyer_Routes extends Flyer {
    constructor(urls,methods) {
        super();
        if(arguments.length == 1){
            this.arg = {'map':arguments[0]};
        }
        let map = new Map();
        for(let i in urls){
            map.set(urls[i].toUpperCase(),methods[i]);
        }
        this.arg = {'map':map};
    }

    *do(){
        let id = match(this.req.url);
        let url = this.req.url.replace(id,"");
        if(url == this.url.replace(match(this.url),"")){
            let method = this.map.get(this.req.method.toUpperCase()+':'+url);
            if(method==undefined)return;
            yield method(id);
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

module.exports = Flyer_Routes;