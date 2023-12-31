import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function LinkCard() {
  return (
    <Card sx={{ Width: 400, borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: "420px",
            height: "120px",
          }}
          image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace-1024x564.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="div" m={0}>
            Lizard jbadbwu abduy
          </Typography>
          <a href={"abc"}>link to file </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
