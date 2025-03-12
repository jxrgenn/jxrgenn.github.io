import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/images/Schulman-Directors-BongJoonHo.webp";
import image2 from "../../assets/images/WhatsAppImage2025-01-30at16.31.41.jpeg";
import image3 from "../../assets/images/mjete.jpg";
import image4 from "../../assets/images/ultimate-wedding-venue-guide-1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const expertiseData = [
    {
        title: "Event Management",
        image: image1,
        delay: 0.1,
        description: "We manage events of all sizes, ensuring seamless execution and organization."
    },
    {
        title: "Live Directing",
        image: image2,
        delay: 0.2,
        description: "Our team specializes in live directing for broadcasts and events."
    },
    {
        title: "State-of-the-Art Equipments",
        image: image3,
        delay: 0.3,
        description: "We use the latest technology to deliver high-quality event experiences."
    },
    {
        title: "Venue Finding",
        image: image4,
        delay: 0.4,
        description: "We help you find the perfect venue for your event, tailored to your needs."
    },
];
export const ExpertiseGrid = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOutsideClick = (event) => {
        if (!event.target.closest(".expertise-item")) {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div id="expertise">
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, ease: "easeInOut" }} className="container text-center py-5">
            <h2 className="mb-4 display-4">Our Expertise</h2>
            <div className="row g-4">
                {expertiseData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="col-md-6 expertise-item"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, ease: "easeInOut", delay: item.delay }}
                    >
                        <div
                            className="position-relative overflow-hidden rounded shadow-lg"
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                        >
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid w-100 d-none d-md-block"
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid w-100 d-block d-md-none"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <motion.div
                                className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center text-center text-white fw-bold"
                                style={{ opacity: 1 }}
                                whileHover={{ opacity: 0.9 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <p className="m-0 fs-3">{item.title}</p>
                            </motion.div>
                        </div>
                        {selectedItem === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="mt-2 p-3 bg-dark text-white rounded shadow-sm"
                            >
                                <p>{item.description}</p>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
            <motion.p className="mt-4 text-muted fs-5" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}>
                We bring top-tier expertise in event planning, technical execution, and venue selection to ensure a flawless experience.
            </motion.p>
        </motion.div>
        </div>
    );
};

export default ExpertiseGrid;