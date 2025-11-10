import React from 'react';
import { Linkedin, FlaskConical } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Jesse Brown',
      role: 'Founder & Chief Architect',
      focus: 'AI Systems & Blockchain Infrastructure',
      linkedin: 'https://linkedin.com/in/digitalassets',
      image: 'https://customer-assets.emergentagent.com/job_modern-shenbury/artifacts/s2gsj75x_jesse-brown.png',
      bio: 'Leading Shenbury\'s AI-powered authentication protocol with deep expertise in institutional-grade tokenization and multi-agent AI systems. Former Blockchain Architect at DTCC, where he built the Forbes Blockchain Award-winning private placement tokenization platform. Architected autonomous compliance systems for Web3 platforms and led technology strategy for Himalaya Exchange. Specialized in real-world asset tokenization, privacy-preserving technologies, and regulatory compliance frameworks.',
      highlights: [
        'Built DTCC\'s first distributed ledger technology project (Forbes Blockchain Award Winner 2020)',
        'Architected multi-agent AI compliance systems with sub-3-second verification',
        'Designed institutional-grade tokenization platforms for private placements',
        'Expert in privacy-preserving tech, smart contracts, and regulatory compliance',
      ],
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-primary/30 mb-4">
            <FlaskConical className="w-4 h-4 mr-2 inline" />
            Labs
          </Badge>
          <h2 className="font-serif font-bold mb-6 text-gradient-primary">
            Shenbury Labs
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Led by proven innovators in AI, blockchain, and institutional-grade asset tokenization.
          </p>
        </div>

        {/* Team Members */}
        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass border-card-border hover-lift mb-8"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-elegant">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-secondary font-medium mb-1">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.focus}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-4">
                      {member.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};