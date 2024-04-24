import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

export default function HelpCenter() {
  // Dummy FAQ data - replace with real FAQs as needed
  const faqs = [
    {
      question: 'How do I register a new user?',
      answer: 'To register a new user, navigate to the User Registration section and fill out the required fields.'
    },
    {
      question: 'What if a user forgets their password?',
      answer: 'If a user forgets their password, you can initiate a password reset from the User Management console.'
    },
    {
        question: 'What documentation is required for registering a new user?',
        answer: 'New users need to provide a valid form of identification, proof of address, and complete our user information form.'
      },
      {
        question: 'How can I assist a user who is having trouble with the verification process?',
        answer: 'If a user encounters issues with verification, ensure they\'re submitting clear documents and that all fields in the form are correctly filled out. If problems persist, escalate the matter to our technical support team.'
      },
      {
        question: 'Can I register multiple users at the same time?',
        answer: 'Bulk user registration is possible through our Admin Panel. Use the \'Bulk Upload\' feature and ensure the CSV file format follows our specified template.'
      },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Help Center
      </Typography>
      <Typography variant="h6" gutterBottom>
        FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Report a problem
      </Typography>
      <TextField
        label="Describe the issue"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
}
