const {sum, deleteUserById, findUserById} = require('./utils/helper.js')

let users = []

beforeEach(()=>{
  users =[
    {user:"Rodrigo", age:36, id:1},
    {user:"Jéssica", age:29, id:2},
    {user:"Fernando", age:26, id:3},
    {user: "Cacau", age:4, id:4}
  ]
  console.log("BeforeAll  --  users", users)
})

afterEach(()=>{
  users=[]
  console.log("AfterAll  --  users", users)
})
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
    const usersList=["Rodrigo","Jéssica", "Cacau", "Fernando"]

    usersList.push("Roberto")

    // expect(usersList).toEqual(["Rodrigo","Jéssica", "Cacau", "Fernando"])
    expect(usersList).toEqual(expect.arrayContaining(['Roberto']))
    expect(usersList).toEqual(expect.arrayContaining([expect.any(String)]))
  })

  test("Array Equality with arrays of objects",()=>{

    users.push({user:"Roberto", age:62})

    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user:expect.any(String),
          age:expect.any(Number)
        })
      ]))
  })
})

describe("Test functions",()=>{

  it("Should add two numbers",()=>{
    expect(sum(5,3)).toBe(8)
    expect(sum(5,10)).toBe(15)
    expect(sum(5,5)).toBe(10)
    expect(sum(2,3)).toBe(5)
  })
  it("Should delete user by id using deleteUserById function passing an id",()=>{
    
    // const users =[
    //   {user:"Rodrigo", age:36, id:1},
    //   {user:"Jéssica", age:29, id:2},
    //   {user:"Fernando", age:26, id:3},
    //   {user: "Cacau", age:4, id:4}
    // ]

    expect(deleteUserById(users, 5)).toEqual([
      {user:"Rodrigo", age:36, id:1},
      {user:"Jéssica", age:29, id:2},
      {user:"Fernando", age:26, id:3},
      {user: "Cacau", age:4, id:4}
    ])
    expect(deleteUserById(users, 5).length).toBe(4)
  })
})

describe("Done by test driven development",()=>{
  // const users =[
  //   {user:"Rodrigo", age:36, id:1},
  //   {user:"Jéssica", age:29, id:2},
  //   {user:"Fernando", age:26, id:3},
  //   {user: "Cacau", age:4, id:4}
  // ]

  test("Find list of user", ()=>{
    expect(findUserById(users,2)).toEqual({user:"Jéssica", age:29, id:2})
    expect(findUserById(users,10)).toBeUndefined()
    expect(findUserById(users,10)).toBeFalsy()
    expect(findUserById(users,10)).not.toBeNull()
  })
})