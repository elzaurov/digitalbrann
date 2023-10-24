export const required = {
  required: true,
  message: "Feltet er påkrevd",
};

export const email = {
  type: "email",
  message: "Vennligst skriv inn en gyldig e-post",
};

export const min = {
  min: 6,
  message: "Passordet må være minst 6 tegn",
};

export const match = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("Passordene samsvarer ikke");
  },
});
