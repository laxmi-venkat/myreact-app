import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container
} from '@mui/material';
import { FaRocket, FaBullseye, FaGlobe, FaHandshake } from 'react-icons/fa';

// ✅ Replace with your real image import
import PEOPLE from '../../assets/ourppl/team-collaboration.png';

const Ourpeople = () => {
  const team = [
    { name: "Sarah Thompson", role: "Chairperson & Managing Partner", experience: "20+ years", focus: "Strategic Leadership, M&A" },
    { name: "Michael Chen", role: "Investment Director", experience: "15+ years", focus: "SaaS, Enterprise Technology" },
    { name: "Dr. Priya Patel", role: "Senior Partner", experience: "18+ years", focus: "Healthcare, Biotech" },
    { name: "James Rodriguez", role: "Principal", experience: "12+ years", focus: "Fintech, AI/ML" },
    { name: "Lisa Chang", role: "Investment Manager", experience: "8+ years", focus: "Consumer Tech, E-commerce" },
    { name: "David Kumar", role: "Portfolio Director", experience: "10+ years", focus: "Operations, Growth Strategy" }
  ];

  const values = [
    { title: "Entrepreneurial Spirit", description: "We understand the founder journey because many of us have been founders ourselves, bringing authentic entrepreneurial experience to every partnership." },
    { title: "Deep Industry Expertise", description: "Our team brings decades of combined experience across technology, healthcare, finance, and operations, providing comprehensive strategic guidance." },
    { title: "Global Perspective", description: "We think globally and leverage our international network to help startups scale worldwide, opening doors to markets and opportunities." },
    { title: "Long-term Partnership", description: "We're not just investors—we're committed partners throughout your entire growth journey, from early stage through successful exits." }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box textAlign="center" mb={2}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our People
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            Meet the experienced team of investors, entrepreneurs, and industry experts
            who are passionate about helping founders build successful companies.
          </Typography>
        </Box>

        {/* Hero Image */}
        <Box
          sx={{
            position: 'relative',
            mb: 10,
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 6,
            maxWidth: '100%',
            mx: 'auto'
          }}
        >
          <img
            src={PEOPLE}
            alt="Our team collaborating"
            style={{ width: '100%', height: 400, objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0,0,0,0.4)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              p: 4
            }}
          >
            <Box maxWidth="sm">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Experienced Founders Supporting Founders
              </Typography>
              <Typography variant="body1">
                Our team combines deep industry knowledge with hands-on entrepreneurial
                experience to provide unparalleled support to our portfolio companies.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Leadership Team */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          Leadership Team
        </Typography>
        <Grid container spacing={4} justifyContent="center" mb={10}>
          {team.map((member, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card elevation={4} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    mx: 'auto',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    fontSize: 28,
                    fontWeight: 'bold'
                  }}
                >
                  {member.name.charAt(0)}
                </Box>
                <Typography variant="h6" fontWeight="600">{member.name}</Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>{member.role}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>{member.experience}</Typography>
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    bgcolor: 'secondary.light',
                    color: 'secondary.contrastText',
                    borderRadius: 2,
                    fontSize: 12
                  }}
                >
                  {member.focus}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* What Drives Us */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What Drives Us
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto" sx={{ mb: 6 }} >
            Our core values shape every decision we make and every partnership we build. These 
            principles guide our approach to leadership and investment excellence.
          </Typography>
        </Box>

        <Grid container spacing={4} mb={10}>
          {values.map((val, i) => {
            // Define icons for each value
            const icons = [
              <FaRocket size={24} />,
              <FaBullseye size={24} />,
              <FaGlobe size={24} />,
              <FaHandshake size={24} />
            ];

            return (
              <Grid item xs={12} sm={6} key={i}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    '&:hover': {
                      boxShadow: 3,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: 'primary.main',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        mt: 0.5,
                        color: 'white'
                      }}
                    >
                      {icons[i]}
                    </Box>
                    
                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight="600" gutterBottom sx={{ color: 'text.primary' }}>
                        {val.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {val.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Company Culture */}
        <Card elevation={3} sx={{ p: 6, bgcolor: 'grey.100', textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Our Company Culture
          </Typography>
          <Grid container spacing={4} justifyContent="center" mb={4}>
            <Grid item>
              <Typography variant="h4" color="primary" fontWeight="bold">500+</Typography>
              <Typography variant="body2" color="text.secondary">Startups Evaluated</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" color="success.main" fontWeight="bold">200+</Typography>
              <Typography variant="body2" color="text.secondary">Companies Funded</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" color="secondary.main" fontWeight="bold">50+</Typography>
              <Typography variant="body2" color="text.secondary">Successful Exits</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
            We're committed to being helpful, responsive, and supportive partners to the
            founders we work with. Our diverse perspectives and extensive network enable us
            to provide comprehensive support across all aspects of building and scaling
            successful companies.
          </Typography>
        </Card>

      </Container>
    </Box>
  );
};

export default Ourpeople;