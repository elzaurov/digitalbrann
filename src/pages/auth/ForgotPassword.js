import React from "react";

import AuthLayout from "layouts/Auth";

import ForgotPasswordForm from "components/auth/ForgotPasswordForm";
import BrannTitle from "components/ui/typo/Title";
import BrannPaper from "components/ui/box/Paper";
import CenteredContainer from "components/ui/box/CenteredContainer";
import Box from "components/ui/box/Box";
import BrannLink from "components/ui/typo/Link";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <CenteredContainer>
        <Box width={350}>
          <BrannTitle text="Glemt Passord" align="center" />
          <BrannPaper>
            <ForgotPasswordForm />
          </BrannPaper>
          <Box marginTop={16}>
            Har du ingen konto?{" "}
            <BrannLink href="/autentisering/logginn">Logg inn her</BrannLink>
          </Box>
        </Box>
      </CenteredContainer>
    </AuthLayout>
  );
};

export default ForgotPassword;
