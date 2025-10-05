export default () => ({
  email: {
    config: {
      provider: "@strapi/provider-email-nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "fawascm303@gmail.com",
          pass: "nbrn vckr eiyv axqz",
        },
      },
      settings: {
        defaultFrom: "fawascm303@gmail.com",
        defaultReplyTo: "fawascm303@gmail.com",
      },
    },
  },
  "users-permissions": {
    config: {
      register: {
        allowedFields: [
          // Custom fields you want to accept at registration:
          "DOB",
          "EmiratesID",
          "Nationality",
          "MobileNo",
          "LicenseExpiry",
          "City",
          "DriverLicenseNo",
          "OffRoadLevel",
          "VehicalMakeModel",
          "Year",
          "Color",
          "Mods",
          "PlateNo",
          "EmergencyContactName",
          "EmergencyContactNo",
          "Relationship",
          "RecoveryGear",
          "FireExt",
          "FirstAidKit",
          "Flag",
          "Radio",
          "RecoveryRope",
          "AirCompressor",
          "SpareTire",

          // Optional extras if needed
          "Driving",
          "Medical",
        ],
      },
    },
  },
});