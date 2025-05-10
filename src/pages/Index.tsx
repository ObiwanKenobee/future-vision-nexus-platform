
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeroBackground from '@/components/HeroBackground';
import InitiativeCard from '@/components/InitiativeCard';
import { Star } from 'lucide-react';

const initiatives = [
  {
    title: 'Consciousverse Engine',
    description: 'A synthetic realm for human-AI co-created science. Runs predictive simulations before real-world rollout.'
  },
  {
    title: 'Genesis Accords',
    description: 'A universal constitution for interplanetary life based on scientific ethics, sentient dignity, and love.'
  },
  {
    title: 'Temporal Democracy Framework',
    description: 'Vote on simulated policy outcomes with Sonar-style reasoning. Empowers hyper-informed decision-making.'
  },
  {
    title: 'Starseed Laboratories',
    description: 'A vault of lost civilizational blueprints and ancient technologies encoded in hybrid bio-crystals.'
  },
  {
    title: 'Project AeonNexus',
    description: 'A decentralized digital twin of the UFP that evolves and learns from every possible timeline.'
  },
  {
    title: 'Lightforge Ring',
    description: 'Dyson-style cold fusion stations orbiting Earth to decentralize and democratize planetary energy.'
  },
  {
    title: 'Exodus Mirror',
    description: 'A device showing alternate futures based on past decisions. Used for ethical training and planetary planning.'
  },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Background */}
      <div className="relative h-80 flex flex-col items-center justify-center overflow-hidden mb-8">
        <HeroBackground />
        <div className="z-10 text-center animate-slideUp opacity-0" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-center mb-2">
            <Star className="h-8 w-8 text-accent mr-2 animate-pulse-slow" />
            <h1 className="text-4xl md:text-5xl font-bold">United Federation</h1>
            <Star className="h-8 w-8 text-accent ml-2 animate-pulse-slow" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Vision Platform
          </h2>
          <p className="max-w-2xl text-muted-foreground mx-auto px-4 animate-slideUp opacity-0" style={{animationDelay: '0.4s'}}>
            Explore bold, future-defining initiatives inspired by the Federation, Eugene Mallove,
            and the dreamers of a new era of human potential.
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Initiatives Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="w-8 h-[1px] bg-primary mr-3"></span>
            Visionary Initiatives
            <span className="w-8 h-[1px] bg-primary ml-3"></span>
          </h3>

          <Tabs defaultValue="0" className="w-full animate-fadeIn opacity-0" style={{animationDelay: '0.6s'}}>
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 mb-6 bg-muted/50 backdrop-blur-sm">
              {initiatives.map((initiative, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  onClick={() => setActiveIndex(index)}
                  className="data-[state=active]:bg-secondary data-[state=active]:text-primary"
                >
                  {initiative.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="grid gap-6 mt-6">
              {initiatives.map((initiative, index) => (
                <TabsContent key={index} value={index.toString()} className="animate-fadeIn">
                  <InitiativeCard
                    title={initiative.title}
                    description={initiative.description}
                    isActive={index === activeIndex}
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>

          <div className="mt-12 text-center animate-fadeIn opacity-0" style={{animationDelay: '0.8s'}}>
            <p className="text-muted-foreground mb-4">Ready to help shape the future of humanity?</p>
            <Button 
              onClick={() => alert('Connect with visionaries, build prototypes, launch futures.')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity animate-float"
            >
              Build With Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
