import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const TermsAndConditions = () => {
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
            <span className="text-xl font-serif font-semibold text-gradient-primary">
              Shenbury
            </span>
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
              Terms & Conditions
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
                By purchasing $SHBY tokens ("Tokens"), you acknowledge and agree to the following:
              </p>
            </CardContent>
          </Card>

          {/* No Guarantees */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">No Guarantees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Tokens are provided on an "as-is" and "as-available" basis. The purchase of Tokens does not come with any guarantees, promises, or assurances of any kind, including—but not limited to—financial return, performance, future utility, or access to any platform, product, or service.
              </p>
            </CardContent>
          </Card>

          {/* Not an Offer of Securities */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Not an Offer of Securities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Tokens do not represent a security, equity, loan, or ownership interest in any entity or project. The sale of Tokens is not intended to be an offering of securities, and does not constitute an offer or solicitation in any jurisdiction where such activity is unlawful.
              </p>
            </CardContent>
          </Card>

          {/* Final Sale */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Final Sale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                All purchases of Tokens are final and non-refundable. By participating in this sale, you understand and accept that you will not be entitled to a refund or compensation under any circumstances, including but not limited to, loss of value or inability to use the Tokens.
              </p>
            </CardContent>
          </Card>

          {/* No Liability for Losses */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">No Liability for Losses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To the fullest extent permitted by applicable laws, neither the organizers of this Token sale nor any of their affiliates, agents, advisors, officers, or representatives shall be liable for any direct or indirect loss or damage you may suffer, including without limitation: trading losses, loss of data, revenue, profit, or opportunity; or any errors, delays, or technical failures related to the Token sale or its use.
              </p>
            </CardContent>
          </Card>

          {/* Agreement to DAO LLC Operating Agreement */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Agreement to DAO LLC Operating Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By purchasing or attempting to purchase Tokens, you further acknowledge and agree to be bound by the terms and conditions of the operating agreement of the DAO LLC that governs the project. You confirm that you have reviewed or had the opportunity to review the <a href="/operating-agreement" className="text-primary hover:underline">operating agreement</a> and understand that it forms a binding part of your participation in this Token sale.
              </p>
            </CardContent>
          </Card>

          {/* Confirmation */}
          <Card className="glass border-card-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By purchasing or attempting to purchase $SHBY Tokens, you confirm that you have read, understood, and accepted the terms above.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              © 2025 Shenbury DAO — These terms and conditions form a legally binding agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};