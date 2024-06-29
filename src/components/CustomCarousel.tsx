import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card } from "./ui/card";

const CustomCarousel = () => {
  return (
    <Carousel className="mt-10 w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="flex items-center justify-center gap-4 ">
            <Card className="p-40 flex-1 items-center flex justify-center">
              Card 1
            </Card>
            <Card className="p-40 flex-1 items-center flex justify-center">
              Card 1
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CustomCarousel;
