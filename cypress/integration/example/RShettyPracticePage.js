/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>

describe("Rahul Shetty Practice Page Simple Activities", () => {
  it("checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //you will work if you want to select specific checkbox with assertion
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption2").check();
    //for unchecking with assertion
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("#checkBoxOption2").uncheck();

    //check multiple checkbox --> box 1 and Box 2
    cy.get('input[type="checkbox"]').check(["option1", "option3"]);
    //uncheck
    cy.get('input[type="checkbox"]').uncheck(["option1", "option3"]);

    //check all the checkbox
    cy.get('input[type="checkbox"]').check().should("be.checked");
  });

  it("Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //can i identify the element based on tagname
    cy.get("select").select("Option1").should("have.value", "option1");
  });

  it("Dynamic Dropdown / Autocomplete", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#autocomplete").type("Ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() == "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });

  it("Radio Button", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //first radio button check
    cy.get('input[value="radio1"]').check();

    //second radio button checked and first unchecked
    cy.get('input[value="radio2"]').check().should("be.checked");
  });

  it("Hide & Show Text on Button Click", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //to check an element is visible in the webpage
    cy.get("#displayed-text").should("be.visible");

    //if i click on an element "Hide" button
    cy.get("#hide-textbox").click();
    //this will check if text hide or not
    cy.get("#displayed-text").should("not.be.visible");

    //click on show agian
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });

  it("Alert with one option to click", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //when an alert is present on webpage cypress automatically handles it
    cy.get("#alertbtn").click();
    //cypress automatically clicks
    //but still i want to apply assserttionon the same
    cy.on("window:alert", (message) => {
      expect(message).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
      //you want to click on OK or Cancel
      return true; //for clicking yes orpositive
      //return false // for clicking cancel
    });
  });

  it("Alert with two option to click", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //when an alert is present on webpage cypress automatically handles it
    cy.get("#confirmbtn").click();
    //cypress automatically clicks
    //but still i want to apply assserttionon the same
    cy.on("window:confirm", (message) => {
      expect(message).to.equal("Hello , Are you sure you want to confirm?");
      //you want to click on OK or Cancel
      // return true; //for clicking yes orpositive
      return false; // for clicking cancel
    });
  });

  it("Multiple Tabs Working in one Tab", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //cypress doesnt support multiple tabs test like selenium
    //you will be on a single domain
    //cypresswhy you want to open two diff tabs for diff domain
    //incase if you are working on same domain then open in same tab

    cy.get("#opentab").invoke("removeAttr", "target").click();
  });

  it("Multiple Browser Working", () => {
    //we dont pop-up
    //cypress it should of same origin

    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.visit("https://www.google.com");
    //above way is wrong

    //use below format
    cy.origin("https://rahulshettyacademy.com/AutomationPractice/", () => {
      cy.visit("/");
      //can do anything here
    });
    cy.origin("https://automationteststore.com/", () => {
      cy.visit("/");
      //perform test here
    });
    cy.origin("https://course.masaischool.com/dashboard", () => {
      cy.visit("/");
      //perform test here
    });
  });

  it("Mouser Hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true }); //force click

    cy.get("#mousehover").trigger("mouseover");
    cy.contains("Reload").click({ force: true });
  });
    
  it('Double Click and Right Click', () => {
    cy.visit('https://demoqa.com/buttons');

    cy.get('#doubleClickBtn').dblclick();
    cy.get('#doubleClickMessage').should('have.text','You have done a double click')
    
    
    cy.get('#rightClickBtn').rightclick();
    cy.get('#rightClickMessage').should('have.text','You have done a right click')
    
    cy.get('#EPh9W').click();
    cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click')
  });
  
  it("Web Tables Next", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.xpath("//tbody/tr/td[2]").each(($el, index, $list) => {
        const text = $el.text();
        if (text.includes("Python")) {
            //first()--> will find first element
            //last()--> will find last element
            //next()--> will find next element
            cy.wrap($el).next().then((price) => {
                cy.log(price.text());
            })
        }
    })
  
  });
  
  it("Web Tables Prev", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.xpath("//tbody/tr/td[3]").each(($el, index, $list) => {
        const text = $el.text();
        if (text.includes("35")) {
            //first()--> will find first element
            //last()--> will find last element
            //next()--> will find next element
            cy.wrap($el).prev().then((text) => {
                cy.log(text.text());
            })
        }
    })
  
});

});
