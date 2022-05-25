export class DashboardPO {
  /**
   * @name findAndClick
   * @description
   * Find and click on element from iframe
   *
   * @param {string} iframeLocator Locator of needed iframe.
   * @param {string} findLocator Locator of needed element.
   */
  findAndClick(iframeLocator, findLocator) {
    cy.iframe(iframeLocator).find(findLocator).click();
  }

  /**
   * @name findAndType
   * @description
   * Find and type on element from iframe
   *
   * @param {string} iframeLocator Locator of needed iframe.
   * @param {string} findLocator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  findAndType(iframeLocator, findLocator, value) {
    cy.iframe(iframeLocator).find(findLocator).clear().type(value);
  }

  /**
   * @name findAndContain
   * @description
   * Find an element from iframe and check if is containing needed value
   *
   * @param {string} iframeLocator Locator of needed iframe.
   * @param {string} findLocator Locator of needed element.
   * @param {string} titleLocator Locator of title element.
   * @param {string} value Value to assert against locator.
   */
  findAndContain(iframeLocator, findLocator, titleLocator, value) {
    cy.iframe(iframeLocator)
      .find(findLocator)
      .eq(1)
      .find(titleLocator)
      .contains(value);
  }

  /**
   * @name removeAttrAndClick
   * @description
   * Remove attribute and click
   *
   * @param {string} iframeLocator Locator of needed iframe.
   * @param {string} findLocator Locator of needed element.
   */
  removeAttrAndClick(iframeLocator, findLocator) {
    cy.iframe(iframeLocator)
      .find(findLocator)
      .eq(0)
      .invoke("removeAttr", "target")
      .click({ force: true });
  }

  /**
   * @name findAndTypeOnChildren
   * @description
   * Find and type on children
   *
   * @param {string} iframeLocator Locator of needed iframe.
   * @param {string} findLocator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  findAndTypeOnChildren(iframeLocator, findLocator, value) {
    cy.iframe(iframeLocator)
      .find(findLocator)
      .clear({ force: true })
      .eq(0)
      .type(value);
  }
}
