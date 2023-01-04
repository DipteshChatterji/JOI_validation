const request = require("supertest");
const app =require("./server")


// Demo how to write a test query
// describe("test root path", ()=>{
//     // test('response method', async() => { 
//     //     const response = await request(app).post("/schema")
//     //     expect(response.statusCode).toBe(200);
//     //  })
// })


const data1=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":-200,
    "payer_account_number":123467891270000,
    "payee_account_number":1234567456765656
}]
const data2=[{
    "payer":"",
    "payee":"suraj",
    "payment":200,
    "payer_account_number":1234567891270000,
    "payee_account_number":1234567456765656
}]

const data3=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":0,
    "payer_account_number":1234567891270000,
    "payee_account_number":1234567456765656
}]

const data4=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":200,
    "payer_account_number":1234567891270000,
    "payee_account_number":1234567456765656
}]

const data5=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":200,
    "payer_account_number":"abc4567891270000",
    "payee_account_number":1234567456765656
}]
const data6=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":200,
    "payer_account_number":4567891270000000,
    "payee_account_number":"1234567456765tre"
}]


const data7=[{
    "payer":"dip",
    "payee":"",
    "payment":200,
    "payer_account_number":4567891270000000,
    "payee_account_number":1234567456765000
}]

const data8=[{
    "payer":"",
    "payee":"",
    "payment":"",
    "payer_account_number":"",
    "payee_account_number":""
}]
const data9=[{
    "payer":"a",
    "payee":"b",
    "payment":100,
    "payer_account_number":1234567890123456,
    "payee_account_number":1234566690123456
}]
const data10=[{
    "payer":"dipteshdsjckabvdbsvibfiubviausbv",
    "payee":"surajdsbdiafufouofubfibibBU9",
    "payment":100,
    "payer_account_number":1234567890123456,
    "payee_account_number":1234566690123456
}]

const data11=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":200.667,
    "payer_account_number":1234567891270000,
    "payee_account_number":1234567456765656
}]


const data12=[{
    "payer":"diptesh",
    "payee":"suraj",
    "payment":145,
    "payer_account_number":12345678901234562345678,
    "payee_account_number":12345666901234569876548
}]


const data13=[{
    "payer":"diptesh",
    "payee":"suraj",
    "payment":145,
    "payer_account_number":-1234567890123456,
    "payee_account_number":-1234566690123456
}]


const data14=[{
    "payer":"dip",
    "payee":"suraj",
    "payment":200,
    "payer_account_number":1234567891,
    "payee_account_number":1234567456
}]
const data15=[{
    
    "payment":200,
    "payer_account_number":1234567891,
    "payee_account_number":1234567456
}]
const data16=[{
    "payer":"dip",
    "payee":"surajeruycjbfv;a",
    "payment":200,
    "payer_account_number":1234567891,
    "payee_account_number":1234567456
}]
const data17=[{
    "payer":"dip",
    "payee":"s",
    "payment":200,
    "payer_account_number":1234567891,
    "payee_account_number":1234567456
}]





describe("test root path", ()=>{
    test('response method', async() => { 
        const response = await request(app).post("/schema").send(data1)
        expect(response.text).toBe("data send successfully");
     })
})

describe("test root path", ()=>{
    test('response method', async() => { 
        const response = await request(app).post("/schema").send(data2)
        expect(response.text).toBe("data send successfully");
     })
})
    

describe("test root path", ()=>{
    test('response method', async() => { 
        const response = await request(app).post("/schema").send(data3)
        expect(response.text).toBe("data send successfully");
     })
})
    


describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data4)
            expect(response.text).toBe("data send successfully");
         })
    })


        
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data5)
            expect(response.text).toBe("data send successfully");
         })
    })



describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data6)
            expect(response.text).toBe("data send successfully");
         })
    })
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data7)
            expect(response.text).toBe("data send successfully");
         })
    })
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data8)
            expect(response.text).toBe("data send successfully");
         })
    })
        
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data9)
            expect(response.text).toBe("data send successfully");
         })
    })
        
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data10)
            expect(response.text).toBe("data send successfully");
         })
    })
        
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data11)
            expect(response.text).toBe("data send successfully");
         })
    })
        
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data12)
            expect(response.text).toBe("data send successfully");
         })
    })
        
describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data13)
            expect(response.text).toBe("data send successfully");
         })
    })
        
    describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data14)
            expect(response.text).toBe("data send successfully");
         })
    })
    describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data15)
            expect(response.text).toBe("data send successfully");
         })
    })
    describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data16)
            expect(response.text).toBe("data send successfully");
         })
    })
    describe("test root path", ()=>{
        test('response method', async() => { 
            const response = await request(app).post("/schema").send(data17)
            expect(response.text).toBe("data send successfully");
         })
    })
