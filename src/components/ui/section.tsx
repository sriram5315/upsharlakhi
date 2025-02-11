import { cn } from "@/lib/utils";
import FadeInAnimation from "./fade-in-animation";

export function Section({
    children, className, heading, subHeading
}: {
    children: React.ReactElement;
    className?: string;
    heading?: string;
    subHeading?: string
}) {
    return (
        <section className={cn("padding-x-section section-width padding-top-section mx-auto", className)}>
            <FadeInAnimation>
                <div className="grid gap-2 lg:gap-3 mb-[2.5rem]">
                    <h2 className="text-center sc-text-headline">
                        {heading}
                    </h2>
                    <h4 className="text-center sc-text-body">
                        {subHeading}
                    </h4>
                </div>
            </FadeInAnimation>
          <div>{children}</div>
        </section>
    )
}