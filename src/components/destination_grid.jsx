'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import { motion } from "motion/react"
import { Star as StarIcon, Place as PinIcon } from '@mui/icons-material';

const DestinationGrid = ({ destinations }) => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination, index) => (
        <motion.div
          key={destination.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                <div className="flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 backdrop-blur-sm">
                  <StarIcon className="mr-1 text-yellow-500" fontSize="small" />
                  {destination.rating}
                </div>
              </div>
              <div className="mt-2 flex items-center text-white">
                <PinIcon className="mr-1" fontSize="small" />
                <span className="text-sm">From {destination.price}</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <Link 
              href={`/tours?destination=${encodeURIComponent(destination.name)}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Explore tours
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DestinationGrid;