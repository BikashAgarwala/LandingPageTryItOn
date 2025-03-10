'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import arnabTryItOnAI from "@/public/arnabTryItOut.jpeg";
import arnab from "@/public/arnab.jpeg";
import user1 from "@/public/user1.png";
import user2 from "@/public/user2.png";
import user3 from "@/public/user3.png";
import user4 from "@/public/user4.png";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              AI-Powered <span className="text-primary">Studio-Quality</span> Headshots
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-lg">
              Get premium-quality AI-generated headshots in minutes. Perfect for professionals and teams worldwide. Trusted by over <span className="font-medium text-gray-900">800K+ users</span>.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="px-8">
                Get AI Headshots
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                See Pricing
              </Button>
            </div>
            {/* User Testimonials */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[...new Set([user1, user2, user3, user4])].map((user, index) => (
                  <div
                    key={index}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                  >
                    <Image
                      src={user}
                      alt={`User ${index + 1}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <span className="font-medium">2,000+ teams onboard</span>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 flex items-center justify-center">
            <div className="relative w-auto h-[100px] sm:h-[450px] md:h-[500px] aspect-[3/4]">
              <Image
                src={arnab}
                alt="Original AI Headshot"
                fill
                className="object-contain rounded-lg shadow-lg"
                priority
              />
            </div>

            <div className="text-9xl font-bold text-gray-600 flex-shrink-0 mx-4">→</div>

            <div className="relative w-auto h-[100px] sm:h-[450px] md:h-[500px] aspect-[3/4]">
              <Image
                src={arnabTryItOnAI}
                alt="AI-Enhanced Headshot"
                fill
                className="object-contain rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
