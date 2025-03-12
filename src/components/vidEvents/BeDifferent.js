import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../../assets/images/WhatsAppImage2025-01-30at16.45.35.jpeg";
import { motion } from "framer-motion";

export const BeDifferent = () => {
    return (
      <div id="beee">
      <motion.div
        className="d-flex align-items-center justify-content-center text-center position-relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          width: "100%",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-5 text-white position-relative"
          style={{
            maxWidth: "700px",
            borderRadius: "15px",
            border: "2px solid transparent",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(2px)",
            transition: "all 0.3s ease-in-out",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 1)" }}
        >
          <motion.h2
            className="u-align-center u-text u-text-1"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span style={{ fontStyle: "italic", color: "#CBC3E3" }}>Beeee</span> Different
          </motion.h2>

          <motion.p
            className="u-align-center u-text u-text-2"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We have been a leading production house for 23 years in the Albanian market. Try our services now and understand why we love&nbsp;
            <span style={{ fontStyle: "italic", textDecoration: "underline", color: "#CBC3E3" }}>
              Being Different.
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
      </div>
    );
};

export default BeDifferent;