const event = require('../events');
const faker = require('faker')

require('dotenv').config();

const storeNa = 'Ahmad Mall';

// function createOrder (){
   
// }


 const myInterval= setInterval(() => {

    order = {
        storeName : storeNa,
        orderId: faker.datatype.uuid(),
        customerName:faker.name.findName(), 
        address:faker.address.streetAddress(),

   }
   event.emit('pickup',order)
}, 5000);// 5 seconds

event.on('delivered',(payload)=>{
    console.log(`DRIVER: delivered up ${payload.orderId}`)
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`)
})

setTimeout(()=> {
    clearInterval(myInterval);
}, 5000);

// event.emit('pickup',createOrder)

// module.exports = createOrder ;
