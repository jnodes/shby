import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Technology', href: '#technology' },
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'ICO', href: '#ico' },
    ],
    Resources: [
      { name: 'Whitepaper', href: '/whitepaper' },
      { name: 'Technical Paper', href: '/technical-paper' },
      { name: 'GitHub', href: 'https://github.com/jnodes/shenbury-ai' },
    ],
    Company: [
      { name: 'Labs', href: '#team' },
      { name: 'GitHub', href: 'https://github.com/jnodes/shenbury-ai' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jnodes/shenbury-ai', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/digitalassets', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@shenbury.ai', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_567a6262-0291-4069-9a05-5048d6f99ff3/artifacts/3eapd20t_logo.png"
                alt="Shenbury"
                className="h-8 w-8"
              />
              <span className="text-xl font-serif font-semibold text-gradient-primary">
                Shenbury
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI-verified asset tokenization for cultural treasures. 神堡
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-primary-glow transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Shenbury Project. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Disclaimer: This is a technology-focused tokenization project. The value of digital assets is volatile.
            This is not investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
};