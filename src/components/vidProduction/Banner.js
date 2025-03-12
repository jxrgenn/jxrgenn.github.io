import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/realistic-sheep.png";
import logo from "../../assets/img/black-sheep-blackbg.png";

export const Banner = () =>{

    const [loopNum, setLoopNum] = useState (0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["10+ years of Experience", "Latest Technologies", "Excellence; Professionalism"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 800;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])


    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length +1) 
    
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/1.3);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);   
        }
        else if (isDeleting && updatedText === ''){
            setLoopNum(loopNum+1);
            setDelta(300);
            setIsDeleting(false);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                <Col xs ={12} md={6} xl={5}>
                        <img src={logo} alt="Header Img" />
                    </Col>
                    <Col xs ={12} md={6} xl={7}>
                    <span className="tagline">Black Sheep Entertainment</span>
                    <h1><span className="wrap">{text}</span></h1>
                    <p>Welcome to BlackSheep Productions, your premier destination for top-tier production services in Tirana, Albania. With over a decade of expertise under our belt, we take pride in crafting captivating and innovative content that sets your project apart from the flock. Whether you're seeking film production, video editing, or creative consultation, our seasoned team of professionals is dedicated to bringing your vision to life with precision and flair. Join us in redefining the standards of excellence in the world of entertainment and media. Let's break boundaries together, because at BlackSheep, we don't follow the herd – we lead it.</p>
                    <button onClick={() => {
  const formPage = document.getElementById('FormPage'); // Assuming the FormPage component has this ID
  if (formPage) {
    formPage.scrollIntoView({ behavior: 'smooth' });
  }
}}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}