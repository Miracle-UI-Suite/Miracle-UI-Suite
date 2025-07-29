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
import { cn } from "@/src/utilities/utils";

type ConstraintProps = {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  width?: number | string;
  height?: number | string;
  zIndex?: number;
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Maps constraint props to Tailwind classes if possible, otherwise returns undefined.
 * For custom values, falls back to inline style.
 */
function constraintToClassAndStyle(props: ConstraintProps) {
  const classNames: string[] = ["absolute"];
  const style: React.CSSProperties = {};

  // Map numeric values to Tailwind if possible, else use style
  if (props.top !== undefined) {
    if (typeof props.top === "number" && props.top % 1 === 0 && props.top >= 0 && props.top <= 96) {
      classNames.push(`top-${props.top}`);
    } else {
      style.top = props.top;
    }
  }
  if (props.left !== undefined) {
    if (typeof props.left === "number" && props.left % 1 === 0 && props.left >= 0 && props.left <= 96) {
      classNames.push(`left-${props.left}`);
    } else {
      style.left = props.left;
    }
  }
  if (props.right !== undefined) {
    if (typeof props.right === "number" && props.right % 1 === 0 && props.right >= 0 && props.right <= 96) {
      classNames.push(`right-${props.right}`);
    } else {
      style.right = props.right;
    }
  }
  if (props.bottom !== undefined) {
    if (typeof props.bottom === "number" && props.bottom % 1 === 0 && props.bottom >= 0 && props.bottom <= 96) {
      classNames.push(`bottom-${props.bottom}`);
    } else {
      style.bottom = props.bottom;
    }
  }
  if (props.width !== undefined) {
    if (props.width === "full") classNames.push("w-full");
    else if (props.width === "screen") classNames.push("w-screen");
    else if (typeof props.width === "number" && props.width % 1 === 0 && props.width >= 0 && props.width <= 96) {
      classNames.push(`w-${props.width}`);
    } else {
      style.width = props.width;
    }
  }
  if (props.height !== undefined) {
    if (props.height === "full") classNames.push("h-full");
    else if (props.height === "screen") classNames.push("h-screen");
    else if (typeof props.height === "number" && props.height % 1 === 0 && props.height >= 0 && props.height <= 96) {
      classNames.push(`h-${props.height}`);
    } else {
      style.height = props.height;
    }
  }
  if (props.zIndex !== undefined) {
    if (typeof props.zIndex === "number" && props.zIndex >= 0 && props.zIndex <= 50) {
      classNames.push(`z-${props.zIndex}`);
    } else {
      style.zIndex = props.zIndex;
    }
  }

  return {
    className: cn(classNames, props.className),
    style,
  };
}

/**
 * ConstraintItem: Absolutely positioned child with constraint props.
 */
const ConstraintItem = React.forwardRef<HTMLDivElement, ConstraintProps>(
  ({ asChild = false, children, className, ...rest }, ref) => {
    const { className: constraintClass, style } = constraintToClassAndStyle({ ...rest, className });
    const Comp = asChild ? Slot : "div";
    return (
      <Comp ref={ref} className={constraintClass} style={style}>
        {children}
      </Comp>
    );
  }
);
ConstraintItem.displayName = "ConstraintItem";

/**
 * ConstraintLayout: Parent container with relative positioning.
 */
type ConstraintLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: React.ReactNode;
};

const ConstraintLayout = React.forwardRef<HTMLDivElement, ConstraintLayoutProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          // Extract constraint props from the child
          const {
            top, left, right, bottom, width, height, zIndex, asChild: childAsChild, className: childClassName, ...rest
          } = (child as React.ReactElement<any>).props;

          // Only wrap if any constraint prop is present
          const hasConstraint =
            top !== undefined ||
            left !== undefined ||
            right !== undefined ||
            bottom !== undefined ||
            width !== undefined ||
            height !== undefined ||
            zIndex !== undefined;

          if (hasConstraint) {
            return (
              <ConstraintItem
                top={top}
                left={left}
                right={right}
                bottom={bottom}
                width={width}
                height={height}
                zIndex={zIndex}
                asChild
                className={childClassName}
                {...rest}
              >
                {React.cloneElement(child as React.ReactElement<{ className?: string }>, { className: undefined })}
              </ConstraintItem>
            );
          }
          return child;
        })}
      </Comp>
    );
  }
);
ConstraintLayout.displayName = "ConstraintLayout";

export { ConstraintLayout, ConstraintItem };