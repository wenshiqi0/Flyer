/**
 * Created by Administrator on 2015/8/10.
 */
'use strict'
let Flyer = require('./../lib/flyer');
let url = require('url');

class Flyer_Route extends Flyer {
    constructor(url, func) {
        super();
        this.arg = {'url':url,'func':func};
    }

    *do(){
        let id = match(this.req.url);
        if(this.req.url.replace(id,"") == this.url.replace(match(this.url),"")){
            switch (this.req.method.toLowerCase()){
                case 'get':
                    yield this.func.get.call(this,id);
                    break;
                case 'post':
                    yield this.func.post.call(this,id);
                    break;
                case 'put':
                    yield this.func.put.call(this,id);
                    break;
                case 'delete':
                    yield this.func.delete.call(this,id);
                    break;
                case 'patch':
                    yield this.func.patch.call(this,id);
                    break;
                case 'header':
                    yield this.func.header.call(this,id);
                    break;
                default :
                    yield this.func.get.call(this,id);
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

