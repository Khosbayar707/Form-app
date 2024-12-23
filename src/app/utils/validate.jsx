export const ValidateStepOne = (form, currentStep) => {
  let isValid = true;
  let newErrors = {
    firstname: "",
    lastname: "",
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
  };
  if (currentStep === 1) {
    if (form.firstname === "") {
      isValid = false;
      newErrors.firstname = "Нэрээ бичнэ үү";
    }
    if (
      form.firstname?.includes("1") ||
      form.firstname?.includes("2") ||
      form.firstname?.includes("3") ||
      form.firstname?.includes("4") ||
      form.firstname?.includes("5") ||
      form.firstname?.includes("6") ||
      form.firstname?.includes("7") ||
      form.firstname?.includes("8") ||
      form.firstname?.includes("9") ||
      form.firstname?.includes("0")
    ) {
      isValid = false;
      newErrors.firstname = "Зөвхөн үсэг ашиглана уу";
    }
    if (form.lastname === "") {
      isValid = false;
      newErrors.lastname = "Нэрээ бичнэ үү";
    }
    if (
      form.lastname?.includes("1") ||
      form.lastname?.includes("2") ||
      form.lastname?.includes("3") ||
      form.lastname?.includes("4") ||
      form.lastname?.includes("5") ||
      form.lastname?.includes("6") ||
      form.lastname?.includes("7") ||
      form.lastname?.includes("8") ||
      form.lastname?.includes("9") ||
      form.lastname?.includes("0")
    ) {
      isValid = false;
      newErrors.lastname = "Зөвхөн үсэг ашиглана уу";
    }
    if (form.username === "") {
      isValid = false;
      newErrors.username = "Заавал шалгана уу";
    }
  }

  if (currentStep === 2) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(form.mail)) {
      isValid = false;
      newErrors.mail = "Зөв и-мэйл хаяг оруулна уу";
    }
    if (form.password !== form.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = "Нууц үгээ шалгана уу";
    }
    if (form.password.length <= 7) {
      isValid = false;
      newErrors.password = "8-аас дээш оронтой байх шаардлагатай";
    }
  }
  return { isValid, newErrors };
};
