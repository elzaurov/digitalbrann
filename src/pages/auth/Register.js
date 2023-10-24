import React, { useState } from "react";

import RegistrationLayout from "layouts/Registration";

import BrannTitle from "components/ui/typo/Title";
import BrannPaper from "components/ui/box/Paper";
import CenteredContainer from "components/ui/box/CenteredContainer";
import Box from "components/ui/box/Box";
import BrannText from "components/ui/typo/Text";
import BuildingForm from "components/auth/register/BuildingForm";
import RegisterForm from "components/auth/register/RegisterForm";
import InstallationForm from "components/auth/register/InstallationForm";
import PasswordForm from "components/auth/register/PasswordForm";

export default function Register() {
  const [step, setStep] = useState(0);
  const forms = [
    {
      title: "Opprett bygg",
      caption: "Lorem ipsum dolor sit amet consectetur ipsim dolor",
      form: <BuildingForm updateStep={setStep} />,
    },
    {
      title: "Eier av bygget",
      caption: "Lorem ipsum dolor sit amet consectetur ipsim dolor",
      form: <RegisterForm updateStep={setStep} />,
    },
    {
      title: "Branntekniske installasjoner",
      caption: "Lorem ipsum dolor sit amet consectetur ipsim dolor",
      form: <InstallationForm updateStep={setStep} />,
    },
    {
      title: "Opprett passord",
      caption: "Lorem ipsum dolor sit amet consectetur ipsim dolor",
      form: <PasswordForm updateStep={setStep} />,
    },
  ];
  return (
    <RegistrationLayout step={step}>
      <CenteredContainer>
        <Box width={450}>
          <BrannTitle text={forms[step].title} align="center" />
          <BrannText text={forms[step].caption} align="center" />
          <BrannPaper marginTop={16}>{forms[step].form}</BrannPaper>
        </Box>
      </CenteredContainer>
    </RegistrationLayout>
  );
}
