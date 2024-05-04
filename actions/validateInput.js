export const validateInput = inputData => {
  const mobilePattern = /^\+?[0-9()-]{10}$/; // Corrected regular expression to match exactly 10 digits
  const landlinePattern = /^\d*$/;
  const error = {};
  if (!inputData.name) {
    error.name = 'Name is required';
  }
  if (!inputData.mobileNo || !mobilePattern.test(inputData.mobileNo)) {
    error.mobileNo =
      'Mobile Number is required and should be exactly 10 digits';
  }
  if (inputData.landlineNo && !landlinePattern.test(inputData.landlineNo)) {
    error.landlineNo = 'Landline number should be exactly 10 digits';
  }
  return error;
};
