import { test, expect } from '@playwright/test';
import { connected } from 'node:process';

const TOKEN = '1a9a2911ba6e52aec3c57fe06bfee0d4d4224e62ebeaceb72471f6db85f609ff';

const BASE_URL = 'https://gorest.co.in/public/v2/users';

//common headers:
const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};



test("Post- add the user", async ({ request }) => {
    const responseBody = {
        name: 'pw test Api',
        email: `Aayush${Date.now()}@gamail.com`,
        gender: 'female',
        status: 'active'
    };

    console.log('=================== PUT CALL ===================');
    const responsePost = await request.post(BASE_URL, {
        headers,
        data: responseBody,
    });

    expect(responsePost.status()).toBe(201);
    const customerUserData = await responsePost.json();
    console.log(customerUserData);
    const userId = customerUserData.id;
    console.log('Created User ID: ' + userId);
    console.log('User is created successfully...');


    console.log('=================== GET CALL ===================');
    //step 2: Get the same user by using user id = userId

    const responseGet = await request.get(BASE_URL + '/' + userId, {
        headers,
    });
    expect(responseGet.status()).toBe(200);
    const customer = await responseGet.json();
    console.log(customer);
    console.log('User get request successfully completed...');

    console.log('=================== Update CALL ===================');

    const updatedResponceBody = {
        name: 'pw test updated Api',
        status: 'inactive'

    }
    const responseUpdate = await request.put(BASE_URL + '/' + userId, {
        headers,
    });
    expect(responseUpdate.status()).toBe(200);
    const updatedUserData = await responseUpdate.json();
    console.log(updatedUserData)
    console.log('User is updated successfully...');

    console.log('===================DELETE CALL ==============');

    const responseDELETE = await request.delete(`${BASE_URL}/${userId}`, {
        headers,
    })
    expect(responseDELETE.status()).toBe(204);
    console.log('User is deleted successfully...');



    console.log('===================GET CALL ==============');

    //step 5: Get the same user by using user id = userId afetr delete the same user

    const responseGETAfterDelete = await request.get(BASE_URL + '/' + userId, {
        headers
    });

    expect(responseGETAfterDelete.status()).toBe(404);
    const dataGET = await responseGETAfterDelete.json();
    console.log(dataGET);

});