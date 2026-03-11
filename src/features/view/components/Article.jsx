import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { pink } from "@mui/material/colors";

/* ============================= */
/*        FUNCIONES CARRITO      */
/* ============================= */

const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find((item) => item.id === product.id);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Producto agregado exitosamente al carrito");
  } else {
    alert("Este producto ya está en el carrito");
  }
};

/* ============================= */
/*        DATA DE PRODUCTOS      */
/* ============================= */

const articles = [
  {
    id: 1,
    title: "Base Maybelline Fit Me Matte + Poreless",
    price: "$55.000",
    image:
      "https://wholesalemakeup.com/cdn/shop/files/maybelline-fit-me-matte-poreless-foundation-_228-soft-tan-1_1024x1024.webp?v=1760135935",
  },
  {
    id: 2,
    title: "Tarte Shape Tape Concealer",
    price: "$170.000",
    image:
      "https://cdn-cjhgk.nitrocdn.com/CXxGixRVyChwAxySbAyltuCiQXRKaWDN/assets/images/optimized/rev-9dad235/www.newbeauty.com/wp-content/uploads/2020/11/tarteshapetapecreamyconcealer.png",
  },
  {
    id: 3,
    title: "Laura Mercier Translucent Loose Setting Powder",
    price: "$200.000",
    image:
      "https://www.beautyface.com.co/wp-content/uploads/2024/08/s2629772-main-zoom.webp",
  },
  {
    id: 4,
    title: "Fenty Beauty Killawatt Freestyle Highlighter",
    price: "$220.000",
    image:
      "https://i.pinimg.com/474x/42/c4/3f/42c43f14f8e1a48d38aafd600837df36.jpg",
  },
  {
    id: 5,
    title: "Maybelline Lash Sensational Mascara",
    price: "$40.000",
    image:
      "https://cdnx.jumpseller.com/los-estilistas/image/32930787/resize/640/640?1678291097",
  },
  {
    id: 6,
    title: "Atenea Rubor Cremoso en Barra",
    price: "$35.000",
    image:
      "https://tutiendaprama.com/wp-content/uploads/2025/01/Sombra-cremosa-individual-atenea-2-2.png",
  },
  {
    id: 7,
    title: "Atenea Profesional Base de Maquillaje",
    price: "$50.000",
    image:
      "https://ateneaprofesional.com/cdn/shop/files/PRODUCTO-1ST-BASES.jpg?v=1743916083&width=1080",
  },
  {
    id: 8,
    title: "Rubor Líquido Humide Serum Blush Montoc",
    price: "$30.000",
    image:
      "https://tucatalogodemaquillaje.com/wp-content/uploads/2025/01/Rubor-serum-Montoc.jpg",
  },
  {
    id: 9,
    title: "Base Humide Montoc",
    price: "$45.000",
    image:
      "https://montoccosmetictools.com/cdn/shop/files/Elije_el_mejor_tono_para_tu_piel.jpg?v=1738184774&width=1200",
  },
  {
    id: 10,
    title: "Corrector Bonita de Ani-k",
    price: "$25.000",
    image:
      "https://bonitaexpress.co/wp-content/uploads/2025/04/Corrector-AniK-Nueva-presentacion.jpg",
  },
  {
    id: 11,
    title: "Ani-K Kit de Cejas",
    price: "$25.000",
    image:
      "https://acdn-us.mitiendanube.com/stores/005/434/833/products/img_2353-1c96d6ddab56c3cb0817309948725841-1024-1024.webp",
  },
  {
    id: 12,
    title: "Ani-K Contorno Líquido",
    price: "$25.000",
    image:
      "https://kromaspace.com/wp-content/uploads/2025/09/pw-no-usar-22.png",
  },
  {
    id: 13,
    title: "Ani-K Lápiz Doble para Cejas",
    price: "$15.000",
    image:
      "https://www.pigmentta.com/wp-content/uploads/2025/11/Lapiz-Doble-para-Cejas-Ani-K-7.jpg",
  },
  {
    id: 14,
    title: "Huda Beauty Base Líquida Easy Blur Foundation - Custard",
    price: "$185.000",
    image:
      "https://blushbar.vtexassets.com/arquivos/ids/208582-800-800?v=638748337895630000&width=800&height=800&aspect=true",
  },
  {
    id: 15,
    title: "Huda Beauty Easy Bake Loose Powder Brightening + Correcting Duo",
    price: "$230.000",
    image:
      "https://www.beautyface.com.co/wp-content/uploads/2025/10/s2904894-main-zoom.webp",
  },
];

/* ============================= */
/*          COMPONENTE           */
/* ============================= */

export const Article = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    const updateSearch = () => {
      const newSearch = localStorage.getItem("search") || "";
      setSearch(newSearch);
    };

    window.addEventListener("searchUpdated", updateSearch);

    return () => {
      window.removeEventListener("searchUpdated", updateSearch);
    };
  }, []);

  const filteredArticles = search
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      )
    : articles;

  const toggleFavorite = (id) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((fav) => fav !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Catálogo
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {filteredArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <IconButton
                  onClick={() => toggleFavorite(article.id)}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white",
                  }}
                >
                  {favorites.includes(article.id) ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>

                <Box sx={{ width: "100%", height: 180, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {article.title}
                  </Typography>

                  <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                    {article.price}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    onClick={() => addToCart(article)}
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: pink[200],
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: 2,
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