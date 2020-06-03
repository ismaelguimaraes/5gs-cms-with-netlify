import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CardBlog, CardImgBlog, CardBodyBlog, CardTitleBlog, CardTextBlog, LinkBlog } from './styled';

const CardNoticia = (props) => {
    return (
        <CardBlog>
            <CardImgBlog top width="100%" src={props.srcImagem} alt={props.title} />
            <CardBodyBlog>
                <CardTitleBlog>{props.title}</CardTitleBlog>
                <CardTextBlog>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</CardTextBlog>
                <div className="d-flex justify-content-center">
                    <LinkBlog to={props.src}>Leia mais+</LinkBlog>
                </div>
            </CardBodyBlog>
        </CardBlog>
    )
}

export default CardNoticia;