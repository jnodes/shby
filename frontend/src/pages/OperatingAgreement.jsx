import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const OperatingAgreement = () => {
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
              Legal Document
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Operating Agreement
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>Effective Date: November 11, 2025</span>
              <span>•</span>
              <span>Shenbury DAO</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-gradient-gold">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This Operating Agreement ("Agreement") governs the operations of the Shenbury Decentralized Autonomous Organization ("DAO"), a blockchain-based collective dedicated to the authentication and tokenization of real-world assets through decentralized artificial intelligence technologies.
              </p>
              <p>
                This Agreement establishes the governance framework, membership rights, and operational procedures of the DAO in accordance with applicable laws and regulations.
              </p>
            </CardContent>
          </Card>

          {/* Article I - Formation */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Article I: Formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">1.1 Formation.</strong> The Shenbury DAO is formed as a decentralized autonomous organization operating on blockchain networks, governed by smart contracts and this Operating Agreement.
              </p>
              <p>
                <strong className="text-foreground">1.2 Name.</strong> The name of the DAO shall be "Shenbury DAO" or such other name as determined by governance vote.
              </p>
              <p>
                <strong className="text-foreground">1.3 Purpose.</strong> The purpose of the DAO is to develop, deploy, and operate decentralized AI systems for the authentication and tokenization of real-world assets, particularly fine art and collectibles.
              </p>
            </CardContent>
          </Card>

          {/* Article II - Membership */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Article II: Membership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">2.1 Eligibility.</strong> Membership in the DAO is open to any person or entity who holds at least 1,000 $SHBY tokens.
              </p>
              <p>
                <strong className="text-foreground">2.2 Rights.</strong> Members have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Participate in governance proposals and voting</li>
                <li>Access DAO resources and services</li>
                <li>Receive distributions as determined by governance</li>
                <li>Propose initiatives and improvements</li>
              </ul>
              <p>
                <strong className="text-foreground">2.3 Obligations.</strong> Members must:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comply with this Operating Agreement</li>
                <li>Act in the best interests of the DAO</li>
                <li>Maintain confidentiality of sensitive information</li>
                <li>Abide by applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Article III - Governance */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Article III: Governance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">3.1 Decision Making.</strong> All material decisions affecting the DAO shall be made through token-weighted voting by members.
              </p>
              <p>
                <strong className="text-foreground">3.2 Quorum.</strong> A quorum of 10% of outstanding $SHBY tokens must participate for a vote to be valid.
              </p>
              <p>
                <strong className="text-foreground">3.3 Voting Period.</strong> All proposals shall remain open for voting for a minimum of 7 days.
              </p>
              <p>
                <strong className="text-foreground">3.4 Approval Threshold.</strong> Proposals require a simple majority (50% + 1) of votes cast to be approved.
              </p>
            </CardContent>
          </Card>

          {/* Article IV - Treasury and Finances */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Article IV: Treasury and Finances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">4.1 Treasury Management.</strong> The DAO treasury shall be managed through multi-signature wallets controlled by elected treasurers.
              </p>
              <p>
                <strong className="text-foreground">4.2 Budget Approval.</strong> Annual budgets must be approved by member vote.
              </p>
              <p>
                <strong className="text-foreground">4.3 Financial Reporting.</strong> Quarterly financial reports shall be published to all members.
              </p>
              <p>
                <strong className="text-foreground">4.4 Distributions.</strong> Any distributions to members require approval by 60% supermajority vote.
              </p>
            </CardContent>
          </Card>

          {/* Article V - Amendments */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Article V: Amendments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">5.1 Proposal.</strong> Amendments to this Agreement may be proposed by any member.
              </p>
              <p>
                <strong className="text-foreground">5.2 Approval.</strong> Amendments require a 66% supermajority vote of participating members.
              </p>
              <p>
                <strong className="text-foreground">5.3 Notice.</strong> All members must be notified of amendment proposals at least 14 days prior to voting.
              </p>
            </CardContent>
          </Card>

          {/* Article VI - Dissolution */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Article VI: Dissolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">6.1 Voluntary Dissolution.</strong> The DAO may be dissolved by 75% supermajority vote of members.
              </p>
              <p>
                <strong className="text-foreground">6.2 Distribution of Assets.</strong> Upon dissolution, remaining assets shall be distributed to a charitable organization focused on arts and technology, as determined by member vote.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              © 2025 Shenbury DAO — This document is governed by the terms set forth herein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};