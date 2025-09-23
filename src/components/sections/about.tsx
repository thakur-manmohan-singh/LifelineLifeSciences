import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const manufacturingUnits = [
  {
    location: 'DY Medcare Pvt. Ltd, Herbal, Haryana (India)',
    products: 'Tablets, Capsules, Syrups, Cream',
  },
  {
    location: 'Baddi, Himachal Pradesh (India)',
    products: 'Allopathic medicines - Injections, Tablets, Capsules, Syrups',
  },
  {
    location: 'Ghaziabad, Gautam Budh Nagar, Uttar Pradesh (India)',
    products: 'Surgical & specialty products',
  },
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-image");

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Lifeline Life Sciences
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Lifeline Life Sciences is a professionally managed company with a vision to provide quality and affordable medicines to the larger section of the society. We have an unwavering commitment towards our customers in providing them with quality products.
            </p>
        </div>
        
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Our Manufacturing Units
            </h3>
            <ul className="mt-6 space-y-4">
              {manufacturingUnits.map((unit) => (
                <li key={unit.location} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <span className="font-semibold">{unit.location}:</span>
                    <p className="text-foreground/80">{unit.products}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
