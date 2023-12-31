import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Slide,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { createPage } from "./../pagesAPI";
import {
  onboardingtext,
  saleshandofftext,
  salesroomtext,
} from "./../textData/index";
import { useLocation } from "react-router-dom";

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListItemWithHeading = ({ heading, description, link, onSelect }) => (
  <ListItemButton
    sx={{
      borderRadius: 1,
      "&:focus": {
        color: "#FFF",
        backgroundColor: "#2B5CE6", // Change the background color on focus
      },
    }}
    onClick={() => onSelect(link)}
  >
    <ListItemText
      primary={
        <>
          <Typography variant="body1" fontWeight="bold">
            {heading}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </>
      }
    />
  </ListItemButton>
);

const CreateNewPageModal = ({ open, onClose }) => {
  const router = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    console.log({ item });
    setSelectedItem(item);
  };

  const handleCreateWorkspace = async () => {
    if (selectedItem === "/saleshandoff") {
      const elements = [
        { type: "text", content: { text: saleshandofftext } },
        { type: "table", content: {} },
        { type: "table", content: {} },
      ];
      try {
        // Create the page and get the ID
        const pageId = await createPage("SalesHandOff Title", elements);
        console.log(pageId);
        // Redirect to the newly created page
        router.push(`/saleshandoff/${pageId}`);
      } catch (error) {
        alert(error);
      }
    } else if (selectedItem === "/salesroom") {
      const elements = [
        { type: "text", content: { text: salesroomtext } },
        { type: "checkbox", content: {} },
        { type: "file", content: {} },
      ];
      try {
        // Create the page and get the ID
        const pageId = await createPage("SalesRoom Title", elements);
        console.log(pageId);
        // Redirect to the newly created page
        router.push(`/salesroom/${pageId}`);
      } catch (error) {
        alert(error);
      }
    } else if (selectedItem === "/onboarding") {
      const elements = [
        { type: "text", content: { text: onboardingtext } },
        { type: "checkbox", content: {} },
        { type: "table", content: {} },
      ];
      try {
        // Create the page and get the ID
        const pageId = await createPage("ObBoarding Title", elements);
        console.log(pageId);
        // Redirect to the newly created page
        router.push(`/onboarding/${pageId}`);
      } catch (error) {
        alert(error);
      }
    } else {
      router.push(selectedItem);
    }

    handleClose();
  };
  const handleClose = () => {
    setSelectedItem(null);
    onClose();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      PaperProps={{ sx: { borderRadius: "10px", p: 2 } }}
    >
      <DialogTitle>
        <Box display={"flex"} alignItems={"center"}>
          <AddCircleOutlineIcon
            fontSize="large"
            sx={{ mr: 2, color: "#2B5CE6" }}
          />
          <Box>
            <Typography variant="body2">Choose a template</Typography>
            <Typography
              variant="body2"
              color="#2B5CE6"
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                router.push("/createnew");
                handleClose();
              }}
            >
              or create from scratch
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ display: "flex", py: 1 }}
            >
              <ExpandMore />
              <Typography fontWeight={700}>Templates</Typography>
            </ListSubheader>
          }
        >
          <ListItemWithHeading
            heading="Sales Handoff"
            description="Use this template to create a Handoff with your CS Team"
            link="/saleshandoff"
            onSelect={handleSelectItem}
          />
          <ListItemWithHeading
            heading="Sales Room"
            description="Perfect for managing deals and visualizing the buyer journey"
            link="/salesroom"
            onSelect={handleSelectItem}
          />
          <ListItemWithHeading
            heading="Onboarding"
            description="This page will help streamline your onboarding process"
            link="/onboarding"
            onSelect={handleSelectItem}
          />
        </List>
      </DialogContent>

      <DialogActions sx={{ textAlign: "center", p: 3 }}>
        <Button color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={handleCreateWorkspace}
          sx={{
            color: "#FFF",
            backgroundColor: "#2B5CE6",
            "&:disabled": {
              backgroundColor: "#A0A0A0", // Change to your desired disabled color
            },
            "&:hover": {
              background: "#2B5CE6", // Set the same background color on hover
            },
          }}
          disabled={!selectedItem} // Disable the button if no item is selected
        >
          Create Workspace
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateNewPageModal;
