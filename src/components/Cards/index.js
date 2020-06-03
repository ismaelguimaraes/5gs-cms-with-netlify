import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby'

import { CardText, CardTitle } from 'reactstrap';
import { CardBlog, CardImgBlog, CardBodyBlog } from './styled';

const CardNoticia = (props) => {
    return (
        <CardBlog>
            <CardImgBlog top width="100%" src={props.srcImagem} alt={props.title} />
            <CardBodyBlog>
                <CardTitle>{props.title}</CardTitle>
                <CardText>Some quick example text to build on the card title.</CardText>
                <Link to={props.src}>Button</Link>
            </CardBodyBlog>
        </CardBlog>
    )
}

export default CardNoticia;