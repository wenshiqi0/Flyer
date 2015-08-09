/**
 * Created by Winsky on 15/8/8.
 */
'use strict'
let fs = require('fs');

class Flyer{
    do(){
        this.res.writeHeader(200,{'Content-Type':'text/plain'});
        console.log('test');
        this.res.end('Test');
    }
}

module .exports = Flyer;