/**
 * Created by Winsky on 15/8/8.
 */
'use strict'
class Flyer{
    constructor(){
        this.next = undefined;
    }

    *do(){
        //must override this function in your middleware
    }

    //all the arguments that you want to pass to the function *do() must add to the args
    //then we include ctx and args to one json
    set args(args){
        this.arg = args;
    }

    get args(){
        return this.arg;
    }
}

module .exports = Flyer;