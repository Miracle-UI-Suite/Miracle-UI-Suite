/**
 * MIT License
 *
 * Copyright (c) [2025] [Miracle UI, Library] {@link https://github.com/Miracle-UI-Suite}.
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
import { cn } from "@/src/utilities/utils";

const gridVariants = cva("grid",
    {
        variants: {
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
                visibleY: "overflow-y-visible"
            },
            display: {
                inline: "inline-grid",
                grid: "grid"
            },
            column: {
                auto: "grid-cols-auto",
                1: "grid-cols-1",
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-4",
                5: "grid-cols-5",
                6: "grid-cols-6",
                7: "grid-cols-7",
                8: "grid-cols-8",
                9: "grid-cols-9"
            },
            row: {
                auto: "grid-rows-auto",
                1: "grid-rows-1",
                2: "grid-rows-2",
                3: "grid-rows-3",
                4: "grid-rows-4",
                5: "grid-rows-5",
                6: "grid-rows-6",
                7: "grid-rows-7",
                8: "grid-rows-8",
                9: "grid-rows-9"
            },
            flow: {
                row: "grid-flow-row",
                col: "grid-flow-col",
                rowDense: "grid-flow-row-dense",
                colDense: "grid-flow-col-dense"
            },
            width: {
                auto: "w-auto",
                full: "w-full",
                screen: "w-screen"
            },
            height: {
                auto: "w-auto",
                full: "h-full",
                screen: "h-screen"
            },
            justify: {
                start: "justify-start",
                center: "justify-center",
                end: "justify-end",
                between: "justify-between",
                around: "justify-around",
                evenly: "justify-evenly"
            },
            items: {
                start: "items-start",
                center: "items-center",
                end: "items-end",
                stretch: "items-stretch",
                baseline: "items-baseline",
                normal: "items-normal"
            },
            align: {
                left: "text-left",
                right: "text-right",
                center: "text-center",
                justify: "text-justify"
            },
            padding: {
                auto: "p-auto",
                none: "p-0",
                1: "p-1",
                2: "p-2",
                3: "p-3",
                4: "p-4",
                5: "p-5",
                6: "p-6",
                7: "p-7",
                8: "p-8",
                9: "p-9"
            },
            paddingX: {
                auto: "px-auto",
                none: "px-0",
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
            paddingY: {
                auto: "py-auto",
                none: "py-0",
                1: "py-1",
                2: "py-2",
                3: "py-3",
                4: "py-4",
                5: "py-5",
                6: "py-6",
                7: "py-7",
                8: "py-8",
                9: "py-9"
            },
            margin: {
                auto: "m-auto",
                none: "m-0",
                1: "m-1",
                2: "m-2",
                3: "m-3",
                4: "m-4",
                5: "m-5",
                6: "m-6",
                7: "m-7",
                8: "m-8",
                9: "m-9"
            },
            marginX: {
                auto: "mx-auto",
                none: "mx-0",
                1: "mx-1",
                2: "mx-2",
                3: "mx-3",
                4: "mx-4",
                5: "mx-5",
                6: "mx-6",
                7: "mx-7",
                8: "mx-8",
                9: "mx-9"
            },
            marginY: {
                auto: "my-auto",
                none: "my-0",
                1: "my-1",
                2: "my-2",
                3: "my-3",
                4: "my-4",
                5: "my-5",
                6: "my-6",
                7: "my-7",
                8: "my-8",
                9: "my-9"
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
            },
        },
        defaultVariants: {
            overflow: "hidden",
            display: "grid",
            column: "auto",
            row: "auto",
            flow: "row",
            width: "auto",
            height: "auto",
            justify: "center",
            items: "center",
            align: "left",
            padding: "none",
            paddingX: "none",
            paddingY: "none",
            margin: "none",
            marginX: "none",
            marginY: "none",
            gap: "none",
            gapX: "none",
            gapY: "none",
            spacingX: "none",
            spacingY: "none"
        }
    }
)

type GridElement = HTMLDivElement;

export interface GridProps extends React.HTMLAttributes<GridElement>, VariantProps<typeof gridVariants> {
    asChild?: boolean
}

const GridLayout = React.forwardRef<GridElement, GridProps>(({ className, overflow, display, column, row, flow, width, height, justify, items, align, padding, paddingX, paddingY, margin, marginX, marginY, gap, gapX, gapY, spacingX, spacingY, asChild = false, ...props }, ref) => {
    const Layout = asChild ? Slot : "div"
    return (
        <Layout className={cn(gridVariants({ className, overflow, display, column, row, flow, width, height, justify, items, align, padding, paddingX, paddingY, margin, marginX, marginY, gap, gapX, gapY, spacingX, spacingY }))} ref={ref} {...props}/>
    )
})

GridLayout.displayName = "GridLayout"

export { GridLayout, gridVariants }