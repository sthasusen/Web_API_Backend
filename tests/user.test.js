const User = require('../modules/customer_Registration');
const mongoose = require("mongoose");
 
const url = 'mongodb://127.0.0.1:27017/Test';
 
beforeAll(async () =>{
    await mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
})
 
afterAll(async () => {
 
    await mongoose.connection.close();
})
 
describe("User Schema Test", () =>{
   //insert testing
    it('Add user', () => {
        const user ={
            'FirstName' : 'Nabin',
            'LastName' : 'Kutu',
            'PhoneNumber':'980000',
            'Username' : "nabinn",
            'Password' : 'nabinn'
        } ;
        return User.create(user)
        .then((res) => {
            expect(res.FirstName).toEqual('Nabin');
        })
    })
    
})