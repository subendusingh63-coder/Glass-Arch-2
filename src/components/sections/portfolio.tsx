'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Expand, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type PortfolioCategory = {
  name: string;
  pdfUrl: string;
  images: ImagePlaceholder[];
};

type PortfolioProps = {
  categories: PortfolioCategory[];
};

export default function Portfolio({ categories }: PortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);
  const [activeTab, setActiveTab] = useState(categories[0].name);
  const [dialogOpen, setDialogOpen] = useState(false);

  const imagesForCurrentTab = useMemo(() => {
    return categories.find(cat => cat.name === activeTab)?.images || [];
  }, [activeTab, categories]);

  const currentIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return imagesForCurrentTab.findIndex(img => img.id === selectedImage.id);
  }, [selectedImage, imagesForCurrentTab]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < imagesForCurrentTab.length - 1;

  const handleNext = () => {
    if (canGoNext) {
      setSelectedImage(imagesForCurrentTab[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setSelectedImage(imagesForCurrentTab[currentIndex - 1]);
    }
  };

  const handleOpenDialog = (image: ImagePlaceholder) => {
    setSelectedImage(image);
    setDialogOpen(true);
  };
  
  const handleDialogChange = (isOpen: boolean) => {
    setDialogOpen(isOpen);
    if (!isOpen) {
      setSelectedImage(null);
    }
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our high-quality custom creations.
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.name} 
                    value={category.name}
                    className={cn(
                        "relative text-base",
                        "data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:font-semibold",
                        "tab-underline"
                    )}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="animate-in fade-in-0 duration-500">
                {category.images.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.images.map((image, index) => (
                        <div key={image.id} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-1000" style={{ animationDelay: `${index * 100}ms`}}>
                          <DialogTrigger asChild onClick={() => handleOpenDialog(image)}>
                            <Card className="overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                              <CardContent className="p-0">
                                <div className="relative aspect-[4/5]">
                                  <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={image.imageHint}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                                    <div className="text-center text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-bold text-lg leading-tight text-white">{image.description.split(',')[0]}</h3>
                                        <Expand className="w-6 h-6 mt-2 mx-auto" />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild>
                            <a href={category.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="mr-2 h-4 w-4" />
                              View Full {category.name} Catalog
                            </a>
                        </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Our {category.name} portfolio is currently being updated. Please check back soon!</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {selectedImage && (
            <DialogContent className="max-w-4xl w-full p-0 bg-background">
                <DialogHeader className="p-4 pb-0">
                    <DialogTitle>{selectedImage.description}</DialogTitle>
                    <DialogDescription className="sr-only">
                        Full-size image of {selectedImage.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="relative group p-4 pt-2">
                    <Image
                        key={selectedImage.id}
                        src={selectedImage.imageUrl}
                        alt={selectedImage.description}
                        width={1200}
                        height={900}
                        className="object-contain w-full h-auto max-h-[80vh] animate-in fade-in duration-300"
                    />
                    
                    {canGoPrev && (
                      <Button variant="ghost" size="icon" onClick={handlePrev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white opacity-100 transition-opacity">
                          <ChevronLeft className="h-6 w-6" />
                          <span className="sr-only">Previous Image</span>
                      </Button>
                    )}
                    {canGoNext && (
                      <Button variant="ghost" size="icon" onClick={handleNext} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white opacity-100 transition-opacity">
                          <ChevronRight className="h-6 w-6" />
                          <span className="sr-only">Next Image</span>
                      </Button>
                    )}
                </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
