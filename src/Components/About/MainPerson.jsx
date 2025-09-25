import React from "react";
import { Box, Card, CardContent, Typography, Grid, Avatar } from "@mui/material";
import leader from '../../assets/chairperson/chairperson.png'; // Make sure the path is correct

export default function MainPerson() {
  return (
   <Box sx={{ maxWidth: 1400, mx: "auto", p: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Meet Our Chairperson
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: "auto" }}>
          Visionary leadership driving innovation and growth in the venture capital landscape
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left: Large Square Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={leader}
            alt="Chairperson"
            sx={{
              width: "100%",
             
              borderRadius: 2, // slightly rounded corners
              boxShadow: 5
            }}
          />
        </Grid>

        {/* Right: Cards/Details */}
        <Grid item xs={12} md={7} container direction="column" spacing={3}>
          {/* Name and Bio Card */}
          <Grid item>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Chris Philps Thompson
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Chairperson
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  With over 20 years of experience in venture capital and private equity, Chris leads our firm with a vision for sustainable growth and innovation. His strategic insights have guided hundreds of startups from early-stage concepts to market-leading companies.
                </Typography>

                <Grid container spacing={2}>
                  <Grid item>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        200+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Companies Funded
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        $2.5B
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total Investment
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Leadership Philosophy */}
          <Grid item>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Leadership Philosophy
                </Typography>
                <Typography variant="body1" color="text.secondary" fontStyle="italic">
                  "Innovation thrives when we combine bold vision with strategic patience. Our role is not just to fund ideas, but to nurture the entrepreneurs who will shape tomorrow's world."
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Background & Expertise */}
          <Grid item>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Background & Expertise
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <li>MTECH from CBIT Engineering College</li>
                  <li>Former Partner at Thagam Capital</li>
                  <li>Board member of 15+ high-growth startups</li>
                  <li>Recognized as "Top 40 Under 40" by Fortune Magazine</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
