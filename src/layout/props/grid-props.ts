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

import type { BaseProps } from './base-props'

/**
 * Only Tailwind-supported grid layout props are included here.
 * Responsive values can be passed as `{ initial: T; md?: T; ... }`.
 */
type ResponsiveValue<T> =
  | T
  | { initial?: T; [breakpoint: string]: T | undefined }

type AutoFlow = 'row' | 'col' | 'row-dense' | 'col-dense' | 'dense'
type JustifyContent =
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
  | 'baseline'
  | 'normal'
type AlignContent =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'stretch'
  | 'baseline'
  | 'stretch'
  | 'normal'
type PlaceContent =
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
  | 'baseline'
type JustifyItems =
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'stretch'
  | 'normal'
type AlignItems =
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'stretch'
  | 'baseline'
  | 'baseline-last'
type PlaceItems =
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'stretch'
  | 'baseline'
type JustifySelf =
  | 'auto'
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'stretch'
type AlignSelf =
  | 'auto'
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'stretch'
  | 'baseline'
  | 'baseline-last'
type PlaceSelf =
  | 'auto'
  | 'start'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'stretch'

type GridProps = BaseProps & {
  // Grid template
  columns?: ResponsiveValue<number | string> // maps to `grid-cols-*`
  rows?: ResponsiveValue<number | string> // maps to `grid-rows-*`
  autoFlow?: ResponsiveValue<AutoFlow> // maps to `grid-flow-*`

  // Grid alignment
  justifyContent?: ResponsiveValue<JustifyContent> // `justify-*`
  alignContent?: ResponsiveValue<AlignContent> // `content-*`
  placeContent?: ResponsiveValue<PlaceContent>
  justifyItems?: ResponsiveValue<JustifyItems> // `justify-items-*`
  alignItems?: ResponsiveValue<AlignItems> // `items-*`
  placeItems?: ResponsiveValue<PlaceItems> // `place-items-*`
  justifySelf?: ResponsiveValue<JustifySelf>
  alignSelf?: ResponsiveValue<AlignSelf>
  placeSelf?: ResponsiveValue<PlaceSelf>

  // Grid item placement (Tailwind-supported)
  colSpan?: ResponsiveValue<number | 'full' | 'auto' | string> // `col-span-*`
  colStart?: ResponsiveValue<number | 'auto' | string> // `col-start-*`
  colEnd?: ResponsiveValue<number | 'auto' | string> // `col-end-*`
  col?: ResponsiveValue<number | string> // `col-*`

  rowSpan?: ResponsiveValue<number | 'full' | 'auto' | string> // `row-span-*`
  rowStart?: ResponsiveValue<number | 'auto' | string> // `row-start-*`
  rowEnd?: ResponsiveValue<number | 'auto' | string> // `row-end-*`
  row?: ResponsiveValue<number | string> // `row-*`
}

export type { GridProps }