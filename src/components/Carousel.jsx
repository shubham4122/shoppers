import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [autoSlide, setAutoSlide] = useState(true);

  const offers = [
    {
      id: "offer1",
      url: "https://via.placeholder.com/1200x400?text=Big+Sale",
      title: "Big Sale!",
      subtitle: "Up to 50% off on selected items!",
    },
    {
      id: "offer2",
      url: "https://via.placeholder.com/1200x400?text=Free+Shipping",
      title: "Free Shipping",
      subtitle: "On orders over $50!",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=3"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const slides = [
    ...offers,
    ...products.map((product) => ({
      id: product.id,
      url: product.image,
      title: product.title,
      subtitle: `$${product.price}`,
    })),
  ];

  const handleClick = (slide) => {
    if (!slide.id.toString().includes("offer")) {
      navigate(`/product/${slide.id}`);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide]);

  return (
    <div
      className="relative w-full h-64 md:h-96 lg:h-128 overflow-hidden"
      onMouseEnter={() => setAutoSlide(false)}
      onMouseLeave={() => setAutoSlide(true)}
    >
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative cursor-pointer"
            onClick={() => handleClick(slide)}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
