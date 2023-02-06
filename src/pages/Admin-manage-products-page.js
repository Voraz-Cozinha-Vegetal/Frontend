import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AdminAllProducts from "../components/admin-components.js/Admin-Products";
import NavBarAdmin from "../components/commons/Admin-navbar-component";
import AppContext from "../contexts/app-context";
import appService from "../service/service";

export default function AdminProductPage() {
    const [allProducts, setAllProducts] = useState(null);
    const { config } = useContext(AppContext);
    console.log(config);

    useEffect(() => {
        appService.getProductsAdmin(config)
            .then((res) => {
                setAllProducts(res.data);
            })
            .catch((res) => {
                
            })
    }, [config])

    return (
        <>
            <NavBarAdmin/>
            <AdminTitle>Lista de produtos:</AdminTitle>
            {allProducts ? 
                <>
                    {allProducts.map((value, index) => (
                        <AdminAllProducts
                            key={index}
                            image={value.image}
                            name={value.name}
                            price={value.price}
                            stock={value.stock}
                            available={value.available}

                        />
                    ))}
                </>
                :
                <></>
            }
        </>
    )
}

const AdminTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
`;

