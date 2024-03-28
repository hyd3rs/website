'use client';

import { NotFoundInteractables, NotFoundText } from "@std/components/NotFound";

export default function Error({
    error,
    reset
}) {
    return (
        <>
            <div className="flex flex-col items-start gap-y-4 p-8 w-full px-8 md:p-24 md:pb-0">
                <NotFoundText />
                <NotFoundInteractables />
            </div>
        </>
    );
};