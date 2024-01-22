import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import {
  TextareaAutosizeElement,
  useForm,
  FormContainer,
  TextFieldElement,
} from 'react-hook-form-mui';

import { AutocompleteTagElement } from '@/components/share-components';

import { generalFormSchema } from '../../schemas';
import { GeneralForm } from '../../types';

export const RuleGeneral = () => {
  const form = useForm<GeneralForm>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      tags: [{ id: '1', label: 'Index-1' }],
    },
  });

  const onSubmit = (data: GeneralForm) => {
    console.log(data);
  };

  return (
    <FormContainer
      onSuccess={onSubmit}
      formContext={form}
    >
      <Stack spacing={3}>
        <TextFieldElement
          name="name"
          required
          label="Name Rule"
        />

        <TextareaAutosizeElement
          rows={3}
          name="description"
          label="Description"
        />

        <AutocompleteTagElement
          name="tags"
          label="Tags"
          options={Array.from({ length: 10 }).map(
            (_, index) => ({
              id: (index + 1).toString(),
              label: `Index-${index + 1}`,
            })
          )}
        />

        {/* <SelectElement
          label="Indices"
          required
          name="indices"
          valueKey="value"
          options={[
            {
              value: '1',
              label: 'Label 1',
            },
            {
              value: '2',
              label: 'label 2',
            },
          ]}
        /> */}

        <TextareaAutosizeElement
          rows={3}
          name="query"
          label="Query"
        />

        <AutocompleteTagElement
          name="groupBy"
          label="Group By"
          options={Array.from({ length: 10 }).map(
            (_, index) => ({
              id: (index + 1).toString(),
              label: `Index-${index + 1}`,
            })
          )}
        />

        {/* <Button type="submit">Submit</Button> */}
      </Stack>
    </FormContainer>
  );
};
