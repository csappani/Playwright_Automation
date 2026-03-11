const {test, expect}=require('@playwright/test');

var userId;
var authToken="6f902572bc247f7f2875a01601a12290cbce4fa20ea8ad4e7153f3a90986127f";

test("Get Users", async({request})=>{

    const response = await request.get("https://gorest.co.in/public/v2/users",
    {
        headers: {
            "Accept": "application/json",
            "authorization": "Bearer "+authToken
        }
    }
);
    console.log(await response.json())
    expect(response.status()).toBe(200)
    
})

test("Create User", async({request})=>{

    const response=await request.post('https://gorest.co.in/public/v2/users',
        {
            data: {
                "name": "chiran",
                "gender": "male",
                "email": "csappani@gmail.com",
                "status": "active"
            },
            headers: {
                "Accept": "application/json",
                "authorization": "Bearer "+authToken
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

    const response=await request.put('https://gorest.co.in/public/v2/users/'+userId,
        {
            data: {
                "name": "kumar",
                "gender": "male",
                "email": "cs@gmail.com",
                "status": "inactive"
            },
            headers: {
                "Accept":"application/json",
                "authorization": "Bearer "+authToken
            }
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)
    
})

test.skip("Delete User", async({request})=>{
    
    const response=await request.delete('https://gorest.co.in/public/v2/users/'+userId,
        {
            headers: {
                "Accept":"application/json",
                "authorization": "Bearer "+authToken
            } 
        }
    );
    expect(response.status()).toBe(204)
})