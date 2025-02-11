"use client"
import { IconLink, LinkType } from "@/types/universalTypes";
import Link from "next/link";
import Image from "next/image";
import FadeInAnimation from '@/components/ui/fade-in-animation';
import {
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
  MapPinCheck
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

// interface Contact {
//   address: {
    
//   }
// }

const Footer = ({quickLinks}: {quickLinks: LinkType[]}) => {
  const pathname = usePathname();

  const icons: IconLink[] = [
    { icon: Phone, href: "tel:+1234567890" },
    { icon: MessageCircle, href: "https://wa.me/1234567890", isExternal: true },
    {
      icon: Facebook,
      href: "https://facebook.com/universalpublicschool",
      isExternal: true,
    },
    {
      icon: Instagram,
      href: "https://instagram.com/universalpublicschool",
      isExternal: true,
    },
  ];
  const contact = {
    address: {
      mapLink: "https://www.google.com/maps",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, praesentium."
    },
    reachOut: ["Landline: +91-1126122723, +91-1126122724", "Mobile: +91-9871600061, 91-9871600062", "Email: school@gdgoenka.com"]
  }
  return (
    <footer className="px-2 mt-[2.5rem]">
      <FadeInAnimation>
        <div className="pt-8 md:pt-12 pb-2 mb-1 bg-nav rounded-lg text-gray-800">
          <div className="mb-4 flex flex-col items-start justify-center md:flex-row md:justify-between md:items-start padding-x-section section-width">
            <div className="flex flex-col gap-2 mb-4 md:mb-0">
              <Link href={'/'}>
                <Image
                  src="/universal-public-school-logo.png"
                  alt="Universal Public School"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="px-4 md:px-0 max-w-[300px] md:max-w-[250px]">
                  <a
                    href={contact.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-primary"
                  >
                    <MapPinCheck className="inline mr-2 cursor-pointer text-primary"/>
                  </a>
                <span>{contact.address.text}</span>
              </div>
              <div className="px-4 md:px-0 flex justify-start gap-6 pt-2">
                {icons.map(({ icon: Icon, href, isExternal }) => (
                  <a
                    key={href}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="transition-colors text-primary"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
            <div className="md:flex md:flex-col md:gap-4 md:max-w-[25rem]">
              <ul className="px-4 md:px-0 pt-6 md:flex md:gap-4 mb-4 md:mb-0">
                <li className="mb-1 font-semibold">Quick Links</li>
                {quickLinks.map((quickLink) => (
                  <li key={quickLink.href} className={`transition-colors duration-300 ease-out ${pathname === quickLink.href ? "font-semibold text-blue-700" : "text-gray-800 hover:text-gray-600"}`}>
                    <Link href={quickLink.href}>{quickLink.text}</Link>
                  </li>
                ))}
              </ul>
              <ul className="px-4 md:px-0 mb-8 md:mb-0">
                {contact.reachOut.map((mode) => (
                  <li key={mode} className="text-gray-700">{mode}</li>
                ))}
              </ul>
              <div>
                <Link href={'/'} className="pt-6 px-2 md:px-0">
                    <Button className="inline-block w-full px-4 py-2 text-white font-semibold rounded-full shadow-sm shadow-primary/80">
                        Visit our App
                    </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-4 mt-4">
            <div className="text-center text-gray-700 mt-1 border-t-2 border-blue-400/40 pt-2">
              © Universal Public School. All Rights Reserved | Designed By: <span className="cursor-pointer">Twitter Link</span> 
            </div>          
          </div>
        </div>
      </FadeInAnimation>
    </footer>
  );
};

export default Footer;