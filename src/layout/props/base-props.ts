/** 
 * MIT License
 * 
 * Copyright (c) [2025-2026] [Alchemyst, Developers] {@link https://github.com/alchemyst-devs}.
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

import type { HTMLAttributes, JSX } from 'react';
import { ElementPropsWithout, RemovedProps } from '../../helpers/element-props';

type BaseElement = keyof JSX.IntrinsicElements;

type BaseDivProps = { as?: "div" } & ElementPropsWithout<"div", RemovedProps>;
type BaseSpanProps = { as?: "span" } & ElementPropsWithout<"span", RemovedProps>;

type ResponsiveValue<T> = 
  | T 
  | { initial: T; [breakpoint: string]: T | undefined };


type NumericScale =
    | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14
    | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

type FractionalScale =
  | `1/${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`
  | `2/${3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`
  | `3/${4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`
  | `4/${5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`
  | `5/${6 | 7 | 8 | 9 | 10 | 11 | 12}`
  | `6/${7 | 8 | 9 | 10 | 11 | 12}`
  | `7/${8 | 9 | 10 | 11 | 12}`
  | `8/${9 | 10 | 11 | 12}`
  | `9/${10 | 11 | 12}`
  | `10/${11 | 12}`
  | `11/12`;

type ZIndex = "0" | "10" | "20" | "30" | "40" | "50" | "auto";
type AspectRatio = "auto" | "square" | "video" | `${number}/${number}`;
type Visibility = "visible" | "invisible";
type Opacity = 0 | 25 | 50 | 75 | 100;
type PointerEvents = "none" | "auto";

type SpacingValue = NumericScale | "auto" | "px";
type WidthHeightValue = | NumericScale | FractionalScale | "auto" | "px" | "full" | "fit" | "screen" | "min" | "max" | "fit-content" | "min-content" | "max-content";

type WidthValue = WidthHeightValue | "dvw" | "lvw" | "svw";
type HeightValue = WidthHeightValue | "dvh" | "lvh" | "svh";

type MinWidthHeightValue = | WidthHeightValue | "none" | "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
type MaxWidthHeightValue = MinWidthHeightValue;

type SizeValue = | NumericScale | FractionalScale | "auto" | "px" | "full" | "fit" | "screen" | "min" | "max" | "dvw" | "lvw" | "svw" | "dvh" | "lvh" | "svh";

type Overflow = "auto" | "clip" | "hidden" | "scroll" | "visible";
type PositionValue = "static" | "relative" | "absolute" | "fixed" | "sticky";
type Display = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'hidden';

interface BaseLayoutProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  as?: BaseElement;
  className?: string;

  display?: ResponsiveValue<Display>
  position?: ResponsiveValue<PositionValue>
  overflow?: ResponsiveValue<Overflow>

  zIndex?: ResponsiveValue<ZIndex>
  aspectRatio?: ResponsiveValue<AspectRatio>
  visibility?: ResponsiveValue<Visibility>
  opacity?: ResponsiveValue<Opacity>
  pointerEvents?: ResponsiveValue<PointerEvents>

  width?: ResponsiveValue<WidthValue>
  height?: ResponsiveValue<HeightValue>
  size?: ResponsiveValue<SizeValue>
  minWidth?: ResponsiveValue<MinWidthHeightValue>
  minHeight?: ResponsiveValue<MinWidthHeightValue>
  maxWidth?: ResponsiveValue<MaxWidthHeightValue>
  maxHeight?: ResponsiveValue<MaxWidthHeightValue>
  top?: ResponsiveValue<NumericScale>
  bottom?: ResponsiveValue<NumericScale>
  left?: ResponsiveValue<NumericScale>
  right?: ResponsiveValue<NumericScale>

  padding?: ResponsiveValue<NumericScale>
  paddingX?: ResponsiveValue<NumericScale>
  paddingY?: ResponsiveValue<NumericScale>
  paddingTop?: ResponsiveValue<NumericScale>
  paddingBottom?: ResponsiveValue<NumericScale>
  paddingLeft?: ResponsiveValue<NumericScale>
  paddingRight?: ResponsiveValue<NumericScale>

  margin?: ResponsiveValue<SpacingValue>
  marginX?: ResponsiveValue<SpacingValue>
  marginY?: ResponsiveValue<SpacingValue>
  marginTop?: ResponsiveValue<SpacingValue>
  marginBottom?: ResponsiveValue<SpacingValue>
  marginLeft?: ResponsiveValue<SpacingValue>
  marginRight?: ResponsiveValue<SpacingValue>

  gap?: ResponsiveValue<NumericScale>
  gapX?: ResponsiveValue<NumericScale>
  gapY?: ResponsiveValue<NumericScale>
  spaceX?: ResponsiveValue<NumericScale>
  spaceY?: ResponsiveValue<NumericScale>
}

type BaseProps = BaseLayoutProps & (BaseDivProps | BaseSpanProps);

export type { BaseProps };