import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF, FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => {

    const handleLinks = (url) => {
        window.location = `https://${url}/saifmohamedsv`
    }

    return (
        <div className="app__social">
            <div onClick={() => {
                handleLinks('linkedin.com/in/')
            }}>
                <FaLinkedin/>
            </div>
            <div onClick={() => {
                handleLinks('facebook.com')
            }}>
                <FaFacebookF/>
            </div>
            <div onClick={() => {
                handleLinks('instagram.com')
            }}>
                <BsInstagram/>
            </div>
        </div>
    )
};

export default SocialMedia;
