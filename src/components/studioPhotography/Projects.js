import React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";


const cld = new Cloudinary({
  cloud: {
    cloudName: "dpzdevi26" // <--- replace with your own
  }
});
const projectsData = [
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "pexels-freddy-rezvanian-2046158892-30861348_tot4fy",
    key: "id1"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "5/4",
    publicId: "pexels-ekoagalarov-29669207_dlu15o",
    key: "id2"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "8/5",
    publicId: "studio18_zsgyec",
    key: "id3"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "pexels-hamed-farahpour-746811819-29565388_tknm3s",
    key: "id4"
  },

  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "11/9",
    publicId: "studio1_y4bpaf",
    key: "id5"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "studio3_josa3q",
    key: "id6"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "pexels-ulasch-29557902_ux9ypx",
    key: "id7"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "studio10_ol35rv",
    key: "id8"
  },
  {
    alt: "Bride portrait",
    aspectRatio: "1/1",
    publicId: "studio4_htnym5",
    key: "id9"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "pexels-hkn-clk-2148641156-30910157_a5mrgm",
    key: "id10"
  },
  {
    alt: "Wedding ceremony",
    aspectRatio: "16/9",
    publicId: "studio5_zhntr4",
    key: "id11"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "pexels-itslauravillela-30895925_xvd9ui",
    key: "id12"
  },
  {
    alt: "Wedding ceremony",
    aspectRatio: "16/9",
    publicId: "pexels-2147499152-29632557_uqmy6l",
    key: "id13"
  },
  {
    alt: "Wedding ceremony",
    aspectRatio: "16/9",
    publicId: "studio5_zhntr4",
    key: "id14"
  },

  {
    alt: "Wedding details",
    aspectRatio: "4/5",
    publicId: "studio6_hurnwb",
    key: "id15"
  },
  {
    alt: "Wedding details",
    aspectRatio: "4/5",
    publicId: "pexels-anastasia-ilina-makarova-140436704-11142020_k142vj",
    key: "id16"
  },
  {
    alt: "Wedding rings",
    aspectRatio: "3/2",
    publicId: "studio7_nc0nk3",
    key: "id17"
  },
  {
    alt: "Wedding dance",
    aspectRatio: "9/16",
    publicId: "studio2_aptfmc",
    key: "id18"
  },
  {
    alt: "First dance",
    aspectRatio: "16/9",
    publicId: "studio8_tjxszz",
    key: "id19"
  },
  {
    alt: "Wedding venue",
    aspectRatio: "3/4",
    publicId: "studio9_czpwzr",
    key: "id20"
  },
  {
    alt: "Wedding venue",
    aspectRatio: "3/4",
    publicId: "pexels-itslauravillela-30895967_yfn5yr",
    key: "id21"
  },

  {
    alt: "Wedding dance",
    aspectRatio: "9/9",
    publicId: "studio11_vk6vh4",
    key: "id22"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "studio12_o7ouib",
    key: "id23"
  },
  {
    alt: "Wedding dance",
    aspectRatio: "9/9",
    publicId: "pexels-itslauravillela-30895935_ubzgi2",
    key: "id24"
  },
  {
    alt: "Bride portrait",
    aspectRatio: "1/1",
    publicId: "studio13_nf6aul",
    key: "id25"
  },
  {
    alt: "Wedding details",
    aspectRatio: "4/5",
    publicId: "studio15_tyvirg",
    key: "id26"
  },
  {
    alt: "Wedding details",
    aspectRatio: "4/5",
    publicId: "pexels-itslauravillela-30895943_q7itv1",
    key: "id27"
  },
  {
    alt: "Wedding rings",
    aspectRatio: "3/2",
    publicId: "studio16_mnv8ja",
    key: "id28"
  },
  {
    alt: "First dance",
    aspectRatio: "16/9",
    publicId: "studio17_b6s6zz",
    key: "id29"
  },
  {
    alt: "Wedding dance",
    aspectRatio: "16/9",
    publicId: "studio19_fcf1ga",
    key: "id30"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "studio20_wswign",
    key: "id31"
  },
  {
    alt: "Wedding dance",
    aspectRatio: "16/9",
    publicId: "pexels-arshamhaghani-3445218_hvou0d",
    key: "id32"
  },
  {
    alt: "Bride portrait",
    aspectRatio: "1/1",
    publicId: "studio21_zbl2gu",
    key: "id33"
  },
  {
    alt: "Wedding ceremony",
    aspectRatio: "16/9",
    publicId: "studio22_vrkmez",
    key: "ikey34"
  }
];

