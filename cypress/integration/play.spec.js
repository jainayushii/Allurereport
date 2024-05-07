//const { expect } = require("chai");

describe("Login and Add New Client Test", () => {

  before(()=>{
    cy.preserveOnce('dpm','disabled')
  })
it('login and check deals',()=>{
  cy.visit('https://business.bt.com/products/broadband-and-internet/deals/')
  cy.wait(10000)
  // cy.get('.pdynamicbutton').within(()=>{
  //   cy.get('.call').click();
  // })

  cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  cy.get('//input[id="ac-postcode"]').type('SP20AX');
  cy.wait(5000)
  cy.get('ul[data-testid="dropdown-list"]').within(()=>{
    cy.get('button[data-testid="dropdown-item"]').eq(1).click();
    cy.get('button[data-testid="next-button"]').click();
    cy.get('.arc-Button-inner').click();
    cy.wait(20000)
    cy.contains('Benefits offered with  BT Business  broadband.').should('be.visible')
  })

})



})


  // it("should login, add a new client, and verify search results", () => {
  //   cy.visit("https://www.google.com");
  //   cy.fixture('example.json').then((data)=>{

  //       cy.log(data.name)
  //   })
 


  //  })
  // });



