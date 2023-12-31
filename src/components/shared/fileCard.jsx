import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FileCard() {
    return (
        <Card sx={{ Width: 400, borderRadius: 0 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{
                        width: '420px',
                        height: '150px'
                    }}
                    image="https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/image/ToCGroup.gif"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body1" component="div" m={0}>
                        Lizard
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
