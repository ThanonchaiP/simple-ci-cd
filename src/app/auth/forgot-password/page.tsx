'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  TextFieldElement,
} from 'react-hook-form-mui';
import { z } from 'zod';

export const credentialSchema = z.object({
  email: z.string().email(),
});

export type Credential = z.infer<typeof credentialSchema>;

const ForgotPassword = () => {
  const form = useForm<Credential>({
    resolver: zodResolver(credentialSchema),
  });

  const onSubmit = (data: Credential) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        maxWidth: '552px',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Link
        component={NextLink}
        href="/auth/login"
        sx={{
          textDecoration: 'none',
          display: 'flex',
          width: 'fit-content',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <ArrowBackIcon />
        Back
      </Link>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '32px 24px',
          width: '100%',
          mt: '32px',
          boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 30px',
        }}
      >
        <Typography
          sx={{ fontSize: 18, mb: 4 }}
          fontWeight={700}
        >
          Forgot password
        </Typography>

        <FormContainer
          formContext={form}
          onSuccess={onSubmit}
        >
          <TextFieldElement
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
          />
          <LoadingButton
            data-testid="sign-in-button"
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type="submit"
            variant="contained"
          >
            Send reset link
          </LoadingButton>
        </FormContainer>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
