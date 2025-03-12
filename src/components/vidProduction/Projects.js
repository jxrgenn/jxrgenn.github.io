import { useState } from "react";
import { Row, Col, Container, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ReactPlayer from "react-player";
import { Modal } from "react-bootstrap";


import projImg1 from '../../assets/img/projImg1.jpg'
import projImg2 from '../../assets/img/projImg2.jpg'
import projImg3 from '../../assets/img/projImg3.jpg'
import projImg4 from '../../assets/img/projImg4.jpg'
import projImg5 from '../../assets/img/projImg5.jpg'
import projImg6 from '../../assets/img/projImg6.jpg'


import aibaLogo from '../../assets/img/logo_aiba.jpg'
import sigmaLogo from '../../assets/img/logo_sigma.jpg'
import gjiroFarmaLogo from '../../assets/img/logo_gjirofarm.jpg'
import iuteCreditLogo from '../../assets/img/logo_iutecredit.jpg'
import societteGeneraleLogo from '../../assets/img/logo_societtegenerale.svg'
import qtuLogo from '../../assets/img/logo_qtu.jpg'
import pierreCardinLogo from '../../assets/img/logo_pierrecardin.jpg'
import narLogo from '../../assets/img/logo_nar.jpg'
import expoCityLogo from '../../assets/img/logo_expocity.png'
import albTelecomLogo from '../../assets/img/logo_albtelecom.png'
import albaElettricaLogo from '../../assets/img/logo_albaelettrica.png'
import tegLogo from '../../assets/img/logo_teg.jpg'
import telekomLogo from '../../assets/img/logo_telekom.jpg'
import birraKaonLogo from '../../assets/img/logo_kaon.png'
import intersigLogo from '../../assets/img/logo_intersig.jpg'
import pipiDhePopi from '../../assets/img/pipidhepopi.jpg'


import colorSharp2 from '../../assets/img/color-sharp2.png'
import React from 'react';

export const Projects = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const handleShowVideo = (url) => {
        setVideoUrl(url);
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
        setVideoUrl("");
    };

    const musicVideos = [
        {
            title: "Finem-Anakonda",
            description: "Music video",
            imgUrl: projImg1,
            linkUrl: "https://www.youtube.com/watch?v=anv69HLKsZA&ab_channel=FINEM",
        },
        {
            title: "Finem-Gasolina",
            description: "Music Video",
            imgUrl: projImg2,
            linkUrl: "https://www.youtube.com/watch?v=i_kpGaEP2wk&ab_channel=FINEM"
        },
        {
            title: "Finem-Meteor",
            description: "Music video",
            imgUrl: projImg3,
            linkUrl: "https://www.youtube.com/watch?v=rzmwyGbFyuI&ab_channel=FINEM"
        },
        {
            title: "Louis X & Arli ft.Najra Qato-Street Spirit",
            description: "Music Video",
            imgUrl: projImg4,
            linkUrl: "https://www.youtube.com/watch?v=kimfu0Tg8Fk&ab_channel=Arli"
        },
        {
            title: "Hellbanianz-Hood Life 3",
            description: "Music video",
            imgUrl: projImg5,
            linkUrl: "https://www.youtube.com/watch?v=_DH4WgY8lus&ab_channel=HELLBANIANZ"
        },
        {
            title: "Hellbanianz x Azet-Camorra",
            description: "Music video",
            imgUrl: projImg6,
            linkUrl: "https://www.youtube.com/watch?v=PcxN5y-NbGo&ab_channel=HELLBANIANZ"
        },
    ];

    const reklama = [
        {
            title: "TEG",
            description: "Commercial",
            imgUrl: tegLogo,
            linkUrl: "https://vimeo.com/146761680"
        },
        {
            title: "QTU",
            description: "Commercial",
            imgUrl: qtuLogo,
            linkUrl: "https://vimeo.com/151515914"
        },
        {
            title: "Telekom",
            description: "Commercial",
            imgUrl: telekomLogo,
            linkUrl: "https://www.instagram.com/tv/CXiXp_YqnUp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            title: "Veza Aiba",
            description: "Commercial",
            imgUrl: aibaLogo,
            linkUrl: "https://www.instagram.com/reel/C5OeIgjNVL9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            title: "Pierre Cardin",
            description: "Commercial",
            imgUrl: pierreCardinLogo,
            linkUrl: "https://vimeo.com/199638112"
        },
        {
            title: "Sigma",
            description: "Commercial",
            imgUrl: sigmaLogo,
            linkUrl: "https://www.instagram.com/reel/C45SwpGNgZx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            title: "ALBTelecom",
            description: "Commercial",
            imgUrl: albTelecomLogo,
            linkUrl: "https://vimeo.com/168003957"
        },
        {
            title: "GjiroFarm",
            description: "Commercial",
            imgUrl: gjiroFarmaLogo,
            linkUrl: "https://www.instagram.com/reel/CyQUR7kNjsX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            title: "IuteCredit",
            description: "Commercial",
            imgUrl: iuteCreditLogo,
            linkUrl: "https://www.instagram.com/reel/Ch-nMp4gHm8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            title: "Societte Generale",
            description: "Commercial",
            imgUrl: societteGeneraleLogo,
            linkUrl: "https://vimeo.com/168003277"
        },
        {
            title: "NAR Mobile",
            description: "Commercial",
            imgUrl: narLogo,
            linkUrl: "https://vimeo.com/125256647"
        },
        {
            title: "Pipi dhe Popi",
            description: "TV Show",
            imgUrl: pipiDhePopi,
            linkUrl: "https://www.youtube.com/watch?v=Ucvxv6rRwZE&list=PLM8BAxfZddjyvB4pvpS-r7qpQQxP-_sYc"
        },
        {
            title: "Expo City",
            description: "Commercial",
            imgUrl: expoCityLogo,
            linkUrl: "https://vimeo.com/146762817"
        },
        {
            title: "Intersig",
            description: "Commercial",
            imgUrl: intersigLogo,
            linkUrl: "https://vimeo.com/199638504"
        },

        {
            title: "AlbaElettrica",
            description: "Commercial",
            imgUrl: albaElettricaLogo,
            linkUrl: "https://vimeo.com/199637971"
        },
        {
            title: "Birra Kaon",
            description: "Commercial",
            imgUrl: birraKaonLogo,
            linkUrl: "https://www.instagram.com/tv/CXTYRZ9KzvJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
    ];

    const [reklamaPage, setReklamaPage] = useState(1);
    const reklamaPerPage = 8;
    const totalReklamaPages = Math.ceil(reklama.length / reklamaPerPage);

    const handleReklamaPageChange = (pageNumber) => {
        setReklamaPage(pageNumber);
    };

    const indexOfLastReklama = reklamaPage * reklamaPerPage;
    const indexOfFirstReklama = indexOfLastReklama - reklamaPerPage;
    const currentReklama = reklama.slice(indexOfFirstReklama, indexOfLastReklama);

    return (
        <div id= "Projects">
        <section className="projects" id="projects">
            <Container>
                <Row  className="justify-content-center">
                    <Col>
                        <h2>Projects</h2>
                        <p>Check out our projects here</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Music Videos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Commercials
                                    </Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                            <Nav.Link eventKey="third">
                                Tab Three
                            </Nav.Link>
                        </Nav.Item> */}
                            </Nav>


                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="music-video">
                                    <div className="project-card-container">
                                        {
                                            musicVideos.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        // href={project.linkUrl}
                                                        key={index}
                                                        {...project}
                                                        onClick={() => handleShowVideo(project.linkUrl)}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="commercials">
                                    <div className="project-card-container">
                                        {currentReklama.length > 0 ? (
                                            <>
                                                {currentReklama.map((project, index) => (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        onClick={() => handleShowVideo(project.linkUrl)}
                                                    />
                                                ))}
                                                <hr />
                                               
                                            </>
                                        ) : (
                                            <p>No reklama items found.</p>
                                        )}
                                    </div>
                                    <div className="pagination-controls">
                                                    {Array.from({ length: totalReklamaPages }, (_, i) => i + 1).map(
                                                        (pageNumber) => (
                                                            <button
                                                                type="button"
                                                                key={pageNumber}
                                                                onClick={() => handleReklamaPageChange(pageNumber)}
                                                                disabled={pageNumber === reklamaPage}
                                                            >
                                                                {pageNumber}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

<Modal
    show={showVideo}
    onHide={handleCloseVideo}
    centered
    backdropClassName="video-backdrop"
    contentClassName="video-modal-content"
    dialogClassName="video-modal-dialog"
    animation={false}
    enforceFocus={false}
    style={{ maxWidth: 'none' }} // Add this
>
    <div className="video-wrapper">
        <ReactPlayer
            url={videoUrl}
            controls
            width="80vw" // Fixed typo from "10ovw"
            height="30.25vw" // 16:9 aspect ratio
            style={{
                position: 'fixed',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)'
            }}
            config={{
                vimeo: { playerOptions: { autoplay: 1, fs: 1 } },
                youtube: { playerVars: { autoplay: 1, fs: 1 } }
            }}
        />
        
    </div>
</Modal>




        </section>
        </div>
    )
}