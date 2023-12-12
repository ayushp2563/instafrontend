import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Box,
  Button,
  IconButton,
  Input,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Modal = (props) => {
  console.log("props", props);
  const handleClose = () => {
    props?.setOpen(false);
  };
  return (
    <div>
      {props?.type === "create-post" ? (
        <Modal
          open={props?.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styled}>
            <center
              style={{
                position: "absolute",
                top: "10%",
                left: "30%",
                // verticalAlign: 'middle',
                marginLeft: "-60px",
                zIndex: 1,
              }}
            >
              <AddPhotoAlternateIcon
                sx={{ fontSize: 150, display: "flex", justifyItems: "center" }}
              />

              <Typography sx={{ fontSize: 25, mt: 4 }}>
                Drag photos and videos here
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mt: 10, ml: 5 }}
              >
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Select From Computer
                  </Button>
                </label>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Stack>
            </center>
          </Box>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
