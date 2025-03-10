'use client'

import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Stunning AI-Generated Headshots?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of professionals and teams using AI to create high-quality, realistic portraits in minutes.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="px-8">
              Try It Now
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            No complicated setup. Get high-quality AI portraits in just a few clicks.
          </p>
        </div>
      </div>
    </section>
  );
}
