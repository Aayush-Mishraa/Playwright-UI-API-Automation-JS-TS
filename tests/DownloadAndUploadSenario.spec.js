const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');
// High-level flow: load workbook -> find a value -> offset the cell -> update -> save




// Update a cell located by searchText, then shifted by change offsets
async function writeExcelFile(searchText, replaceText,chnage, filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath)

    // Locate the sheet and find the coordinates of searchText
    const worksheet = workbook.getWorksheet('Sheet1');
    const output =   await readExcel(worksheet, searchText)

    // Apply column offset before writing the new value
    const cell = worksheet.getCell(output.row, output.col+chnage.colChange)
    cell.value = replaceText
    await workbook.xlsx.writeFile(filePath)

    console.log(`File data is updated this -${searchText} to this ${replaceText} `)
}

// Scan the sheet to find the first cell that matches searchText
async function readExcel(worksheet, searchText) {
let output = { row: -1, col: -1 };
    worksheet.eachRow((row, rowNumber) => {

        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {

                output.row = rowNumber;
                output.col = colNumber;
            };

        })
    })

    return output;
}



// writeExcelFile("80000", "9",{rowchage:0, colChange:2}, "/Users/aayus/OneDrive/Desktop/Projects/ExcelTestSheet.xlsx");

test("Download upload validation the excel file", async({page})=>{


    const textSearch = 'Mango';
  const updateValue = '350';
 
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
 
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const dl = await download;
  const filePath = '/Users/rahulshetty/downloads/download.xlsx'; // or await dl.path()
 
  // ✅ Ensure the edit finishes before upload
  await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
 
  await page.locator('#fileinput').setInputFiles(filePath);
 
  const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
})
