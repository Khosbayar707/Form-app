export const ValidateStepOne = (form, currentStep) => {
  let isValid = true;
  const newErrors = {
    firstname: "",
    lastname: "",
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
  };

  const containsNumber = (value) => /\d/.test(value);

  if (currentStep === 1) {
    if (!form.firstname) {
      isValid = false;
      newErrors.firstname = "Нэр бичнэ үү.";
    } else if (containsNumber(form.firstname)) {
      isValid = false;
      newErrors.firstname = "Зөвхөн үсэг ашиглана уу.";
    }

    if (!form.lastname) {
      isValid = false;
      newErrors.lastname = "Нэр бичнэ үү.";
    } else if (containsNumber(form.lastname)) {
      isValid = false;
      newErrors.lastname = "Зөвхөн үсэг ашиглана уу.";
    }

    if (!form.username) {
      isValid = false;
      newErrors.username = "Usename оруулна уу.";
    }
  }

  if (currentStep === 2) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailCheck.test(form.mail)) {
      isValid = false;
      newErrors.mail = "Зөв и-мэйл хаяг оруулна уу.";
    }

    if (form.password.length <= 7) {
      isValid = false;
      newErrors.password = "Нууц үг 8-аас дээш оронтой байх шаардлагатай.";
    }

    if (form.password !== form.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = "Нууц үгээ шалгана уу.";
    }
  }

  return { isValid, newErrors };
};
