import React from 'react';
import { Coins, TrendingUp, Users, Lock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const ICO = () => {
  const icoDetails = [
    {
      icon: Coins,
      title: '4-Day Commitment Window',
      description: 'Commit USDC during the commitment period for proportional token distribution via MetaDAO fair launch model.',
    },
    {
      icon: TrendingUp,
      title: 'Performance-Based Unlocks',
      description: 'Remaining token supply are vested released only when ICO price milestones are reached.',
    },
    {
      icon: Users,
      title: 'Governed Treasury',
      description: 'Community-controlled funds allocated for ecosystem development, partnerships, and technology advancement.',
    },
    {
      icon: Lock,
      title: 'Monthly Development Budgets',
      description: '$15,000 monthly budget for continued protocol development, team operations, and IT.',
    },
  ];

  const tokenomics = [
    { label: 'Minimum Raise', value: '$300,000' },
    { label: 'Client Pipeline', value: '$600-700M' },
    { label: 'Monthly Budget', value: '$15,000' },
    { label: 'Launch Model', value: 'MetaDAO Fair Launch' },
  ];

  return (
    <section id="ico" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-secondary/30 mb-4">
            <Coins className="w-4 h-4 mr-2 inline" />
            Investment Opportunity
          </Badge>
          <h2 className="font-serif font-bold mb-6">
            Join the <span className="text-gradient-gold">MetaDAO ICO</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Participate in our fair launch with pro rata allocations, governed treasury, and performance-based token unlocks.
          </p>
        </div>

        {/* Tokenomics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tokenomics.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-card-border text-center hover-lift"
            >
              <div className="text-3xl font-serif font-semibold text-gradient-gold mb-2">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* ICO Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {icoDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card key={index} className="glass border-card-border hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-gold/10 border border-secondary/20">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-serif text-foreground mb-2">
                        {detail.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {detail.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Why Invest Section */}
        <Card className="glass border-secondary/20 shadow-gold">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center text-gradient-gold mb-4">
              Why Invest in Shenbury?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  'Solving a multi-billion dollar market problem',
                  'Proprietary AI technology with optimized performance',
                  'Complete data privacy (local-first architecture)',
                  'Experienced public leadership team',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  '$600-700M verified client pipeline',
                  'Treasury earns revenue from auction & private sale fees',
                  'Fair launch model with community governance',
                  'Performance-based token unlock mechanism',
                  'Transparent monthly budget allocations',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button variant="gold" size="xl" className="group">
                Participate in ICO
                <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                ICO launch date to be announced. Join our community to stay updated.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};