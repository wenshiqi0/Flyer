/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let Flyer = require('./flyer')
let http = require('http');
let merge = require('merge');
let co = require('co');

class Application{
    constructor(){
        this.midware = [];
    }

    listen(port,host){
        let serv = http.createServer(this.callback());
        return serv.listen.apply(serv,arguments);
    }

    callback(){
        let self = this;
        return function(req,res){
            let ctx = {
                res:res,
                req:req,
                app:self,
            };
            for(let i in self.midware){
                co(function*(){
                    let mid = self.midware[i];
                    while(mid!=undefined && !ctx.done){
                        yield mid.do.call(merge(ctx,mid.args));
                        mid=mid.next;
                    }
                })
            }
        }
    }

    configure(flyer){
        this.midware.push(flyer);
        return this;
    }

    launch(flyer){
        this.midware.push(flyer);
        return flyer;
    }
}

module .exports = new Application();