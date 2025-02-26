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
import { z } from "zod";

export const enquirySchema = z.object({
  parentName: z.string().min(2, "Parent Name must be at least 2 characters"),
  studentName: z.string().min(2, "Student Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile Number must be at least 10 characters"),
  village: z.string().min(2, "Village must be at least 2 characters"),
  class: z.enum(["Nursery", "KG", "1", "2", "3", "4", "5", "6", "7", "8"], {
    errorMap: () => ({ message: "Invalid class selection" }),
  }),
});

export type EnquiryData = z.infer<typeof enquirySchema>;