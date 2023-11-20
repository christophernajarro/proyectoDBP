import React from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'styled-components';

const $LoginButton = $.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  color: #464646; 
  &:hover {
    text-decoration: underline; 
  }
`;

const UserAcc = () => {
  const navigate  = useNavigate();

  const navigateToLogin = () => {
    navigate('/login'); 
  };

  return (
    <$LoginButton onClick={navigateToLogin}>
      Iniciar Sesión
    </$LoginButton>
  );
};

export default UserAcc;
