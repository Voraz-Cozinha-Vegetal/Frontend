import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/app-context";
import { setLocalStorageData } from "../utils/local-storage";

export default function PrivatePage({ children }) {
  const { userData, setUserData, config, setConfig } = useContext(AppContext);
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("Voraz"));

  useEffect(() => {
    if (!data) {
      navigate("/sign-in");
      
    } else if (!userData || !config) {
      setUserData(data);
      setConfig({ headers: { Authorization: `Bearer ${data.token}` } });
      setLocalStorageData(data);
    }
  }, [config, setConfig, setUserData, data, userData, navigate]);

  if (!userData || !config) {
    return <></>;
  }

  return <>{children}</>
}
