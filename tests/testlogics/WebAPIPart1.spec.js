const { test, expect, request } = require('@playwright/test');
let token;
let oderId;
const loginPayload = { userEmail: "ayush.am77@gmail.com", userPassword: "Aashu072" }
const orderPayload = { orders: [{ country: "Brazil", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
test.beforeAll(async ({ }) => {


    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {

        data: loginPayload

    })
    expect((loginResponse).ok);
    const loginData = await loginResponse.json()
    token = loginData.token;
    console.log(token);
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {

        data: orderPayload,
        headers: {
            'Authorization': token,
            'Content-type': 'application/json',
        }
    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponse);
    oderId = orderResponseJson.orders[0];
    console.log(oderId);
})



test.beforeEach(() => {

})



test("Login into new Applcation", async ({ page }) => {


    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    const products = page.locator(".card-body")
    const email = "ayush.am77@gmail.com";
    const productName = "ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client")

  

    // const oderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    // await page.locator(".em-spacer-1 .ng-star-inserted").textContent().then((text) => {
    //     console.log(text)
    // })//this is to get the order id and print it in the console

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();

    const rows = page.locator("tbody tr");
    let foundOrder = false;
    for (let i = 0; i < await rows.count(); i++) {
        const rowoderID = await rows.nth(i).locator("th").textContent();
        if (rowoderID && oderId.includes(rowoderID.trim())) {
            await rows.nth(i).locator("button").first().click();
            foundOrder = true;
            break;
        }
    }
    expect(foundOrder).toBeTruthy();
    const orderDetail = page.locator(".col-text").first();
    await orderDetail.waitFor();
    await page.pause()

    const oderDetailID = await orderDetail.textContent();
    expect(oderId.includes(oderDetailID)).toBeTruthy();

});
