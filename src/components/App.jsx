import { Layout } from './Layout/Layout';
import { StyledApp } from './App.styled';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  return (
    <StyledApp>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </StyledApp>
  );
};
