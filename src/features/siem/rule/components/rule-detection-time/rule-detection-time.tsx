import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import {
  useForm,
  FormContainer,
  TextFieldElement,
} from 'react-hook-form-mui';

import {
  DetectionTime,
  detectionTimeSchema,
} from '../..';

export const RuleDetectionTime = () => {
  const form = useForm<DetectionTime>({
    resolver: zodResolver(detectionTimeSchema),
  });

  const onSubmit = (data: DetectionTime) => {
    console.log(data);
  };

  return (
    <FormContainer
      onSuccess={onSubmit}
      formContext={form}
    >
      <Stack columnGap={3} direction="row">
        <TextFieldElement
          label="Every"
          name="every"
          required
        />
        <TextFieldElement label="Minute" name="unit" />
      </Stack>
      {/* <Button type="submit" fullWidth sx={{ my: 1 }}>
        Submit
      </Button> */}
    </FormContainer>
  );
};
