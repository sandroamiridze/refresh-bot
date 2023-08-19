const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch({
        headless: 'new'
    });
    const page = await browser.newPage();

    // Navigate to the desired webpage
    await page.goto('type your link here!');

    // Set the interval for refreshing (in milliseconds)
    const refreshInterval = 5000; // for me i set it on 5 seconds

    setInterval(async () => {
        // Refresh the page
        await page.reload();
    }, refreshInterval);
}

main();
