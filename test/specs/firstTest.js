//используется для проверки того, находится ли браузер на определенном URL-адресе страницы
describe('toHaveURL', async () => {
    it('verify user is directed to right url', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/'); //URL-адрес страницы
        await expect(browser).toHaveUrl('https://ecommerce-playground.lambdatest.io/');
    });
});