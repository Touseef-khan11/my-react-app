import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORT YOUR IMAGES
import SarahImg from "../assets/images/sarah.png";
import AllexusImg from "../assets/images/allexus.png";
import KellyImg from "../assets/images/kelly.png";

export default function CaregiverSlider() {
  const caregivers = [
    {
      img: SarahImg,
      
      rating: 4.5,
      experience: "Sitter with 10 years experience",
      review:
        "Sarah is amazing! She is very interactive with the kids. They ask for her to come back over and over again.",
      author: "Jennifer M.",
      tags: ["Travel", "Meal preparation", "Help with pets", "+3 more"],
    },
    {
      img: AllexusImg,
      
      rating: 5,
      experience: "Nanny with 7 years experience",
      review:
        "Allexus was wonderful with our twins. Active, knowledgeable, playful, loving, responsible. We would hire her again in a second.",
      author: "Amy V.",
      tags: ["Carpooling", "Organizing/Laundry", "Help with pets", "+3 more"],
    },
    {
      img: KellyImg,
      
      rating: 5,
      experience: "Senior caregiver with 10 years experience",
      review:
        "Kelly is a very kind and compassionate caregiver. I am very satisfied with the level of care she provides for my mother!",
      author: "Gail M.",
      tags: ["Respite care", "Companion care", "Dementia care", "+3 more"],
    },
    {
      img: KellyImg,
      
      rating: 5,
      experience: "Senior caregiver with 10 years experience",
      review:
        "Kelly is a very kind and compassionate caregiver. I am very satisfied with the level of care she provides for my mother!",
      author: "Gail M.",
      tags: ["Respite care", "Companion care", "Dementia care", "+3 more"],
    },
  ];

  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold mb-3">
        When it's not you, it's Temps Care
      </h1>

      <button className="btn servicebtn text-white px-4 py-2 mb-5 rounded-pill fw-semibold">
        Get started
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={25}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        className="caregiver-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {caregivers.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="card caregiver-card shadow rounded-4 overflow-hidden">
              <img src={c.img} className="w-100" alt={c.name} />

              <div className="p-3 text-start">
                <h5 className="fw-bold mb-0">{c.name}</h5>
                <p className="text-muted small">{c.title}</p>

                <p className="text-warning mb-0">⭐⭐⭐⭐⭐ {c.rating}</p>
                <p className="small text-muted">{c.experience}</p>

                <div className="p-3 bg-light rounded-3 small mb-3">
                  “{c.review}”
                  <br />
                  <strong>— {c.author}</strong>
                </div>

                <p className="fw-bold small mb-1">Can help with</p>

                <div className="d-flex flex-wrap gap-2">
                  {c.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="badge rounded-pill bg-success-subtle text-success px-3 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
