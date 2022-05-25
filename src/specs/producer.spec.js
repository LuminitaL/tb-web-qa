import { AppPO, ProducerPO } from "../page-objects";
import { appLocators, producerLocators } from "../locators";
import { credentials } from "../data";

describe("Smoke test cases for Tagboard Producer ", () => {
  let appPO = null;
  let producerPO = null;

  beforeEach(() => {
    appPO = new AppPO();
    producerPO = new ProducerPO();

    appPO.navigateTo("https://producer.tagboard.com");
    appPO.click(appLocators.signInButton);
    appPO.type(appLocators.emailInput, credentials.email);
    appPO.type(appLocators.passwordInput, credentials.password);
    appPO.click(appLocators.submitButton);
  });

  it("Create New Production", () => {
    appPO.click(producerLocators.addNewProductionButton);
    producerPO.findAndClick(
      producerLocators.addItemButton,
      producerLocators.addIcon
    );
    appPO.click(producerLocators.tabLocator(2));
    //TODO: implement drag and drop feature
    appPO.click(producerLocators.tabLocator(3));
    producerPO.findAndClick(
      producerLocators.addItemButton,
      producerLocators.addIcon
    );
    appPO.click(producerLocators.editButton);
    producerPO.clearAndType(producerLocators.productionTitle, "New Production");

    appPO.click(producerLocators.saveButton);
    appPO.contains(producerLocators.successMessage, "Success");
  });
});
