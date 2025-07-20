"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is Sigma Industrial Park Panipat?",
      answer:
        "Sigma Industrial Park Panipat is a premium industrial development by Sigma Group located in Panipat, Haryana. It offers RERA approved industrial plots ranging from 300 to 3000 sq yards with modern infrastructure, 24x7 security, and excellent connectivity to major highways including NH-07.",
    },
    {
      question:
        "What are the plot sizes available in Sigma Industrial Park Panipat?",
      answer:
        "Sigma Industrial Park Panipat offers flexible plot sizes ranging from 300 square yards to 3000 square yards, catering to businesses of all scales from small enterprises to large manufacturing units. This flexibility allows investors to choose plots that perfectly match their business requirements and budget.",
    },
    {
      question: "What is the price of industrial plots in Sigma Panipat?",
      answer:
        "Industrial plots in Sigma Industrial Park Panipat start from below ₹30,000 per square yard. The exact pricing varies based on plot size, location within the park, and payment plan chosen. We offer flexible payment options and EMI plans to make your investment affordable and convenient.",
    },
    {
      question: "Is Sigma Industrial Park Panipat RERA approved?",
      answer:
        "Yes, Sigma Industrial Park projects are RERA compliant and registered. Sigma Industrial Park 1 has RERA number HRERA-PKL-PKL-503-2023, ensuring complete legal compliance, transparency, and security for all investors. All documentation is clear and legally verified.",
    },
    {
      question: "What is the booking amount for Sigma Industrial Park Panipat?",
      answer:
        "The booking amount for securing a plot in Sigma Industrial Park Panipat is ₹5 lakhs. This token amount reserves your preferred plot while you complete the documentation and payment process. The booking amount is adjusted against the total plot cost.",
    },
    {
      question:
        "What facilities are available in Sigma Industrial Park Panipat?",
      answer:
        "Sigma Industrial Park Panipat offers world-class facilities including 24x7 security with CCTV surveillance, reliable power supply with backup, water connections, sewage systems, wide internal roads, high-speed internet connectivity, modern utilities, green spaces, and professional management for seamless business operations.",
    },
    {
      question: "Where is Sigma Industrial Park located in Panipat?",
      answer:
        "Sigma Industrial Park 1 is strategically located at Mauli, Barwala, NH-07, Panchkula, just 1 km from Mauli and 25 km from Panchkula with direct highway connectivity. Sigma Industrial Park 2 is at Kakkar Majra, NH-07, Ambala, offering excellent access to major industrial hubs and transportation networks.",
    },
    {
      question: "How can I book a plot in Sigma Industrial Park Panipat?",
      answer:
        "You can book a plot in Sigma Industrial Park Panipat by contacting Sigma at +91-91383-31357 or via WhatsApp. Sigma's expert team will arrange a free site visit, provide detailed project information, assist with plot selection, and guide you through the complete booking and documentation process.",
    },
    {
      question:
        "What are the connectivity advantages of Sigma Industrial Park Panipat?",
      answer:
        "Sigma Industrial Park Panipat offers excellent connectivity with direct access to NH-07 (National Highway), proximity to major cities like Delhi and Chandigarh, well-connected road and rail networks, easy access to existing industrial clusters, ports, and transportation hubs, making it ideal for logistics and manufacturing businesses.",
    },
    {
      question: "What is the track record of Sigma Group in Panipat?",
      answer:
        "Sigma Group has 15+ years of excellence in real estate development with 11+ ongoing projects across residential, commercial, and industrial sectors. Our professional team brings 50+ years of combined experience, ensuring quality construction, timely delivery, transparent dealings, and complete customer satisfaction in all industrial projects.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6 text-blue-600 border-blue-200 px-3 sm:px-4 py-1 sm:py-2 text-sm"
            >
              Frequently Asked Questions
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 leading-tight">
              Common Questions About{" "}
              <span className="gradient-text">
                Sigma Industrial Park Panipat
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Get answers to the most frequently asked questions about Sigma
              Industrial Park Panipat, plot booking, pricing, facilities, and
              investment opportunities.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);

              return (
                <Card
                  key={index}
                  className="w-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <Button
                      variant="ghost"
                      onClick={() => toggleItem(index)}
                      className="w-full justify-between text-left p-4 sm:p-6 h-auto hover:bg-gray-50 rounded-none"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold font-poppins text-gray-900 text-left leading-relaxed break-words whitespace-normal">
                            {faq.question}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        )}
                      </div>
                    </Button>
                  </CardHeader>

                  {isOpen && (
                    <CardContent className="pt-0 pb-4 sm:pb-6">
                      <div className="p-4">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900 mb-3 sm:mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Our expert team is here to help you with any queries about
                  Sigma Industrial Park Panipat
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://wa.me/919138331357?text=Hi, I have questions about Sigma Industrial Park Panipat",
                        "_blank"
                      )
                    }
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium text-sm sm:text-base"
                  >
                    WhatsApp Support
                  </Button>
                  <Button
                    onClick={() => window.open("tel:+919138331357", "_self")}
                    variant="outline"
                    className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base"
                  >
                    Call Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
