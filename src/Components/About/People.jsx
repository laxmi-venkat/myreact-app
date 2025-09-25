import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const People = () => {
  const presidentCEO = {
    name: "Chris Philps",
    role: "President & CEO",
    bio: "chris leads TechVentures with over 20 years of experience in venture capital and technology. his previously served as Managing Partner at Innovation Capital and was instrumental in leading investments in over 150 startups. chris holds an MTECH in  Computer Science from CBIT.",
    imageUrl: "/assets/president-ceo.jpg",
  };

  const partners = [
    {
      name: "Michael Chen",
      role: "General Partner",
      bio: "Michael focuses on early-stage enterprise software and AI investments. He previously spent 8 years at Google as Senior Product Manager and co-founded two successful startups. Michael holds an MS in Computer Science from Carnegie Mellon.",
      imageUrl: "/assets/partner-1.jpg",
    },
    {
      name: "Dr. Priya Patel",
      role: "General Partner",
      bio: "Priya leads our healthcare and biotech investment practice. She has 15+ years of experience in life sciences venture capital and previously worked as a research scientist at Genentech. She holds a PhD in Molecular Biology from Harvard.",
      imageUrl: "/assets/partner-2.jpg",
    },
    {
      name: "James Rodriguez",
      role: "Partner",
      bio: "James specializes in fintech and consumer technology investments. He was previously VP of Product at PayPal and has extensive experience scaling consumer products. James holds an MBA from Wharton.",
      imageUrl: "/assets/partner-3.jpg",
    },
  ];

  const founders = [
    {
      name: "Lisa Chang",
      role: "Founder & Advisor",
      bio: "Lisa founded DataFlow Analytics, which was acquired by Salesforce for $1.2B. She now serves as an advisor to our portfolio companies on product strategy and growth. Lisa holds a PhD in Data Science from MIT.",
      imageUrl: "/assets/founder-1.jpg",
    },
    {
      name: "David Kumar",
      role: "Founder & Advisor",
      bio: "David founded CloudTech Solutions, a leading SaaS platform that serves over 10,000 enterprises globally. He brings deep expertise in scaling B2B software companies. David has an MBA from Wharton.",
      imageUrl: "/assets/founder-2.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Founder & CTO Advisor",
      bio: "Alex was CTO and co-founder of SystemsCore, which revolutionized distributed computing infrastructure. He now advises our portfolio companies on technical architecture and engineering best practices. Alex has an MS from Carnegie Mellon.",
      imageUrl: "/assets/founder-3.jpg",
    },
  ];

  const renderCard = (person) => (
    <Card sx={{ display: 'flex', p: 2, mb: 3, alignItems: 'center', boxShadow: 3 }}>
      <Avatar
        src={person.imageUrl}
        alt={person.name}
        sx={{ width: 96, height: 96, mr: 3 }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {person.name}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {person.role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {person.bio}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ minHeight: '100vh', p: 4, bgcolor: '#f5f5f5' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          People
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Meet the experienced team of investors, entrepreneurs, and industry experts who are
          passionate about helping founders build successful companies.
        </Typography>
      </Box>

      {/* President & CEO */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          President & CEO
        </Typography>
        {renderCard(presidentCEO)}
      </Box>

      {/* Partners */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Partners
        </Typography>
        {partners.map((partner, index) => (
          <Box key={index}>{renderCard(partner)}</Box>
        ))}
      </Box>

      {/* Founders */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Founders
        </Typography>
        {founders.map((founder, index) => (
          <Box key={index}>{renderCard(founder)}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default People;