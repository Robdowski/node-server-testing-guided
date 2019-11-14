const request = require("supertest");

const server = require("./server");

it('should set db environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
})

describe("server", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });  
    });
    it("should return a response in JSON format", () => {
        return request(server)
          .get("/")
          .then(res => {
            expect(res.type).toMatch(/json/i);
          });  
      });
    it("should return an api property with the value up", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({"api": "up"});
        });  
    });
    
  });
});

describe('server', () => {
    describe('GET /',() =>{
        it('should', () => {

        })
    })
})

describe('server', () => {
    describe('GET /',() =>{
        it('should', () => {
            
        })
    })
})





