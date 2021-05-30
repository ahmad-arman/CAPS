'use strict';
const event =require('../events.js')
const vender =require('../module/vendor');
const driver =require('../module/driver');

console.log = jest.fn();


describe('Logger middleware', ()=> {
    let consoleSpy;
    // let req = {};
    // let res = {};
    // let next = jest.fn();
    // // when I use logger -> console.log has been called
    // // hook for tests

    let order = {
        storeName : "ahmad mall",
        orderId: "9854685856",
        customerName:"ahmad arman", 
        address:"hey nazzal",
    
    } 
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    
    // after the tests
    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('pickup event', async ()=> {
        // logger(req, res, next);
       event.emit('pickup',order)
       await consoleSpy();
        // console.log('**************',consoleSpy,'***************');
        expect(consoleSpy).toHaveBeenCalled();
        // expect(next).toHaveBeenCalled();
    });

    it('in_trains event', async ()=> {
        // logger(req, res, next);
       event.emit('in_transit',order)
       await consoleSpy();
        // console.log('**************',consoleSpy,'***************');
        expect(consoleSpy).toHaveBeenCalled();
        // expect(next).toHaveBeenCalled();
    });

    it('delivered event', async ()=> {
        // logger(req, res, next);
       event.emit('delivered',order)
       await consoleSpy();
        // console.log('**************',consoleSpy,'***************');
        expect(consoleSpy).toHaveBeenCalled();
        // expect(next).toHaveBeenCalled();
    });
    
});




