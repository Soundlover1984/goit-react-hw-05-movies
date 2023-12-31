import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImSad } from 'react-icons/im';
import { nanoid } from 'nanoid';

import { fetchMovieApi } from 'movieApiService';
import {
  ReviewsList,
  ReviewItem,
  Author,
  Content,
  NoReviewsText,
} from './Review.styled';

const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const reviewId = nanoid();

  // console.log(reviews);
  useEffect(() => {
    fetchMovieApi.getMovieReview(id).then(setReviews);
  }, [id]);

  if (reviews === null) {
    return;
  }

  return (
    <div>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(el => (
            <ReviewItem key={reviewId}>
              <Author>Author: {el.author} </Author>
              <Content>{el.content}</Content>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <NoReviewsText>
          {' '}
          We don't have any reviews for this movie <ImSad />
        </NoReviewsText>
      )}
    </div>
  );
};

export default Review;