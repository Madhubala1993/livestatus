import "./App.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useCallback, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import Cropper from "react-easy-crop";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
};

export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <div className="nytt-container">
        <img
          className="nytt-logo"
          src="https://nyttdev.com/testing_env/version4/assets/img/app_logo_orange.png"
          alt="NYTT"
        />
        <button className="live-status" onClick={handleOpen}>
          Live Status
        </button>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modalbox"
        >
          <Box sx={style} className="modal-container">
            <div className="header">
              <p className="title">Live Detection</p>
              <Button
                sx={{
                  marginLeft: "auto",
                  textAlign: "center",
                  color: "red",
                  // backgroundColor: "white",
                }}
                onClick={handleClose}
              >
                <CancelIcon />
              </Button>
            </div>
            <div className="modal-content">
              <CropDemo />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

function CropDemo({ src }) {
  const [crop, setCrop] = useState({
    unit: "%", // Can be 'px' or '%'
    x: 20,
    y: 15,
    width: 30,
    height: 50,
    color: "yellow",
  });
  return (
    <ReactCrop
      crop={crop}
      onChange={(c) => setCrop(c)}
      className="crop-container"
    >
      <img className="error-image" src="Error_1.png" />
    </ReactCrop>
  );
}
