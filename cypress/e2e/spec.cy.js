import travelPlan from '../support/pageobjectmodel/CarInsurance';
import { FamilyInsurancePage } from '../support/pageobjectmodel/FamilyInsurance';
import HealthInsurancePage from '../support/pageobjectmodel/HealthInsurance';
import testData from '../fixtures/data.json';

describe('Family Travel Insurance Test Suite', () => {
  const travelPage = new FamilyInsurancePage();
 
  it('Find student travel insurance for 2 people (Europe), display 3 lowest plans', () => {
    cy.on('uncaught:exception', () => false);
    //1st user story
    travelPage.visitHomePage();
    travelPage.navigateToTravelInsurance();
    travelPage.selectSingleTripOption();
    //2nd user story
    travelPage.selectEuropeanCountry()
    travelPage.fillTravelDatesAndDuration();
    //3rd user story
    travelPage.selectTravellersAndEnterMobile();
    travelPage.enterTravellerDOBs();
    //4th user story
    travelPage.logThreeLowestPlans(); 
    //5th user story
    travelPage.fillTravellerForms();
    //6th user story
    travelPage.validateFormFields();
    //7th user story
    travelPage.submitPayment();
  });
});

describe('Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('Car insurance test cases', () => {
    //8th user story
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
    //9th user story
    travelPlan.navigateToCarInsurance();
    travelPlan.enterQuoteDetails(testData.registrationNumber, testData.mobileNumber);
    travelPlan.clickGetQuoteButton();
    travelPlan.selectCarModel(testData.carModelId);
    travelPlan.selectFuelType();
    travelPlan.selectVariantAndDate(testData.variantId, testData.yearId, testData.monthId);
    travelPlan.selectCity(testData.cityId, testData.cityName);
    travelPlan.continueToDetails();
    //10th user story
    travelPlan.enterInvalidContactDetails();
    //11th user story
    travelPlan.enterValidContactDetails(testData.ownerName, testData.mobileNumber, testData.email);
    travelPlan.selectInsurer(testData.insurerName);
    travelPlan.enterNomineeDetails(testData.nomineeName, testData.nomineeRelation);
    travelPlan.enterVehicleDetails(testData.engineNumber, testData.chassisNumber);
    travelPlan.addOptionalAddon();
    travelPlan.finalPayNow();
  });
});

describe('Health Insurance Navigation Test Suite', () => {
  beforeEach(() => {
    HealthInsurancePage.visitHomePage();
  });
 
  it('Health Insurance test cases', () => {
    // user story 12
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.clickHealthInsuranceLabel();
    // user story 13
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.clickHealthInsuranceLabel();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.extractSubmenuItems();
    // user story 14
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.clickHealthInsuranceLabel();
    HealthInsurancePage.clickRightPanelHealthLink();
    HealthInsurancePage.validateHealthInsurancePage();
  });
 
});
