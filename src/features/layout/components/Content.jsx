import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { pink } from "@mui/material/colors";

export const Content = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  /* AGREGAR AL CARRITO */

  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (exist) {

      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    } else {

      updatedCart = [...cart, { ...product, quantity: 1 }];

    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Producto agregado al carrito");

  };

  /* FAVORITOS */

  const toggleFavorite = (product) => {

    let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exist = savedFavorites.find((item) => item.id === product.id);

    let updatedFavorites;

    if (exist) {

      updatedFavorites = savedFavorites.filter(
        (item) => item.id !== product.id
      );

    } else {

      updatedFavorites = [...savedFavorites, product];

    }

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const products = [
    {
      id: 16,
      name: "Polvo suelto 4 en 1",
      price: 39000,
      image:
        "https://bonitaexpress.co/wp-content/uploads/2025/12/Bloom-filter-Bloomshell-Polvo-Suelto.jpg",
    },
    {
      id: 17,
      name: "Corrector",
      price: 38500,
      image:
        "https://bonitaexpress.co/wp-content/uploads/2025/07/Corrector-Bloomshell-nueva-presentacion-10-ml.jpg",
    },
    {
      id: 18,
      name: "Base",
      price: 35000,
      image:
        "https://blushmaquillaje.com/wp-content/uploads/2024/10/base-bloomshell-scaled-1.jpg",
    },
    {
      id: 19,
      name: "Face Primer",
      price: 22000,
      image:
        "https://www.pigmentta.com/wp-content/uploads/2024/05/Primer-Bloom-Plumpling-Bloomshell-3.png",
    },
    {
      id: 20,
      name: "Pestañina Lash Exclusive",
      price: 17500,
      image:
        "https://bloomshell.co/wp-content/uploads/2025/03/Catalogo-dicembre-02319.jpg",
    },
    {
      id: 21,
      name: "Lip Gloss Bloomshell Color Blom Glow",
      price: 18000,
      image:
        "https://acdn-us.mitiendanube.com/stores/005/434/833/products/img_2315-aeb07e2d5bddb85c6017381191083647-1024-1024.webp",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f1ea", minHeight: "100vh" }}>
      {/* HERO IMAGE */}
    <Box
    sx={{
    height: "400px",
    backgroundImage:
      "url(https://img.freepik.com/foto-gratis/arreglo-kit-carrera-modelo-rosa_23-2150083959.jpg?semt=ais_user_personalization&w=740&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    }}
    >
    <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
    }}
    />

    <Typography
    variant="h3"
    sx={{
      position: "relative",
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "1rem",
    }}
    >
    𝙱𝚛𝚒𝚕𝚕𝚊, 𝚜𝚘𝚗𝚛í𝚎 𝚢 𝚜𝚒é𝚗𝚝𝚎𝚝𝚎 𝚒𝚗𝚌𝚛𝚎í𝚋𝚕𝚎 𝚝𝚘𝚍𝚘𝚜 𝚕𝚘𝚜 𝚍í𝚊𝚜.
    </Typography>
    </Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          Bloomshell
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  width: 320,
                  borderRadius: 4,
                  boxShadow: 4,
                  position: "relative",
                }}
              >

                <IconButton
                  onClick={() => toggleFavorite(product)}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white",
                  }}
                >
                  {isFavorite(product.id) ? (
                    <FavoriteIcon sx={{ color: pink[400] }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>

                <CardMedia
                  component="img"
                  height="220"
                  image={product.image}
                  alt={product.name}
                />

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {product.name}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    ${product.price.toLocaleString("es-CO")}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addToCart(product)}
                    sx={{
                      backgroundColor: pink[200],
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: 3,
                      "&:hover": {
                        backgroundColor: pink[200],
                      },
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};