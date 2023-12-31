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
    " <p>Welcome, this is the Sales Handoff sample page.</p><p>This template is perfect for your sales and AM/CS team to work together and provide the</p><p><br></p><p>best experience for your new customers!</p><p>Include any relevant information that would be beneficial in this intro.</p><p>Quick Tip:</p><p><br></p><p>Add sections - Use the '+' button between blocks (¢] orl).</p><p>Ifyou need anything at all, feel free to use the chat in the bottom right corner. We're here</p><p><br></p><p>to help!</p><p><br></p><p>~The Synca Team`</p>"
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
