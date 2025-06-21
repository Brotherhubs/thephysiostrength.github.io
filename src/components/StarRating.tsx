import React from 'react';
import StarIcon from './icons/StarIcon';

interface StarRatingProps {
  rating: number; // Rating from 0 to 5
  totalStars?: number;
  starClassName?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5, starClassName = "w-5 h-5" }) => {
  const validRating = Math.max(0, Math.min(rating, totalStars));

  return (
    <div className="flex items-center" aria-label={`Rating: ${validRating} out of ${totalStars} stars`}>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon 
          key={index} 
          filled={index < validRating} 
          className={starClassName}
          aria-hidden="true" // Individual stars are decorative if overall label is provided
        />
      ))}
    </div>
  );
};

export default StarRating;
