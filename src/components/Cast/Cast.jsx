// import React, { useState, useEffect } from 'react';
// import { useParams, Route, Routes, useLocation } from 'react-router-dom';
import { CastList, Portrait } from './Cast.styled';
import defaultPoster from 'components/icons/defaultPortrait.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const Cast = ({ movieCast }) => {
  return (
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
  );
};
