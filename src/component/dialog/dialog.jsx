import * as React from 'react';

import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br />
                <TextField id="filled-basic" label="Password" variant="outlined" />
                <br />
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50ch',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Stack spacing={2} direction="row" align="center">
                        <Button variant="contained">cancel</Button>
                        <Button variant="contained">Login</Button>
                    </Stack>
                </Box>
            </Box>
        </Dialog>
    );
}

export default SimpleDialog