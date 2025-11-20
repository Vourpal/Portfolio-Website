"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-stack storefront with product listings, cart, and Stripe checkout(in progress).",
      github: "https://github.com/Vourpal/Bird-Shop",
      live: "https://ecommerce.yoursite.com",
    },
    {
      id: 2,
      title: "Steam Success Predictor",
      description:
        "Predicts game success using reviews, tags, and release data with ML models.",
      github: "https://github.com/Vourpal/Steam-Success-Predictor",
    },
    {
      id: 3,
      title: "IP Address Tracker",
      description:
        "Tracks IP geolocation and network info using public APIs and maps.",
      github: "https://github.com/Vourpal/ip-address-tracker-master-solution",
      live: "https://vourpal.github.io/ip-address-tracker-master-solution/",
    },
    {
      id: 4,
      title: "Geography App",
      description:
        "Interactive React app for exploring countries and regions with real-time data and elegant UI.",
      github: "https://github.com/Vourpal/geography-project",
      live: "https://vourpal.github.io/geography-project/"
    },
    {
      id: 5,
      title: "Portfolio website",
      description:  "code for the website you are currently on",
      github: ""
    }
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = React.useCallback((emblaApi: any) => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="flex flex-col items-center">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full max-w-md"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {projects.map((p, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card className="bg-gradient-to-br from-indigo-900 to-purple-700 text-white shadow-lg">
                  <CardContent className="flex flex-col gap-4 p-6 items-center justify-center text-center">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="text-sm text-white/80">{p.description}</p>
                    <div className="flex gap-4 mt-2">
                      <Button
                        variant="secondary"
                        className="bg-white text-indigo-900 hover:bg-indigo-200"
                        onClick={() => window.open(p.github, "_blank")}
                      >
                        GitHub
                      </Button>
                      {p.live && (
                        <Button
                          variant="secondary"
                          className="bg-white text-purple-900 hover:bg-purple-200"
                          onClick={() => window.open(p.live, "_blank")}
                        >
                          Live Site
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {/* Dot Indicators */}
      <div className="mt-4 flex gap-2">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
