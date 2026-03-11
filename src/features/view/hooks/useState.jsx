import { React, useState } from 'react'
import { Button, Container, Typography, Box } from '@mui/material'

export const UseStatecolor = () => {
    const [color, setColor] = useState('Red')
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",    
            justifyContent: "center",}}>
            <Typography
                variant="h4"
                component="h1"
                sx={{ color: color,}}
            >
                Base Maybelline Fit Me- 20% de descuento!
            </Typography>
            <Box>
            <Button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</Button>
            <Button
                type="button"
                onClick={() => setColor("red")}
            >Red</Button>
            <Button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</Button>
            <Button
                type="button"
                onClick={() => setColor("green")}
            >Green</Button>
            </Box>

        </Container>
    )
}

export const ContadorMejorado = () => {

    // 1️⃣ Estado
    const [contador, setContador] = useState(0);

    // 2️⃣ Funciones
    const incrementar = () => {
        setContador(prev => prev + 1);
    };

    const disminuir = () => {
        setContador(prev => prev - 1);
    };

    const resetear = () => {
        setContador(0);
    };

    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>

            <Typography variant="h4" component="h1" gutterBottom>
                Contador Mejorado
            </Typography>

            {/* 3️ Número dinámico */}
            <Typography
                variant="h2"
                sx={{ color: contador < 0 ? "red" : "black" }}
            >
                {contador}
            </Typography>

            {/* 4️ Botones */}
            <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
                <Button variant="contained" onClick={incrementar}>
                    +
                </Button>

                <Button variant="contained" onClick={disminuir}>
                    -
                </Button>

                <Button variant="outlined" onClick={resetear}>
                    Reset
                </Button>
            </Stack>

        </Container>
    );
};

