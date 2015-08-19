/**
 * Created by Administrator on 2015/8/12.
 */
'use strict'
let fs = require('fs');

module .exports = {
    'get':function*(id){
        try{
            this.res.writeHeader(200,{'Content-Type':'application/json'});
            this.res.body = JSON.stringify({'username':id});
        }catch(e){
            throw e;
        }
    },
    'post':function*(){

    },
    'put':function*(){

    },
    'delete':function*(){

    },
    'patch':function*(){

    },
    'header':function*(){

    }
}