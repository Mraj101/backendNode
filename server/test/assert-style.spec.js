const { expect } = require("chai");
const { should }=require('chai')
const {assert}=require('chai');
const { equals } = require("validator");

// describe("assert style",()=>{
//     it("operation on string",()=>{
//         const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;
//         expect(name).to.be.equal("miraj");
//         expect(name).to.be.ok;
//         expect(name).to.not.be.equal("santosh");
//         expect(name).to.be.a('String');
        
// })



//     it("operation on number",()=>{
//          const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;
//         expect(age).to.be.ok;
//         expect(age).to.be.equal(25);
//         expect(age).to.not.be.equal("santosh");
//         expect(age).to.be.a('Number');
//     })


//     it("operation on obj",()=>{
//          const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;

//         expect(obj).to.be.ok;
//         expect(obj).to.not.be.a("Number");
//         expect(obj).to.have.property('name').equal('miraj');
//         expect(obj).to.have.property('age').equal(25);
//     })


//     it("operation on array",()=>{
//          const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;
  
//         expect(array).to.be.ok;
//         expect(array).to.not.be.equal("santosh");
//         expect(array).to.be.a('Array');
//         expect(array).to.have.lengthOf(3)
//         expect(array).to.have.lengthOf(3).property(2)
//     })

// })

// describe("assert style",()=>{
//     it("operation on string",()=>{
//         const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;
//         assert.isOk(name);
//         assert.equal(name,"miraj");
//         assert.typeOf(name,'String');

//         // expect(name).to.be.ok;
//         // expect(name).to.not.be.equal("santosh");
//         // expect(name).to.be.a('String');
        
// })



//     it("operation on number",()=>{
//          const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;
//         assert.isOk(age);
//         assert.equal(age,25);
//         assert.typeOf(age,'Number');
//         // expect(age).to.be.ok;
//         // expect(age).to.be.equal(25);
//         // expect(age).to.not.be.equal("santosh");
//         // expect(age).to.be.a('Number');
//     })


//     it("operation on obj",()=>{
//          const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;

//         assert.isOk(array);
//         assert.equal(name,"miraj");
//         assert.typeOf(name,'String');

//         // expect(obj).to.be.ok;
//         // expect(obj).to.not.be.a("Number");
//         // expect(obj).to.have.property('name').equal('miraj');
//         // expect(obj).to.have.property('age').equal(25);
//     })


//     it("operation on array",()=>{
//          const name="miraj";
//         const age=25;
//         const obj={
//             name:"miraj",
//             age:25,
//         }
//         const array=[1,2,3];
//         const booldata=true;
//         assert.isOk(array);
//         assert.deepEqual(array,[1,2,3]);
//         assert.typeOf(array,'Array');
  
//         // expect(array).to.be.ok;
//         // expect(array).to.not.be.equal("santosh");
//         // expect(array).to.be.a('Array');
//         // expect(array).to.have.lengthOf(3)
//         // expect(array).to.have.lengthOf(3).property(2)
//     })

// })

describe("assert style",()=>{
    it("operation on string",()=>{
        const name="miraj";
        const age=25;
        const obj={
            name:"miraj",
            age:25,
        }
        const array=[1,2,3];
        const booldata=true;
        assert.isOk(name);
        assert.equal(name,"miraj");
        assert.typeOf(name,'String');

        // expect(name).to.be.ok;
        // expect(name).to.not.be.equal("santosh");
        // expect(name).to.be.a('String');
        
})



    it("operation on number",()=>{
         const name="miraj";
        const age=25;
        const obj={
            name:"miraj",
            age:25,
        }
        const array=[1,2,3];
        const booldata=true;
        assert.isOk(age);
        assert.equal(age,25);
        assert.typeOf(age,'Number');
        // expect(age).to.be.ok;
        // expect(age).to.be.equal(25);
        // expect(age).to.not.be.equal("santosh");
        // expect(age).to.be.a('Number');
    })


    it("operation on obj",()=>{
         const name="miraj";
        const age=25;
        const obj={
            name:"miraj",
            age:25,
        }
        const array=[1,2,3];
        const booldata=true;

        assert.isOk(array);
        assert.equal(name,"miraj");
        assert.typeOf(name,'String');

        // expect(obj).to.be.ok;
        // expect(obj).to.not.be.a("Number");
        // expect(obj).to.have.property('name').equal('miraj');
        // expect(obj).to.have.property('age').equal(25);
    })


    it("operation on array",()=>{
         const name="miraj";
        const age=25;
        const obj={
            name:"miraj",
            age:25,
        }
        const array=[1,2,3];
        const booldata=true;
        assert.isOk(array);
        assert.deepEqual(array,[1,2,3]);
        assert.typeOf(array,'Array');
  
        // expect(array).to.be.ok;
        // expect(array).to.not.be.equal("santosh");
        // expect(array).to.be.a('Array');
        // expect(array).to.have.lengthOf(3)
        // expect(array).to.have.lengthOf(3).property(2)
    })

})