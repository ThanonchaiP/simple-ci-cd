'use client';

import {
  Container,
  styled,
  Box,
  Stack,
  Link,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

const Wrapper = styled('div')({
  backgroundImage: `url(/img/gradient-bg.svg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  backgroundColor: `rgb(255, 255, 255)`,
  height: '100vh',
});

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1100,
        }}
      >
        <Container maxWidth={'lg'}>
          <Stack
            sx={{
              height: 64,
              flexDirection: 'row',
            }}
          >
            <Link
              sx={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '8px',
                fontSize: 14,
                fontWeight: 700,
                color: '#000',
              }}
              component={NextLink}
              href="/"
            >
              <Image
                src="/img/onefence-logo-sm.png"
                width={24}
                height={24}
                alt="โลโก้ onefence"
              />
              <Box sx={{ display: 'flex', gap: '4px' }}>
                OneFence
                <span style={{ color: '#3364FD' }}>
                  Web Portal
                </span>
              </Box>
            </Link>
          </Stack>
        </Container>
      </Box>

      {children}
    </Wrapper>
  );
};

export default AuthLayout;
