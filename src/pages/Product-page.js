import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { NavBar } from "../components/commons/NavBar-component";
import Product from "../components/product-page-components/Product";
import appService from "../service/service";

export default function ProductPage() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        appService.getProduct(productId)
        .then((res) => {
            setProduct(res.data);
        })
        .catch((res) => {
            alert(res.message);
        })
    }, [setProduct, productId]);

    

    return (
        <>
            <NavBar />
            <ProductWrapper>
                <ProductContainer>
                    {product ? 
                        <Product
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                            price={(product.price/100).toFixed(2)}
                        /> 
                        : 
                        <></>
                    }
                </ProductContainer>
            </ProductWrapper>
        </>
    )
}

const ProductWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

const ProductContainer = styled.div`
    width: 1110px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`