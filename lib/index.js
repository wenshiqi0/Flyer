/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let Flyer = require('./flyer')
let http = require('http');
let merge = require('merge');
let co = require('co');
let EventEmitter = require('events').EventEmitter;

class Application{
    constructor(){
        this.midware = [];
        this.conf = [];
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
                ctx:self,
            };
            let conf = self.conf;
            co(function*(){
                try{
                    for(let c in conf){
                        yield conf[c].do.call(ctx);
                    }
                    for(let i in self.midware){
                        ctx.done = false;
                        let mid = self.midware[i];
                        while(mid!=undefined && !ctx.done){
                            yield mid.do.call(merge(ctx,mid.args));
                            mid=mid.next;
                        }
                    }
                    res.end(res.body);
                }catch(e){
                    console.error(e);
                    res.emit('error',{error:e});
                    throw e;
                }
            })
        }
    }

    configure(flyer){
        if(flyer != undefined){
            this.conf.push(flyer);
        }
        return this;
    }

    launch(flyer){
        if(flyer != undefined){
            this.midware.push(flyer);
        }
        return this;
    }

    fly(arg){
        if(this.midware.length == 0){
            throw 'no flyer has been launched'
        }else{
            if(typeof arg == "function"){
                let flyer = new Flyer();
                flyer.do = arg;
                this.midware[this.midware.length-1].next = flyer;
            }else if(typeof arg == 'object'){
                this.midware[this.midware.length-1].next = arg;
            }else{
                throw 'Must get a function or a flyer to fly';
            }
        }
        return this;
    }
}

module .exports = new Application();