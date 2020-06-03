import styled from 'styled-components';
import { Container } from 'reactstrap';

export const BannerBlog = styled.div`
    background-image: url('${props => props.src}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 500px;
    width: 100%;
`

export const ContainerBlog = styled(Container)`
    h1 {
        font-family: 'Bebas Neue', sans-serif;
        margin-bottom: 16px;
        margin-top: 32px;
        font-size: 62px;
        color: #00b765;
    }

    h2 {
        font-family: 'Bebas Neue', sans-serif;
        margin-bottom: 16px;
        margin-top: 32px;
        color: #00b765;
        font-size: 42px;
    }

    h3 {
        font-family: 'Bebas Neue', sans-serif;
        margin-bottom: 16px;
        margin-top: 32px;
        color: #00b765;
        font-size: 38px;
    }

    img {
        margin: 16px 0;
    }

    b {
        color: #00b765;
    }

    p {
        font-family: 'Roboto', sans-serif;
        color: #444444;
        line-height: 24px;
        font-size: 18px;
    }
`;