import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Products ({ id, name, image, price }) {
    const navigate = useNavigate()

    return (
        <ProductWrapper onClick={() => navigate(`/product/${id}`)}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h2>R${price}</h2>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin-bottom: 30px;
    cursor: pointer;

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    }

    h1 {
        font-size: 25px;
        font-weight: 400;
        margin: 8px 0px 8px 0px;
    }

    h2 {
        font-size: 20px;
        font-weight: 400;
    }
`

