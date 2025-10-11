import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function About() {
  const promises = [
    { text: 'Premium toughened glass, aluminium & uPVC materials' },
    { text: 'Precision installation by skilled professionals' },
    { text: 'Modern & elegant designs for every space' },
    { text: 'Customer-first service with reliable support' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Glass Arch</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 animate-in fade-in-0 slide-in-from-left-20 duration-1000">
              <Card className="h-full">
                <CardContent className="p-10">
                  <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Glass Arch is a trusted name in premium toughened glass,
                      aluminium, and uPVC solutions. We specialize in designing and
                      installing toughened glass doors, slim profile mirrors,
                      aluminium partitions, uPVC windows & doors, architectural
                      glass, and customized fittings for homes, offices, showrooms,
                      and malls.
                    </p>
                    <p>
                      With a perfect blend of modern technology and skilled
                      craftsmanship, we bring strength, safety, and style to every
                      project.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2 animate-in fade-in-0 slide-in-from-right-20 duration-1000">
              <Link href="#services">
                <Card className="bg-background h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Our Promise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {promises.map((promise, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000"
                          style={{ animationDelay: `${200 * index}ms` }}
                        >
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-base font-medium text-foreground">
                            {promise.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
