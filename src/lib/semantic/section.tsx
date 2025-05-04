import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const sectionVariants = cva([],
    {
        variants: {
            distance: {
                auto: "py-auto",
                none: "py-none",
                0: "py-0",
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
            distance: "auto",
            gap: "none",
            spacingX: "none",
            spacingY: "none"
        },
    }
)

type SectionElement = HTMLDivElement;

export interface SectionProps extends React.HTMLAttributes<SectionElement>, VariantProps<typeof sectionVariants> {
    asChild?: boolean
}

const Section = React.forwardRef<SectionElement, SectionProps>(({ className, distance, gap, spacingX, spacingY, asChild = false, ...props }, ref) => {
    const Semantic = asChild ? Slot : "div"
    return (
        <Semantic className={cn(sectionVariants({ className, distance, gap, spacingX, spacingY }))} ref={ref} {...props}/>
    )
})

Section.displayName = "Section"

export { Section, sectionVariants }