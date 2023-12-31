# CashorTrade Ticket Buying Automator

This tool is to help automate the process of buying tickets on CashorTrade. This will ONLY submit an offer to buy a ticket on CashorTrade. It DOES NOT and CANNOT guarantee you will get the ticket because CashorTrade as a platform does not operate like that. If used in combination with alerts for new tickets going on sale it will help to be one of the first to submit an offer.

## Installation/Setup

- Clone repo
- In terminal run `npm install`
- Create a new file `.env`
- Within `.env` enter `CVC=###` and replace `###` with the CVC for the default card you have on file for CashorTrade
- Ensure that you are logged into CashorTrade in the default Chrome profile (This will be whichever chrome profile you were logged into last)
- Quit Chrome

## Use

- In terminal run `npm start`
- You'll be prompted to enter a password for your chrome keychain. Enter it (it may ask twice)
- In terminal enter the band you want to see
- In terminal enter the date you want to see the band
- You can verify the offer was made in your account/tickets/offers page

## Troubleshooting

- If you are not already logged into CashorTrade on chrome it will not work; it relies on your cookies to ensure you are signed in
- If you do not create a .env file with the correct CVC for the default card you have on file on CashorTrade it will not work

### TODO:

- [ ] add a way to monitor for new posts to automate process
  - [ ] Potential ideas -
    - [ ] Launch Agent that will run a bash script when a notification comes in from CoT about a new ticket. Bash script will simply run the node script when triggered.
- [ ]  Create GUI to make easier to use
- [ ] Launch browser in headless mode (headless mode off for testing purposes)
