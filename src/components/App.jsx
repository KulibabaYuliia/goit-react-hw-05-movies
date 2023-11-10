// import { Loader } from './Loader/Loader';
// import { Searchbar } from './Searchbar/Searchbar';
// import { Modal } from './Modal/Modal';
// import { fetch } from './Api/Api';
import Home from 'pages/HomePage';
import Movies from 'pages/MoviesPage';
import { Layout } from './Layout/Layout';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import { StyledApp } from './App.styled';
import { Navigate, Route, Routes } from 'react-router-dom';

// import React, { useState, useEffect } from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  // const [trendMovies, setTrendMovies] = useState(null);
  // const [totalPictures, setTotalPictures] = useState(null);
  // const [query, setQuery] = useState(null);
  // const [pictures, setPictures] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [isOpenModal, setIsOpenModal] = useState(null);
  // const [modalData, setModalData] = useState(null);

  // const notifyNoResultFound = error =>
  //   toast.error(`${error}`, {
  //     position: 'top-right',
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'light',
  //   });

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }

  //   const fetchPictures = async (searchName, page) => {
  //     try {
  //       setLoading(true);
  //       const { data } = await fetch(searchName, page);

  //       if (data.total === 0) {
  //         throw new Error('No results found');
  //       }

  //       setPictures(prevPictures =>
  //         prevPictures ? [...prevPictures, ...data.hits] : [...data.hits]
  //       );
  //       setTotalPictures(data.totalHits);
  //     } catch (error) {
  //       setPictures(null);
  //       setTotalPictures(null);
  //       notifyNoResultFound(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPictures(query, currentPage);
  // }, [query, currentPage]);

  // const onSubmit = data => {
  //   setQuery(data.query);
  //   setCurrentPage(1);
  //   setPictures(null);
  // };

  return (
    <StyledApp>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>

      {/* <Searchbar onSubmit={onSubmit}></Searchbar>

      <ImageGallery pictures={pictures} openModal={openModal}></ImageGallery>

      {loading && <Loader />}

      {currentPage < totalPictures / 12 && !loading && (
        <LoadMoreBtn onLoadMoreHandler={onLoadMoreHandler} />
      )}

      <ToastContainer />
      {isOpenModal && <Modal closeModal={closeModal} modalData={modalData} />} */}
    </StyledApp>
  );
};
