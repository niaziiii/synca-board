import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Checkbox, Paper, TableContainer } from "@mui/material";
import Badge from "@mui/material/Badge";
import CheckIcon from "@mui/icons-material/Check";
import { InvoiceStatusChip } from "./listing";

function createData(name, checked, status) {
  return { name, checked, status };
}

export const rows = [
  createData(
    "Create a user flow of social application design",
    true,
    "completed"
  ),
  createData(
    "Create a user flow of social application design",
    true,
    "completed"
  ),
  createData("Eclair cream", false, "completed"),
  createData("Cupcake", true, "open"),
  createData("Gingerbread", false, "progressing"),
  createData("Frozen yoghurt yoghurt", true, "completed"),
  createData("Frozen yoghurt yoghurt", false, "completed"),
  createData("Eclair cream", true, "completed"),
  createData("Cupcake", false, "open"),
  createData("Gingerbread", false, "progressing"),
];
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const notificationCounts = ["05", "0", "10", "03"];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: 0 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
            label={
              <div>
                All
                <Badge
                  badgeContent={notificationCounts[0]}
                  sx={{
                    marginLeft: 3,
                    color: "#2B5CE6",
                    backgroundColor: "rgba(43, 92, 230, 0.10)",
                  }}
                />
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
            label="Past Due"
          />
          <Tab
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
            label={
              <div>
                Upcoming
                <Badge
                  badgeContent={notificationCounts[2]}
                  sx={{
                    marginLeft: 3,
                    color: "#2B5CE6",
                    backgroundColor: "rgba(43, 92, 230, 0.10)",
                  }}
                />
              </div>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
            label={
              <div>
                Completed
                <Badge
                  badgeContent={notificationCounts[3]}
                  sx={{
                    marginLeft: 3,
                    color: "#1A932E",
                    backgroundColor: "rgba(26, 147, 46, 0.18)",
                  }}
                />
              </div>
            }
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableContainer
          component={Paper}
          sx={{
            background: "transparent",
            borderRadius: 0,
            boxShadow: "none",
            maxHeight: "260px", // Set a suitable max height
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888", // Adjust the color of the thumb
              borderRadius: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1", // Adjust the color of the track
              borderRadius: "6px",
            },
          }}
        >
          {rows.map((row) => (
            <div
              key={row.name}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              <Checkbox
                checked={row.checked}
                sx={{
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
                icon={
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1px solid black",
                    }}
                  />
                }
                checkedIcon={
                  <CheckIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      background: "#2B5CE6",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  />
                }
              />
              <Typography variant="body2">{row.name}</Typography>
              <Box marginLeft={"auto"} marginRight={8}>
                <InvoiceStatusChip status={row.status} />
              </Box>
            </div>
          ))}
        </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}
