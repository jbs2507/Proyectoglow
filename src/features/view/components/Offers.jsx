import React from 'react'
import { UseStatecolor } from '../hooks/useState'
import { UseContext } from '../hooks/useContext'
import { UseReducerList } from '../hooks/useReducer'
import { UseEffectCounter } from '../hooks/useEffect'
import {UseRefPreviousValue} from '../hooks/useRef'
import { Usecallback } from '../hooks/usecallbakc'
import { Usememo } from '../hooks/usememo'
import { StatusBar } from '../hooks/useOnlineStatus'

import { Box } from '@mui/material'

export const Offers = () => {
    return (
        <Box
            sx={{
                mt: 10,
                px: 3,
                display: "flex",
                alignItems: "center",
                fontFamily: "Arial, sans-serif",
                flexDirection: "column",
            }}
        >
            <UseStatecolor />
            <UseContext />
            <UseReducerList />
            <UseEffectCounter />
            <UseRefPreviousValue />
            <StatusBar />
            <Usecallback />
            <Usememo />
        </Box>

        
    )
}