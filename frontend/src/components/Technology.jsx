import React from 'react';
import { Database, Cpu, Lock, Zap, Network, Brain, Scan } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

export const Technology = () => {
  const techStack = [
    {
      icon: Brain,
      title: 'AI Agent Swarm',
      description: 'Self-contained intelligent agents with specialized roles for imaging, XRF spectroscopy analysis, and documentation verification.',
      features: ['Local Execution', 'Specialized Roles', 'Closed-Loop Learning'],
    },
    {
      icon: Database,
      title: 'AgentDB',
      description: 'Local vector database with HNSW indexing achieving optimized performance through decentralized resource allocation.',
      features: ['4-32x Compression', 'Sub-millisecond Queries', 'No Cloud Dependencies'],
    },
    {
      icon: Cpu,
      title: 'ReasoningBank',
      description: 'Autonomous closed-loop learning system inspired by DeepMind, continuously improving verification accuracy.',
      features: ['Evaluates Outcomes', 'Extracts Knowledge', 'Weighted Retrieval'],
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security',
      description: 'Cryptographic verification with blockchain attestation. All verification hashes published to Ethereum.',
      features: ['Immutable Records', 'Authenticated Communication', 'On-Chain Verification'],
    },
    {
      icon: Network,
      title: 'Local Embeddings',
      description: 'transformers.js with Xenova/all-MiniLM-L6-v2 model generating 384-dimensional vectors locally.',
      features: ['Complete Data Privacy', 'No Cloud Dependencies', 'Offline Operation'],
    },
    {
      icon: Zap,
      title: 'Agentic Flow',
      description: 'Core orchestration platform managing verification tasks and coordinating specialized worker agents.',
      features: ['Task Management', 'Agent Coordination', 'Mesh Topology'],
    },
    {
      icon: Scan,
      title: 'QuantX XRF Analysis',
      description: 'X-ray Fluorescence Spectrometry for non-destructive elemental composition analysis, providing quantitative and qualitative chemical signatures.',
      features: ['Elemental Detection', 'Non-Destructive Testing', 'Historical Data Comparison'],
    },
  ];

  return (
    <section id="technology" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-primary/30 mb-4">
            <Cpu className="w-4 h-4 mr-2 inline" />
            Technology Stack
          </Badge>
          <h2 className="font-serif font-bold mb-6 text-gradient-primary">
            Proprietary AI Protocol
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Shenbury AI-Powered Authentication Protocol: a decentralized, self-contained intelligent infrastructure solving the oracle problem for RWA tokenization.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="glass border-card-border hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/20 group-hover:glow-teal transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-glow" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">{tech.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 glass rounded-2xl p-8 border border-card-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-gradient-gold mb-2">Decentralized</div>
              <div className="text-sm text-muted-foreground">AI at Scale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-gradient-gold mb-2">32x</div>
              <div className="text-sm text-muted-foreground">Compression Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-gradient-gold mb-2">384</div>
              <div className="text-sm text-muted-foreground">Vector Dimensions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-gradient-gold mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Cloud Dependencies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};