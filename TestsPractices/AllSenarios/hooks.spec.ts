import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('beforeALL -- server is up and running!!');
})

test.beforeEach(async () => {
    console.log('beforeEach -- user is logged in!!');
})

test('Home Page Test', async () => {
    console.log('home page test');
})

test('Search Product Test', async () => {
    console.log('Search Product test');
})

test('Cart Test', async () => {
    console.log('Cart test');
})

test.afterEach(async () => {
    console.log('afterEach -- logout!!');
})

test.afterAll(async () => {
    console.log('afterAll -- close browser');
})

