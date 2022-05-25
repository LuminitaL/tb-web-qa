export class AppPO {
  /**
   * @name navigateTo
   * @description
   * Visit the url of the website
   *
   * @param {string} url url address of needed websites.
   */
  navigateTo(url) {
    cy.visit(url);
  }

  /**
   * @name click
   * @description
   * Click on elements
   *
   * @param {string} locator Locator of needed element.
   */
  click(locator) {
    cy.get(locator).click({ force: true });
  }

  /**
   * @name type
   * @description
   * Type into a DOM element
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  type(locator, value) {
    cy.get(locator).type(value);
  }

  /**
   * @name reload
   * @description
   * Reload the webpage
   */
  reload() {
    cy.reload();
  }

  /**
   * @name contains
   * @description
   * DOM elements should contain the text
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  contains(locator, value) {
    cy.get(locator).contains(value);
  }
}
