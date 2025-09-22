import { TravelInsurancePage } from '../support/pageobjectmodel/FamilyInsurance';
import { HealthInsurancePage } from '../support/pageobject/HealthInsurance';

describe('Travel Insurance Test Suite', () => {
  travelPage = new TravelInsurancePage();

  it('Find student travel insurance for 2 people (Europe), display 3 lowest plans', () => {
    cy.on('uncaught:exception', () => false);

    //1st user story
    travelPage.visitHomePage();
    travelPage.navigateToTravelInsurance();
    travelPage.selectSingleTripOption();
    travelPage.selectEuropeanCountry()

    travelPage.fillTravelDatesAndDuration(); 

    travelPage.selectTravellersAndEnterMobile();
 
    travelPage.enterTravellerDOBs();

    
    travelPage.fillTravellerForms();

  });
});

describe('GoDigit Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('Car insurance test cases', () => {
    //1 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
  
  });
});
describe('GoDigit Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('Car insurance test cases', () => {
    //1 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
    //2 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.enterQuoteDetails(testData.registrationNumber, testData.mobileNumber);
    travelPlan.clickGetQuoteButton();
    travelPlan.selectCarModel(testData.carModelId);
    travelPlan.selectFuelType();
    travelPlan.selectVariantAndDate(testData.variantId, testData.yearId, testData.monthId);
    travelPlan.selectCity(testData.cityId, testData.cityName);
    travelPlan.continueToDetails();
  });

  //Bhavana 1st user story
  it('Story 12: G-H-V Flow - Access Health Insurance from General dropdown', () => {
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.clickHealthInsuranceLabel();
  });
 //Bhavana 2nd user story
  it('Story 13: Extract and store all Health Insurance submenu items', () => {
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.clickHealthInsuranceLabel();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.extractSubmenuItems();
  });

});