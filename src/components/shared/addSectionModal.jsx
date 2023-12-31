import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TableRowsIcon from "@mui/icons-material/TableRows";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import LinkIcon from "@mui/icons-material/Link";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { Divider } from "@mui/material";
import { Transition } from "../createnewpage";

const IconButtonWithCaption = ({ icon, caption, ...props }) => {
  return (
    <IconButton
      sx={{
        display: "flex",
        flexDirection: "column",
        marginX: 5,
        marginY: 2,
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      {...props}
    >
      {icon}
      <Typography variant="body1">{caption}</Typography>
    </IconButton>
  );
};
const AddSectionModal = ({ open, onClose, addNewElement }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { borderRadius: "10px", p: 2 } }}
    >
      <DialogTitle marginLeft={1}>
        <Typography variant="h6">Add Section</Typography>
        <Typography variant="body2">Select type of content to add</Typography>
      </DialogTitle>
      <DialogContent sx={{ pb: 8 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="New Section" sx={{ color: "#0036C7" }} />
        </Tabs>
        {tabValue === 0 && (
          <Box
            minWidth={500}
            padding={2}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-around"}
          >
            <IconButtonWithCaption
              icon={<TextFieldsIcon sx={{ fontSize: 38 }} />}
              caption="Text"
              onClick={() => {
                addNewElement({ type: "text", content: {} });
                onClose();
              }}
            />
            <IconButtonWithCaption
              icon={<ChecklistIcon sx={{ fontSize: 38 }} />}
              caption="Next Step"
              onClick={() => {
                addNewElement({ type: "checkbox", content: {} });
                onClose();
              }}
            />
            <IconButtonWithCaption
              icon={<TableRowsIcon sx={{ fontSize: 38 }} />}
              caption="Table"
              onClick={() => {
                addNewElement({ type: "table", content: {} });
                onClose();
              }}
            />
            <IconButtonWithCaption
              icon={<UploadFileIcon sx={{ fontSize: 38 }} />}
              caption="File"
              onClick={() => {
                addNewElement({ type: "file", content: {} });
                onClose();
              }}
            />
            <IconButtonWithCaption
              icon={<LinkIcon sx={{ fontSize: 38 }} />}
              caption="Link"
              onClick={() => {
                addNewElement({ type: "link", content: {} });
                onClose();
              }}
            />
            <IconButtonWithCaption
              icon={<SellOutlinedIcon sx={{ fontSize: 38 }} />}
              caption="Price"
            />
          </Box>
        )}
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSectionModal;
