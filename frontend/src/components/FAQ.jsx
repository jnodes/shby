import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Badge } from './ui/badge';

export const FAQ = () => {
  const faqs = [
    {
      question: 'What is the Shenbury AI Protocol?',
      answer:
        'The Shenbury AI-Powered Authentication Protocol is a decentralized, multi-agent AI system for cryptographic-grade verification of museum-grade fine art and collectibles. It uses local-first AI agents, vector databases, and blockchain attestation to solve the oracle problem in RWA tokenization.',
    },
    {
      question: 'How does the verification process work?',
      answer:
        'Our autonomous AI swarm analyzes assets through four steps: (1) Data ingestion of scans and documentation, (2) Multi-agent analysis using specialized roles, (3) Consensus building with ReasoningBank, and (4) Blockchain attestation on Ethereum for immutable authentication records.'
    },
    {
      question: 'What makes Shenbury different from centralized verification?',
      answer:
        'Unlike traditional methods that rely on human experts (subject to bias), Shenbury uses autonomous AI agents that operate locally without cloud dependencies. This ensures complete data privacy, eliminates single points of failure, and provides unbiased, data-driven verification.',
    },
    {
      question: "What is Shenbury's revenue model?",
      answer:
        "The Shenbury treasury earns revenue when artworks are sold in private sales or auctions. This simple, transaction-based model funds the DAO, supports protocol development, and grows the ecosystem.",
    },
    {
      question: 'How does the MetaDAO ICO work?',
      answer:
        'Our ICO uses MetaDAO\'s fair launch model with a 4-day commitment window. Participants commit USDC for pro rata token allocation. Up to 50% of tokens unlock at performance milestones (2x-32x ICO price), with governed treasury and monthly development budgets.',
    },
    {
      question: 'What are the key financial details of the ICO?',
      answer: [
        'The minimum raise for our ICO is $300,000. Funds will support our $20,000 monthly team budget and ecosystem development as we pursue our $600-700M collection pipeline.',
        'Our token distribution follows a fair launch model with performance-based unlocks. The initial allocation covers the commitment window, with remaining tokens vested and released only when ICO price milestones are reached.',
        'Treasury funds are governed by the community and allocated for ecosystem development, partnerships, and technology advancement.'
      ]
    },
    {
      question: 'How does Shenbury ensure data privacy?',
      answer:
        'Our entire stack runs locally: AgentDB for vector storage, transformers.js for embeddings, and ReasoningBank for learning. All asset data remains on your infrastructure with no external API calls or cloud dependencies, ensuring complete privacy and data sovereignty.'
    },
    {
      question: 'What types of assets can Shenbury verify?',
      answer:
        'Shenbury is designed for museum-grade assets including fine art, antiques, historical documents, rare collectibles, and archaeological finds. Our AI agents specialize in visual analysis, chemical composition verification, and historical documentation analysis.'
    },
    {
      question: 'How can I participate in the ICO?',
      answer:
        'ICO launch date will be announced soon. Join our community channels and follow our updates to be notified when the commitment window opens. You\'ll be able to commit USDC during the 4-day window for pro rata token allocation.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-primary/30 mb-4">
            <HelpCircle className="w-4 h-4 mr-2 inline" />
            FAQ
          </Badge>
          <h2 className="font-serif font-bold mb-6 text-gradient-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about Shenbury, our AI protocol, and the upcoming ICO.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-card-border rounded-xl px-6 hover-lift"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary-glow">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Have more questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/whitepaper"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-primary text-foreground font-semibold shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300"
            >
              Read Whitepaper
            </a>
            <a
              href="/technical-paper"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-transparent hover:bg-muted text-foreground transition-all duration-300"
            >
              Technical Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};