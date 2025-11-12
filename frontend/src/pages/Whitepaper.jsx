import React from 'react';
import { ArrowLeft, Download, FileText, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const Whitepaper = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <img
              src="https://customer-assets.emergentagent.com/job_567a6262-0291-4069-9a05-5048d6f99ff3/artifacts/3eapd20t_logo.png"
              alt="Shenbury"
              className="h-8 w-8"
            />
            <span className="text-xl font-serif font-semibold text-gradient-primary">Shenbury</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="glass border-secondary/30 mb-4">
              <FileText className="w-4 h-4 mr-2 inline" />
              Research Edition
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Shenbury Whitepaper
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>Version 1.1</span>
              <span>•</span>
              <span>2025</span>
              <span>•</span>
              <span>Shenbury Labs</span>
            </div>
          </div>

          {/* Abstract */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gradient-gold">Abstract</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Shenbury</strong> introduces a decentralized, self-contained intelligence infrastructure for verifying and tokenizing museum-grade assets. At its core, Shenbury's <strong className="text-foreground">AI Agent Swarm</strong> combines local vector reasoning, closed-loop learning, and on-chain authentication. Each agent operates independently using a fully local stack — database, embedding, and learning layers — with no reliance on external APIs or cloud systems.
              </p>
              <p>
                This document formalizes Shenbury's mathematical foundations, learning dynamics, and authentication chain integration.
              </p>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">1. Problem Statement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The global art market exceeds <strong className="text-foreground">$60 billion annually</strong> but remains structurally illiquid and opaque. Authentication — the verified history of ownership and authenticity — dictates value but is hindered by centralized trust models and subjective expertise.
              </p>
              <p>
                For art assets, authentication certainty (P<sub>a</sub>) and verification confidence (A<sub>a</sub>) are highly uncertain, resulting in suppressed liquidity and inflated risk premiums. Shenbury increases both via decentralized, self-learning AI agents operating under verifiable cryptographic consensus.
              </p>
            </CardContent>
          </Card>

          {/* System Architecture */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">2. System Architecture Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Shenbury stack integrates five primary layers:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { num: '1', title: 'AgentDB', desc: 'Local high-performance vector database' },
                  { num: '2', title: 'ReasoningBank', desc: 'Closed-loop reinforcement and knowledge synthesis' },
                  { num: '3', title: 'Agentic-Flow', desc: 'Multi-agent orchestration and adaptive task allocation' },
                  { num: '4', title: 'Claude-Flow', desc: 'Distributed memory and swarm synchronization' },
                  { num: '5', title: 'Authentication Chain', desc: 'Blockchain registry of authenticated assets' },
                ].map((layer) => (
                  <div key={layer.num} className="glass rounded-lg p-4 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center font-serif font-bold text-sm">
                        {layer.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{layer.title}</h4>
                        <p className="text-sm text-muted-foreground">{layer.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AgentDB */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">3. AgentDB — Local Vector Intelligence Core</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AgentDB provides semantic memory and retrieval operations at <strong className="text-foreground">sub-millisecond latency</strong>. Each item is embedded as a 384-dimensional vector using a local transformer model.
              </p>
              <p>
                Vector quantization achieves <strong className="text-foreground">4-32× memory compression</strong> while preserving semantic fidelity, enabling production-ready performance on standard hardware.
              </p>
            </CardContent>
          </Card>

          {/* ReasoningBank */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">4. ReasoningBank — Closed-Loop Learning System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ReasoningBank converts inference into a continuous self-improvement process. For each task, agent belief parameters update based on observed outcomes, enabling autonomous refinement of heuristics and reliability weights.
              </p>
              <p>
                This closed feedback loop enables agents to extract reusable knowledge components for future tasks, creating institutional memory without external dependencies.
              </p>
            </CardContent>
          </Card>

          {/* Memory Retrieval */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">5. Memory Retrieval and Weighted Selection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Memory retrieval balances four key factors:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Semantic Similarity</strong>: Relevance between query and memory vectors</li>
                <li><strong className="text-foreground">Reliability Score</strong>: Historical accuracy from ReasoningBank</li>
                <li><strong className="text-foreground">Recency Decay</strong>: Time-weighted freshness of observations</li>
                <li><strong className="text-foreground">Diversity Factor</strong>: Reduction of redundant retrievals</li>
              </ul>
              <p>
                This formulation produces robust retrievals for downstream reasoning.
              </p>
            </CardContent>
          </Card>

          {/* Token Utility */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">10. Token Utility and Governance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">$SHBY</strong> token functions:
              </p>
              <div className="grid gap-4">
                {[
                  { title: 'Governance', desc: 'Protocol changes, parameter tuning, and roadmap decisions' },
                  { title: 'Access', desc: 'Paid access to authenticated records and enriched datasets' },
                  { title: 'Staking & Rewards', desc: 'Staking for verification nodes and reward distribution' },
                  { title: 'Incentives', desc: 'Submission bounties and economic alignment with partners' },
                ].map((utility) => (
                  <div key={utility.title} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{utility.title}</h4>
                      <p className="text-sm text-muted-foreground">{utility.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">12. Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { phase: 'Q4 2025', milestone: 'DAO formation, token deployment, initial art onboarding', status: 'In Progress' },
                  { phase: 'Q1 2026', milestone: 'AgentDB + ReasoningBank open beta release', status: 'Planned' },
                  { phase: 'Q2 2026', milestone: 'Full AI Swarm ↔ Authentication Chain integration', status: 'Planned' },
                  { phase: 'Q3 2026', milestone: 'Auction house partnerships and marketplace launch', status: 'Planned' },
                  { phase: 'Q4 2026', milestone: 'RWA category expansion (paintings, sculpture, manuscripts)', status: 'Future' },
                ].map((item) => (
                  <div key={item.phase} className="flex items-start gap-4 p-4 rounded-lg glass border border-border">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        {item.phase}
                      </Badge>
                    </div>
                    <div className="flex-grow">
                      <p className="text-foreground font-medium mb-1">{item.milestone}</p>
                      <Badge variant="outline" className="text-xs">{item.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="glass border-secondary/20 shadow-gold mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gradient-gold">14. Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shenbury establishes a new computational paradigm: <strong className="text-foreground">self-contained AI agents</strong> that learn, reason, and preserve institutional memory without external dependencies.
              </p>
              <p>
                By bringing cryptographically verifiable authentication to museum-grade assets, Shenbury unlocks latent liquidity in the art market and enables secure, on-chain participation in Real World Assets.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              © 2025 Shenbury Labs — shenbury.com
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => navigate('/technical-paper')}>
                <BookOpen className="w-4 h-4" />
                Technical Paper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};