describe("My home page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  /*
   * TODO: make this test work
   */
  it("contains the text 'Your organization invitation code'", () => {
    expect(cy.contains("Your organization invitation code"))
  })
})
