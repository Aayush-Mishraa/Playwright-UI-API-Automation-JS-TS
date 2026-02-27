const { test, expect, request } = require('@playwright/test');
const APIutils = require("./utils/APIutils");

let token;
let oderId;
let response;


const loginPayload = { userEmail: "ayush.am77@gmail.com", userPassword: "Aashu072" }
const orderPayload = { orders: [{ country: "Brazil", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const fakePayloadOrder = {data:[],message:"No Orders"}
test.beforeAll(async ({ }) => {


    const apiContext = await request.newContext();
    const apiutils = new APIutils(apiContext,loginPayload);
   
    response = await apiutils.createOrder(orderPayload);


})


test("Login into new Applcation", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    const products = page.locator(".card-body")
    const email = "ayush.am77@gmail.com";
    const productName = "ZARA COAT 3";

    await page.goto("https://rahulshettyacademy.com/client")
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        route=>{
            //intercepting response - API response -> {playright fake response}->to the browser 
            const response = page.request.fetch(route.request());
            let body =JSON.stringify.fakePayloadOrder;
            route.fulfill({
                response,
                body

            })
        }

    )

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForEvent("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

    console.log(await page.locator(".mt-4").textContent());
   
 
   
});
