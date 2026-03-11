import React, { useState }  from 'react'

export const UseContext = () => {
    return (
        <>
        <Component1/>
        </>
    )
}

function Component1() {
    const [user ] = useState("Bienvenid@!");

    return (
        <>
            <h1>{`Hola ${user}!`}</h1>
            <Component2 user={user} />
        </>
    );
}

function Component2({ user }) {
    return (
        <>
            <h1>Corrector Bonita Ani-K
                $25.000 → $18.000
                Oferta especial</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            <h1>Polvo Suelto Samy
                $35.000 → $27.000
                Descuento del 23%</h1>
            <h2>{`Hola ${user} de nuevo!`}</h2>
        </>
    );
}