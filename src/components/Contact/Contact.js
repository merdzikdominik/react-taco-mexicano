import { useEffect } from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { 
    MainPageContainer, 
    H1, 
    ContactContainer, 
    ContactOptionContainer, 
    MobileIcon, 
    Text, 
    EmailIcon, 
    FacebookIcon, 
    InstagramIcon 
} from "./Contact.styles";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <MainPageContainer  initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <H1>Skontaktuj się z nami za pośrednictwem:</H1>
            <ContactContainer>
                <ContactOptionContainer>
                    <MobileIcon icon={faPhone}/>
                    <Text>32 285 84 44</Text>
                </ContactOptionContainer>
                <ContactOptionContainer>
                    <EmailIcon icon={faAt}/>
                    <Text>tacotg@interia.eu</Text>
                </ContactOptionContainer>
                <ContactOptionContainer>
                    <FacebookIcon icon={faFacebook} className='white-background'/>
                    <Text><a href='https://www.facebook.com/TGTaco'>Facebook</a></Text>
                </ContactOptionContainer>
                <ContactOptionContainer>
                    <InstagramIcon icon={faInstagram}/>
                    <Text><a href='https://www.instagram.com/taco_mexicano_tg/'>Instagram</a></Text>
                </ContactOptionContainer>
            </ContactContainer>
        </MainPageContainer>
    );
}