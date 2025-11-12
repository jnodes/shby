import React from 'react';
import { Upload, ScanSearch, Network, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Data Ingestion',
      description: 'Submit high-resolution 3D scans, chemical analysis reports, and historical documentation for the asset.'
    },
    {
      icon: ScanSearch,
      number: '02',
      title: 'AI Swarm Analysis',
      description: 'Specialized agents analyze visual features, chemical composition, and historical records using local embeddings.',
    },
    {
      icon: Network,
      number: '03',
      title: 'Consensus & Learning',
      description: 'Agents communicate findings, ReasoningBank synthesizes data, and generates a weighted confidence score.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Blockchain Attestation',
      description: 'Verification report is cryptographically hashed and published to Ethereum for immutable authentication records.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-primary/30 mb-4">
            <Network className="w-4 h-4 mr-2 inline" />
            Verification Process
          </Badge>
          <h2 className="font-serif font-bold mb-6 text-gradient-primary">
            How Shenbury Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our autonomous AI protocol verifies authenticity in four seamless steps, from data collection to immutable blockchain attestation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="glass rounded-2xl p-6 border border-card-border hover-lift h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-serif font-bold text-gradient-gold opacity-30">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/20 glow-teal">
                      <Icon className="w-6 h-6 text-primary-glow" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to verify your fine art and collectibles?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ico"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-primary text-foreground font-semibold shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300"
            >
              Join ICO
            </a>
            <a
              href="/technical-paper"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-transparent hover:bg-muted text-foreground transition-all duration-300"
            >
              Read Technical Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};