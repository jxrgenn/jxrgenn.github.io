import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiCamera, FiFilm, FiZoomIn } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../Tools2.css';
import { Image } from 'react-bootstrap';
import Canon5D from '../../assets/img/Canon-5D-Mark-IV.jpeg'
import BMStudio from '../../assets/img/Blackmagic-Studio-Camera-6K.jpeg'
import BMPocket6k from '../../assets/img/Blackmagic-Pocket-6K-Pro.jpeg'
import BMPocket4k from '../../assets/img/Blackmagic-Pocket-4K.jpeg'
import BMMicro from '../../assets/img/Blackmagic-Micro-4K.jpeg'
import CanonR5 from '../../assets/img/Canon-R5-PNG.webp'
import Canon24105 from '../../assets/img/Canon-24-105-RF.png'
import Canon70200 from '../../assets/img/Canon-70-200-EF.png'
import Sigma1035 from '../../assets/img/Sigma-10-35-EF.jpeg'
import Sigma1835 from '../../assets/img/Sigma-18-35-EF.jpeg'
import Sigma14 from '../../assets/img/Sigma-14-EF.jpeg'
import Sigma2470 from '../../assets/img/Sigma-24-70-EF.jpeg'
import Sigma50100 from '../../assets/img/Sigma-50-100EF.jpeg'
import Sigma150300 from '../../assets/img/Sigma-150-300-EF.jpeg'
import craneCamera from '../../assets/img/CRANE-CAMERA-JIB-8m.png'
import gimbal from '../../assets/img/Gimbal-DJI-RS-3-Pro.png'
import studioConverter from '../../assets/img/studio-converter.jpeg'
import teradek from '../../assets/img/Teradek-Bolt-6-LT-HDMI-750.jpeg'
import hollyland from '../../assets/img/Hollyland-Hollyland-C1-Pro.jpeg'
import hyperDeck from '../../assets/img/Blackmagic-HyperDeck-Studio-4K-Pro.jpeg'
import atem from '../../assets/img/Blackmagic-ATEM-Television-Studio-4K8.jpeg'
import { motion } from 'framer-motion';

