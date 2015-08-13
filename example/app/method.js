/**
 * Created by Administrator on 2015/8/12.
 */
'use strict'
let fs = require('fs');
let Promise = require('bluebird');

module .exports = {
    get:function*(){
        let html = yield Promise.fromNode(function(cb){
            fs.readFile('./example/static/index.html',cb);
        });
        this.res.writeHeader(200,{'Content-Type':'text/html'});
        this.res.body = html;
    },
    post:function*(){

    },
    put:function*(){

    },
    delete:function*(){

    },
    patch:function*(){

    },
    header:function*(){

    }
}