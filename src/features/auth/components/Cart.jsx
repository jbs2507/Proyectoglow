import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";

export const Cart = () => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    savedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCart(savedCart);
    calculateTotal(savedCart);

  }, []);

  const calculateTotal = (cartItems) => {

    const totalPrice = cartItems.reduce((sum, item) => {

      const price =
        typeof item.price === "number"
          ? item.price
          : parseInt(item.price.replace(/\D/g, ""));

      return sum + price * item.quantity;

    }, 0);

    setTotal(totalPrice);

  };

  const updateQuantity = (id, change) => {

    const updatedCart = cart.map((item) => {

      if (item.id === id) {

        const newQuantity = item.quantity + change;

        if (newQuantity < 1) return item;

        return {
          ...item,
          quantity: newQuantity
        };

      }

      return item;

    });

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    calculateTotal(updatedCart);

    window.dispatchEvent(new Event("cartUpdated"));

  };

  const removeFromCart = (id) => {

    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    calculateTotal(updatedCart);

    window.dispatchEvent(new Event("cartUpdated"));

  };

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >

      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => {

            const price =
              typeof item.price === "number"
                ? item.price
                : parseInt(item.price.replace(/\D/g, ""));

            const productName = item.name || item.title;

            return (

              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >

                {/* imagen */}
                <img
                  src={item.image}
                  alt={productName}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <div>

                  <h3>{productName}</h3>

                  <p style={{ fontWeight: "bold" }}>
                    ${(price * item.quantity).toLocaleString()}
                  </p>

                  {/* cantidad */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >

                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>

                    <span style={{ fontWeight: "bold" }}>
                      {item.quantity}
                    </span>

                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginTop: "10px",
                      background: pink[200],
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Eliminar
                  </button>

                </div>

              </div>

            );

          })}

          {/* total */}

          <div style={{ marginTop: "30px" }}>
            <h2>Total: ${total.toLocaleString()}</h2>
          </div>

        </>
      )}

    </div>
  );
};