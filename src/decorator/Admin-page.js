import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage({ children }) {

  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("Voraz"));

  useEffect(() => {
    if (!data || data.email !== "andre10@teste.com") {
      navigate("/sign-in");
    }

  }, [data, navigate]);

  return <>{children}</>
}
