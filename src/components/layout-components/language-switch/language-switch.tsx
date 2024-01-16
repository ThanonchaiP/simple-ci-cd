import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { usePopover } from '@/hooks/use-popover';

import { LanguagePopover } from './language-popover';

type Language = 'en' | 'th';

const languages: Record<Language, string> = {
  en: '/assets/flags/flag-uk.svg',
  th: '/assets/flags/flag-de.svg',
};

export const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();
  const popover = usePopover<HTMLButtonElement>();

  const flag = languages[i18n.language as Language];

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
