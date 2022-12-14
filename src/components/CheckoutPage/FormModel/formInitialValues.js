import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    acceptcondition,
    nameOnCard,
    cardNumber,
    cvv
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [acceptcondition.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [cvv.name]: ''
};
