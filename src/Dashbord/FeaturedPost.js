import * as React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export default function FeaturedPost(props) {
  const { post } = props;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 160 }}
        image={post.image}
        alt={post.imageLabel}
      />
      <CardContent>
        <Typography component="h2" variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {post.date}
        </Typography>
        <Typography variant="body1" paragraph>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" href={post.url}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
