const puppeteer = require('puppeteer');
describe('Search and select expensive hotel',
    async () => {
        it('must be run ', async function () {
            const browser = await puppeteer.launch({
                headless: false, slowMo: 20,
                defaultViewport: null,
                args: ['--start-maximized', '--window-size=1920,1080']
            });
            const page = await browser.newPage();
            await page.setViewport({width: 1600, height: 1050});
            await page.goto('https://www.ab-in-den-urlaub.de/');
            const btnCookieAccept = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';
            await page.waitForSelector(btnCookieAccept);
            await page.click(btnCookieAccept);
            await page.click('#idestflat');
            await page.type('#idestflat', 'Sizilien');
            await page.waitForTimeout(1000);
            await page.keyboard.press('Enter');
            await page.click('.datepicker-input.datepicker-input-start');
            for (let i = 0; i <= 9; i++) {
                await page.click('.month-button.month-button-next.icon-arrow-right-bold');
            }
            await page.click('div.month.month-10.year-2022 > table > tbody > tr:nth-child(2) > td.day.day-1');
            await page.click('div.month.month-10.year-2022 > table > tbody > tr:nth-child(3) > td.day.day-10');
            await page.click('.button-submit.form-submit');
            await page.waitForNavigation({waitUntil: 'networkidle0'});
            await page.click('.datepicker-input.datepicker-input-end');
            await page.click('div.month.month-10.year-2022 > table > tbody > tr:nth-child(2) > td.day.day-6');
            await page.click('.filter-shortcut');
            await page.click('div.filter.filter-kundenbewertung > label:nth-child(5)');
            await page.waitForTimeout(5000);
            await page.select('#hotelsorting', 'price_desc');
            await page.waitForTimeout(5000);
            const [target] = await Promise.all([
                new Promise(resolve => browser.once('targetcreated', resolve)),
                page.click('div.skeleton-wrapper > article:nth-child(1) > div.content> div.priceBox > a > div')
            ]);
            const newPage = await target.page();
            await newPage.bringToFront();
            await newPage.waitForTimeout(25000);
            const departureTime = await newPage.$('#departureTimeRange .noUi-base');
            let box = await departureTime.boundingBox();
            await newPage.mouse.move(box.x+box.width - 50, box.y + box.height / 2);
            await newPage.mouse.down();
            await newPage.mouse.move(100, 200);
            await newPage.mouse.up();
            let box2 = await departureTime.boundingBox();
            await newPage.mouse.move(box2.x + box2.width - 25, box2.y + box2.height / 2);
            await newPage.mouse.down();
            await newPage.mouse.move(100, 200);
            await newPage.mouse.up();
            const returnTime = await newPage.$('#returnTimeRange .noUi-base');
            let box3 = await returnTime.boundingBox();
            await newPage.mouse.move(box3.x + box3.width - 115, box3.y + box3.height / 2);
            await newPage.mouse.down();
            await newPage.mouse.move(100, 200);
            await newPage.mouse.up();
            await newPage.waitForTimeout(7000);
            await newPage.click('#arrival-2022-10-31');
            await browser.close();
        }).timeout(900000);
    });






