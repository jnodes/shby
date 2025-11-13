import React, { useState } from 'react';
import { Shield, Award, Calendar, TrendingUp, ChevronLeft, ChevronRight, CheckCircle2, Lock, FileText, Video, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const SingleArtworkShowcase = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Relic data for lot 013
  const relic = {
    id: '013',
    lotNumber: '013',
    title: 'QIANLONG ROYAL CLOISONNÉ TEAPOT',
    chinese: '清 乾隆款掐絲琺琅茶壺',
    dynasty: 'Qing Dynasty',
    dynastyPeriod: '1735-1796',
    images: [
      '/images/relics/013-qianlong-royal-cloisonne-teapot/main.png',
      '/images/relics/013-qianlong-royal-cloisonne-teapot/detail-1.png',
      '/images/relics/013-qianlong-royal-cloisonne-teapot/detail-2.png',
      '/images/relics/013-qianlong-royal-cloisonne-teapot/detail-3.png',
      '/images/relics/013-qianlong-royal-cloisonne-teapot/detail-4.png',
    ],
    description: 'This exquisite royal teapot exemplifies the pinnacle of Qing Dynasty cloisonné craftsmanship. Created during the reign of Emperor Qianlong, this piece showcases the sophisticated metalworking and enamel techniques that made the period famous. The intricate floral motifs and dragon patterns demonstrate the imperial workshop\'s mastery of the medium.',
    condition: 'Excellent condition with vibrant enamel colors and intact gilding. Minor expected wear to high points consistent with age and ceremonial use. No chips, cracks, or restoration.',
    dimensions: {
      height: '12.5 cm',
      width: '18.5 cm',
      depth: '10.5 cm',
      weight: '420g',
    },
    culturalSignificance: 'Qianlong period cloisonné represents the technical zenith of this art form. The emperor\'s personal patronage led to innovations in color palette and design complexity. Pieces from the imperial workshops are distinguished by their exceptional quality and symbolic motifs.',
    historicalContext: 'This teapot was likely used in imperial ceremonies or as a diplomatic gift. The dragon motifs indicate imperial ownership, while the floral patterns reflect the emperor\'s interest in naturalistic designs. The piece exemplifies the fusion of traditional Chinese techniques with influences from the court\'s cosmopolitan culture.',
    aiEvaluation: '$8,500,000',
    verificationStatus: 'Blockchain Verified',
    verificationDate: 'November 2025',
    confidenceScore: '99.7%',
    xrfReport: '/xrf/013-qianlong-royal-cloisonne-teapot.pdf',
    descriptionDocument: '/descriptions/013-qianlong-royal-cloisonne-teapot.pdf',
    videoAnalysis: '/videos/013-qianlong-royal-cloisonne-teapot.mp4',
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
    <section id="single-artwork" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-secondary/30 mb-4">
            <Shield className="w-4 h-4 mr-2 inline" />
            Authenticated Asset
          </Badge>
          <h2 className="font-serif font-bold mb-6">
            <span className="text-gradient-gold">Qianlong Royal Cloisonné Teapot</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore this authenticated museum-grade asset, verified by autonomous AI agents and secured on the blockchain with comprehensive analysis data.
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
            <div className="grid grid-cols-5 gap-2">
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

            {/* Analysis Documents */}
            <div className="grid grid-cols-3 gap-3">
              <a 
                href={relic.descriptionDocument} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-lg p-3 border border-card-border text-center hover:bg-primary/10 transition-colors"
              >
                <FileText className="w-5 h-5 text-primary-glow mx-auto mb-1" />
                <span className="text-xs text-foreground">Description</span>
              </a>
              <a 
                href={relic.xrfReport} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-lg p-3 border border-card-border text-center hover:bg-primary/10 transition-colors"
              >
                <Activity className="w-5 h-5 text-primary-glow mx-auto mb-1" />
                <span className="text-xs text-foreground">XRF Report</span>
              </a>
              <a 
                href={relic.videoAnalysis} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-lg p-3 border border-card-border text-center hover:bg-primary/10 transition-colors"
              >
                <Video className="w-5 h-5 text-primary-glow mx-auto mb-1" />
                <span className="text-xs text-foreground">Video Analysis</span>
              </a>
            </div>

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
                    <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">Qianlong</p>
                    <p className="text-xs text-muted-foreground">Reign Period</p>
                  </div>
                  <div className="glass rounded-lg p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">Imperial</p>
                    <p className="text-xs text-muted-foreground">Workshop Origin</p>
                  </div>
                  <div className="glass rounded-lg p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">Cloisonné</p>
                    <p className="text-xs text-muted-foreground">Technique</p>
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