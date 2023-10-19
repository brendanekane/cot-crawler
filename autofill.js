const autofill = {
  getPostAndFill: async (cashortrade, inputData) => {
    let band = inputData.band;
    await cashortrade.click('a.post');

    try {
      const targetEvent = await cashortrade.waitForXPath(
        "//b[contains(text(), 'Ticketmaster:')]"
      );
      await targetEvent.click();
    } catch {}

    await cashortrade.click('input#cardCVC');
    cashortrade.keyboard.type(process.env.CVC);

    await cashortrade.waitForSelector('#reply');
    const reply = await cashortrade.$eval(
      '#reply',
      (input, band) => {
        input.textContent = `Would love to bring my GF to see her first ${band} show! Please help us out!`;
      },
      band
    );

    const checkbox = await cashortrade.$eval(
      '#agreeToTerms',
      (check) => (check.checked = true)
    );

    await cashortrade.click('button.FL_commit_to_buy');

    await cashortrade.waitForTimeout(500);

    await cashortrade.click('button#modal-btn-yes');
  },
  filterForEvent: async (inputData, cashortrade) => {
    const idUrl = `https://www.cashortrade.org/${inputData.band}-tickets/?filter%5B%5D=sale&filter%5B%5D=active-only`;
    await cashortrade.goto(idUrl);

    const datesBtn = await cashortrade.$('#openTourDates');
    await datesBtn.evaluate((b) => b.click());

    const targetEvent = await cashortrade.waitForXPath(
      `//div[contains(text(), '${inputData.date}')]`
    );

    await targetEvent.click();

    await cashortrade.click('button#save-content-btn');

    await cashortrade.waitForTimeout(1000);
    autofill.getPostAndFill(cashortrade, inputData);
  },
};

module.exports = autofill;
