import { toast } from "sonner";

function Dashboard() {

    return (
        <>
            <div>
                je suis le dashboard
                <button onClick={() => {toast("je suis fort");}} >cc boss</button>
            </div>
        </>
    );
}

export default Dashboard