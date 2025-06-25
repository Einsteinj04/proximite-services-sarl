import React from 'react';
import { Star as StarIcon, StarHalf as StarHalfIcon } from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Testimonials = ({ testimonials }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(<StarIcon key={`empty-${stars.length}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-blue-200">{testimonial.role}</p>
              </div>
            </div>
            <div className="mt-4 flex">
              {renderStars(testimonial.rating)}
            </div>
            <p className="mt-4 text-blue-100">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;