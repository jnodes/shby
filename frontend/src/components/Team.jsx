import React from 'react';
import { Linkedin, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Jesse Brown',
      role: 'Project Lead',
      focus: 'AI Engineering & RWA Tokenization',
      linkedin: 'https://linkedin.com/in/digitalassets',
      bio: 'Jesse leads the Shenbury protocol, focusing on its mission to build the privacy-focused AI oracle for the $57.5B fine art and collectibles market. [cite_start]He is a pioneering Web3 AI Agent Engineer with deep expertise in architecting autonomous, multi-agent AI systems and institutional-grade tokenization platforms[cite: 6, 13, 74].',
      keyAchievements: [
        '[cite_start]\'Architected the **Forbes Blockchain Award-winning** (2020) institutional tokenization platform as **Blockchain Architect at DTCC**[cite: 26, 28, 71].',
        '[cite_start]\'Cut asset settlement times from T+2 to near-instantaneous at DTCC[cite: 32].',
        '[cite_start]\'Served as a **Blockchain Enterprise Architecture Consultant for Ford Motor Company**[cite: 47].',
        '[cite_start]\'Engineered multi-agent AI compliance systems with sub-3-second verification[cite: 13].'
      ]
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="glass border-primary/30 mb-4">
            <Users className="w-4 h-4 mr-2 inline" />
            Leadership
          </Badge>
          <h2 className="font-serif font-bold mb-6 text-gradient-primary">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Public leadership team committed to transparency, trust, and accountability in building the future of asset tokenization.
          </p>
        </div>

        {/* Team Members */}
        <div className="max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass border-card-border"
            >
              <CardContent className="pt-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Avatar Placeholder */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant">
                      <span className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.focus}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    
                    {/* Key Achievements */}
                    <div className="space-y-3 text-left mb-6">
                      {member.keyAchievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: achievement }} />
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

        {/* Additional Team Info */}
        <div className="mt-12 text-center">
          <Card className="glass border-card-border inline-block">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Additional team members</span> will be announced prior to ICO launch.
                <br />
                <span className="text-sm">We're committed to full transparency and public accountability.</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};