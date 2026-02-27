
import { test, expect } from '@playwright/test';

test.describe.serial('My Test Suite', () => {

    //these 5 tcs will be running in a sequence mode

    test('Home Page Test', async () => {
        console.log('home page test');
    });

    test('Search Product Test', async () => {
        console.log('Search Product test');
    });

    test('cart Product Test', async () => {
        console.log('cart Product test');
    });


    test('order Product Test', async () => {
        console.log('order Product test');
    });

    test('checkout Product Test', async () => {
        console.log('checkout Product test');
    });
});



//these two tcs will be running in parallel
 test('BYE Test', async () => {
        console.log('BYE');
 });
    
  test('Hello Test', async () => {
        console.log('HELLO');
    });



