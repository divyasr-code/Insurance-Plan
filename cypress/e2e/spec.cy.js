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
<<<<<<< HEAD

    
=======
>>>>>>> d1bd457899f248857f9d4d3cc0657cfe90e5ee0c

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
<<<<<<< HEAD
=======

>>>>>>> 3cacd6efef0408bc4d619d871dadad4f09691694
describe('GoDigit Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('Car insurance test cases', () => {
    //1 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
<<<<<<< HEAD
  });

  //Bhavana 1st user story
  it('Story 12: G-H-V Flow - Access Health Insurance from General dropdown', () => {
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.clickHealthInsuranceLabel();
=======
  
>>>>>>> 3cacd6efef0408bc4d619d871dadad4f09691694
  });

});