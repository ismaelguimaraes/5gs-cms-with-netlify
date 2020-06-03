import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CardBlog, CardImgBlog, CardBodyBlog, CardTitleBlog, CardTextBlog, LinkBlog } from './styled';

const CardNoticia = (props) => {
    return (
        <CardBlog>
            <CardImgBlog top width="100%" src={props.srcImagem} alt={props.title} />
            <CardBodyBlog>
                <CardTitleBlog>{props.title}</CardTitleBlog>
                <CardTextBlog>{props.resume}</CardTextBlog>
                <div className="d-flex justify-content-center mt-4">
                    <LinkBlog to={props.src}>Leia mais+</LinkBlog>
                </div>
            </CardBodyBlog>
        </CardBlog>
    )
}

export default CardNoticia;