import {useState} from "react";
import contactImg from "../../assets/img/contact-img.svg"
import { Col, Row, Container } from "react-bootstrap";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

        const [formDetails, setFormDetails] = useState(formInitialDetails);
        const [buttonText, setButtonText] = useState('Send');
        const [status, setStatus] = useState ({});
        
        const onFormUpdate = (category, value) => {
            setFormDetails({
                ...formDetails,
                [category]: value
            })
        }

        const handleSubmit = async(e) => {
            e.preventDefault();
            setButtonText('Sending...');
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type":"Application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = response.json();
            setFormDetails((formInitialDetails));
            if (result.code === 200){
                setStatus({success:true, message:"Message sent successfully"});
            }
            else {
                setStatus({success:false, message:"Something went wrong, please try again letter"});
            }
        }

    return (
        <section className="contact" id="connect">
        <h2>Get in Touch</h2>
            <Container>
                <Row className="align-items-center">
                    <Col >
                        {/* <img src={contactImg} alt="Contact Us"/> */}
                        <p>
                            E-mail: blacksheep@gmail.com
                        </p>
                        <p>
                            Phone number: 00355 68 58 38 485
                        </p>
                    </Col>
                    
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="E-mail Address" onChange={(e)=> onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="number" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=> onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <textarea row="4" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)} />
                                <button type ="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}