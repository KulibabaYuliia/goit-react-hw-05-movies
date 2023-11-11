import styled from '@emotion/styled';
import backgroundImage from '../icons/search.svg';
import { Form, Field } from 'formik';

export const StyledSearchForm = styled(Form)`
  display: flex;
  align-items: center;
  max-width: 600px;
  border-radius: 3px;
  border: 1px solid rgba(138, 131, 131, 0.75);
`;

export const StyledFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url(${backgroundImage});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;

export const StyledFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    color: orange;
    font: inherit;
    font-size: 18px;
  }
`;
