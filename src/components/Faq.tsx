import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Search } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqItems: FaqItem[] = [
    {
      question: "What is DevJams?",
      answer: "DevJams is a premier tech event bringing together developers, designers, and tech enthusiasts for three days of workshops, talks, networking, and a hackathon. It's designed to foster learning, collaboration, and innovation in the tech community.",
      category: "general"
    },
    {
      question: "When and where is DevJams taking place?",
      answer: "DevJams will be held on October 15-17, 2025, at the TechHub Conference Center in San Francisco, CA. Virtual attendance options are also available for those who cannot attend in person.",
      category: "logistics"
    },
    {
      question: "How much does registration cost?",
      answer: "Early bird registration is $299 for in-person attendance and $149 for virtual attendance. Regular pricing will be $399 for in-person and $199 for virtual. Students receive a 50% discount with valid ID.",
      category: "registration"
    },
    {
      question: "What's included in the registration fee?",
      answer: "Registration includes access to all sessions, workshops, the hackathon, networking events, meals during the event (breakfast, lunch, and snacks), swag bag, and post-event access to session recordings.",
      category: "registration"
    },
    {
      question: "Is there a code of conduct?",
      answer: "Yes, DevJams is committed to providing a harassment-free, inclusive experience for everyone. All attendees, speakers, sponsors, and volunteers are required to adhere to our code of conduct, which can be found on our website.",
      category: "general"
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Refunds are available up to 30 days before the event with a 15% processing fee. Within 30 days, you can transfer your registration to someone else or convert to virtual attendance, but refunds are not available.",
      category: "registration"
    },
    {
      question: "Will sessions be recorded?",
      answer: "Yes, all sessions will be recorded and made available to registered attendees after the event. Virtual attendees will have real-time access to livestreams of all sessions.",
      category: "content"
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, charger, business cards, and any devices you'll need for the workshops or hackathon. Comfortable clothing is recommended as the event will be long and interactive.",
      category: "logistics"
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about DevJams. If you don't see your question here,
            feel free to contact us directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-12"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div 
                key={index} 
                className="material-card mb-4 overflow-hidden"
              >
                <div
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </div>
                <div 
                  className={`accordion-content px-4 pb-4 ${activeIndex === index ? 'open' : ''}`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No questions found matching your search.</p>
            </div>
          )}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a href="mailto:info@devjams.tech" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;