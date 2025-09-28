import React from 'react';
import carousel from '../assets/ycombinator/carousel.png';
import carousel2 from '../assets/ycombinator/carousel2.png';
import carousel3 from '../assets/ycombinator/carousel3.png';
import carousel4 from '../assets/ycombinator/carousel4.png';

const Ycombinator = () => {
  return (
    <section className="py-5 bg-white" style={{ marginTop: '0px',padding:'0px' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-dark mb-4 ">
              Thagam Captial
            </h1>
            <p className="lead text-muted mb-4 fs-5">
              Make something people want.
            </p>
            <p className="text-secondary mb-4">
              We identify and nurture innovative startups with transformative capital and expertise to accelerate their growth journey.
            </p>
            
            <button className="btn btn-warning btn-lg text-white fw-semibold px-4">
              Apply to YC
            </button>
          </div>

          {/* Right Side - Carousel and Stats */}
          <div className="col-lg-6">
            {/* Image Carousel */}
            <div id="ycombinatorCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#ycombinatorCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#ycombinatorCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#ycombinatorCarousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#ycombinatorCarousel" data-bs-slide-to="3"></button>
              </div>
              
              <div className="carousel-inner rounded-3 shadow">
                <div className="carousel-item active">
                  <img 
                    src={carousel} 
                    className="d-block w-100" 
                    alt="YCombinator Portfolio 1"
                    style={{height: "300px", objectFit: "cover"}}
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src={carousel2} 
                    className="d-block w-100" 
                    alt="YCombinator Portfolio 2"
                    style={{height: "300px", objectFit: "cover"}}
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src={carousel3} 
                    className="d-block w-100" 
                    alt="YCombinator Portfolio 3"
                    style={{height: "300px", objectFit: "cover"}}
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src={carousel4} 
                    className="d-block w-100" 
                    alt="YCombinator Portfolio 4"
                    style={{height: "300px", objectFit: "cover"}}
                  />
                </div>
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#ycombinatorCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#ycombinatorCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            {/* Statistics Section */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card border-0 bg-white shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div className="display-6 fw-bold text-dark mb-2">$160M</div>
                    <div className="text-muted small text-uppercase fw-semibold">
                      Combined Valuation
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card border-0 bg-white shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div className="display-6 fw-bold text-dark mb-2">6</div>
                    <div className="text-muted small text-uppercase fw-semibold">
                      Funded Companies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ycombinator;