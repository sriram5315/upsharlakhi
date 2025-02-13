import type { LucideIcon } from "lucide-react";

export interface LinkType {
    text: string;
    href: string
}

export interface IconLink {
  icon: LucideIcon;
  href: string;
  isExternal?: boolean;
}