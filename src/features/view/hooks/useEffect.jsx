import { useState, useEffect } from "react";
import { Container, Typography, Button, Stack } from "@mui/material";

export const UseEffectCounter = () => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (!active) return;

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [active]);

    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h3">{count}</Typography>

            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button variant="contained" onClick={() => setActive(true)}>Iniciar</Button>
                <Button variant="outlined" onClick={() => setActive(false)}>Detener</Button>
                <Button variant="outlined" onClick={() => setCount(0)}>Reset</Button>
            </Stack>
        </Container>
    );
};