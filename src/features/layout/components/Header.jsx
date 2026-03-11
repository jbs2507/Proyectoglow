import * as React from "react";
import { NavLink, Link } from "react-router-dom";

// MUI ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// MUI COMPONENTS
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Badge
} from "@mui/material";

// MUI COLORS
import { pink, purple } from "@mui/material/colors";

export const Header = () => {

  const [cartCount, setCartCount] = React.useState(0);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };

  }, []);

  // BUSCAR PRODUCTO
  const handleSearch = () => {

    localStorage.setItem("search", search);

    window.dispatchEvent(new Event("searchUpdated"));

  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: pink[200],
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* LOGO */}
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              letterSpacing: 1,
              mr: 3,
              fontSize: "1.2rem"
            }}
          >
            𝙶𝚕𝚘𝚠 𝚋𝚢 𝚋𝚕𝚘𝚘𝚖
          </Typography>

          {/* NAVIGATION */}
          <Stack direction="row" spacing={1}>

            {[
              { text: "Inicio", icon: <HomeIcon />, to: "/" },
              { text: "Artículos", icon: <ArticleIcon />, to: "/article" },
              { text: "Ofertas", icon: <LocalOfferIcon />, to: "/offers" },
              { text: "Mi Cuenta", icon: <PersonIcon />, to: "/account" },
              { text: "Favoritos", icon: <FavoriteIcon />, to: "/favorites" },
              {
                text: "Carrito",
                icon: (
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                ),
                to: "/cart"
              }
            ].map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.to}
                startIcon={item.icon}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.7rem",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    backgroundColor: purple[70],
                  },
                  "&.active": {
                    backgroundColor: purple[70],
                  },
                }}
              >
                {item.text}
              </Button>
            ))}

          </Stack>

          {/* SEARCH */}
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 3,
              px: 2,
              py: 0.5,
            }}
          >
            <TextField
              size="small"
              variant="standard"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: purple[70] }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: pink[200],
                borderRadius: 3,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: pink[200],
                },
              }}
            >
              Buscar
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* ESPACIADOR */}
      <Toolbar />
    </>
  );
};