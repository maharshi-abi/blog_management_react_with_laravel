import React from 'react';
import BlogGrid from '../component/BlogGrid';
import Slider from '../component/Slider';

export default function HomePage(props) {
    return (
        <React.Fragment>
           <Slider></Slider>
           <BlogGrid></BlogGrid>
        </React.Fragment>
    );
}