import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, Portrait } from './Cast.styled';
import defaultPoster from 'components/icons/defaultPortrait.png';
import { fetchMovieCast } from 'components/Api/Api';
import { notifyNoResultFound } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { data } = await fetchMovieCast(movieId);

        setMovieCast(data.cast);
      } catch (error) {
        setMovieCast(null);
        notifyNoResultFound(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <CastList>
        {movieCast &&
          movieCast.map(({ profile_path, name, character }) => (
            <li key={name}>
              <Portrait
                src={profile_path ? IMAGE_URL + profile_path : defaultPoster}
                alt={name}
                width="150"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
      </CastList>
      {loading && <Loader />}
    </>
  );
};
