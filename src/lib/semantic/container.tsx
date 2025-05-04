/** 
 * MIT License
 * 
 * Copyright (c) [2025] [Zyron, Head Quarters] {@link https://github.com/Zyron-HQ}.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const containerVariants = cva([],
    {
        variants: {
            distance: {
                auto: "px-auto",
                none: "px-none",
                0: "px-0",
                1: "px-1",
                2: "px-2",
                3: "px-3",
                4: "px-4",
                5: "px-5",
                6: "px-6",
                7: "px-7",
                8: "px-8",
                9: "px-9"
            },
            gap: {
                auto: "gap-auto",
                none: "gap-0",
                0: "gap-0",
                1: "gap-1",
                2: "gap-2",
                3: "gap-3",
                4: "gap-4",
                5: "gap-5",
                6: "gap-6",
                7: "gap-7",
                8: "gap-8",
                9: "gap-9"
            },
            gapX: {
                auto: "gap-x-auto",
                none: "gap-x-0",
                1: "gap-x-1",
                2: "gap-x-2",
                3: "gap-x-3",
                4: "gap-x-4",
                5: "gap-x-5",
                6: "gap-x-6",
                7: "gap-x-7",
                8: "gap-x-8",
                9: "gap-x-9"
            },
            gapY: {
                auto: "gap-y-auto",
                none: "gap-y-0",
                1: "gap-y-1",
                2: "gap-y-2",
                3: "gap-y-3",
                4: "gap-y-4",
                5: "gap-y-5",
                6: "gap-y-6",
                7: "gap-y-7",
                8: "gap-y-8",
                9: "gap-y-9"
            },
            spacingX: {
                auto: "space-x-auto",
                none: "space-x-none",
                0: "space-x-0",
                1: "space-x-1",
                2: "space-x-2",
                3: "space-x-3",
                4: "space-x-4",
                5: "space-x-5",
                6: "space-x-6",
                7: "space-x-7",
                8: "space-x-8",
                9: "space-x-9"
            },
            spacingY: {
                auto: "space-y-auto",
                none: "space-y-none",
                0: "space-y-0",
                1: "space-y-1",
                2: "space-y-2",
                3: "space-y-3",
                4: "space-y-4",
                5: "space-y-5",
                6: "space-y-6",
                7: "space-y-7",
                8: "space-y-8",
                9: "space-y-9"
            }
        },
        defaultVariants: {
            distance: 4,
            gap: "none",
            gapX: "none",
            gapY: "none",
            spacingX: "none",
            spacingY: "none"
        }
    }
)

type ContainerElement = HTMLDivElement;

export interface ContainerProps extends React.HTMLAttributes<ContainerElement>, VariantProps<typeof containerVariants> {
    asChild?: boolean
}

const Container = React.forwardRef<ContainerElement, ContainerProps>(({ className, distance, gap, gapX, gapY, spacingX, spacingY, asChild = false, ...props }, ref) => {
    const Semantic = asChild ? Slot : "div"
    return (
        <Semantic className={cn(containerVariants({ className, distance, gap, gapX, gapY, spacingX, spacingY }))} ref={ref} {...props}/>
    )
})

Container.displayName = "Container"

export { Container, containerVariants }