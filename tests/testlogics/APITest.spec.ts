import { test, expect } from "@playwright/test";


const TOKEN = '1a9a2911ba6e52aec3c57fe06bfee0d4d4224e62ebeaceb72471f6db85f609ff';

test('Get- Fetch all user', async ({ request }) => {
    const response = await request.get("https://gorest.co.in/public/v2/users", {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }



    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
});

test("Get-For single user", async ({ request }) => {
    const response = await request.get("https://gorest.co.in/public/v2/users/8364687", {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
});

test("Post- Add the user into the gorest data", async ({ request }) => {
    const responseBody = {
    name: 'pw test Api',
    email: `Aayush${Date.now()}@gamail.com`,
    gender: 'female',
    status: 'active'
}
    const response = await request.post("https://gorest.co.in/public/v2/users/", {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
        data: responseBody
    });
    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
});