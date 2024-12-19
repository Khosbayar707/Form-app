export const ValidateStepOne = (form, setCurrentStep) => {
  let isValid = true;
  let newErrors = { firstname: "", lastname: "", username: "", mail: "" };
  if (setCurrentStep === 1) {
    if (form.firstname === "") {
      isValid = false;
      newErrors.firstname = "Neree bichne vv";
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
      newErrors.firstname = "Zuwhun useg ashiglana uu";
    }
    if (form.lastname === "") {
      isValid = false;
      newErrors.lastname = "Neree bichne vv";
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
      newErrors.lastname = "Zuwhun useg ashiglana uu";
    }
    if (form.username === "") {
      isValid = false;
      newErrors.username = "Zaawal buglunu uu";
    }
  }
  if (form.firstname === "") {
    isValid = false;
    newErrors.firstname = "Neree bichne vv";
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
    newErrors.firstname = "Zuwhun useg ashiglana uu";
  }
  if (form.lastname === "") {
    isValid = false;
    newErrors.lastname = "Neree bichne vv";
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
    newErrors.lastname = "Zuwhun useg ashiglana uu";
  }
  if (form.username === "") {
    isValid = false;
    newErrors.username = "Zaawal buglunu uu";
  }

  if (setCurrentStep === 2) {
    if (form.mail?.includes("@")) {
      isValid = true;
    } else {
      isValid = false;
      newErrors.mail = "mailee shalgana uu";
    }
  }
  return { isValid, newErrors };
};
