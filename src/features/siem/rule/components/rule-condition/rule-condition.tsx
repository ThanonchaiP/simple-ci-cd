import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, Grid, Stack } from '@mui/material';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
  useFieldArray,
  useForm,
} from 'react-hook-form-mui';

import {
  ConditionForm,
  conditionFormSchema,
} from '../..';

export const RuleConditions = () => {
  const form = useForm<ConditionForm>({
    resolver: zodResolver(conditionFormSchema),
    defaultValues: {
      test: [{ is: '', number: '', severity: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'test',
  });

  const onSubmit = (data: ConditionForm) => {
    console.log(data);
  };

  const appendForm = () => {
    append({ is: '', number: '', severity: '' });
  };

  return (
    <FormContainer
      onSuccess={onSubmit}
      formContext={form}
    >
      <Stack rowGap={3}>
        <Grid
          container
          spacing={3}
          sx={{ width: '100%' }}
        >
          <Grid item xs={4}>
            <SelectElement
              name="when"
              label="When"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <SelectElement
              name="field"
              label="Field"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ width: '100%' }}
        >
          <Grid item xs={4}>
            <TextFieldElement
              name="is"
              label="Is"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={8}>
            {fields.map((field, index) => (
              <Grid
                container
                key={field.id}
                spacing={3}
                sx={{
                  mb: 3,
                }}
              >
                <Grid item xs={6}>
                  <TextFieldElement
                    name={`test.${index}.number`}
                    label="Number Of Times"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextFieldElement
                    name={`test.${index}.severity`}
                    label="Severity"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <DeleteOutlineIcon
                    onClick={() =>
                      index === 0 ? {} : remove(index)
                    }
                    sx={{
                      cursor:
                        index > 0
                          ? 'pointer'
                          : 'not-allowed',
                      color: '#9DA4AE',
                    }}
                  />
                </Grid>
              </Grid>
            ))}

            <Button
              startIcon={<AddIcon />}
              variant="outlined"
              fullWidth
              sx={{ height: '100%', maxHeight: 53.13 }}
              onClick={appendForm}
            >
              Add
            </Button>
          </Grid>
        </Grid>

        {/* <Button type="submit">Submit</Button> */}
      </Stack>
    </FormContainer>
  );
};
