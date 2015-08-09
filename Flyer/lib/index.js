/**
 * Created by Winsky on 15/8/7.
 */
'use strict'
let Flyer = require('./flyer')
let http = require('http');

class Application{
    constructor(){
        this.flyers = [];
        let flyer = new Flyer();
        flyer.do = function(){
            console.log(this.req.url);
            if(this.req.url == '/favicon.ico'){
                console.log('==');
                this.res.writeHeader(404);
                this.res.end('Not found favicon.ico')
            }
        }
        this.flyers.push(flyer);
    }

    listen(port,host){
        let serv = http.createServer(this.callback());
        return serv.listen.apply(serv,arguments);
    }

    callback(){
        let self = this;
        return function(req,res){
            let ctx = {res:res,req:req};
            for(let i in self.flyers){
                self.flyers[i].do.call(ctx);
            }
        }
    }

    controller(flyer){
        this.flyers.push(flyer);
    }
}

module .exports = new Application();