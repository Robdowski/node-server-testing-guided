const Hobbits = require('./hobbitsModel')

const db = require('../data/dbConfig')




describe('hobbits model', () => {
    describe('insert()', () =>{
        beforeEach(async() => {
            await db('hobbits').truncate()
        })
        it('should insert a hobbit', async() =>{
            await Hobbits.insert({name: "sam"})
            await Hobbits.insert({name: "frodo"})

            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(2)
        })
        it('should insert the provided hobbit', async() =>{
            await Hobbits.insert({name: "sam"})
            await Hobbits.insert({name: "frodo"})

            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(2)
            expect(hobbits[0].name).toBe('sam')
            expect(hobbits[1].name).toBe('frodo')
        })
        it('should return the inserted hobbit', async() =>{
            let hobbit = await Hobbits.insert({name: "sam"})
            expect(hobbit.name).toBe('sam')
            expect(hobbit.id).toBeDefined();

            hobbit = await Hobbits.insert({name: "frodo"})
            expect(hobbit.name).toBe('frodo')
            expect(hobbit.id).toBeDefined();
        })
    })
})