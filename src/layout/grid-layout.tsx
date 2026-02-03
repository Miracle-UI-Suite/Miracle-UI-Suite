/** 
 * MIT License
 * 
 * Copyright (c) 2025-2026 Alchemyst, IO
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

import { forwardRef, Ref } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utilities/utils";
import {
    resolveEnumClass,
    resolveResponsiveClass,
} from "../utilities/breakpoints-utils";
import type { GridProps } from "./props/grid-props";

type DefaultElement = HTMLDivElement;

const GridLayout = forwardRef<DefaultElement, GridProps>(
    (
        {
            asChild = false,
            as: Tag = "div",
            className,
            display,
            position,
            overflow,
            columns,
            rows,
            autoFlow,
            justifyContent,
            alignContent,
            placeContent,
            justifyItems,
            alignItems,
            placeItems,
            justifySelf,
            alignSelf,
            placeSelf,
            colSpan,
            colStart,
            colEnd,
            col,
            rowSpan,
            rowStart,
            rowEnd,
            row,
            zIndex,
            aspectRatio,
            visibility,
            opacity,
            pointerEvents,
            width,
            height,
            size,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight,
            top,
            bottom,
            left,
            right,
            padding,
            paddingX,
            paddingY,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            margin,
            marginX,
            marginY,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            gap,
            gapX,
            gapY,
            ...props
        },
        ref: Ref<DefaultElement>
    ) => {
        const Component = asChild ? Slot : Tag;

        const classes = [
            "grid",
            ...resolveEnumClass(display),
            ...resolveEnumClass(position),
            ...resolveEnumClass(overflow),
            ...resolveEnumClass(visibility),
            ...resolveEnumClass(pointerEvents),

            ...resolveResponsiveClass("grid-cols", columns),
            ...resolveResponsiveClass("grid-rows", rows),
            ...resolveResponsiveClass("grid-flow", autoFlow),

            ...resolveResponsiveClass("justify-content", justifyContent),
            ...resolveResponsiveClass("align-content", alignContent),
            ...resolveResponsiveClass("place-content", placeContent),
            ...resolveResponsiveClass("justify-items", justifyItems),
            ...resolveResponsiveClass("align-items", alignItems),
            ...resolveResponsiveClass("place-items", placeItems),
            ...resolveResponsiveClass("justify-self", justifySelf),
            ...resolveResponsiveClass("align-self", alignSelf),
            ...resolveResponsiveClass("place-self", placeSelf),

            ...resolveResponsiveClass("col-span", colSpan),
            ...resolveResponsiveClass("col-start", colStart),
            ...resolveResponsiveClass("col-end", colEnd),
            ...resolveResponsiveClass("col", col),

            ...resolveResponsiveClass("row-span", rowSpan),
            ...resolveResponsiveClass("row-start", rowStart),
            ...resolveResponsiveClass("row-end", rowEnd),
            ...resolveResponsiveClass("row", row),

            ...resolveResponsiveClass("z", zIndex),
            ...resolveResponsiveClass("aspect", aspectRatio),
            ...resolveResponsiveClass("opacity", opacity),

            ...(size ? [
                ...resolveResponsiveClass("w", size),
                ...resolveResponsiveClass("h", size),
            ] : []),

            ...resolveResponsiveClass("w", width),
            ...resolveResponsiveClass("h", height),
            ...resolveResponsiveClass("min-w", minWidth),
            ...resolveResponsiveClass("min-h", minHeight),
            ...resolveResponsiveClass("max-w", maxWidth),
            ...resolveResponsiveClass("max-h", maxHeight),

            ...resolveResponsiveClass("top", top),
            ...resolveResponsiveClass("bottom", bottom),
            ...resolveResponsiveClass("left", left),
            ...resolveResponsiveClass("right", right),

            ...resolveResponsiveClass("p", padding),
            ...resolveResponsiveClass("px", paddingX),
            ...resolveResponsiveClass("py", paddingY),
            ...resolveResponsiveClass("pt", paddingTop),
            ...resolveResponsiveClass("pb", paddingBottom),
            ...resolveResponsiveClass("pl", paddingLeft),
            ...resolveResponsiveClass("pr", paddingRight),

            ...resolveResponsiveClass("m", margin),
            ...resolveResponsiveClass("mx", marginX),
            ...resolveResponsiveClass("my", marginY),
            ...resolveResponsiveClass("mt", marginTop),
            ...resolveResponsiveClass("mb", marginBottom),
            ...resolveResponsiveClass("ml", marginLeft),
            ...resolveResponsiveClass("mr", marginRight),

            ...resolveResponsiveClass("gap", gap),
            ...resolveResponsiveClass("gap-x", gapX),
            ...resolveResponsiveClass("gap-y", gapY),
        ];

        return (
            <Component ref={ref} className={cn(classes, className)} {...props} />
        );
    }
);

GridLayout.displayName = "GridLayout";

export default GridLayout;