
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeroBackground from '@/components/HeroBackground';
import { Star, Users, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import AuthModule from '@/components/auth/AuthModule';
import InitiativeExplorer from '@/components/initiatives/InitiativeExplorer';
import WorkspaceInsights from '@/components/dashboard/WorkspaceInsights';
import GlobalCallToAction from '@/components/cta/GlobalCallToAction';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

const Index = () => {
  const [activeSection, setActiveSection] = useState('initiatives');
  const isMobile = useIsMobile();

  // Structured data for rich search results
  const initiativesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Consciousverse Engine",
        "description": "A synthetic realm for human-AI co-created science. Runs predictive simulations before real-world rollout.",
        "url": "https://ufp-vision.org/initiatives/consciousverse-engine"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Genesis Accords",
        "description": "A universal constitution for interplanetary life based on scientific ethics, sentient dignity, and love.",
        "url": "https://ufp-vision.org/initiatives/genesis-accords"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Temporal Democracy Framework",
        "description": "Vote on simulated policy outcomes with Sonar-style reasoning. Empowers hyper-informed decision-making.",
        "url": "https://ufp-vision.org/initiatives/temporal-democracy-framework"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Starseed Laboratories",
        "description": "A vault of lost civilizational blueprints and ancient technologies encoded in hybrid bio-crystals.",
        "url": "https://ufp-vision.org/initiatives/starseed-laboratories"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Project AeonNexus",
        "description": "A decentralized digital twin of the UFP that evolves and learns from every possible timeline.",
        "url": "https://ufp-vision.org/initiatives/project-aeon-nexus"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="United Federation Vision Platform | Shaping Humanity's Future"
        description="Explore bold, future-defining initiatives spanning Earth and beyond. Join the movement for interplanetary cooperation and human potential."
        keywords={[
          "terraforming", "space ethics", "interspecies communication", 
          "consciousness evolution", "global cooperation", "sustainable futures"
        ]}
        canonicalUrl="https://ufp-vision.org/"
        schema={initiativesSchema}
      />
      
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

      {/* Platform Sections */}
      <div className="container mx-auto px-4 mb-16 space-y-8">
        <div className="max-w-6xl mx-auto">
          <Tabs 
            value={activeSection} 
            onValueChange={setActiveSection} 
            className="animate-fadeIn opacity-0" 
            style={{animationDelay: '0.6s'}}
          >
            <div className="flex justify-center">
              <TabsList className="mb-8 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger 
                  value="initiatives"
                  className="flex items-center gap-1"
                >
                  <Star className="h-4 w-4" />
                  <span className={isMobile ? "" : "ml-1"}>Initiatives</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="insights"
                  className="flex items-center gap-1"
                >
                  <Users className="h-4 w-4" />
                  <span className={isMobile ? "" : "ml-1"}>Insights</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="join"
                  className="flex items-center gap-1"
                >
                  <ChevronDown className="h-4 w-4" />
                  <span className={isMobile ? "" : "ml-1"}>Join</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="initiatives" className="animate-fadeIn">
              <InitiativeExplorer />
            </TabsContent>

            <TabsContent value="insights" className="animate-fadeIn">
              <WorkspaceInsights />
            </TabsContent>

            <TabsContent value="join" className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-8">
                <AuthModule />
                <div className="space-y-6">
                  <GlobalCallToAction />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Global CTA Footer */}
          <div className="mt-16 text-center animate-fadeIn opacity-0" style={{animationDelay: '0.8s'}}>
            <p className="text-muted-foreground mb-4">Ready to help shape the future of humanity?</p>
            <Link to="/onboarding">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity animate-float"
              >
                Build With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
