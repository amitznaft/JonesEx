let server;
const request = require('supertest')


describe('/api/orders', () => {
    beforeEach(() => {server = require('../server')})
    afterEach(() => {server.close()})
    describe('GET /', () => {
        it('should return all from the last day', async () => {
            const res = await request(server).get('/api/orders')
            expect(res.status).toBe(200)
        })
        it('should return 404 if path not valid', async () => {
            const res = await request(server).get('/api/orders/something')
            expect(res.status).toBe(404)
        })
    })
    describe('POST /', () => {
        it('should return 400 if order is invalid', async () => {
            const order = 
            {
                "orderDate" : "2021-09-29T17:00:00",
                "customerId" : "12345abc",
                "items" : ["hamburger", "chips" , 'cola'],
                // "price": 50  // price is missing
            }
            const res = await request(server).post('/api/orders').send(order)
            expect(res.status).toBe(400)
        })
        it('should return 201 if order is valid', async () => {
            const order = 
            {
                "orderDate" : "2021-09-29T17:00:00",
                "customerId" : "12345abc",
                "items" : ["hamburger", "chips" , 'cola'],
                "price": 50
            }
            const res = await request(server).post('/api/orders').send(order)
            expect(res.status).toBe(201)
        })
    })
})