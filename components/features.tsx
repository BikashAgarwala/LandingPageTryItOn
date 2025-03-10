'use client'

import { CheckCircle, Zap, BarChart3, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Lightning Fast Processing",
      description:
        "Generate studio-quality AI headshots within minutes. No long wait times, just instant results.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Seamless Integration",
      description:
        "Works with your existing platforms to provide a hassle-free experience for individuals and teams.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "AI-Driven Accuracy",
      description:
        "Our advanced AI ensures lifelike headshots with professional lighting, clarity, and precision.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Perfect for Teams",
      description:
        "Ideal for remote teams and professionals. Ensure everyone has a high-quality professional headshot.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Why Choose Us?
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered. Instant. Flawless.
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Experience the most advanced AI headshot generator trusted by <span className="font-medium text-gray-900">800K+ professionals</span>.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 pt-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white rounded-xl shadow-md border transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
