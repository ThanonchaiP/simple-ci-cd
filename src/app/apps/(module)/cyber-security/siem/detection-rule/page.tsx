'use client';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

import { PageHeader } from '@/components/share-components';
import { RouterLink } from '@/components/util-components';
import { RuleList } from '@/features/siem';
import { usePathname } from '@/hooks';

const DetectionRulePage = () => {
  const pathname = usePathname();

  return (
    <>
      <PageHeader
        title="Detection Rule"
        extra={
          <Button
            LinkComponent={RouterLink}
            href={`${pathname}/add`}
            startIcon={<AddIcon />}
            variant="contained"
          >
            Add
          </Button>
        }
      />

      <RuleList />
    </>
  );
};

export default DetectionRulePage;
