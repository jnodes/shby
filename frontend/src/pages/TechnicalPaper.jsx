import React from 'react';
import { ArrowLeft, Download, Code, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const TechnicalPaper = () => {
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
            <Badge variant="outline" className="glass border-primary/30 mb-4">
              <Code className="w-4 h-4 mr-2 inline" />
              DRAFT v1.0
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              AI Protocol Technical Paper
            </h1>
            <p className="text-xl font-serif text-muted-foreground mb-4">
              The Shenbury AI-Powered Authentication Protocol
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>October 27, 2025</span>
              <span>•</span>
              <span>Shenbury Core Development Team</span>
            </div>
          </div>

          {/* Abstract */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gradient-gold">Abstract</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Shenbury AI-Powered Authentication Protocol introduces a decentralized, multi-agent AI system for the cryptographic-grade object verification of high-value cultural artifacts. The primary challenge in the multi-billion dollar art market is information asymmetry and the opacity of authentication, which constrains liquidity and trust.
              </p>
              <p>
                Our protocol solves this by fusing a resilient, self-contained AI stack with an immutable on-chain ledger. This system is built on a <strong className="text-foreground">"zero-cost" framework</strong> that runs locally with no external dependencies, eliminating API fees and ensuring data privacy.
              </p>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The tokenization of Real World Assets (RWAs) has been hampered by a single point of failure: the <strong className="text-foreground">"oracle problem."</strong> An on-chain token is only as reliable as the off-chain data it represents.
              </p>
              <p>
                In the high-value art market, this problem is amplified. Verification is a manual, centralized, and often subjective process, making it impossible to guarantee authenticity in a trustless manner.
              </p>
              <p>
                The Shenbury AI Protocol is designed to solve this problem at its root. Instead of relying on human oracles, we have built an <strong className="text-foreground">autonomous AI swarm</strong> that functions as an unbiased, data-driven verification engine.
              </p>
            </CardContent>
          </Card>

          {/* Agentic Manifesto */}
          <Card className="glass border-secondary/20 shadow-gold mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gradient-gold">2. The Agentic Manifesto (Core Philosophy)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our architecture is guided by the <strong className="text-foreground">"Agentic Manifesto,"</strong> which prioritizes resilience, autonomy, and security:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Failure is Assumed, Recovery is Automated',
                    desc: 'The system is designed for fault tolerance. Agents operate in a resilient mesh topology, ensuring that the failure of a single agent does not halt the verification process.',
                  },
                  {
                    title: 'Agents as Stateless, Purpose-Bound Services',
                    desc: 'Each AI agent is a small, specialized microservice with a single, dedicated function (e.g., "Chemical Analysis Agent," "Visual Stylometry Agent").',
                  },
                  {
                    title: 'Zero-Trust Security & Immutable Ledgers',
                    desc: 'Security is zero-trust. All inter-agent communication is authenticated. The final verification "attestation" is cryptographically hashed and logged to the Ethereum blockchain.',
                  },
                  {
                    title: 'Humans as Stewards, Not Operators',
                    desc: 'Human experts are used to train the AI swarm and provide initial ground-truth data. However, they are removed from the critical path of active operations.',
                  },
                ].map((principle, idx) => (
                  <div key={idx} className="p-4 rounded-lg glass border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Architecture */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">3. System Architecture: The Shenbury Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The key innovation of the Shenbury stack is its combination of <strong className="text-foreground">speed, autonomy, and zero recurring cost</strong>. The entire system—database, learning model, and embeddings—runs locally, allowing agents to become self-contained learning entities.
              </p>

              {/* Orchestration Layer */}
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">3.1 Orchestration Layer: agentic-flow</h3>
                <p className="text-muted-foreground">
                  agentic-flow is the core orchestration platform. It manages the lifecycle of verification tasks, tasking specialized agents and coordinating the flow of data between them.
                </p>
              </div>

              {/* Swarm Coordination */}
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">3.2 Swarm Coordination & Memory: claude-flow</h3>
                <p className="text-muted-foreground">
                  claude-flow provides the memory and coordination backbone for the agent swarm. Its swarm initialization creates a resilient, decentralized communication network between agents.
                </p>
              </div>

              {/* AgentDB */}
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">3.3 Foundational Database: AgentDB</h3>
                <p className="text-muted-foreground mb-3">
                  AgentDB is the foundational vector database that acts as the "long-term memory" for the entire swarm. It is optimized for the extreme performance required by real-time agentic systems.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Performance:</strong> Achieves 150x faster performance than traditional vector databases through HNSW indexing</li>
                  <li><strong className="text-foreground">Efficiency:</strong> Utilizes vector quantization for 4x to 32x compression while preserving accuracy</li>
                </ul>
              </div>

              {/* ReasoningBank */}
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">3.4 Autonomous Learning: ReasoningBank</h3>
                <p className="text-muted-foreground mb-3">
                  ReasoningBank is our closed-loop learning system, inspired by DeepMind's autonomous improvement framework. This is what allows the swarm to learn and improve over time.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Evaluates Outcomes:</strong> When a verification is complete, ReasoningBank evaluates the accuracy of the agents' contributions</li>
                  <li><strong className="text-foreground">Extracts Knowledge:</strong> It extracts reusable knowledge, patterns, and heuristics from the outcome</li>
                  <li><strong className="text-foreground">Updates Confidence:</strong> It updates the "confidence score" of the reasoning pathways used</li>
                  <li><strong className="text-foreground">Weighted Retrieval:</strong> Its memory retrieval algorithm balances semantic similarity, recency, reliability, and diversity</li>
                </ol>
              </div>

              {/* Local Embeddings */}
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">3.5 Local Embeddings: transformers.js</h3>
                <p className="text-muted-foreground mb-3">
                  All data (images, chemical analysis reports, documentation) is vectorized locally. This is a critical component for both cost and privacy.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Engine:</strong> transformers.js using the Xenova/all-MiniLM-L6-v2 model</li>
                  <li><strong className="text-foreground">Output:</strong> Generates 384-dimensional vectors for all ingested data</li>
                  <li><strong className="text-foreground">Cost:</strong> After an initial 23MB model download, all embedding operations run offline at <strong className="text-secondary">zero marginal cost</strong></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Verification Workflow */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">4. The Verification Workflow: An Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Data Ingestion',
                    desc: 'A new artifact (e.g., a Ming Dynasty vase) is submitted. All known data is ingested: high-resolution 3D scans, pigment chemical analysis, and known documentation.',
                  },
                  {
                    step: '2',
                    title: 'Local Embedding',
                    desc: 'transformers.js converts all this unstructured data into 384-dimensional vectors.',
                  },
                  {
                    step: '3',
                    title: 'Task Orchestration',
                    desc: 'agentic-flow initiates a verification task.',
                  },
                  {
                    step: '4',
                    title: 'Agent Swarm Query',
                    desc: 'A Visual Agent queries AgentDB for visually similar items. A Chemical Agent queries for matches in chemical composition. A Documentation Agent queries to cross-reference auction records and museum catalogs.',
                  },
                  {
                    step: '5',
                    title: 'Reasoning & Consensus',
                    desc: 'claude-flow facilitates communication as the agents share their findings. ReasoningBank synthesizes their outputs and generates a final "Authentication Confidence Score."',
                  },
                  {
                    step: '6',
                    title: 'Attestation',
                    desc: 'The full verification report, along with its confidence score and the data used, is cryptographically hashed. This hash is published to the Ethereum blockchain via a smart contract.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-serif font-bold">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="glass border-secondary/20 shadow-gold mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gradient-gold">5. Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Shenbury AI-Powered Authentication Protocol solves the RWA oracle problem for high-value art by <strong className="text-foreground">becoming the oracle</strong>.
              </p>
              <p>
                By building a fully integrated, self-contained AI stack, we have created an autonomous verification engine that operates without bias, learns from its outcomes, and functions at <strong className="text-foreground">zero marginal cost</strong>.
              </p>
              <p>
                This protocol is the foundation for a new standard of trust, enabling the creation of a secure, transparent, and liquid marketplace for the world's most valuable cultural assets.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              © 2025 Shenbury Project — Shenbury Core Development Team
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => navigate('/whitepaper')}>
                <BookOpen className="w-4 h-4" />
                Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};