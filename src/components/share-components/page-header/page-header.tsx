import { Stack, Typography } from '@mui/material';

type PageHeaderProps = {
  title: string | React.ReactNode;
  extra?: React.ReactNode;
};

export const PageHeader = ({
  title,
  extra,
}: PageHeaderProps) => {
  return (
    <Stack
      sx={{
        mb: 6,
        backgroundColor: 'transparent',
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h4">{title}</Typography>
      {extra}
    </Stack>
  );
};
