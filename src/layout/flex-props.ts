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

import type { HTMLAttributes } from 'react'
import type {
  FlexElement,
  ResponsiveValue,
  Display,
  PositionValue,
  Overflow,
  Direction,
  Wrap,
  JustifyValue,
  ItemsValue,
  AlignValue,
  ZIndex,
  AspectRatio,
  Visibility,
  Opacity,
  PointerEvents,
  WidthValue,
  HeightValue,
  SizeValue,
  MinWidthHeightValue,
  MaxWidthHeightValue,
  NumericScale,
  SpacingValue
} from './flex-types'

export interface FlexProps extends HTMLAttributes<FlexElement> {
  asChild?: boolean
  className?: string

  display?: ResponsiveValue<Display>
  position?: ResponsiveValue<PositionValue>
  overflow?: ResponsiveValue<Overflow>
  direction?: ResponsiveValue<Direction>
  wrap?: ResponsiveValue<Wrap>
  justify?: ResponsiveValue<JustifyValue>
  items?: ResponsiveValue<ItemsValue>
  align?: ResponsiveValue<AlignValue>

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