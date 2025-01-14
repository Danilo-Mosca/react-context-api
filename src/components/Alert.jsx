import { useAlertContext } from "../contexts/AlertContext";     // importo l'hook personalizzato

export default function Alert() {
    // destrutturo l'hook personalizzato useAlertContext:
    const { alertData, setAlertData } = useAlertContext();
    // A sua volta destrutturo anche alertData perchè contiene l'oggetto: { type: "", message: "" }
    const { type, message } = alertData;

    if (!message) return null;
    
    /* Al click (onClick) sul pulsante laterale dell'alert setto per alertData un oggetto vuoto così da far scomparire l'alert: */
    return (
        <div className={`alert alert-${type} alert-dismissible`} role="alert">
            <div>{message}</div>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertData({ type: "", message: "" })}>
            </button>
        </div>
    );
}