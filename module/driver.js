'use strict';
const event = require('../events')

   event.on('pickup',(order)=>{

    setTimeout(() => {
       console.log(`DRIVER: picked up ${order.orderId}`)

       event.emit('in_transit',order)
    }, 1000);

    setTimeout(() => {
        // console.log(`DRIVER: delivered up  ${order.orderId}`)
 
        event.emit('delivered',order)
     }, 3000);
  
    

   });


  
  

    



// function pickupOrder(){
    
//     setTimeout(()=> {
//     console.log()
//     }, 1000);
// }

// module.exports ={
//     pickedUp
// };



