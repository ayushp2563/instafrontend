import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Input = styled('input')({
    display: 'none',
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreatePost() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClick={handleOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <center style={{
                        position: 'absolute',
                        top: '10%',
                        left: '30%',
                        verticalAlign: 'middle',
                        marginLeft: '-60px',
                    }}>
                        <AddPhotoAlternateIcon sx={{ fontSize: 150, display: 'flex', justifyItems: 'center' }} />
                   
                    <Typography sx={{ fontSize:25,mt:4 }}>
                        Drag photos and videos here
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 10,ml:5 }}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span" >
                                Select From Computer
                            </Button>
                        </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Stack>
                    </center>
                </Box>
            </Modal>
        </div>
    );
}

