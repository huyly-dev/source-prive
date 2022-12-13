export interface IOrganizationData {
  name: string;
  phone: string;
  email: string;
  company: string;
  note: string;
  captcha: string;
  isMember: boolean;
}

export interface IOrganizationDataVM {
  name: string;
  phone_number: string;
  email: string;
  company: string;
  note: string;
  'g-recaptcha-response': string;
  is_coinhako_user: boolean;
}
