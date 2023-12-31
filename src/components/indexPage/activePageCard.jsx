import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ActivePageCard = () => {
  return (
    <>
      <Card
        sx={{
          // borderRadius: 0,
          boxShadow: "none",
          background: "#FFF",
          marginY: 1,
        }}
      >
        <CardContent>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography sx={{ fontWeight: 700 }}>Sales Handoff</Typography>
              <Typography color={"secondary"}>ACME</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} marginTop={2}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                5
              </Typography>
              <Typography variant="caption" color={"secondary"}>
                Views
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ActivePageCard;
