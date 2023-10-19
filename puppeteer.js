const puppeteer = require('puppeteer');
const chromeCookies = require('chrome-cookies-secure');
const prompt = require('prompt-sync')();
const formatter = require('./formatter');
const userInput = require('./user-input');
const autofill = require('./autofill');
const { exec } = require('child_process');
require('dotenv').config();

// get users' cookies for cashortrade to ensure log in state

const getCookies = (cb) => {
  const url = 'https://cashortrade.org';
  chromeCookies.getCookies(
    url,
    'puppeteer',
    (err, cookies) => {
      if (err) {
        console.log(err, 'error');
        return;
      }
      console.log(cookies, 'cookies');
      cb(cookies);
    },
    'Default'
  ); // See if there is a way to not hardcode the default chrome profile. If so get the user profile name from terminal user input
};

// entry/primary function
// creates the puppeteer instance
// sets the correct cookies
// gets input data from user
// oonce its done sends off to filter for the correct show after
const startCb = async (cookies) => {
  const browser = await puppeteer.launch({
    headless: false,
    // ensure site doesn't open in mobile due to viewport mediaquery
    defaultViewport: {
      width: 1280,
      height: 720,
    },
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const cashortrade = await browser.newPage();
  const inputData = userInput.getInfo();
  await cashortrade.setCookie(...cookies);
  autofill.filterForEvent(inputData, cashortrade);
};

getCookies(startCb);
