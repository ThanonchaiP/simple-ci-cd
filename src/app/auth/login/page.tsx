'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  TextFieldElement,
} from 'react-hook-form-mui';

import {
  Credential,
  credentialSchema,
} from '@/features/auth';

const LoginPage = () => {
  const form = useForm<Credential>({
    resolver: zodResolver(credentialSchema),
  });

  const onSubmit = (data: Credential) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '32px 24px',
        maxWidth: '552px',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 30px',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography
        sx={{ fontSize: 18, mb: 4 }}
        fontWeight={700}
      >
        Login
      </Typography>
      <FormContainer
        formContext={form}
        onSuccess={onSubmit}
      >
        <Stack spacing={3}>
          <TextFieldElement
            autoFocus
            fullWidth
            name="email"
            label="Email Address"
            type="text"
            autoComplete="email"
          />
          <TextFieldElement
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Stack>
        <LoadingButton
          data-testid="sign-in-button"
          fullWidth
          size="large"
          sx={{ mt: 3 }}
          type="submit"
          variant="contained"
        >
          Login
        </LoadingButton>
      </FormContainer>

      <Link
        component={NextLink}
        href="/auth/forgot-password"
        variant="subtitle2"
        display="block"
        textAlign="center"
        sx={{
          mt: 2,
          textDecoration: 'none',
        }}
      >
        Forgot password?
      </Link>
    </Box>
  );
};

export default LoginPage;
