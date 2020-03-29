beforeAll(async () => {
  await page.goto("http://localhost:3000")
})

afterAll(async (done) => {
  done()
})

describe("Home", () => {
  it("ページが表示されること HOME", async () => {
    await expect(page).toMatch("Home")
    await expect(page).toMatch("月別")
    await expect(page).toMatch("都道府県別")
    await expect(page).toMatch("タグ別")
  })
})
