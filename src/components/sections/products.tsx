import Image from 'next/image';
import { Products } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProductsSection() {
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
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Products.map((product) => {
            const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
            return (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                {productImage && (
                   <Image
                      src={productImage.imageUrl}
                      alt={productImage.description}
                      width={600}
                      height={400}
                      className="aspect-[3/2] w-full object-cover"
                      data-ai-hint={productImage.imageHint}
                    />
                )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
