import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost"; // แก้ไขแล้ว
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const sections = [
  { title: "Interesed", url: "#" },
];

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/22606/images/1446e76-f181-6047-4e73-8d8ba3c6a50e_object_detection_1.webp",
    imageLabel: "Image Text",
    url: "/Blogstory1", // เพิ่มลิ้งที่นี่
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*FTw5KFD6ApDigX1J1i4KhA.jpeg",
    imageLabel: "Image Text",
    url: "/Blogstory2", // เพิ่มลิ้งอื่นๆ ได้
  },
];

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ padding: "24px", marginTop: "20px", marginBottom: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}> 
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Grid item key={post.title} xs={12} sm={6} md={4}>
                <FeaturedPost post={post} />
              </Grid>
            ))}
          </Grid>
        </main>
      </Container> 
    </ThemeProvider>
  );
}
