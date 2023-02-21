
describe('First Suite - General 1',()=>{
  describe('First suite of tests general 1',()=>{
    test("1+1 should be equal 2",()=>{
      expect(1+1).toBe(2)
    })
  })
  describe("Second",()=>{
    test("5+6 is not equal to 10",()=>{
      expect(5+6).not.toBe(10)
    })
  })
})

describe('Second Suite - General 2',()=>{
  describe('First suite of tests general 2',()=>{
    test("1+1 should be equal 2",()=>{
      expect(1+1).toBe(2)
    })
  })
  describe("Second general 2",()=>{
    test("5+6 is not equal to 10",()=>{
      expect(5+6).not.toBe(10)
    })
  })
})
describe("Testing other matcher methods",()=>{
  test("Test if the variable is undefined",()=>{
    let number = null

    expect(number).not.toBeDefined()
    expect(number).toBeUndefined()
    expect(number).not.toBeNull()
    expect(number).toBeFalsy()
    expect(number).not.toBeTruthy()
  })
})
