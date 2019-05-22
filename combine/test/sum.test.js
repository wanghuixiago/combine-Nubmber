// todo a+b=c;
// example:input 1,2 get 3
const combine =require ("../src/combine")

describe("combine",()=>{
    test("combine is defined",()=>{
        expect(combine).toBeDefined()
    }),
    test("combine should be a function",()=>{
        expect(typeof(combine)).toBe('function')
    }),
    test("given [50,2,1,9] it returns 95021 ",()=>{
        expect(combine([50,2,1,9])).toBe('95021')
    }),
    test("given [5,50,56] it returns 56550 ",()=>{
        expect(combine([5,50,56])).toBe('56550')
    }),
    test("given [4,420,445] it returns 56550 ",()=>{
        expect(combine([4,420,445])).toBe('4454420')
    })
})