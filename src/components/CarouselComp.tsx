'use client'

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { NoticeCard } from "@/components/NoticeCard";

// CarouselComp component that accepts content and className
export function CarouselComp({
  content,
  className
}: {
  content: any;
  className?: string;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className={cn("w-[80%] md:w-full mx-auto", className)}
    >
      <CarouselContent>
        {content.notices.map((notice: any, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <NoticeCard
              key={index}
              title={notice.title}
              description={notice.description}
              src={notice.src}
              href={notice.href}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  );
}