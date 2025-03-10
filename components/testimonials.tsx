'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import test1 from "@/public/test1.avif"
import test2 from "@/public/test2.avif"
import test3 from "@/public/test3.avif"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This AI headshot generator exceeded my expectations! The quality is on par with professional studio shots.",
      author: "Sarah Johnson",
      role: "Marketing Lead at TechCorp",
      avatar: test1,
      stars: 5,
    },
    {
      quote:
        "Absolutely worth it! The AI-generated headshots look flawless and saved me time from hiring a photographer.",
      author: "Michael Chen",
      role: "CTO at StartupX",
      avatar: test2,
      stars: 5,
    },
    {
      quote:
        "Great for remote teams! We got professional headshots for our entire company in just a few minutes.",
      author: "Emily Rodriguez",
      role: "Operations Director at GrowthCo",
      avatar: test3,
      stars: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            What Our Users Say
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Trusted by 800K+ Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            See what our users have to say about our AI-powered headshots.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 pt-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border shadow-md p-6 transition-transform transform hover:scale-105 bg-white rounded-xl"
            >
              <CardContent className="flex flex-col items-start">
                {/* Star Rating */}
                <div className="flex space-x-1 mb-4 text-yellow-500">
                  {Array(testimonial.stars)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400" />
                    ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-gray-700 text-lg italic">&quot;{testimonial.quote}&quot;</p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
