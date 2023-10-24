import React from "react";

import AuthLayout from "layouts/Auth";

import ResetPasswordForm from "components/auth/ResetPasswordForm";
import BrannTitle from "components/ui/typo/Title";
import BrannPaper from "components/ui/box/Paper";
import CenteredContainer from "components/ui/box/CenteredContainer";
import Box from "components/ui/box/Box";
import BrannLink from "components/ui/typo/Link";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <CenteredContainer>
        <Box width={350}>
          <BrannTitle text="Tilbakestill Passord" align="center" />
          <BrannPaper>
            <ResetPasswordForm />
          </BrannPaper>
          <Box marginTop={16}>
            Har du allerede en konto?{" "}
            <BrannLink href="/autentisering/logginn">Logg inn her</BrannLink>
          </Box>
        </Box>
      </CenteredContainer>
    </AuthLayout>
  );
};

export default ResetPassword;
