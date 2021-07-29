import { Link } from "react-router-dom";

function Welcome() {
    return (
        <>
            <div className="App">
                <div className="d-flex justify-content-center my-3">
                    <img src={"./merciyanis.png"} className="logo rounded"></img>
                </div>
                <h5 className="text-center my-5 display-6">Wanna listen to the best music ? Welcome to MerciYanis Music Store !</h5>

                <div className="d-flex justify-content-evenly">
                    <Link className="btn btn-lg text-white fw-bold" to="/albums">Purchase an album</Link>
                    <button type="button" class="btn btn-lg text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Credits
                    </button>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Credits</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            Realised by Stéphanie Mariani
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn text-white fw-bold" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;