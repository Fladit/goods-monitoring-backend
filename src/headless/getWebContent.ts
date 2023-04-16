import puppeteer, {Page} from 'puppeteer';

interface GetWebContentProps {
    url: string;
    searchResultSelector?: string;
    searchedRequestUrl?: string;
}

export const getWebContent = async ({url, searchResultSelector, searchedRequestUrl}: GetWebContentProps) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    handleWebRequests(page)
    const searchedResponse = handleWebResponses(page, searchedRequestUrl);

    await page.goto(url, {});

    if (searchResultSelector) {
        await page.waitForSelector(searchResultSelector);
    }

    if (searchedResponse) {
        const searchedResponseBody = await searchedResponse;
        const parsedResponseBody = await searchedResponseBody.json();
        await browser.close();
        return parsedResponseBody;
    }


    browser.close();

    return;
}

function handleWebRequests (page: Page) {
    page.on('request', (interceptedRequest) => {
        if (interceptedRequest.isInterceptResolutionHandled()) {
            return;
        }
        if (interceptedRequest.url().endsWith('.png') ||
            interceptedRequest.url().endsWith('.jpg') ||
            interceptedRequest.url().endsWith('.css') ||
            interceptedRequest.url().endsWith('.woff') ||
            interceptedRequest.url().endsWith('.svg'))
        {
            interceptedRequest.abort();
        }
        else {
            interceptedRequest.continue();
        }
    })
}

function handleWebResponses (page: Page, searchedRequestUrl?: string) {
    if (!searchedRequestUrl) {
        return null;
    }

    return page.waitForResponse(res => res.url().endsWith(searchedRequestUrl), {timeout: 30000});
}