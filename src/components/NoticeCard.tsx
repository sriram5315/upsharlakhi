import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function NoticeCard({
  title,
  description,
  src,
  href,
}: {
  title: string;
  description?: string; // Make description optional here too
  src: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank" className="mx-auto block h-[10rem] max-w-sm transition-transform hover:scale-[1.02]">
      <Card className="relative bg-main h-full overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-20"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <CardHeader className="relative">
          <CardTitle className="text-lg font-bold text-white">
            {title}
          </CardTitle>
        </CardHeader>

        {description && (
          <CardContent className="relative">
            <p className="text-sm text-gray-200">{description}</p>
          </CardContent>
        )}

        {/* Icon */}
        <div className="absolute top-3 right-3 text-white opacity-70 group-hover:opacity-100">
          <ExternalLink className="w-5 h-5" />
        </div>
      </Card>
    </Link>
  );
}