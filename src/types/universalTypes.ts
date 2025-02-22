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

export interface SectionProps{
  heading: string;
  subHeading: string;
}

export interface BasicCard {
  title: string;
  src: string;
  description?: string
}