import styled from "styled-components";
import { NavBar } from "../components/commons/NavBar-component";
import banner from "../assets/banner.jpg";
import { useEffect, useState } from "react";
import appService from "../service/service";
import Products from "../components/home-components/Products";
import Footer from "../components/commons/Footer.-component";


export function HomePage () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        appService.getProducts()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((res) => {
                alert(res.message);
            })
    }, [])

    return (
        <div>
            <NavBar/>
            <Banner src={banner} alt="Banner"></Banner>
            <ProductsWrapper>
                <Slogan>Aproveite nossos produtos. Seja Voraz!</Slogan>
                <ProductsContainer>
                    {products.length ? products.map((value, index) => (
                        <Products 
                            key={index}
                            id={value.id}
                            name={value.name}
                            image={value.image}
                            price={(value.price/100).toFixed(2)}
                            stock={value.stock}
                        />
                    )) 
                    : 
                        <></> 
                    }
                </ProductsContainer>
            </ProductsWrapper>
            <Footer />
        </div>
    )
}

const Banner = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
`;

const ProductsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProductsContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

const Slogan = styled.div`
    font-size: 60px;
    font-weight: 700;
    margin: 60px 0px 60px 0px;
`