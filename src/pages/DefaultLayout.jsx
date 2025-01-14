import { HeaderComponent } from "../components/HeaderComponent";
import Alert from "../components/Alert";    // importo il messaggio di alert dal suo componente
import { FooterComponent } from "../components/FooterComponent";
import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <Alert/>
            <Outlet />
            <FooterComponent />
        </>
    );
}