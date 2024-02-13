const {expect} = require("chai")
const Calculator = require("./calculator.js");
const axios =require('axios');


describe.only('async test suite',()=>{
    it("promised based way",()=>{
        return axios.get('http://localhost:8000/api/workouts')
        .then(res=>{
            expect(res.json()).to.be.equal({"error":"Request is not authorized"})
        })
    })


    // it('test 2',()=>{
    //     console.log('test 2');
    // })
})