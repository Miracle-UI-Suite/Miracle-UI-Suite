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

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center align-middle gap-2 whitespace-nowrap rounded-md text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
				elevated: "bg-background text-secondary-foreground shadow hover:bg-accent hover:text-accent-foreground",
				filled: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
				linked: "text-primary underline-offset-4 hover:underline",
				outlined: "border border-border bg-transparent shadow-none hover:bg-accent hover:text-accent-foreground",
				text: "hover:bg-accent hover:text-accent-foreground",
				tonal: "bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/80",
			},
			size: {
				badge: "h-7 gap-1.5 p-1 text-sm normal font-medium text-muted-foreground",
				default: "h-8 md:h-9 text-xs md:text-sm px-3 md:px-4 py-2",
				natural: "h-9 px-4 py-2",
				small: "h-8 px-3 text-xs",
				large: "h-10 px-8",
				action: "h-8 px-2 py-2 text-xs shadow-none",
				icon: "h-8 w-8 px-2 py-2 shadow-none",
				social: "h-8 w-8 px-2 py-2",
				wide: "h-9 w-full px-4 py-2",
			},
			radius: {
				"0": "rounded-none",
				"25": "rounded-sm",
				"50": "rounded-md",
				"75": "rounded-lg",
				"100": "rounded-full",
			},
			align: {
				left: "justify-start text-left",
				center: "justify-center text-center",
				right: "justify-end text-right",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "natural",
			radius: "50",
			align: "center"
		},
	}
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, radius, align, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				className={cn(buttonVariants({ className, variant, size, radius, align }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }