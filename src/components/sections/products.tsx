'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Products } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProductsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Explore our range of cutting-edge life science products.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover"
                        data-ai-hint="medicine product"
                      />
                      <CardHeader>
                        <CardTitle className="font-headline">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col">
                        <CardDescription className="flex-1">{product.description}</CardDescription>
                        <div className="mt-4 flex items-end justify-end">
                          <Button asChild>
                            <a href="#contact">Inquire</a>
                          </Button>
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
        </div>
      </div>
    </section>
  );
}