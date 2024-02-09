import React, { useState } from 'react';
import styled from 'styled-components';

const Hero = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <HeroContainer>
            <HeroBackground>
                {/* Your background image */}
            </HeroBackground>
            <HeroContent>
                <h1>Welcome to Our Website</h1>
                <p>Discover amazing features</p>
                <Button onClick={handleModalToggle}>Open Modal</Button>
                {modalOpen && (
                    <Modal>
                        <ModalContent>
                            <h2>This is a Modal</h2>
                            <p>Modal content goes here...</p>
                            <Button onClick={handleModalToggle}>Close Modal</Button>
                        </ModalContent>
                    </Modal>
                )}
            </HeroContent>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
    position: relative;
    height: 400px; /* Adjust height as needed */
    overflow: hidden;
`;

const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('path_to_your_background_image');
    background-size: cover;
    background-position: center;
    z-index: -1;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    text-align: center;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    z-index: 999;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

const Button = styled.button`
    background-color: #58CAD0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #0ef;
    }
`;

export default Hero;
