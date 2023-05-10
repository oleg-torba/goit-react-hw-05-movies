import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchReviews from 'Services/FetchReviews';

function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    FetchReviews(movieId).then(res => {
      setReview(res.results);
    });
  }, [movieId]);

  return (
    <div>
      {review.map(author => {
        return (
          <ul>
            <li key={author.id}>
              <h3>{author.author}</h3>
              <p>{author.content}</p>
              <p>Rating: {author.author_details.rating}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Reviews;
