let img: HTMLImageElement;
describe("Broken images with Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/broken`);
  });
  it("Not Broken Image Assertion", () => {
    cy.get('div > img[src="/images/Toolsqa.jpg"]')
      .should("be.visible")
      .and(($img) => {
        img = $img[0] as unknown as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });
  it("Broken Image Assertion", () => {
    cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
      .should("be.visible")
      .and(($img) => {
        img = $img[0] as unknown as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });
});

describe.only("Broken image - Backup demo", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/broken_images`);
  });

  it("Broken Image Detected(first)", () => {
    cy.get("div.example img")
      .first()
      .should("be.visible")
      .and(($img) => {
        //Skip the TS Error, it is working.
        img = $img[0] as unknown as HTMLImageElement | null;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });

  it("Broken Image Detected(last)", () => {
    cy.get("div.example img")
      .last()
      .should("be.visible")
      .and(($img) => {
        //Skip the TS Error, it is working.
        img = $img[0] as unknown as HTMLImageElement | null;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });
});
