import React from 'react';
import { CheckCircle2, ScanLine, Blocks, TrendingUp, Shield, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const Features = () => {
  const features = [
    {
      icon: ScanLine,
      title: 'AI-Powered Verification',
      description: 'Multi-agent swarm analyzes imaging, spectroscopy, and documentation to verify authenticity with cryptographic-grade certainty.',
    },
    {
      icon: Blocks,
      title: 'Blockchain Attestation',
      description: 'Immutable verification records published to Ethereum, creating permanent authentication history that cannot be altered or disputed.',
    },
    {
      icon: TrendingUp,
      title: 'Asset Tokenization',
      description: 'Convert verified museum-grade assets into liquid, tradable digital assets with transparent ownership records.'
    },
    {
      icon: Shield,
      title: 'Zero-Trust Security',
      description: 'All inter-agent communication is authenticated. Security model assumes failure and ensures automated recovery.',
    },
    {
      icon: Globe,
      title: 'Decentralized Network',
      description: 'Mesh topology ensures resilience. Single agent failures never halt verification, maintaining 99.99% uptime.',
    },
    {
      icon: CheckCircle2,
      title: 'Continuous Learning',
      description: 'ReasoningBank closed-loop system learns from outcomes, improving accuracy with every verification completed.',
    },
    {
      icon: ScanLine,
      title: 'XRF Spectroscopy',
      description: 'QuantX methodology using X-ray Fluorescence to analyze elemental composition. Non-destructive testing compares chemical signatures against historical datasets for authentication.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold mb-6">
            Revolutionizing <span className="text-gradient-gold">Asset Verification</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Solving the oracle problem with autonomous AI agents that verify authenticity without human bias or centralized control.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="glass border-card-border hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-primary/10 border border-primary/20 group-hover:glow-teal transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary-glow" />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};