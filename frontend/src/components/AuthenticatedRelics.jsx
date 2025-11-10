import React, { useState } from 'react';
import { Shield, Award, Calendar, TrendingUp, ChevronLeft, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const AuthenticatedRelics = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Relic data
  const relic = {
    id: '001',
    lotNumber: '001',
    title: 'AN EXCEPTIONALLY RARE RU KILN SUNFLOWER-FORM WASHER',
    chinese: '北宋 汝官窯天青釉葵花洗',
    dynasty: 'Northern Song Dynasty',
    dynastyPeriod: '1086-1106',
    images: [
      'https://customer-assets.emergentagent.com/job_modern-shenbury/artifacts/siww523k_main.jpg',
      'https://customer-assets.emergentagent.com/job_modern-shenbury/artifacts/i5b3e2jy_detail-1.jpg',
      'https://customer-assets.emergentagent.com/job_modern-shenbury/artifacts/jnjdop53_detail-2.jpg',
      'https://customer-assets.emergentagent.com/job_modern-shenbury/artifacts/n6xo1d0o_detail-3.jpg',
    ],
    description: 'This extraordinarily rare washer represents the pinnacle of Song ceramic achievement. The vessel is shaped like a six-part flower mouth with three tiny sesame nail marks on the bottom. The distinctive sky-blue glaze with its subtle crackle pattern was considered the finest of all Chinese ceramics.',
    condition: 'Excellent condition with characteristic ice-crackle throughout the glaze. Minor expected wear to the foot ring consistent with age.',
    dimensions: {
      diameter: '14.6 cm',
      bottomDiameter: '9.6 cm',
      height: '3.65 cm',
      weight: '285g',
    },
    culturalSignificance: 'Ru kilns operated for only about 20 years (1086-1106) exclusively for the Northern Song court. Fewer than 100 genuine pieces exist worldwide. A common saying goes: "Even with a fortune, a single piece of Ru porcelain is priceless."',
    historicalContext: 'This washer exemplifies the technical mastery of Ru kiln artisans. The vessel was likely used in imperial ceremonies or as a scholar\'s desk accessory, reflecting the refined culture of the Northern Song court.',
    aiEvaluation: '$45,000,000',
    verificationStatus: 'Blockchain Verified',
    verificationDate: 'January 2025',
    confidenceScore: '99.8%',
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % relic.images.length);
  };

  const previousImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + relic.images.length) % relic.images.length);
  };

  const verificationBadges = [
    { icon: Shield, label: 'AI Verified', value: relic.confidenceScore },
    { icon: Lock, label: 'Blockchain', value: 'Ethereum' },
    { icon: Calendar, label: 'Verified', value: relic.verificationDate },
    { icon: Award, label: 'Authenticity', value: 'Certified' },
  ];

  return (
    <section id="authenticated-relics" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-secondary/30 mb-4">
            <Shield className="w-4 h-4 mr-2 inline" />
            Authenticated Collection
          </Badge>
          <h2 className="font-serif font-bold mb-6">
            <span className="text-gradient-gold">Tokenized Relics</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our authenticated collection of museum-quality cultural treasures, verified by autonomous AI agents and secured on the blockchain.
          </p>
        </div>

        {/* Main Relic Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-card-border shadow-elegant hover-lift">
              <img
                src={relic.images[activeImageIndex]}
                alt={`${relic.title} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation - Subtle, appears on hover */}
              <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass hover:bg-primary/20 rounded-full backdrop-blur-md bg-background/30 h-10 w-10"
                  onClick={previousImage}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass hover:bg-primary/20 rounded-full backdrop-blur-md bg-background/30 h-10 w-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 glass px-3 py-1 rounded-full">
                <span className="text-sm font-medium">
                  {activeImageIndex + 1} / {relic.images.length}
                </span>
              </div>

              {/* Verification Badge - Subtle */}
              <div className="absolute top-4 left-4 glass px-2 py-1.5 rounded-lg border border-secondary/10 bg-background/40 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-xs font-medium text-secondary">Verified</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {relic.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === index
                      ? 'border-secondary shadow-gold'
                      : 'border-border hover:border-primary-glow'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Relic Details */}
          <div className="space-y-6">
            {/* Title & Basic Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="border-primary/30 text-primary-glow">
                  Lot #{relic.lotNumber}
                </Badge>
                <Badge variant="outline" className="border-secondary/30 text-secondary">
                  {relic.dynasty}
                </Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">
                {relic.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-4">{relic.chinese}</p>
              <p className="text-sm text-muted-foreground">{relic.dynastyPeriod}</p>
            </div>

            {/* Verification Badges */}
            <div className="grid grid-cols-2 gap-3">
              {verificationBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="glass rounded-xl p-4 border border-card-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-primary-glow" />
                      <span className="text-xs text-muted-foreground">{badge.label}</span>
                    </div>
                    <div className="text-sm font-semibold text-foreground">{badge.value}</div>
                  </div>
                );
              })}
            </div>

            {/* AI Evaluation */}
            <Card className="glass border-secondary/20 shadow-gold">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">AI Evaluation</p>
                    <p className="text-3xl font-serif font-bold text-gradient-gold">
                      {relic.aiEvaluation}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-gold/10 border border-secondary/20">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button variant="premium" size="lg" className="w-full">
              <Lock className="w-5 h-5 mr-2" />
              View Blockchain Certificate
            </Button>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="glass border-card-border">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-foreground">Detailed Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 gap-2">
                <TabsTrigger value="description">Overview</TabsTrigger>
                <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                <TabsTrigger value="condition">Condition</TabsTrigger>
                <TabsTrigger value="significance">Significance</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-2 text-foreground">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">{relic.description}</p>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-2 text-foreground">Historical Context</h4>
                  <p className="text-muted-foreground leading-relaxed">{relic.historicalContext}</p>
                </div>
              </TabsContent>

              <TabsContent value="dimensions" className="space-y-3">
                <h4 className="font-serif font-semibold text-lg mb-3 text-foreground">Measurements</h4>
                {Object.entries(relic.dimensions).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="condition">
                <h4 className="font-serif font-semibold text-lg mb-3 text-foreground">Condition Report</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">{relic.condition}</p>
                <div className="glass rounded-lg p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">AI Assessment: Excellent</p>
                      <p className="text-sm text-muted-foreground">
                        Our AI analysis confirms exceptional preservation consistent with documented historical examples.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="significance">
                <h4 className="font-serif font-semibold text-lg mb-3 text-foreground">Cultural Significance</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">{relic.culturalSignificance}</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="glass rounded-lg p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">&lt;100</p>
                    <p className="text-xs text-muted-foreground">Known Examples Worldwide</p>
                  </div>
                  <div className="glass rounded-lg p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">20 Years</p>
                    <p className="text-xs text-muted-foreground">Kiln Operation Period</p>
                  </div>
                  <div className="glass rounded-lg p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">1086-1106</p>
                    <p className="text-xs text-muted-foreground">Northern Song Dynasty</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};