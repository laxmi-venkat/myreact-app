import React from "react";
import logo2 from "../../assets/Bioheaven/bioheve360logo2.png";
import main from "../../assets/Bioheaven/Bioheaven.png";
import Bhabatosh from "../../assets/Bioheaven/Bhabatosh-Das.png";
import Vijay from "../../assets/Bioheaven/Vijay-Sharma.png";
import Saurabh from "../../assets/Bioheaven/Saurabh-Raghuvanshi.png";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const directors = [
  { img: Bhabatosh, name: "Dr. S. Chinnappan", role: "Director" },
  { img: Vijay, name: "Thanga. Sekar", role: "Chairman" },
  { img: Saurabh, name: "S. Thangam Santhosh", role: "Managing Director" },
];

export default function BioHeaven() {
  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      {/* ---------- Header ---------- */}
      <header
        style={{
          width: "100%",
          background: "#000",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          minHeight: "78px",
        }}
      >
        <img
          src={logo2}
          alt="BioHeaven Logo"
          style={{
            height: "50px",
            objectFit: "contain",
            maxWidth: "140px",
            width: "100%",
          }}
        />
      </header>

      {/* ---------- About Us Title ---------- */}
      <div
        style={{
          width: "100%",
          background: "#f7f7f7",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "32px 20px",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <h1
          style={{
            color: "#222",
            fontSize: "2.4rem",
            fontWeight: 600,
            margin: 0,
            lineHeight: "1.12",
            letterSpacing: "-1px",
          }}
        >
          About Us
        </h1>
      </div>

     {/* ---------- Top Row: Image + First Paragraph + Second Paragraph ---------- */}
{/* ---------- Top Row: Image + First Paragraph ---------- */}
<section
  style={{
    margin: "40px auto",
    maxWidth: "1150px",
    padding: "0 16px",
    display: "flex",
    flexWrap: "wrap",
    gap: "36px",
  }}
>
  {/* Left: Image */}
  <div style={{ flex: "1 1 360px", minWidth: "300px" }}>
    <img
      src={main}
      alt="Bioheaven Research"
      style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "6px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.09)",
      }}
    />

    {/* Second Paragraph BELOW IMAGE */}
    <p style={{ lineHeight: "1.6", textAlign: "justify", marginTop: "24px" }}>
      Bioheaven360 is a Delhi-based biotechnology start-up (DIPP19277)
      recognised by the Inter-ministerial board venturing into products and
      services in healthcare and the Life Sciences industry. We are working
      in healthcare, environment and agriculture and continually develop
      futuristic solutions that impact daily life. Currently, in health we
      manufacture molecular diagnostics testing kits, media and reagents. We
      bring more than 20 years of rich experience in molecular biotechnology,
      markers, genomics and the IVD industry.
    </p>
  </div>

  {/* Right: First Paragraph */}
  <div style={{ flex: "1 1 360px", minWidth: "300px" }}>
    <h6 style={{ marginTop: 0 }}>About Our Company</h6>
    <h1>Bioheaven 360 Genotec Pvt. Ltd.</h1>

    <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
      The company aims at creating solutions that are on cutting edge with
      the latest advancements in the globe, having wide applications and
      that provide cost-effective solutions for the rural and the needy.
      A leading name in the industry, we are trusted by many clients in
      the country due to our quality and innovative solutions. We are
      proudly associated as collaborators with the world’s leading names in
      academia, industry and medical hospitals.
      <br /><br />
      Our in-house research team is continuously working on identification
      of novel molecular markers. These markers form the basis of
      predictive risk assessment as well as pharmacogenomics-based
      identification of drug targets. In the area of communicable diseases,
      we focus on TB, viruses like SARS, MERS, Covid-19 and Dengue,
      encephalitis, malaria, and Chikungunya, and are developing diagnostic
      kits. Based on the biomarker information RT-PCR-based diagnosis is
      possible. Our goal is to revolutionise molecular diagnosis with
      affordable and easy-to-use kits and devices.
      <br /><br />
      We are also working on CRISPR-based diagnostics, therapeutics and
      vaccines for disease areas like cancer, cardiovascular disorders and
      several communicable diseases.
    </p>
  </div>
</section>



      {/* ---------- Mentors Section ---------- */}
      <section
        style={{
          margin: "40px auto",
          maxWidth: 1300,
          padding: "0 16px",
          backgroundColor: "lightgray",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: 400,
            fontStyle: "italic",
            margin: "20px 0 32px",
          }}
        >
          Mentors, Advisors and Collaborators
        </h1>

        <Grid container spacing={4} justifyContent="center">
          {directors.map((dir, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={3}
                sx={{
                  width: 540,
                  height: 340,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  background: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  image={dir.img}
                  alt={dir.name}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                    background: "#eaf4fb",
                  }}
                />
                <CardContent sx={{ textAlign: "center", padding: "8px 0 0 0" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#035BAA", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {dir.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#626e7d", fontWeight: 500, fontSize: "0.95rem" }}
                  >
                    {dir.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* ---------- Vision & Mission ---------- */}
      <section
        style={{
          backgroundColor: "lightpink",
          borderRadius: "5px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          padding: "24px",
          margin: "40px auto",
          maxWidth: "1150px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "16px" }}>
          Vision &amp; Mission
        </h1>

        <p style={{ lineHeight: "1.6", fontSize: "1.05rem", textAlign: "justify" }}>
          The company is working with the mission of applying principles of
          biotechnology individually and/or with other technologies (a step
          ahead of biotechnology conceptualized alone) in Health, Environment,
          and Agriculture.
          <br /><br />
          We are committed to provide products and services that society
          requires, buyers prefer, and partners are proud of. We strive to grow
          business with honesty and integrity and have the vision to harmonize
          the developmental needs of society by creating and providing unique,
          sustainable, and environment-friendly solutions. We turn human needs
          into careful solutions.
        </p>
      </section>
      {/* ---------- Contact Form ---------- */}
<section
  style={{
    background: "#fff",
    borderRadius: "7px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
    margin: "40px auto",
    maxWidth: "700px",
    padding: "28px 24px"
  }}
>
  <h1 style={{
    color: "#f58220",
    fontWeight: 700,
    fontSize: "2rem",
    marginBottom: "20px"
  }}>
    How Can We Help!
  </h1>
  <form>
    <div style={{ display: "flex", gap: "18px", marginBottom: "16px" }}>
      <div style={{ flex: 1 }}>
        <label style={{
          background: "gray", color: "#fff", fontWeight: 500,
          padding: "4px 8px", borderRadius: "3px", fontSize: "1rem"
        }}>
          Your name
        </label>
        <input type="text" required style={{
          width: "100%", padding: "7px", marginTop: "3px",
          borderRadius: "5px", border: "1px solid #dedede"
        }} />
      </div>
      <div style={{ flex: 1 }}>
        <label style={{
          background: "gray", color: "#fff", fontWeight: 500,
          padding: "4px 8px", borderRadius: "3px", fontSize: "1rem"
        }}>
          Your email
        </label>
        <input type="email" required style={{
          width: "100%", padding: "7px", marginTop: "3px",
          borderRadius: "5px", border: "1px solid #dedede"
        }} />
      </div>
      <div style={{ flex: 1 }}>
        <label style={{
          background: "Gray", color: "#fff", fontWeight: 500,
          padding: "4px 8px", borderRadius: "3px", fontSize: "1rem"
        }}>
          Subject
        </label>
        <input type="text" required style={{
          width: "100%", padding: "7px", marginTop: "3px",
          borderRadius: "5px", border: "1px solid #dedede"
        }} />
      </div>
    </div>
    <div style={{ marginBottom: "16px" }}>
      <label style={{
        background: "Gray", color: "#fff", fontWeight: 500,
        padding: "4px 8px", borderRadius: "3px", fontSize: "1rem"
      }}>
        Your message (optional)
      </label>
      <textarea rows={3} style={{
        width: "100%", padding: "8px", marginTop: "3px", minHeight: "56px",
        borderRadius: "5px", border: "1px solid #dedede"
      }} />
    </div>
    <div style={{ marginBottom: "18px" }}>
      <label style={{
        background: "Gray", color: "#fff", fontWeight: 700,
        padding: "4px 8px", borderRadius: "3px", fontSize: "1rem"
      }}>
        Which is bigger, 3 or 6?
      </label>
      <input type="text" required style={{
        width: "100%", padding: "7px", marginTop: "3px",
        borderRadius: "5px", border: "1px solid #dedede"
      }} />
    </div>
    <button type="submit" style={{
      background: "#f58220", color: "#fff", border: "none",
      padding: "10px 28px", borderRadius: "7px", fontWeight: 600,
      fontSize: "1.08rem", cursor: "pointer"
    }}>
      Submit
    </button>
  </form>
</section>

    </div>
  );
}
