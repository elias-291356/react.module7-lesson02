import { render } from '@testing-library/react';
import { HomePage } from 'pages/HomePage';
import { UsersPage } from 'pages/UsersPage';
import { Component } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
