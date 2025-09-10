import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-image");

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Lifeline Life Sciences
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              At Lifeline Life Sciences, we are driven by a singular mission: to forge new pathways in health and biotechnology. Our team of dedicated scientists and researchers leverages cutting-edge technology and collaborative partnerships to develop innovative solutions that address some of the most pressing health challenges of our time. From pioneering new diagnostic tools to advancing therapeutic research, we are committed to enhancing the quality of life and building a healthier future for all.
            </p>
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
