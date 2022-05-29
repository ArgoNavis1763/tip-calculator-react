describe("Tip Calculator React Test", () => {
  it("should return 5 tipPP and 55 totalPP if bill is 100, people is 2 and tip is 10%, should", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="billAmount"]').type("100");
    cy.get('[id="10"]').click();
    cy.get('[id="people"]').type("2");
    cy.get('[id="tipPP"]').contains("5");
    cy.get('[id="totalPP"]').contains("55");
  });

  it("should return an error if custom tip is over 100%", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="billAmount"]').type("100");
    cy.get('[id="custom"]').click();
    cy.get('[id="customInput"]').tyoe("150");
  });
});
