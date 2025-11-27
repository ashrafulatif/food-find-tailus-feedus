import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "FeedUs has completely transformed my dining experience! The variety of restaurants and lightning-fast delivery makes it my go-to app for every meal.",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Busy Professional",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      text: "As someone with a hectic schedule, FeedUs is a lifesaver. Fresh, hot meals delivered right to my office in under 30 minutes. Absolutely incredible!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Family Mom",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      text: "My family loves the diverse menu options. From healthy salads to comfort food, FeedUs has something for everyone. The kids are always excited for dinner now!",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-900 mb-4">
            What Our Customers Say
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to
            say about their FeedUs experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H8v-2c0-1.1.9-2 2-2h2V8h-2zm16 0c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-2v-2c0-1.1.9-2 2-2h2V8h-2z" />
                </svg>
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed my-6">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-t from-orange-500 to-red-500 shadow-sm rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-orange-100">Orders Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
