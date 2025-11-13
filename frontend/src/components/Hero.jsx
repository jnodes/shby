import React from 'react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="glass border-primary/30 text-primary-glow px-4 py-2">
              <Zap className="w-4 h-4 mr-2 inline" />
              AI-Powered Authentication Protocol
            </Badge>

            <h1 className="font-serif font-bold leading-tight">
              Verify. Tokenize. Trade.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We solve the art market's oracle problem. Our autonomous AI provides cryptographic-grade verification for RWA tokenization, turning museum-grade assets into liquid, on-chain assets.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-muted-foreground">Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-muted-foreground">Zero-Trust Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-muted-foreground">Total Data Privacy</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="premium"
                size="lg"
                className="group"
                onClick={() => document.getElementById('ico')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join ICO
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Technology
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-gradient-gold">$57.5B</div>
                <div className="text-sm text-muted-foreground mt-1">Global Market</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-gradient-gold">$600M+</div>
                <div className="text-sm text-muted-foreground mt-1">Client Pipeline</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-gradient-gold">Optimized</div>
                <div className="text-sm text-muted-foreground mt-1">AI Compute</div>
              </div>
            </div>
          </div>

          {/* Right Content - Artifact Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-full">
              {/* Main Artifact Image */}
              <div className="relative h-full glass rounded-2xl overflow-hidden shadow-heavy hover-lift">
                <img
                  src="/images/relics/003-ming-cloisonne/main.jpg"
                  alt="Ming Dynasty Cloisonné"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />
              </div>

              {/* Floating Detail Card - Hidden on mobile to prevent overlay */}
              <button
                onClick={() => document.getElementById('single-artwork')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden lg:block absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-elegant hover-lift cursor-pointer group transition-all duration-300 hover:scale-105"
              >
                <img
                  src="/images/relics/013-qianlong-royal-cloisonne-teapot/detail-1.png"
                  alt="View Authenticated Qianlong Teapot"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-xs font-medium text-primary-glow group-hover:text-secondary transition-colors">AI Verified</p>
                  <p className="text-xs text-muted-foreground">View Collection →</p>
                </div>
              </button>

              {/* Verification Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass rounded-full p-3 sm:p-4 shadow-gold glow-gold">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};