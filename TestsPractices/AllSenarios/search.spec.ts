import { ResultsPage } from '../pages/ResultsPage';
import { test, expect } from '../fixtures/baseFixtures';


//data provider for product search key and results count
const searchData = [
    { searchkey: 'macbook', resultscount: 3 },
    { searchkey: 'samsung', resultscount: 2 },
    { searchkey: 'imac', resultscount: 1 },
    {searchkey: 'canon', resultscount: 1},
    {searchkey: 'Dummy', resultscount: 0},

];


for (const product of searchData) {
    test(`@search @sanity verify product search ${product.searchkey}`, async ({ homePage }) => {

    const resultsPage: ResultsPage = await homePage.doSearch(product.searchkey);
    expect (await resultsPage.getSearchResultsCount()).toBe(product.resultscount);

});

}


