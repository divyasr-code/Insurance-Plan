import { TravelInsurancePage } from '../support/pageobjectmodel/FamilyInsurance';

describe('Travel Insurance Test Suite', () => {
  const travelPage = new TravelInsurancePage();

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

    

  });
});