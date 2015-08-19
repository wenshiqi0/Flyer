/**
 * Created by Winsky on 15/8/12.
 */
'use strict'
let fs = require('fs');
let Flyer = require('./../lib/flyer')
let path = require('path');
let mime = require('./mime');

class Flyer_Static extends Flyer{
    constructor(root) {
        super();
        let map = new Map();
        let rootdir = root;
        (function readNext(root,netdir){
            fs.readdirSync(root).forEach(function(str){
                if(str.indexOf('.') > -1){
                    map.set(netdir+'/'+str,path.join(root,str));
                }else{
                    let filePath = path.join(root,str);
                    let netdir = filePath.replace(rootdir,"");
                    readNext(filePath,netdir.replace(/\\/g,'/'));
                }
            })
        })(root,'')
        this.arg ={map:map}
    }

    *do() {
        let filepath = this.map.get(this.req.url);
        if(filepath != undefined){
            this.res.body = fs.readFileSync(filepath);
            let tail = cutTail(filepath).toLowerCase();
            this.res.writeHeader(200,{'Content-Type':mime[tail]});
        }
    }
}

function cutTail(file){
    let reg = /^[a-zA-Z0-9\.\/\\\-\_\:]*\.([a-zA-Z0-9]*)$/i;
    let re = reg.exec(file);
    if(re == undefined){
        throw 'this is not a file';
    }else{
        return re[1];
    }
}

module.exports = Flyer_Static;


