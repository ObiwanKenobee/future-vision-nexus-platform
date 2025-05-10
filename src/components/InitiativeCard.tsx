
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface InitiativeCardProps {
  title: string;
  description: string;
  isActive: boolean;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ title, description, isActive }) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${isActive ? 'animate-pulse-slow border-accent' : 'opacity-90'}`}>
      <div className="h-2 bg-gradient-to-r from-primary to-accent" />
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            {title}
          </h2>
          <div className={`rounded-full p-1 bg-muted ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className="h-2 w-2 rounded-full bg-current" />
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" className="group">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InitiativeCard;
