'use client';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Important Disclaimer</h3>
                <p className="text-amber-800 leading-relaxed">
                  This website is not an official website of Sigma Projects. The information provided here is for general informational purposes only and should not be considered as official documentation or legal advice. All details, pricing, and terms are subject to change without notice. Please verify all information with official sources and consult with legal and financial advisors before making any investment decisions. We recommend conducting thorough due diligence and visiting the official project offices for accurate and up-to-date information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}