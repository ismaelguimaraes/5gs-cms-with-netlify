import styled from 'styled-components';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from 'gatsby'

export const CardBlog = styled(Card)`
    border: 0;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.01);
            transition: all 0.4s ease;
        }
    }
`

export const CardImgBlog = styled(CardImg)`
    margin: 0;
    overflow: hidden;
    border-radius: 30px 30px 0 0;
`

export const CardBodyBlog = styled(CardBody)`
    background-color: #396A47;
    padding: 0.75rem;
    border-radius: 0 0 30px 30px;
`

export const CardTitleBlog = styled(CardTitle)`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    color: #FFFFFF;
`

export const CardTextBlog = styled(CardText)`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 18px;
`

export const LinkBlog = styled(Link)`
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    font-size: 16px;
    padding: 8px 16px;
    font-weight: 600;
    border: 1px solid #FFFFFF;
    border-radius: 8px;

    &:hover {
        text-decoration: none;
        color: #396A47;
        background-color: #FFFFFF;
        transition: all 0.4s ease;
    }
`