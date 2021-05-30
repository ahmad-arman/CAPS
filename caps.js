'use strict';

const events = require('./events.js');

const driver =require('./module/driver.js')

const vender =require('./module/vendor.js')

const faker = require('faker')


events.on('pickup',(payload)=>{
    console.log("EVENT { event: 'pickup',")
    console.log('time:' ,faker.date.soon())
    console.log('payload:')
    console.log( payload ,'}')

})

events.on('in_transit',(payload)=>{
    console.log("EVENT { event: 'in-transit',")
    console.log('time:' ,faker.date.soon())
    console.log('payload:')
    console.log( payload ,'}')

})

events.on('delivered',(payload)=>{
    console.log("EVENT { event: 'delivered',")
    console.log('time:' ,faker.date.soon())
    console.log('payload:')
    console.log( payload , '}')

})
// console.log()

// setInterval(() => {
//     events.emit('pickup',{
//        event: 'pickup',
//        time: `${faker.date.recent()}`, payload: vender});
//   }, 5000);



// events.on('pickup', pickedUp.pickedUp)

