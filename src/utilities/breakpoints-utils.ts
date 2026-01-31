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

const breakpointAliasMap: Record<string, string> = {
	initial: "",
	small: "sm",
	medium: "md",
	large: "lg",
	xl: "xl",
	"2xl": "2xl",
};

export const resolveResponsiveClass = <T extends string | number>(
	prefix: string,
	value?: T | { initial?: T; [key: string]: T | undefined }
): string[] => {
	if (value === undefined) return [];
	if (typeof value !== "object") return [`${prefix}-${value}`];

	return Object.entries(value).map(([key, val]) => {
		const bp = breakpointAliasMap[key] ?? key;
		return bp ? `${bp}:${prefix}-${val}` : `${prefix}-${val}`;
	});
};

export const resolveEnumClass = <T extends string>(
	value?: T | { initial?: T; [key: string]: T | undefined }
): string[] => {
	if (!value) return [];
	if (typeof value !== "object") return [value];

	return Object.entries(value).map(([key, val]) => {
		const bp = breakpointAliasMap[key] ?? key;
		return bp ? `${bp}:${val}` : `${val}`;
	});
};