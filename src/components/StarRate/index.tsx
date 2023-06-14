import { Rating } from "react-simple-star-rating"

interface StarRatingProps {
  rating: number
}

export const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <Rating readonly initialValue={rating} iconsCount={5}  />
  )
}