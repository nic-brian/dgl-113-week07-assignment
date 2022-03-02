import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "./index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("click show words", async () => {
    await page.evaluate(() => setWords(
      new Car( 'Hyundai', 'Pony', 200, 20 ),
      new Car( 'Ford', 'F150', 400, 80 )
    ));
    await page.click('#show');

    await page.waitForSelector('#cars');
    let element = await page.$('#cars');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toBe( 'bed\nFred\nedict' );
  });
});
