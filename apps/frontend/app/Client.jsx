"use client";

import { Tooltip as TooltipClient } from '@mui/joy';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProgressBar } from "next-nprogress-bar";

export const Tooltip = (props) => (
    <TooltipClient {...props} />
);

export const ProgressBar = (props) => <AppProgressBar {...props} />

export function ThemeProvider({ children, ...props }) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};