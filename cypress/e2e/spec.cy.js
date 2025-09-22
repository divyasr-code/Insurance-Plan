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




    it('Story 12: G-H-V Flow - Access Health Insurance from General dropdown', () => {
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.clickHealthInsuranceLabel();
  });
  });
});