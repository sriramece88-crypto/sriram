import {chromium,webkit,test } from "@playwright/test";
import { log } from "node:console";

test(`Test to launch a browser`, async ()=>{

    const browser1=await chromium.launch({channel:'msedge'});
    const context1=await browser1.newContext();
    const page1=await context1.newPage();
    await page1.goto(`https://www.redbus.in/`);

    const purl= page1.url();
    console.log(purl);

    const pagetitle=await page1.title();
    console.log(pagetitle);
    
    

    const browser2=await webkit.launch();
    const context2=await browser2.newContext();
    const page2=await context2.newPage();
    await page2.goto(`https://www.flipkart.com`);

     const purl2= page2.url();
    console.log(purl2);

    const pagetitle2=await page2.title();
    console.log(pagetitle2);

})