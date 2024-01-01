import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomTable from "./../components/shared/listingTable";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Dashboard = () => {
  const [value, setValue] = useState(
    "<p><span style='background-color: transparent; color: rgb(68, 68, 68);'>👋 Welcome, this is the Sales Handoff sample page.</span></p><p><span style='background-color: transparent; color: rgb(68, 68, 68);'>This template is perfect for your sales and AM</span><span style='background-color: transparent; color: rgb(27, 31, 42);'>/</span><span style='background-color: transparent; color: rgb(68, 68, 68);'>CS team to work together and provide the best experience for your new customers!</span></p><p><span style='background-color: transparent; color: rgb(55, 65, 81);'>Include any relevant information that would be beneficial in this intro.</span></p><p><strong style='background-color: transparent; color: rgb(68, 68, 68);'>Quick Tip:</strong></p><ul><li><strong style='background-color: transparent; color: rgb(68, 68, 68);'>Add sections - </strong><span style='background-color: transparent; color: rgb(68, 68, 68);'>Use the '+' button between blocks (☝️ or👇).</span></li></ul><p><span style='background-color: transparent; color: rgb(68, 68, 68);'>If you need anything at all, feel free to use the chat in the bottom right corner. We're here to help!</span></p><p><span style='background-color: transparent; color: rgb(68, 68, 68);'>- The Synca Team </span></p>"
  );

  const handleTextChange = (newValue) => {
    setValue(newValue);
  };
  const stakeHolderHeader = ["Header 1", "Header 2", "Header 3", "Header 4"];
  const acceptanceHeader = [
    "Customer Challenges",
    "Impact of challengeg",
    "Solutions and Outcomes",
  ];

  const stakeHolderdata = Array.from({ length: 4 }, (_, index) => {
    return [
      `Row ${index + 1}, Cell 1`,
      `Row ${index + 1}, Cell 2`,
      `Row ${index + 1}, Cell 3`,
      `Row ${index + 1}, Cell 4`,
    ];
  });
  const acceptanceData = Array.from({ length: 3 }, (_, index) => {
    return [
      `» Challenge that your prospect is currently facing`,
      `» The impact of the challenge to your prospects business`,
      ` » How your prospect will achieve success with your solution`,
    ];
  });

  return (
    <Container>
      <Grid container mb={10} spacing={5}>
        <Grid item lg={12} md={12} sm={12}>
          <Paper sx={{ borderRadius: 0, position: "relative" }}>
            <Box
              sx={{ width: "100%", backgroundColor: "black", color: "#FFF" }}
            >
              <Box paddingLeft={14} paddingY={3}>
                <Typography variant="h3">Sales Handoff</Typography>
                <Typography>Company name</Typography>
              </Box>
            </Box>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                width: 54,
                height: 54,
                position: "absolute",
                left: 36,
                bottom: 25,
              }}
            />
            <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
              <Box
                display={"flex"}
                alignItems={"end"}
                paddingLeft={14}
                paddingY={1}
              >
                <Typography variant="h6">Sales Handoff</Typography>
                <Typography variant="h6" marginLeft={4}>
                  Sales Handoff
                </Typography>
                <Typography
                  variant="body1"
                  marginLeft={4}
                  sx={{ textDecoration: "underline" }}
                >
                  carollinemirandaf@gmail.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4" fontWeight={600}>
              Introduction
            </Typography>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Divider />
          <Paper sx={{ borderRadius: 0, marginTop: 6 }}>
            <Typography variant="body1" fontWeight={600} padding={2}>
              Welcome!
            </Typography>
            <ReactQuill
              value={value}
              onChange={handleTextChange}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ size: [] }],
                  [{ font: [] }],
                  [{ align: ["right", "center", "justify"] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  [{ color: ["red", "#785412"] }],
                  [{ background: ["red", "#785412"] }],
                ],
              }}
              formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "link",
                "color",
                "image",
                "background",
                "align",
                "size",
                "font",
              ]}
            />
          </Paper>
        </Grid>
        <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
          <Typography variant="h4" fontWeight={600}>
            Stakeholders
          </Typography>
          <Divider />
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            sx={{ py: 1, background: "#FFF", padding: 3, marginTop: 6 }}
          >
            <Typography variant="h6" fontWeight={600}>
              ACCOUNT Team
            </Typography>
          </Grid>
          <CustomTable headers={stakeHolderHeader} data={stakeHolderdata} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
          <Typography variant="h4" fontWeight={600}>
            Acceptance Criteria
          </Typography>
          <Divider />
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            sx={{ py: 1, background: "#FFF", padding: 3, marginTop: 6 }}
          >
            <Typography variant="h6" fontWeight={600}>
              Acceptance Criteria
            </Typography>
          </Grid>
          <CustomTable headers={acceptanceHeader} data={acceptanceData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
