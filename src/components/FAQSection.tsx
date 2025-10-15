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
    question: 'How do you customize IT solutions for different industries?',
    answer: 'We conduct comprehensive technology assessments and industry analysis to develop tailored IT solutions. Our approach combines best practices with cutting-edge technologies, ensuring solutions are perfectly aligned with your business requirements and industry standards.',
  },
  {
    question: 'Do you leverage AI in software development?',
    answer: 'Absolutely. Our development team integrates advanced AI technologies and machine learning capabilities to enhance application functionality, automate processes, and deliver intelligent solutions that adapt to user needs and business growth.',
  },
  {
    question: 'Can you facilitate cloud migration and deployment?',
    answer: 'Yes, we excel in cloud transformation strategies. Our services encompass cloud architecture design, data migration, security implementation, compliance guidance, and comprehensive deployment for successful cloud adoption across AWS, Azure, and Google Cloud platforms.',
  },
  {
    question: 'What does your software development package include?',
    answer: 'Our comprehensive software development solution covers requirements analysis, system architecture design, full-stack development, database optimization, API integration, security implementation, testing, deployment, and ongoing maintenance and support.',
  },
  {
    question: 'Is ongoing technical support available after deployment?',
    answer: 'Definitely. We provide continuous technical support including system monitoring, performance optimization, security updates, bug fixes, feature enhancements, and strategic technology roadmap guidance based on evolving business needs.',
  },
  {
    question: 'How is your IT service pricing structured?',
    answer: 'We offer flexible pricing models tailored to specific service categories — web development, mobile app development, cloud solutions, cybersecurity, or comprehensive IT consulting. Enterprise and custom packages are available through personalized consultation.',
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
    <Box ref={sectionRef} sx={{ py: { xs: 8, md: 12 }, background: 'background.default' }}>
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
              color: 'primary.main',
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