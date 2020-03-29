beforeAll(async () => {
  await page.goto("http://localhost:3000/photo-gallery")
})

afterAll(async (done) => {
  done()
})

describe("Photo Gallery", () => {
  it("ページが表示されること", async () => {
    await expect(page).toMatch("Photo Gallery")
    await expect(page).toMatch("件")
    await expect(page).toMatch("地域")
    await expect(page).toMatch("全て")
    await expect(page).toMatch("タグ")
    await expect(page).toMatch("リセット")
  })
})
