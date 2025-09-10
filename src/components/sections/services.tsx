import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, FlaskConical, Dna } from 'lucide-react';

const services = [
  {
    icon: <Dna className="h-10 w-10 text-primary" />,
    title: 'Genomic Research',
    description: 'Pioneering research into genetic markers and therapies to combat hereditary diseases.',
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'Biopharmaceutical Development',
    description: 'Developing next-generation biologics and pharmaceuticals for a wide range of conditions.',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Clinical Diagnostics',
    description: 'Providing advanced and accurate diagnostic services for early detection and treatment.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            We offer a range of specialized services to accelerate scientific discovery and improve patient outcomes.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                {service.icon}
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
