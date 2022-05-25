import { credentials } from "../data";
import { dashboardLocators } from "../locators";
import { DashboardPO } from "../page-objects";

describe("Smoke test cases for Tagboard Dashboard ", () => {
  let dashboardPO = null;

  beforeEach(() => {
    dashboardPO = new DashboardPO();
    dashboardPO.navigateTo();
    dashboardPO.click(dashboardLocators.signInButton);
    dashboardPO.type(dashboardLocators.emailInput, credentials.email);
    dashboardPO.type(dashboardLocators.passwordInput, credentials.password);
    dashboardPO.click(dashboardLocators.submitButton);
  });

  it("Create a new tagboard and validate if it exists", () => {
    dashboardPO.findAndClick(
      dashboardLocators.tagboardsIframe,
      dashboardLocators.newTagboardButton
    );
    dashboardPO.findAndType(
      dashboardLocators.tagboardsIframe,
      dashboardLocators.nameInput,
      "New Tagboard"
    );
    dashboardPO.findAndType(
      dashboardLocators.tagboardsIframe,
      dashboardLocators.descriptionInput,
      "New Tagboard description"
    );

    dashboardPO.findAndClick(
      dashboardLocators.tagboardsIframe,
      dashboardLocators.createTagboardButton
    );

    dashboardPO.findAndContain(
      dashboardLocators.tagboardsIframe,
      dashboardLocators.tableRows,
      dashboardLocators.tagboardTitle,
      "New Tagboard"
    );
  });

  it("Create a new theme and validate if it exists", () => {
    dashboardPO.click(dashboardLocators.themesButton);
    dashboardPO.findAndClick(
      dashboardLocators.myThemesIframe,
      dashboardLocators.newThemeButton
    );
    dashboardPO.removeAttrAndClick(
      dashboardLocators.myThemesIframe,
      dashboardLocators.chooseThemes
    );
    dashboardPO.findAndTypeOnChildren(
      dashboardLocators.myThemesIframe,
      dashboardLocators.themeTitleInput,
      "New Theme"
    );

    dashboardPO.findAndClick(
      dashboardLocators.myThemesIframe,
      dashboardLocators.savePanelButton
    );

    dashboardPO.reload();

    dashboardPO.click(dashboardLocators.themesButton);

    dashboardPO.findAndContain(
      dashboardLocators.myThemesIframe,
      dashboardLocators.tableRows,
      dashboardLocators.themeTitle,
      "New Theme"
    );
  });

  it("Create a new panel and validate if it exists", () => {
    dashboardPO.click(dashboardLocators.panelButton);
    dashboardPO.findAndClick(
      dashboardLocators.panelIframe,
      dashboardLocators.newPanelButton
    );

    dashboardPO.removeAttrAndClick(
      dashboardLocators.panelIframe,
      dashboardLocators.choosePanel
    );
    dashboardPO.findAndTypeOnChildren(
      dashboardLocators.panelIframe,
      dashboardLocators.panelTitleInput,
      "New Smart Panel"
    );

    dashboardPO.findAndClick(
      dashboardLocators.panelIframe,
      dashboardLocators.savePanelButton
    );

    dashboardPO.reload();

    dashboardPO.click(dashboardLocators.panelButton);

    dashboardPO.findAndContain(
      dashboardLocators.panelIframe,
      dashboardLocators.tableRows,
      dashboardLocators.panelTitle,
      "New Smart Panel"
    );
  });
});
