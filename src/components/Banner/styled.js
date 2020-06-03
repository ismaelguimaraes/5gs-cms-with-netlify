import styled from 'styled-components';

import Banner from '../../images/banner.jpeg';

export const BannerBlog = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background-image: url(${Banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    width: 100%;
    height: 223px;

    h1 {
        font-family: 'Bebas Neue', sans-serif;
        letter-spacing: 2px;
        font-size: 38px;
        color: #FFFFFF;
        margin: 0;

        position: relative;
        z-index: 1;
    }

    p {
        font-family: 'Roboto', sans-serif;
        letter-spacing: 2px;
        font-size: 14px;
        color: #FFFFFF;
        margin: 0;

        position: relative;
        z-index: 1;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: rgb(68,170,95);
    background: linear-gradient(90deg, rgba(68,170,95,0.55) 0%, rgba(68,170,95,0.55) 100%);
`