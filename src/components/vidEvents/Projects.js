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
    publicId: "IMG_9772_l7vwtl",
    key: "key1"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "5/4",
    publicId: "pexels-kyleloftusstudios-2510428_fsegik",
    key: "key2"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "5/4",
    publicId: "pexels-reneterp-3990404_v2hnyu",
    key: "key3"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "pexels-ron-lach-8088374_kxtobs",
    key: "key4"
  },
  {
    alt: "Wedding ceremony",
    aspectRatio: "16/9",
    publicId: "IMG_9783_ag78ac",
    key: "key5"
  },

  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "11/9",
    publicId: "pexels-kyleloftusstudios-2510430_bckvc0",
    key: "key6"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "pexels-cottonbro-4966173_d9nhk5",
    key: "key7"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "IMG_9741_k17fa8",
    key: "key8"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "pexels-cottonbro-7172488_bohibn",
    key: "key9"
  },
  {
    alt: "Bride portrait",
    aspectRatio: "1/1",
    publicId: "pexels-kyleloftusstudios-30773261_whdvbz",
    key: "key10"
  },
  {
    alt: "Wedding couple in vintage car",
    aspectRatio: "4/5",
    publicId: "pexels-bertellifotografia-2608519_lmakfe",
    key: "key11"
  },
  {
    alt: "Wedding preparation",
    aspectRatio: "3/4",
    publicId: "pexels-karlsolano-3648062_ndaxpa",
    key: "key12"
  },
  {
    alt: "Wedding ceremony",
    aspectRatio: "16/9",
    publicId: "pexels-tima-miroshnichenko-7047203_j6celu",
    key: "key13"
  }
];

export const Projects = () => {
  // Control pagination
  const ITEMS_PER_PAGE = 6;
  const ITEMS_ON_LOAD_MORE = 6;
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
    <div id="projectsEvents">
    <section id="projects" className="py-5" style={{ padding: '8rem 0' }}>
      <h2
        className="text-center mb-3"
        style={{
          fontStyle: "italic",
          fontSize: "3.4rem",
          fontFamily: "Cormorant Garamond, serif",
          letterSpacing: "0.05rem",
          paddingBottom: "30px",
        }}
      >
        Behind the Scenes
      </h2>      <div className="mx-auto masonry-grid" style={{ width: '80%' }}>
        {projects.slice(0, visibleItems).map((project, index) => {
          // If it’s an image:
          const cldMedia = getCloudinaryMedia(project.publicId, 800, 800);
          const { alt, aspectRatio } = project;

          return (
            <motion.div
              key={project.key}
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

                {project.type === "video" && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="bg-opacity-30 rounded-circle backdrop-blur-sm p-3">
                      <Play
                        className="text-white"
                        style={{ width: '2rem', height: '2rem' }}
                      />
                    </div>
                  </div>
                )}
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