export const Projects = () => {
  // Control pagination
  const ITEMS_PER_PAGE = 8;
  const ITEMS_ON_LOAD_MORE = 8;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  // We track loaded = false until the image fully loads.
  // This is optional but can help if you want a blur-up or spinner approach.
  const [projects, setProjects] = useState(() =>
    projectsData.map((p) => ({ ...p, loaded: false }))
  );

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + ITEMS_ON_LOAD_MORE, projectsData.length));
  };

  const handleImageLoad = (id) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, loaded: true } : project
      )
    );
  };

  // For each project, create a Cloudinary image or video transformation
  // We’ll pass it into <AdvancedImage> or a <AdvancedVideo> (if using @cloudinary/react for video).
  const getCloudinaryMedia = (publicId, width = 600, height = 600) => {
    const cldMedia = cld.image(publicId); // or cld.video(publicId) for videos

    // Example transformations:
    cldMedia
      .format("auto")      // let Cloudinary pick the best format
      .quality("auto")     // auto-quality
      .resize(
        auto()
          .gravity(autoGravity())
          .width(width)
          .height(height)
      );
    return cldMedia;
  };

  return (
    <div id="projectsStudio">
    <section id="projects" className="py-5" style={{ padding: '8rem 0' }}>
      <h2 className="text-center mb-5">Our Latest Projects</h2>
      <div className="mx-auto masonry-grid" style={{ width: '80%' }}>
        {projects.slice(0, visibleItems).map((project, index) => {
          // If it’s an image:
          const cldMedia = getCloudinaryMedia(project.publicId, 800, 800);
          const { alt, aspectRatio } = project;

          return (
            
            <motion.div
              key={project.id}
              className="masonry-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.min(index * 0.1, 0.3),
                type: "tween",
                duration: 0.4
              }}
            >
              <div className="position-relative overflow-hidden cursor-pointer">
                {/* 
                  4. Use <AdvancedImage> for images (and <AdvancedVideo> for videos).
                     Props:
                      - cldImg={cldMedia} is the main requirement
                      - loading="lazy" triggers the browser’s lazy loading
                      - If you want to replicate the blur until onLoad, 
                        you can use onLoad={...} but might need some custom styling logic.
                */}
                <AdvancedImage
                  cldImg={cldMedia}
                  loading="lazy"
                  alt={alt}
                  onLoad={() => handleImageLoad(project.id)}
                  className={`img-fluid ${project.loaded ? 'loaded' : 'loading'}`}
                  style={{
                    aspectRatio,
                    objectFit: 'cover',
                    width: '100%',
                    // Optional: if you want a blur while loading:
                    filter: project.loaded ? 'none' : 'blur(20px)',
                    transition: 'filter 0.5s ease'
                  }}
                />


                <div className="position-absolute top-0 start-0 w-100 h-100 bg-opacity-0 hover-opacity-30 transition-opacity-300" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {visibleItems < projectsData.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="d-flex justify-content-center mt-5"
          style={{ marginTop: '5rem !important' }}
        >
          <button
            onClick={handleLoadMore}
            className="btn btn-light px-5 py-3 rounded-pill fs-5 fw-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              letterSpacing: '0.1em'
            }}
          >
            View More Projects
          </button>
        </motion.div>
      )}
    </section>
    </div>
  );
};

export default Projects;