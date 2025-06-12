import React from 'react';
import {Snackbar, Alert} from '@mui/material';

interface NotificationProps {
  open: boolean;
  message: string;
  severity?: 'success' | 'info' | 'warning' | 'error';
  autoHideDuration?: number;
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = (
  {
    open,
    message,
    severity = 'info',
    autoHideDuration = 1000,
    onClose,
  }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
    >
      <Alert onClose={onClose} severity={severity} sx={{width: '100%'}}>
        {message}
      </Alert>
    </Snackbar>
  );
};
