//проверка того, имеет ли элемент определенное имя класса
describe('toHaveElementClass', async () => {
    it('verify element to have class', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("#input-firstname") //есть ли у first name класс с именем form-control
        await expect(elem).toHaveElementClass("form-control")
    });
});