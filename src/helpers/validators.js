import * as Yup from "yup";

const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export const signInWithEmailValidationSchema = Yup.object().shape({
  username_email: Yup.string()
    .required("Email Address is required.")
    .email("Invalid Email."),
  password: Yup.string()
    .min(8, "Should be at least 8 characters.")
    .required("Password Required."),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  username_email: Yup.string()
    .required("Email Address is required.")
    .email("Invalid Email."),
});

export const newPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email Address is required.")
    .email("Invalid Email."),
  code: Yup.string().required("Code is required."),
  password: Yup.string()
    .min(8, "Should be at least 8 characters.")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      "Must contain at least one uppercase letter and one digit"
    )
    .required("Password Required."),
  confirmPassword: Yup.string()
    .min(8, "Should be at least 8 characters.")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Required."),
});

export const addUserValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("First Name Required."),
  lastName: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Last Name Required."),
  phoneNumber: Yup.string().required("Phone Number Required."),
  emailAddress: Yup.string()
    .required("Email Address is required.")
    .email("Invalid Email."),
  userName: Yup.string().required("User Name Required."),
  roleId: Yup.string().required("Role Required."),
});

export const addUnitValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Name Required."),
  location: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Location Required."),
});

export const addGarageValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Name Required."),
  location: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Location Required."),
  status: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Status Required."),
});

export const assignUnitAdminValidationSchema = Yup.object().shape({
  admin: Yup.string()
    .required("Name Required."),
});

export const addDriverValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Should be at least 3 characters.")
    .required("Name Required."),
  contact: Yup.string().required("Contact Required."),
  email: Yup.string().required("Email is required.").email("Invalid Email."),
  driverNumber: Yup.string().required("Number Required."),
});

export const addVehicleValidationSchema = Yup.object().shape({
  regNo: Yup.string()
    .min(7, "Should beb 7 characters.")
    .max(7, "Should beb 7 characters.")
    .required("Reg No. Required."),
  vehicleMakeId: Yup.string().required("Make Required."),
  vehicleTypeId: Yup.string().required("Type Required."),
  yearOfManufacture: Yup.string().required("Year of Manufacture Required."),
  engineNo: Yup.string().required("Engine No. Required."),
  unitId: Yup.string().required("Unit Required."),
  regBook: Yup.string().required("Reg. Book Holder Required."),
  // chasisNumber: Yup.string().required("Chasis No. Required."),
  imageUrl: Yup.string().required("Form Required."),
  dateOfAcquisition: Yup.string().required("Date of Acquisition Required."),
});

export const addServicingRequestValidationSchema = Yup.object().shape({
  note: Yup.string().required("Note is required.")
});