export const Tools2 = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    // Complete categorized tools data
    const categories = {
        cameras: [

            {
                name: "BLACKMAGIC Studio Camera 6K",
                brand: "Blackmagic",
                specs: "Studio camera system",
                image: BMStudio,
                details: {
                    sensor: "Super 35",
                    resolution: "6K@50/60fps",
                    mount: "EF Mount",
                    dynamicRange: "13 stops",
                },
            },
            {
                name: "BLACKMAGIC Pocket 6K Pro",
                brand: "Blackmagic",
                specs: "Cinema Camera",
                image: BMPocket6k,
                details: {
                    sensor: "Super 35 HDR",
                    resolution: "6K@50fps",
                    mount: "EF Mount",
                    dynamicRange: "13 stops",
                },
            },
            {
                name: "BLACKMAGIC Pocket 4K",
                brand: "Blackmagic",
                specs: "Cinema Camera",
                image: BMPocket4k,
                details: {
                    sensor: "Micro Four Thirds",
                    resolution: "4K DCI@60fps",
                    mount: "MFT Mount",
                    dynamicRange: "13 stops",
                },
            },
            {
                name: "BLACKMAGIC Micro 4K",
                brand: "Blackmagic",
                specs: "Compact 4K Camera",
                image: BMMicro,
                details: {
                    sensor: "Micro Four Thirds",
                    resolution: "4K UHD",
                    mount: "MFT Mount",
                    connectivity: "HDMI/SDI",
                },
            },
            {
                name: "CANON \nR5",
                brand: "Canon",
                specs: "Mirrorless Camera",
                image: CanonR5,
                details: {
                    sensor: "Full Frame CMOS",
                    resolution: "8K@30fps, 4K@120fps",
                    mount: "RF Mount",
                    stabilization: "IBIS",
                },
            },
            {
                name: "CANON 5D Mark IV",
                brand: "Canon",
                specs: "Full-Frame DSLR",
                image: Canon5D,
                details: {
                    sensor: "Full Frame CMOS",
                    resolution: "4K@30fps",
                    mount: "EF Mount",
                    autofocus: "Dual Pixel AF",
                },
            },
        ],

        lenses: [
            {
                name: "24-105 RF",
                brand: "Canon",
                specs: "Standard zoom lens",
                image: Canon24105,
                details: {
                    focalLength: "24-105mm",
                    aperture: "f/4L",
                    stabilization: "Yes",
                    weight: "700g",
                },
            },
            {
                name: "24-70 EF",
                brand: "Sigma",
                specs: "Zoom lens",
                image: Sigma2470,
                details: {
                    focalLength: "24-70mm",
                    aperture: "f/2.8",
                    stabilization: "No",
                    weight: "900g",
                },
            },
            {
                name: "10-35 EF",
                brand: "Sigma",
                image: Sigma1035,
                specs: "Ultra-wide zoom",
                details: {
                    focalLength: "10-35mm",
                    aperture: "f/2.8",
                    stabilization: "No",
                    weight: "850g",
                },
            },
            {
                name: "50-100 EF",
                brand: "Sigma",
                specs: "Telephoto zoom",
                image: Sigma50100,
                details: {
                    focalLength: "50-100mm",
                    aperture: "f/1.8",
                    stabilization: "No",
                    weight: "1.5kg",
                },
            },
            {
                name: "18-35 EF",
                brand: "Sigma",
                specs: "Standard zoom lens",
                image: Sigma1835,
                details: {
                    focalLength: "18-35mm",
                    aperture: "f/1.8",
                    stabilization: "No",
                    weight: "810g",
                },
            },
            {
                name: "150-300 EF",
                brand: "Sigma",
                specs: "Super-telephoto zoom",
                image: Sigma150300,
                details: {
                    focalLength: "150-300mm",
                    aperture: "f/5.6-6.3",
                    stabilization: "Yes",
                    weight: "2.4kg",
                },
            },
            {
                name: "14 EF",
                brand: "Sigma",
                image: Sigma14,
                specs: "Prime wide-angle lens",
                details: {
                    focalLength: "14mm",
                    aperture: "f/1.8",
                    stabilization: "No",
                    weight: "1.2kg",
                },
            },
            {
                name: "70-200 EF",
                brand: "Canon",
                specs: "Telephoto zoom",
                image: Canon70200,
                details: {
                    focalLength: "70-200mm",
                    aperture: "f/2.8",
                    stabilization: "Yes",
                    weight: "1.4kg",
                },
            },
        ],
        accessories: [
            {
                name: "ATEM Television Studio 4K8",
                brand: "Blackmagic",
                specs: "Live production switcher",
                image: atem,
                details: {
                    resolution: "4K/HD",
                    inputs: "8 x 12G-SDI",
                    ports: "4x HDMI, 2x USB",
                    features: "MultiView, Streaming",
                },
            },
            {
                name: 'Bolt 6 LT HDMI 750 TX/RX Set',
                brand: 'Teradek',
                specs: 'Wireless video',
                image: teradek,
                details: {
                    range: '750ft',
                    latency: '0ms',
                    resolution: '4K60 HDR',
                    encryption: 'AES 256-bit'
                }
            },
            {
                name: "HyperDeck Studio 4K Pro",
                brand: "Blackmagic",
                specs: "SSD Recorder",
                image: hyperDeck,
                details: {
                    resolution: "4K HDR",
                    storage: "SSD/SD Cards",
                    inputs: "12G-SDI, HDMI",
                },
            },
            {
                name: "Studio Converter",
                brand: "Blackmagic",
                specs: "Camera Control",
                image: studioConverter,
                details: {
                    connections: "SDI, Ethernet",
                    control: "Tally, Talkback",
                },
            },
            {
                name: "Hollyland C1 Pro",
                brand: "Hollyland",
                specs: "Wireless Intercom",
                image: hollyland,
                details: {
                    range: "1000ft",
                    channels: "Full-duplex",
                    battery: "Lithium 12hrs",
                },
            },
            {
                name: "DJI RS 3 Pro",
                brand: "DJI",
                specs: "Camera Gimbal",
                image: gimbal,
                details: {
                    payload: "4.5kg",
                    battery: "12 hours",
                    stabilization: "3-Axis",
                },
            },
            {
                name: "CRANE CAMERA JIB 8m",
                brand: "Unknown",
                image: craneCamera,
                specs: "Camera Jib",
                details: {
                    length: "8 meters",
                    material: "Aluminum",
                },
            },


            // ... All other accessories
        ]
    };

    const ToolCard = ({ tool }) => (
        
        <div className="tool-card" onClick={() => setSelectedTool(tool)}>
            <div className="image-container">
                {tool.image ? (
                    <img src={tool.image} alt={tool.name} className="tool-image" />
                ) : (
                    <div className="image-placeholder">
                        {tool.category === 'lenses' ? <FiZoomIn /> : <FiCamera />}
                    </div>
                )}
                <div className="brand-badge">{tool.brand}</div>
            </div>
            <div className="tool-info">
                <h3>{tool.name}</h3>
                <p>{tool.specs}</p>
            </div>
        </div>
    );

    return (
        <div id= "Tools2">
        <section className="tools-showcase">
            <motion.h2
                className="text-center mb-4 display-4 fw-bold"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Latest Technologies & Equipment
            </motion.h2>
            {Object.entries(categories).map(([category, tools]) => (

                <motion.div
                    key={category}
                    className="category-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 1.2 } } }}
                >
                    <h4 className="category-title">
                        {category === 'cameras' && <FiCamera />}
                        {category === 'lenses' && <FiZoomIn />}
                        {category === 'accessories' && <FiFilm />}
                        {category.toUpperCase()}
                    </h4>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        navigation={{
                            prevEl: `.swiper-button-prev-${category}`,
                            nextEl: `.swiper-button-next-${category}`,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1224: { slidesPerView: 4 },
                            1980: { slidesPerView: 5 }
                        }}
                    >
                        {tools.map((tool, index) => (
                            <SwiperSlide key={index} style={{ width: '300px' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <ToolCard tool={{ ...tool, category }} />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                        <div className={`swiper-button-prev swiper-button-prev-${category}`}></div>
                        <div className={`swiper-button-next swiper-button-next-${category}`}></div>
                    </Swiper>
                </motion.div>
            ))}

            {selectedTool && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <motion.div
                            className="modal-content"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button className="close-button" onClick={() => setSelectedTool(null)}>
                                &times;
                            </button>
                            <h2>{selectedTool.brand} {selectedTool.name}</h2>

                            <div className="modal-image-container">
                                {selectedTool.image ? (
                                    <img
                                        src={selectedTool.image}
                                        alt={selectedTool.name}
                                        className="modal-image"
                                    />
                                ) : (
                                    <div className="modal-image-placeholder">
                                        <FiCamera className="modal-placeholder-icon" />
                                    </div>
                                )}
                            </div>

                            <div className="modal-specs">
                                <p><strong>Category:</strong> {selectedTool.category}</p>
                                <ul>
                                    {Object.entries(selectedTool.details).map(([key, value]) => (
                                        <li key={key}>
                                            <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
        </div>
    );
};

export default Tools2;