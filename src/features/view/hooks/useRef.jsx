import { useState, useRef, useEffect } from "react";
import { Container, Typography, Button, Stack } from "@mui/material";

export const UseRefPreviousValue = () => {
    const [count, setCount] = useState(0);

    // 🔹 Guardamos el valor anterior
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4">
                Actual: {count}
            </Typography>


            <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
                <Button variant="contained" onClick={() => setCount(prev => prev + 1)}>
                    ➕
                </Button>

                <Button variant="outlined" onClick={() => setCount(prev => prev - 1)}>
                    ➖
                </Button>
            </Stack>
        </Container>
    );
};