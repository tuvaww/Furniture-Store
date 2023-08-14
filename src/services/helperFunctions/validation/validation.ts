export const handleValidateName = (name: string) => {
  const regEx = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}$/;
  if (!regEx.test(name)) {
    return false;
  } else {
    return true;
  }
};

export const handleValidateStringOnlyAlphabetic = (string: string) => {
  const regEx = /^[a-zA-Z]+$/;

  if (!regEx.test(string)) {
    return false;
  } else {
    return true;
  }
};

export const handleValidateZipCode = (zip: string) => {
  const regEx = /\b\d{5}\b/;

  if (!regEx.test(zip)) {
    return false;
  } else {
    return true;
  }
};
