import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect, useRef } from 'react';
import { sendEmail } from '../utils/emailService';

const AnimatedAccordion = styled(Accordion)<{ isVisible?: boolean; delay?: number }>(({ isVisible, delay }) => ({
  marginBottom: '16px',
  boxShadow: 'none',
  border: '1px solid #E0E0E0',
  borderRadius: '8px !important',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
  transition: `all 0.6s ease ${delay || 0}ms`,
  '&:before': { display: 'none' },
}));

const faqs = [
  {
    question: 'How do you customize strategies for different industries?',
    answer: 'We conduct comprehensive industry research and competitive analysis to develop bespoke strategies. Our approach combines proven methodologies with data intelligence, ensuring solutions are perfectly aligned with your sector dynamics and target audience behavior.',
  },
  {
    question: 'Do you leverage AI in content creation?',
    answer: 'Absolutely. Our creative team integrates advanced AI technologies to enhance content quality, optimize messaging, and perfect timing. This ensures peak engagement while staying ahead of evolving digital trends.',
  },
  {
    question: 'Can you facilitate international market expansion?',
    answer: 'Yes, we excel in global market penetration. Our services encompass market research, cultural localization, regulatory compliance guidance, and comprehensive go-to-market execution for successful international launches.',
  },
  {
    question: 'What does your website development package include?',
    answer: 'Our comprehensive web development solution covers strategic UI/UX design, full-stack development, technical SEO implementation, mobile optimization, enterprise-grade security, and integration of advanced analytics and conversion tracking systems.',
  },
  {
    question: 'Is ongoing support available after launch?',
    answer: 'Definitely. We provide continuous optimization support including content management, performance monitoring, SEO refinements, and strategic pivots based on real-time KPI analysis and evolving business objectives.',
  },
  {
    question: 'How is your pricing structured?',
    answer: 'We offer scalable monthly subscription models tailored to specific service categories — social media management, SEO optimization, web development, or comprehensive digital marketing. Enterprise and custom packages are available through personalized consultation.',
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>('panel5');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleLetsTalk = () => {
    sendEmail({}, 'Still Have Questions - Lets Talk');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box ref={sectionRef} sx={{ py: { xs: 8, md: 12 }, background: '#FFFBF5' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" sx={{ mb: { xs: 4, md: 6 } }}>
          Frequently Asked Questions (FAQs)
        </Typography>

        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          {faqs.map((faq, index) => (
            <AnimatedAccordion 
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              isVisible={isVisible}
              delay={index * 100}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ 
                  '& .MuiAccordionSummary-content': { 
                    my: 2 
                  } 
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </AnimatedAccordion>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="text" 
            size="large"
            onClick={handleLetsTalk}
            sx={{ 
              color: '#E31E24',
              fontWeight: 600,
            }}
          >
            Still have questions? Let's talk →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}