export interface ContactFormData {
  fullName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  service?: string;
  timeline?: string;
  companyName?: string;
  message?: string;
}

const RECIPIENT_EMAIL = 'akodefyinfotech@gmail.com';

export const sendEmail = (formData: ContactFormData, buttonType: string) => {
  const subject = encodeURIComponent(`New ${buttonType} Request from Website Visitor`);
  
  let body = `Hello,\n\n`;
  
  // Create personalized message based on button type from first person perspective
  if (buttonType.includes('Schedule')) {
    body += `I would like to schedule a consultation session. I found your website and am interested in your digital marketing services.\n\n`;
    body += `Request Type: ${buttonType}\n`;
  } else if (buttonType.includes('Consultation')) {
    body += `I am interested in getting a free consultation for your services. I came across your website and would like to learn more.\n\n`;
    body += `Request Type: ${buttonType}\n`;
  } else if (buttonType.includes('Let\'s talk') || buttonType.includes('questions')) {
    body += `I have some questions about your services and would like to discuss them with your team.\n\n`;
    body += `Request Type: ${buttonType}\n`;
  } else if (buttonType.includes('Connect')) {
    body += `I would like to connect with your experts to discuss my business requirements.\n\n`;
    body += `Request Type: ${buttonType}\n`;
  } else {
    body += `I am interested in your services and would like to get in touch.\n\n`;
    body += `Request Type: ${buttonType}\n`;
  }
  
  body += `-----------------------------------\n\n`;
  
  if (formData.fullName) body += `My Name: ${formData.fullName}\n`;
  if (formData.email) body += `My Email: ${formData.email}\n`;
  if (formData.phone) body += `My Phone: ${formData.phone}\n`;
  if (formData.businessName) body += `My Business: ${formData.businessName}\n`;
  if (formData.companyName) body += `My Company: ${formData.companyName}\n`;
  if (formData.service) body += `Service I'm interested in: ${formData.service}\n`;
  if (formData.timeline) body += `When I'd like to start: ${formData.timeline}\n`;
  
  if (formData.message) {
    body += `\nMy Message/Requirements:\n${formData.message}\n`;
  }
  
  body += `\n-----------------------------------\n`;
  body += `Submitted at: ${new Date().toLocaleString()}\n\n`;
  
  body += `I look forward to hearing from you soon.\n\n`;
  body += `Best regards,\n`;
  body += `${formData.fullName || 'Website Visitor'}\n`;
  
  const encodedBody = encodeURIComponent(body);
  const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${encodedBody}`;
  
  window.location.href = mailtoLink;
};