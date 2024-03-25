"use client";

import { Tooltip } from "@mui/material";

export const OnDiscordTooltip = ({ children }) => {
    return (
        <Tooltip variant="soft" title={<span className="font-sans font-medium text-base text-black">
            * according to discord
        </span>} arrow>
            {children}
        </Tooltip>
    );
};