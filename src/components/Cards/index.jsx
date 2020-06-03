import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CardBlog, CardImgBlog, CardBodyBlog, CardTitleBlog, CardTextBlog, LinkBlog, CardFooterBlog } from './styled';

const CardNoticia = (props) => {
    return (
        <CardBlog>
            <CardImgBlog top width="100%" src={props.srcImagem} alt={props.title} />
            <CardBodyBlog>
                <CardTitleBlog>{props.title}</CardTitleBlog>
                <CardTextBlog>{props.resume}</CardTextBlog>
                <CardFooterBlog className="d-flex justify-content-center">
                    <LinkBlog to={props.src}>Leia mais+</LinkBlog>
                </CardFooterBlog>
            </CardBodyBlog>
        </CardBlog>
    )
}

export default CardNoticia;