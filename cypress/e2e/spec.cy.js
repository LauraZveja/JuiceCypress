describe("Juice-Shop", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".cc-btn").click();
      cy.get('[aria-label="Close Welcome Banner"]').click();
      //Click Account
      //Click Login
      //Email field
      //Password field
      //Login button
      //cy.get();
      cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();
    cy.get('#email').type('demo');
    cy.get('#password').type('demo');
      cy.get('#loginButton').click();
    });

    it("Search Lemon", () => {
        //Type Lemon in search bar, click enter
        //Validate that we can see box with Lemon Juice (500ml)
        cy.get("#searchQuery").click();
        cy.get("#mat-input-0").type('Lemon Juice {enter}');

        cy.get('.item-name').should('have.text', ' Lemon Juice (500ml) ');

      });

      it("Search 500ml", () => {
        cy.get("#searchQuery").click();
        cy.get("#searchQuery").click();
        cy.get("#mat-input-0").type('500ml {enter}');
        cy.get('.item-name').should('have.text', ' Eggfruit Juice (500ml)  Lemon Juice (500ml)  Strawberry Juice (500ml) ');
      });

      it.only("Items per page scenario", () => {
        // Select 12 items per page
    cy.get(".mat-select-value").click();
    cy.get(".mat-option-text").contains("12").click({ force: true });
    // validate that we see 12 boxes
    cy.get(".product").should("have.length", 12);
    // validate that we see 12 boxes
    // Select 24 items per page
    // Validate that we see 24 boxes
    cy.get(".mat-select-value").click();
    cy.get(".mat-option-text").contains("24").click({ force: true });
    cy.get(".product").should("have.length", 24);
    // Validate that we see 24 boxes
    cy.get(".mat-select-value").click();
    cy.get(".mat-option-text").contains("24").click({ force: true });
    cy.get(".product").should("have.length", 24);
   // Select 36 items per page
    // Validate that we see 35 boxes
    cy.get(".mat-select-value").click();
    cy.get(".mat-option-text").contains("36").click({ force: true });
    cy.get(".product").should("have.length", 35);
    


      });

      it.only("Register a new user", () => {
        // Click account
        // Click login
        // Click Not yet a customer?
        // Input email
        // Input password
        // Input repeat password
        // Input Security Question - Your favorite movie?
        // Input Answer to security question
        // Click Register
        // Validate that we on login page - we email and password field should be visible
      });

  });