import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

import {
  Typography
} from "@mui/material";

/* mismos productos que usas en Article */
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
    title: "Ani‑K Kit de Cejas",
    price: "$25.000",
    image:
      "https://acdn-us.mitiendanube.com/stores/005/434/833/products/img_2353-1c96d6ddab56c3cb0817309948725841-1024-1024.webp",
  },
  {
    id: 12,
    title: "Ani‑K Contorno Líquido",
    price: "$25.000",
    image:
      "https://kromaspace.com/wp-content/uploads/2025/09/pw-no-usar-22.png",
  },
   {
    id: 13,
    title: "Ani‑K Lápiz Doble para Cejas",
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


export const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

  const saved = JSON.parse(localStorage.getItem("favorites")) || [];

  // favoritos guardados como objetos (Content)
  const contentFavorites = saved.filter((item) => typeof item === "object");

  // favoritos guardados como ids (Articles)
  const articleFavorites = articles.filter((article) =>
    saved.includes(article.id)
  );

  setFavorites([...articleFavorites, ...contentFavorites]);

}, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Favoritos</h2>

      <div style={styles.grid}>

        {favorites.length === 0 && (
          <p style={{ textAlign: "center", width: "100%" }}>
            No tienes favoritos aún
          </p>
        )}

        {favorites.map((item) => (
        <div key={`${item.id}-${item.title || item.name}`} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />

            <div style={styles.info}>
              <h3 style={styles.name}>{item.title || item.name}</h3>
              <p style={styles.price}>
               {typeof item.price === "number"
                ? `$${item.price.toLocaleString("es-CO")}`
                : item.price}
              </p>

              
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    
  },
  title: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {

    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  info: {
    padding: "15px",
  },
  name: {
    fontSize: "18px",
  },
  price: {
    color: "#000000",
    fontWeight: "bold",
  },
  button: {
    marginTop: "10px",
    background: pink[200],
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  Typography: {
    fontFamily: "Arial, sans-serif",
  }
};