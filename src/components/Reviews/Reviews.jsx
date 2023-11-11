// import { CastList } from './Cast.styled';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/Api/Api';
import { notifyNoResultFound } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchRevies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (error) {
        setMovieReviews(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRevies();
  }, [movieId]);

  return (
    <>
      {!loading && movieReviews && movieReviews.length !== 0 && (
        <ul>
          {movieReviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {!loading && movieReviews?.length === 0 && <div>No reviews yet</div>}

      {loading && <Loader />}
    </>
  );
};
