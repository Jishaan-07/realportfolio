import React from 'react';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip, Container, Row, Col } from 'react-bootstrap';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import reactbt from '../assets/reactbt.png';
import redux from '../assets/redux.png';
import angular from '../assets/angular.png';
import mui from '../assets/mui.png';
import firebase from '../assets/firebase.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';

const skills = [
    { src: html, name: 'HTML' },
    { src: css, name: 'CSS' },
    { src: javascript, name: 'JavaScript' },
    { src: react, name: 'React.js' },
    { src: node, name: 'Node.js' },
    { src: express, name: 'Express.js' },
    { src: angular, name: 'Angular' },
    { src: mongodb, name: 'MongoDB' },
    { src: github, name: 'GitHub' },
    { src: bootstrap, name: 'Bootstrap' },
    { src: tailwind, name: 'Tailwind' },
    { src: reactbt, name: 'React Bootstrap' },
    { src: mui, name: 'Material UI' },
    { src: firebase, name: 'Firebase' },
    { src: figma, name: 'Figma' },
    { src: redux, name: 'Redux' }
];

const Skills = () => {
    return (
        <Container className="text-center mt-5">
            <Row className="g-4 justify-content-center">
                {skills.map((skill, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
                        <OverlayTrigger placement="bottom" overlay={<Tooltip>{skill.name}</Tooltip>}>
                            <Image src={skill.src} width="60px" className="img-fluid" />
                        </OverlayTrigger>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Skills;
