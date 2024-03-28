"use client";

import { Tooltip as TooltipClient } from '@mui/joy';
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Tooltip = (props) => (
    <TooltipClient {...props} />
);

export function ThemeProvider({ children, ...props }) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};