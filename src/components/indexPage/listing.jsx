import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chip, IconButton } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
CircularProgressbar;

export const InvoiceStatusChip = ({ status }) => {
  switch (status) {
    case "completed":
      return (
        <Chip
          label="Completed"
          sx={{
            minWidth: "150px",
            color: "#1A932E",
            background: "rgba(26, 147, 46, 0.18)",
          }}
        />
      );
    case "open":
      return (
        <Chip
          label="Open"
          sx={{
            minWidth: "150px",
            color: "#EE201C",
            background: "rgba(238, 32, 28, 0.18)",
            cursor: "pointer",
          }}
        />
      );
    case "delayed":
      return (
        <Chip
          label="Delayed"
          sx={{
            minWidth: "150px",
            color: "#E5AE21",
            background: "rgba(229, 174, 33, 0.18)",
            cursor: "pointer",
          }}
        />
      );
    case "progressing":
      return (
        <Chip
          label="Progressing"
          sx={{
            minWidth: "150px",
            color: "#2B5CE6",
            background: "rgba(43, 92, 230, 0.10)",
            cursor: "pointer",
          }}
        />
      );
    default:
      return null; // Add a default case or handle accordingly
  }
};
const ProgressBar = ({ value }) => {
  let pathColor;

  if (value === "delayed") {
    pathColor = "#EE201C";
  } else if (value === "completed") {
    pathColor = "#1A932E";
  } else {
    pathColor = "#2B5CE6";
  }

  return (
    <div style={{ width: 35, height: 35 }}>
      <CircularProgressbar
        value={
          value == "delayed"
            ? 30
            : value == "completed"
            ? 100
            : value == "progressing"
            ? 50
            : null
        }
        text={`${
          value == "open"
            ? 0
            : value == "completed"
            ? 100
            : value == "progressing"
            ? 50
            : null
        }%`}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: pathColor,
          textSize: "26px",
          textColor: "black",
        })}
      />
    </div>
  );
};
const options = ["Copy Link", "Delete"];

const ITEM_HEIGHT = 48;

export default function BasicTable({ rowData }) {
  console.log("rowData", rowData);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "transparent",
        borderRadius: 0,
        marginTop: 1,
        boxShadow: "none",
        maxHeight: "380px", // Set a suitable max height
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
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Page Title </TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Company</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Next Step</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData?.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.title}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                {row.created_at
                  ? new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date(row.created_at))
                  : "N/A"}
              </TableCell>
              <TableCell>
                <InvoiceStatusChip status={row.status} />
              </TableCell>
              <TableCell>
                <ProgressBar value={row.status} />
              </TableCell>
              <TableCell>
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                        boxShadow: "inherit",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
