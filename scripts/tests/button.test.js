/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button"); 

beforeEach(() => {
    let fs = require("fs"); // this way we can test the entire html file DOM even if changes were made to it
    let fileContents = fs.readFileSync("index.html", "utf-8"); 
    document.open(); 
    document.write(fileContents); 
    document.close(); 
}); 

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick(); 
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked"); 
    }); 
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1); 
    }); 
}); 

// Remember that you will get one fail for calculator that is commented out when running npm test in the terminal!