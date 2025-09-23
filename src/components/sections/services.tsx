import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Syringe, Pill, FlaskConical, HeartPulse, Dna, Package } from 'lucide-react';

const portfolio = [
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: 'Injectables',
    description: 'Liquid (Vials/Ampoules), Powder, Lyophilized (Cake & Powder Form).',
  },
  {
    icon: <Pill className="h-10 w-10 text-primary" />,
    title: 'Tablets & Capsules',
    description: 'General, Cepaholosporins, Beta-lactams, Hard Gel Capsules.',
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'Syrups',
    description: 'Dry & Liquid formulations.',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: 'Oncology (Anticancer) Products',
    description: 'Injections & Tablets for cancer treatment.',
  },
  {
    icon: <Dna className="h-10 w-10 text-primary" />,
    title: 'Hormonal Products',
    description: 'Available in both Tablets & Injections.',
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'Other Offerings',
    description: 'Sacnets, Eye/Ear Drops, Ointments, Creams, Veterinary Products, Suppositories, Infusions, Dental Cartridges, and more.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Product Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            We offer a diverse range of high-quality pharmaceutical products to meet various medical needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                {item.icon}
                <CardTitle className="font-headline mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
