
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

    // expect(number).not.toBeDefined()
    expect(number).toBeDefined()
    // expect(number).toBeUndefined()
    // expect(number).not.toBeNull()
    expect(number).toBeFalsy()
    expect(number).not.toBeTruthy()
  })

  it("should expect zero act like zero",()=>{
    let number = 0;
    expect(number).toBeDefined()
    expect(number).not.toBeUndefined()
    expect(number).not.toBeNull()
    expect(number).not.toBeTruthy()
    expect(number).toBeFalsy()
  })
  it("Comparing numbers",()=>{
    const n1 = 1
    const n2 = 2

    expect(n1+n2).toBeGreaterThan(2)
    expect(n1+n2).not.toBeGreaterThan(3)
    expect(n1+n2).toBeGreaterThanOrEqual(3)
    // expect(n1).toBeGreaterThanOrEqual(n2)
    expect(n1+n2).toBeLessThan(4)
    expect(n1+n2).toBeLessThanOrEqual(3)
    expect(n1).toBeLessThanOrEqual(n2)

  })
})

describe("Testing Strings",()=>{
  it("Should be no I in Team",()=>{
    let string = "Teami"

    expect(string).not.toMatch(/I/)
  })

  it("There is stop in Chistopher",()=>{
    let string = "ChristoPher"

    expect(string).toMatch(/stop/i)
  })

  it("Doesn't have PS4 in shopping list",()=>{
    const shoppingList = ['PS5',"Milk","Paper towels"] 

    expect(shoppingList).not.toContain('ps4')
  })
})
describe("Testing references equality",()=>{
  let user = {
    name:"Rodrigo",
    age:36
  }
  it("Should return an object age as 36",()=>{
    expect(user['age']).toBe(36)
    expect(user).toEqual({
      name:"Rodrigo",
      age:36
    })
  })

  it("Should return a user with name and age keys",()=>{
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number)
      })
    )
  })
  test("Array Equality",()=>{
    const users=["Rodrigo","Jéssica", "Cacau", "Fernando"]

    users.push("Roberto")

    // expect(users).toEqual(["Rodrigo","Jéssica", "Cacau", "Fernando"])
    expect(users).toEqual(expect.arrayContaining(['Roberto']))
    expect(users).toEqual(expect.arrayContaining([expect.any(String)]))
  })
})