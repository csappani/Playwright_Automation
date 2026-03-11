const {test, expect}=require('@playwright/test');

var userId;

test("Get Users", async({request})=>{

    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    expect(response.status()).toBe(200)
    
})

test("Create User", async({request})=>{

    const response=await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "kumar",
                "job": "trainer"
            },
            headers: {
                "Accept": "application/json"
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(201)
    var res=await response.json()
    userId=res.id;
    console.log("userID:"+userId)
})

test("Update User", async({request})=>{

    const response=await request.put('https://reqres.in/api/users/'+userId,
        {
            data: {
                "name": "kumar",
                "job": "engineer"
            },
            headers: {"Accept":"application/json"}
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)
    
})

test("Delete User", async({request})=>{
    
    const response=await request.delete('https://reqres.in/api/users/'+userId)
    expect(response.status()).toBe(204)
})