import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type DeleteModalProps = {
  open: boolean;
  identifier?: string;
  onDelete?: () => void;
  handleClose: () => void;
};

type DeleteForm = {
  name: string;
};

export const DeleteModal = ({
  open,
  identifier = 'DELETE',
  handleClose,
}: DeleteModalProps) => {
  const formSchema = z.object({
    name: z
      .string({
        required_error: `Please enter ${identifier}`,
      })
      .min(1, {
        message: `${identifier} cannot be empty`,
      })
      .refine((value) => value === identifier, {
        message: 'Text entered is not matching.',
      }),
  });

  const { register, handleSubmit } = useForm<DeleteForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (value: DeleteForm) => {
    console.log(value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          minWidth: 500,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Do you want to delete?</DialogTitle>
        <DialogContent>
          <DialogContentText mb={3}>
            Are you sure you want to delete this ?
          </DialogContentText>

          <InputLabel>
            Please type “<strong>{identifier}</strong>” to
            continue.
          </InputLabel>
          <TextField
            fullWidth
            variant="outlined"
            {...register('name')}
            sx={{
              mt: 1,
              '& .MuiOutlinedInput-input': {
                padding: '9.5px 14px',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton color="inherit">
            Cancel
          </LoadingButton>
          <LoadingButton
            type="submit"
            color="error"
            variant="contained"
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};
