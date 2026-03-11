import { useState, useEffect } from "react";
import { Button, Stack, Typography, Paper } from "@mui/material";

export const StatusBar = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Estado de Conexión
            </Typography>

            <Paper
                elevation={4}
                sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: isOnline ? "#e8f5e9" : "#ffebee",
                }}
            >
                <Stack spacing={2} alignItems="center">
                    <Typography
                        variant="h6"
                        color={isOnline ? "success.main" : "error.main"}
                    >
                        {isOnline ? "✅ En línea" : "❌ Desconectado"}
                    </Typography>

                    <Button
                        variant="contained"
                        color={isOnline ? "success" : "error"}
                    >
                        {isOnline ? "Conectado a Internet" : "Sin Conexión"}
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};