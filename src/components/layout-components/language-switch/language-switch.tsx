import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import type { FC } from 'react';

import { usePopover } from '@/hooks/use-popover';

import { LanguagePopover } from './language-popover';

type Language = 'en' | 'de' | 'es';

const languages: Record<Language, string> = {
  en: '/assets/flags/flag-uk.svg',
  de: '/assets/flags/flag-de.svg',
  es: '/assets/flags/flag-es.svg',
};

export const LanguageSwitch: FC = () => {
  const popover = usePopover<HTMLButtonElement>();

  const flag = languages.en;

  return (
    <>
      <Tooltip title="Language">
        <IconButton
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
        >
          <Box
            sx={{
              width: 28,
              height: 28,
              '& img': {
                width: '100%',
              },
            }}
          >
            <Image
              width={28}
              height={28}
              src={flag}
              alt="Language"
            />
          </Box>
        </IconButton>
      </Tooltip>
      <LanguagePopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </>
  );
};
