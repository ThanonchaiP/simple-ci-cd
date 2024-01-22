'use client';

import AddIcon from '@mui/icons-material/Add';
import { Button, Card } from '@mui/material';

import { PageHeader } from '@/components/share-components';
import { RouterLink } from '@/components/util-components';
import { OrganizationList } from '@/features/threat-intelligence';
import { usePathname, useRouter } from '@/hooks';

const DetectionRulePage = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <PageHeader
        title="Organization"
        extra={
          <Button
            LinkComponent={RouterLink}
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => router.push(`${pathname}/add`)}
          >
            Add
          </Button>
        }
      />

      <Card>
        <OrganizationList />
      </Card>
    </>
  );
};

export default DetectionRulePage;
