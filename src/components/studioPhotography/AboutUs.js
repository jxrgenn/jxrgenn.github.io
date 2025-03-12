import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Star, Award, Users } from 'lucide-react';
import Mjete from '../../assets/images/mjete3.jpg';
import Mjete2 from '../../assets/images/mjete2.jpg';

export const AboutUs = () => {
  const stats = [
    { icon: <Camera size={48} />, value: "2000+", label: "Photo Sessions" },
    { icon: <Star size={48} />, value: "150+", label: "Brand Collaborations" },
    { icon: <Award size={48} />, value: "15+", label: "Years of Experience" },
    { icon: <Users size={48} />, value: "1000+", label: "Happy Clients" },
  ];

  return (
    <div id="aboutUs">
    <section id="about" className="min-vh-100 bg-black text-white py-5" style={{ padding: '10rem 0' }}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto text-center mb-5"
          style={{ maxWidth: '1200px', marginBottom: '8rem' }}
        >
          <h2 className="display-1 fw-light mb-5" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 8vw, 8rem)'
          }}>
            Our Studio
          </h2>
          <p className="fs-3 fs-md-2 text-secondary lh-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Since 2008, we've been pushing the boundaries of visual storytelling. From intimate portraits
            to large-scale commercial projects, our lens captures the extraordinary in every frame.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="row g-5 mb-5"
          style={{ marginBottom: '8rem' }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <div className="mb-4 d-flex justify-content-center text-secondary">{stat.icon}</div>
              <div className="display-4 fw-bold mb-3">{stat.value}</div>
              <div className="fs-5 text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="row g-5 align-items-center"
        >
          <div className="col-md-6">
            <div className="pe-md-5">
              <h3 className="display-4 fw-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Our Expertise
              </h3>
              <div className="d-flex flex-column gap-4">
                <p className="fs-5 fs-md-4 text-secondary lh-lg">
                  We specialize in creating compelling visual narratives across multiple domains:
                </p>
                <ul className="fs-5 fs-md-4 text-secondary list-unstyled d-flex flex-column gap-3">
                  <li>• Fashion & Editorial Photography</li>
                  <li>• Commercial & Product Shoots</li>
                  <li>• Corporate Events & Conferences</li>
                  <li>• Portrait Sessions & Personal Branding</li>
                  <li>• Wedding & Celebration Coverage</li>
                  <li>• Architecture & Interior Photography</li>
                </ul>
                <p className="fs-5 fs-md-4 text-secondary lh-lg mt-4">
                  Our state-of-the-art studio and equipment, combined with our creative expertise,
                  ensure exceptional results for every project we undertake.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-4">
              <div className="col-6">
                <div className="bg-dark" style={{ aspectRatio: '3/4' }}>
                  <img src={Mjete} />
                </div>
              </div>
              <div className="col-6">
                <div className="bg-dark mt-5" style={{ aspectRatio: '3/4', transform: 'translateY(4rem)' }}>
                  <img src={Mjete2} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}

export default AboutUs; 