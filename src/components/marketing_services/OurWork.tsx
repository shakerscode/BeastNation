import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import useCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface ClientImage {
  id: number;
  src: string;
  label: string;
  description: string;
}

const OurWork = ({
  data,
  hideHeading,
}: {
  data: ClientImage[];
  hideHeading?: boolean;
}) => {
  const [api, setApi] = useState<ReturnType<typeof useCarousel>[1]>(null);
  const [current, setCurrent] = useState(0);
  const images: ClientImage[] = data;

  // Handle slide change
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  // Set up the carousel
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  // Function to handle direct slide to specific index
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="py-20 md:py-32 text-white overflow-hidden">
      <div className="px-4">
        {!hideHeading && (
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-beast-purple-light">Works</span>
            </motion.h2>
            <motion.p
              className="text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how we've transformed brands through strategic partnerships
              and innovative campaigns
            </motion.p>
          </div>
        )}

        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "center",
              containScroll: false,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => {
                const isActive = current === index;

                return (
                  <CarouselItem
                    key={image.id}
                    className={cn(
                      "transition-opacity duration-300 aspect-video",
                      isActive
                        ? "basis-[calc(100%/2+200px)]"
                        : "md:basis-1/2 lg:basis-2/5"
                    )}
                  >
                    <div
                      className={cn(
                        "w-full h-full transition-all duration-500 transform",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-70"
                      )}
                      onClick={() => scrollTo(index)}
                    >
                      <Card className="bg-transparent border-0 overflow-hidden h-full">
                        <CardContent className="p-0 h-full">
                          <div className="relative group cursor-pointer w-full h-full">
                            <div className="bg-gray-900 rounded-lg overflow-hidden w-full h-full">
                              <img
                                src={image.src}
                                alt={image.label}
                                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                                onError={(e) =>
                                  ((e.target as HTMLImageElement).src =
                                    "/placeholder.svg")
                                }
                              />
                            </div>

                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end md:p-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                              >
                                <h3 className="text-3xl md:text-2xl font-bold mb-2">
                                  {image.label}
                                </h3>
                                <p className="text-lg text-gray-300 mb-4">
                                  {image.description}
                                </p>
                                {!hideHeading && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-max border-white text-white hover:bg-white/20"
                                  >
                                    View Case Study
                                  </Button>
                                )}
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    current === index
                      ? "bg-white w-6"
                      : "bg-gray-600 hover:bg-gray-400"
                  )}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselPrevious className="left-4 md:hidden md:-left-2 bg-black/50 text-white border-white/20 hover:bg-black/80" />
            <CarouselNext className="right-4 md:hidden md:-right-2 bg-black/50 text-white border-white/20 hover:bg-black/80" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
