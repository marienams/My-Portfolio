import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";

import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImage from '../assets/img/header-img.svg'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random(100) )
    const [isDeleting, setIsDeleting]  = useState(false)
    const toRotate = ["Unity Developer", "C# Developer", "XR Developer"];
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(()=> {
            tick();
        },delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">hi there, I am Mahima</span>
                        <h1>{'Hi, I am webcoded '}<span className="wrap">{text}</span></h1>
                        <p>I am a software developer interning at BMW, Munich. I
                            completed my Master's in Applied Computer Science and am on the 
                            lookout for a full-time work position.
                            
                            I also worked as a working student at Siemens, developing features for VR applications.
                            I enjoy learning new technoologies and frameworks and implementing them in porjects.
                            On my github I have numerous small projects.
                            I also enjoy working with digital and 3D art.
                        </p>
                        <button onClick={()=> console.log('connect')}>Lets's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}