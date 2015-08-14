/**
 * Created by Administrator on 2015/8/12.
 */
'use strict'
let Flyer = require('./../lib/flyer');

class Flyer_error extends Flyer{
    constructor(){
        super();
    }

    *do(){
        let res = this.res;

        function onError(){
            this.statusCode = 500;
            this.end("Error 500")
            this.removeListener('done',onDone);
            this.removeListener('done',onError);
        }

        function onDone(){
            if(this.body == undefined){
                this.statusCode = 404;
                this.end('Not Found')
            }else{
                if(this.statusCode == undefined){
                    this.statusCode = 200;
                }
                this.end(this.body);
            }
            this.removeListener('done',onDone);
            this.removeListener('done',onError);
        }

        res.on('error',onError)
        res.once('done',onDone)
    }
}

module .exports = Flyer_error;