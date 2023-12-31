import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const MyCard = ({ icon, figure, title, description, background }) => {
  return (
    <Card
      sx={{
        width: '24%',
        height: 190,
        background: "rgba(255, 255, 255, 0.34)",
        borderRadius: "10px",
        boxShadow: 'none'
      }}
    >
      <CardContent>
        <IconButton
          sx={{
            backgroundColor: background,
            color: "#F1F1F1",
            marginBottom: 2,
            "&:hover": {
              backgroundColor: background, // Prevent color change on hover
            },
          }}
        >
          {icon}
        </IconButton>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="h6" fontWeight={600}>{figure}</Typography>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
