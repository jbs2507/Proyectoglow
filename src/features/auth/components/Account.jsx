import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import { brown, pink, red } from "@mui/material/colors";

export const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (value) => {
    if (!value.includes("@") || !value.includes(".")) {
      return "Correo inválido";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      return "Mínimo 8 caracteres";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value),
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      alert("Login válido");
    }
  };

  const emailValid = email && !errors.email;
  const passwordValid = password && !errors.password;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // Fondo degradado
        background: "linear-gradient(135deg, #ffffff 0%, #f995d6 100%)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 360,
          p: 4,
          borderRadius: 3,

          // efecto glass
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <Typography variant="h5" mb={3} textAlign="center" fontWeight="bold">
          Cuenta de Usuario 
        </Typography>

        <TextField
          fullWidth
          label="Correo"
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          color={emailValid ? "success" : "primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle
                  color={
                    emailValid ? "success" : errors.email ? "error" : "action"
                  }
                />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          color={passwordValid ? "success" : "primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock
                  color={
                    passwordValid
                      ? "success"
                      : errors.password
                        ? "error"
                        : "action"
                  }
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: pink[200],
            mt: 3,
            py: 1.2,
            fontWeight: "bold",
            borderRadius: 2,
          }}
        >
          Iniciar sesión
        </Button>
      </Paper>
    </Box>
  );
};