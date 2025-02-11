import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Universal Public School",
  description: "Universal Public School (UPS)",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ContactUsPage() {
  return (
    <main className="page-top-p padding-x-section section-width mt-[44px]">
      <div className="h-[700px]">Contact Us</div>
    </main>
  );
}
