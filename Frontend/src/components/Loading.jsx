import Swal from "sweetalert2";

function Loading() {

    return (

        <div className="text-center mt-5">

            <div
                className="spinner-border text-primary"
                role="status"
            >
            </div>

            <p className="mt-3">
                Loading...
            </p>

        </div>

    );

}

export default Loading;