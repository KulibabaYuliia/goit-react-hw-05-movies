import {
  StyledHeader,
  StyledSearchForm,
  StyledFormButton,
  StyledFormInput,
} from './Searchbar.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { notifyEmtySearch } from 'components/Error/Error';
import { useSearchParams } from 'react-router-dom';

let userSchema = yup.object().shape({
  query: yup.string(),
});

export const Searchbar = () => {
  const [, setSearchParams] = useSearchParams();

  const submitHandler = (values, action) => {
    if (values.query.trim() === '') {
      notifyEmtySearch();
      return;
    }

    setSearchParams({ query: values.query });
    action.resetForm();
  };

  return (
    <StyledHeader>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={userSchema}
        onSubmit={submitHandler}
      >
        <StyledSearchForm>
          <StyledFormButton type="submit">
            <span>Search</span>
          </StyledFormButton>

          <StyledFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="query" component="div" />
        </StyledSearchForm>
      </Formik>
    </StyledHeader>
  );
};
