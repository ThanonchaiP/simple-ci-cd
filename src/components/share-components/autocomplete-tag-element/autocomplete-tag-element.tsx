import { Chip, createFilterOptions } from '@mui/material';
import { ComponentProps } from 'react';
import { AutocompleteElement } from 'react-hook-form-mui';

export type AutocompleteTagElementProps = ComponentProps<
  typeof AutocompleteElement
>;

const filter =
  createFilterOptions<Record<string, unknown>>();

export const AutocompleteTagElement = ({
  ...props
}: AutocompleteTagElementProps) => {
  return (
    <AutocompleteElement
      multiple
      autocompleteProps={{
        freeSolo: true,
        clearOnBlur: true,
        handleHomeEndKeys: true,
        filterOptions: (options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue === option.label
          );

          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              label: `Add "${inputValue}"`,
              id: inputValue,
            });
          }

          return filtered;
        },
        renderTags: (value, getTagProps) => {
          return value.map((option, index: number) => {
            const newValue = typeof option === 'string';

            return (
              <Chip
                {...getTagProps({ index })}
                variant="outlined"
                label={
                  option?.inputValue
                    ? option.inputValue
                    : newValue
                      ? option
                      : option.label
                }
                key={newValue ? option : option.id}
              />
            );
          });
        },
      }}
      {...props}
    />
  );
};
