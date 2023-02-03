import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/app-context";
import appService from "../service/service";

export default function UserCartPage() {
    const { userData, userCart, setUserCart, refresh } = useContext(AppContext);
    const navigate = useNavigate();
    const token = { headers: { Authorization: `Bearer ${userData.token}` } }; //mudar depois

    useEffect(() => {
        appService.getUserCart(token)
            .then((res) => {
                setUserCart(res.data);
            })
            .catch((res) => {
                alert(res.response.data.message)
            })
    }, [refresh, setUserCart]);

    return (
        <div>
            olá
        </div>
    )
}