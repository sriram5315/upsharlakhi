import Image from "next/image";
import { type Metadata } from "next";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ApplyForAdmissions } from "@/components/ApplyForAdmissions";

export const metadata: Metadata = {
  title: "Admissions | Universal Public School",
  description: "Universal Public School (UPS)",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AdmissionsPage() {
  return (
    <main className="page-top-p section-width mt-[44px]">
      {/* Hero Image Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Admissions"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <h1 className="pt-16 md:pt-24 relative z-[10] font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Admissions
        </h1>
        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      {/* Overlapping Box (Still in Flow) */}
      <Card className="w-[90%] md:w-[50%] bg-admission shadow-lg rounded-lg p-6 mx-auto -mt-32 md:-mt-36 relative z-10">
        <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <CardHeader className="text-center">
            <CardTitle>
              <div className="text-lg md:text-2xl font-bold">
                Apply
                <span className="mx-2 px-2 py-1 rounded-md bg-secondary">
                  NOW!
                </span>
                for Admissions
              </div> 
            </CardTitle>
            <CardDescription>Fresh Year Starting from 9th March, 2025</CardDescription>
          </CardHeader>
          <CardContent className="h-[500px]">
            <ApplyForAdmissions />
          </CardContent>
      </Card>
    </main>
  );
}