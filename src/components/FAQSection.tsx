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
    question: 'How do you tailor strategies for different industries?',
    answer: 'We begin with a detailed industry and competitor analysis, then craft customized strategies using proven frameworks and data-driven insights tailored to your sector and audience.',
  },
  {
    question: 'Do you provide AI-powered content creation?',
    answer: 'Yes, our content team utilizes AI tools to optimize language, visuals, and timing, ensuring maximum engagement and alignment with current digital trends.',
  },
  {
    question: 'Can you support international market entry?',
    answer: 'Absolutely. We specialize in market expansion, including localization, compliance consulting, and go-to-market strategies for global reach.',
  },
  {
    question: "What's included in your website development service?",
    answer: 'Our website service includes UI/UX design, development, SEO setup, mobile responsiveness, security optimization, and integration of analytics and conversion tools.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we provide ongoing support for content updates, performance tracking, SEO adjustments, and strategy realignment based on KPIs and business goals.',
  },
  {
    question: 'What are your pricing models?',
    answer: 'We offer flexible monthly packages based on the service category — social media, SEO, website development, or full-stack marketing. Custom packages are also available upon consultation.',
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
    <Box ref={sectionRef} sx={{ py: { xs: 8, md: 12 }, background: '#FFFFFF' }}>
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