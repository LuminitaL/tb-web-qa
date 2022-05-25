export class ProducerPO {
  /**
   * @name findAndClick
   * @description
   * Find and click on element.
   *
   * @param {string} locator Locator of needed element.
   * @param {string} findLocator Locator of needed element.
   */
  findAndClick(locator, findLocator) {
    cy.get(locator).eq(0).find(findLocator).click();
  }

  /**
   * @name clearAndType
   * @description
   * Find and type on element from iframe
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  clearAndType(locator, value) {
    cy.get(locator).clear({ force: true }).type(value);
  }
}
