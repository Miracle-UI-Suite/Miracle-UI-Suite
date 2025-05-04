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

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const boxVariants = cva("block",
    {
        variants: {
            display: {
                inline: "inline-block",
                block: "block",
            },
            justify: {
                start: "justify-start",
                center: "justify-center",
                end: "justify-end",
                between: "justify-between",
                around: "justify-around",
                evenly: "justify-evenly",
            },
            items: {
                start: "items-start",
                center: "items-center",
                end: "items-end",
                stretch: "items-stretch",
                baseline: "items-baseline",
                normal: "items-normal",
            },
            padding: {
                auto: "p-auto",
                none: "p-0",
                1: "p-2",
                2: "p-4",
                3: "p-6",
                4: "p-8",
                5: "p-10",
                6: "p-12",
                7: "p-14",
                8: "p-16",
                9: "p-18",
            },
            margin: {
                auto: "m-auto",
                none: "m-0",
                1: "m-2",
                2: "m-4",
                3: "m-6",
                4: "m-8",
                5: "m-10",
                6: "m-12",
                7: "m-14",
                8: "m-16",
                9: "m-18",
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
                9: "gap-9",
            },
            width: {
                auto: "w-auto",
                full: "w-full",
                screen: "w-screen",
            },
            height: {
                auto: "w-auto",
                full: "h-full",
                screen: "h-screen",
            },
            overflow: {
                auto: "overflow-auto",
                clip: "overflow-clip",
                hidden: "overflow-hidden",
                scroll: "overflow-scroll",
                visible: "overflow-visible",
                autoX: "overflow-x-auto",
                autoY: "overflow-y-auto",
                clipX: "overflow-x-clip",
                clipY: "overflow-y-clip",
                hiddenX: "overflow-x-hidden",
                hiddenY: "overflow-y-hidden",
                scrollX: "overflow-x-scroll",
                scrollY: "overflow-y-scroll",
                visibleX: "overflow-x-visible",
                visibleY: "overflow-y-visible",
            },
        },
        defaultVariants: {
            display: "block",
            justify: "center",
            items: "center",
            padding: "none",
            margin: "none",
            gap: "none",
            width: "auto",
            height: "auto",
            overflow: "visible",
        },
    }
)

type BoxElement = HTMLDivElement;
export interface BoxProps extends React.HTMLAttributes<BoxElement>, VariantProps<typeof boxVariants> {
    asChild?: boolean
}

const Box = React.forwardRef<BoxElement, BoxProps>(
    ({ className, display, justify, items, padding, margin, width, height, overflow, asChild = false, ...props }, ref) => {
        const Layout = asChild ? Slot : "div"
        return (
            <Layout
                className={cn(boxVariants({ className, display, justify, items, padding, margin, width, height, overflow }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Box.displayName = "Box"

export { Box, boxVariants }