import { environment } from '../../environments/environment';

export const API_CONFIG = {
  authUrl: environment.authBaseUrl,
  login: environment.authBaseUrl + '/oauth/token',
  logout: environment.authBaseUrl + '/logout',
  getAllProfiles: environment.adminBaseUrl + '/getAllProfiles',
  getAllSections: environment.adminBaseUrl + '/getAllSections',

  // Contacts API
  getContacts: environment.contactsBaseUrl + '/getContacts',
  getContact: environment.contactsBaseUrl + '/getContact',
  createContact: environment.contactsBaseUrl + '/createContact',
  editContact: environment.contactsBaseUrl + '/editContact',
  deleteContact: environment.contactsBaseUrl + '/deleteContact',

  // Entrepreneur API
  urlBaseEntrepreneurs: environment.adminBaseUrl + '/entrepreneur/',
  getEntrepreneurs: environment.adminBaseUrl + '/entrepreneur/',
  getEntrepreneurPage: environment.adminBaseUrl + '/entrepreneur/page-query/',

  //invester API
  getInvestorsPage: environment.investorBaseUrl + '/getInvestors/',
  getInvestor: environment.investorBaseUrl +'/getInvestor/',
  createInvestor:environment.investorBaseUrl +'/createInvestor/',
  editInvestor:environment.investorBaseUrl +'/editInvestor/',
  deleteInvestor:environment.investorBaseUrl +'/deleteInvestor/',

  //RangeInvester API
  urlBaseRange: environment.adminBaseUrl + '/rangeInvester/getRangeInvestors',
  
  //ProfessionalProfile API
  urlProfessionalProfile: environment.adminBaseUrl + '/professionalProfile/',
  getPPage: environment.adminBaseUrl + '/professionalProfile/page-query/',

  //Startup API
  urlBaseStartUp: environment.adminBaseUrl + '/startup/',
  getStartupPage: environment.adminBaseUrl + '/startup/page-query/',

  //BusinessSector API
  urlBaseBusinessSector: environment.adminBaseUrl + '/businessSector/getBusinessSectors',


  //StartupState API
  urlBaseStartUpState: environment.adminBaseUrl + '/startupState/getStartupStates',
};
