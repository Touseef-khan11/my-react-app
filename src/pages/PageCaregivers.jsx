import CaregiversListing from "../components/CaregiversListing";


export default function PageCaregivers() {
    return (
        <>
            <section className="caregiver-hero d-flex align-items-center text-center text-white">
                <div className="container">
                    <h1 className="fw-bold mb-3">Discover your next caregiver job</h1>
                    <p className="caregiverstext mb-4">
                        Find the perfect match for your skills and schedule with families in your area.
                    </p>

                    <div className="search-bar mx-auto d-flex align-items-center shadow">
                        <div className="input-group flex-grow-1">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0"
                                placeholder="Search for..."
                            />
                        </div>

                        <div className="input-group flex-grow-1 border-start">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="bi bi-geo-alt"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0"
                                placeholder="Zip Code..."
                            />
                        </div>

                        <button className="btn btn-success px-4 search-btn">Search Jobs</button>
                    </div>
                </div>
            </section>


            <CaregiversListing />

        </>
    );
}