import React from "react";
import ChildImg from "../assets/images/child.png";
import SeniorImg from "../assets/images/senior.png";
import AdultImg from "../assets/images/adult.png";
import HouseImg from "../assets/images/housekeeping.png";
import PetImg from "../assets/images/petcare.png";
import TutoringImg from "../assets/images/tutoring.png";




export default function CareSection() {
    const cards = [
        {
            img: ChildImg, // <-- FIXED
            title: "Child care",
            desc: "Babysitters, nannies, and after-school care",
        },
        {
            img: SeniorImg,  // only works if stored in /public/images/
            title: "Senior care",
            desc: "Companions and home care assistants",
        },
        {
            img: AdultImg,
            title: "Adult care",
            desc: "Special needs and disability support",
        },
        {
            img: HouseImg,
            title: "Housekeeping",
            desc: "House cleaning and organization",
        },
        {
            img: PetImg,
            title: "Pet care",
            desc: "Dog walking, pet sitting, and boarding",
        },
        {
            img: TutoringImg,
            title: "Tutoring",
            desc: "Academic support and test preparation",
        },
    ];

    return (
        <section className="py-5">
            <div className="container text-center">

                <div className="findtheperfectsec d-flex flex-column align-items-center ">
                    <h1 className="fw-bold mb-2">Find the perfect care for your family</h1>
                    <p className="tex-width text-muted text-center mb-5">
                        Browse our comprehensive range of care services, all with background-checked
                        professionals ready to help your family thrive.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {cards.map((card, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="p-4 shadow-sm rounded-4 text-start bg-white h-100">

                                <img
                                    src={card.img}
                                    width="60"
                                    className="mb-3"
                                    alt={card.title}
                                />

                                <h5 className="fw-bold">{card.title}</h5>
                                <p className="text-muted small mb-3">{card.desc}</p>

                                <a href="#" className="text-success fw-semibold text-decoration-none">
                                    Find caregivers →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5">
                    <button className="btn servicebtn text-white  px-4 py-2 rounded-pill fw-semibold">
                        Browse all services
                    </button>
                </div>

            </div>
        </section>
    );
}
