import React from 'react';

import { BannerBlog, Overlay } from './styled';
import { Container } from 'reactstrap';

const Banner = () => {
    return (
        <BannerBlog className="mt-5">
            <Overlay />
            <Container>
                <h1>BLOG DA 5G SUSTENTÁVEL</h1>
                <p>Aqui você encontrará as notícias mais atualizadas sobre tecnologias sustentáveis</p>
            </Container>
        </BannerBlog>
    )
}

export default Banner;