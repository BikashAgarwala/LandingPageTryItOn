'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
    buttonText: string;
    buttonVariant: "outline" | "default" | "link" | "destructive" | "secondary" | "ghost";
  }[] = [
    {
      name: "Express AI Headshots",
      price: "$35",
      description: "Ideal for individuals seeking quick and professional headshots.",
      features: [
        "20 AI-generated headshots",
        "Delivery within 20-40 minutes",
        "100+ images per person",
        "Custom outfits & backgrounds",
        "Inclusive AI",
        "Human edits available",
        "Dedicated team support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as "outline" | "default" | "link" | "destructive" | "secondary" | "ghost",
    },
    {
      name: "Creative Studio Subscription",
      price: "$37",
      description: "Perfect for those looking to create custom portraits with flexibility.",
      features: [
        "Unlimited custom portraits",
        "Any outfit, scene, or color",
        "Starting at $37 per month",
        "Cancel anytime policy",
        "Access to Creative Studio tools",
      ],
      popular: true,
      buttonText: "Subscribe Now",
      buttonVariant: "default" as "outline" | "default" | "link" | "destructive" | "secondary" | "ghost",
    },
    {
      name: "Corporate Team Packages",
      price: "Custom Pricing",
      description: "Tailored solutions for teams and enterprises requiring consistent, on-brand portraits.",
      features: [
        "Custom branded headshots",
        "Discounts for large teams",
        "Dedicated account manager",
        "Custom training sessions",
        "Human edits available",
        "Dedicated team support",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that best fits your needs. All plans are designed to provide exceptional value and quality.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col border ${plan.popular ? "border-primary shadow-lg" : "shadow-sm"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom Pricing" && <span className="text-sm text-gray-500">/month</span>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.buttonVariant} className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
