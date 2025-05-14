import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, MessageSquare, Star, Award, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-beast-accent/30 opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let's <span className="text-beast-purple-light">Collaborate</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">Ready to transform your brand's presence in the creator economy? Our team of experts is here to help you succeed.</p>
        </div>
        
        <div className="glass border border-white/10 rounded-2xl overflow-hidden shadow-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Form */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-white/5 border-white/10 focus:border-beast-purple-light h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="you@company.com" 
                      className="bg-white/5 border-white/10 focus:border-beast-purple-light h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
                  <Input 
                    placeholder="Your company" 
                    className="bg-white/5 border-white/10 focus:border-beast-purple-light h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="bg-white/5 border-white/10 focus:border-beast-purple-light min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary-gradient shadow-glow hover:shadow-glow-lg transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Right side: Team photo and highlights */}
            <div className="relative h-full">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-beast-black/80 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format" 
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-20 p-8 lg:p-12 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-beast-purple-light mt-0.5 mr-3" />
                      <p className="text-white/80">Industry-leading expertise in creator economy</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-beast-purple-light mt-0.5 mr-3" />
                      <p className="text-white/80">Proprietary AI technology for optimal matching</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-beast-purple-light mt-0.5 mr-3" />
                      <p className="text-white/80">Data-driven campaign strategies with proven ROI</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating achievements */}
                <div className="flex flex-wrap gap-4">
                  <div className="glass-dark px-4 py-2 rounded-full border border-white/10 flex items-center">
                    <Award className="h-4 w-4 text-beast-purple-light mr-2" />
                    <span className="text-sm">Industry Leader 2025</span>
                  </div>
                  <div className="glass-dark px-4 py-2 rounded-full border border-white/10 flex items-center">
                    <Star className="h-4 w-4 text-beast-purple-light mr-2" />
                    <span className="text-sm">98% Client Satisfaction</span>
                  </div>
                  <div className="glass-dark px-4 py-2 rounded-full border border-white/10 flex items-center">
                    <MessageSquare className="h-4 w-4 text-beast-purple-light mr-2" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                  <div className="glass-dark px-4 py-2 rounded-full border border-white/10 flex items-center">
                    <HelpCircle className="h-4 w-4 text-beast-purple-light mr-2" />
                    <span className="text-sm">Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;