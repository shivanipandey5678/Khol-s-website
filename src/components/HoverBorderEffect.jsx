import React from 'react';
import './HoverBorderEffect.css';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

const HoverBorderEffect = ({ text, bg, colorborder, to }) => {
    return (
        <NavLink to={to} className="border-effect-link">
            <div className="border-effect" style={{ backgroundColor: bg, color:colorborder ,display:'Flex', justifyContent:'center',alignItems:'center',fontSize:'15px',padding:"2px",textAlign:"center"}}>
               <b>{text}</b>
            </div>
        </NavLink>
    );
};

export default HoverBorderEffect;
