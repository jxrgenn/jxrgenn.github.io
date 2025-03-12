import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import { motion } from 'framer-motion';

const DetailsBarWrapper = styled(motion.div)`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled(motion.p)`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled(motion.p)`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const BigCircle = styled(motion.div)`
  height: 50px;
  margin-top: 30px;
  width: 50px;
  background-color: rgb(100, 21, 173);
  border-radius: 100%;
  z-index: 22;
  margin-left: 10px;
`;

const SmallCircle = styled(motion.div)`
  position: absolute;
  margin-left: 10px;
  background-color: rgb(252, 113, 137);
  border-radius: 100%;
  height: 30px;
  width: 30px;
`;

const ContactsWrapper = styled(motion.a)`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled(motion.a)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(252, 113, 137);
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <TextWrapper>
        <TextOne
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Information
        </TextOne>
        <TextTwo
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fill up the form and our team will get back to you within 24 hours
        </TextTwo>
      </TextWrapper>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <ContactsWrapper
          href="tel:+233543201893"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon.Phone size={15} color="rgb(252, 113, 137)" />
          <ContactText>+355 68 58 38 485</ContactText>
        </ContactsWrapper>

        <ContactsWrapper
          href="mailto:aljay3334@gmail.com"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Icon.Mail size={15} color="rgb(252, 113, 137)" />
          <ContactText>blacksheep@gmail.com</ContactText>
        </ContactsWrapper>
      </motion.div>

      <motion.div>
        <BigCircle
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <SmallCircle
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </motion.div>

      <SocialsWrapper>
        <SocialIconWrapper
          href="https://www.facebook.com/black.sheep.al/"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Icon.Facebook color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper
          href="https://www.instagram.com/black_sheep.al/"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Icon.Instagram color="#fff" size={20} />
        </SocialIconWrapper>
      </SocialsWrapper>
    </DetailsBarWrapper>
  );
};

export default DetailsBar;
