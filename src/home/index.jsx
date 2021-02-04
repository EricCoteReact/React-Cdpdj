import React from 'react';
import useTitle from '../common/useTitle';

export default function Home(props) {
  useTitle('Accueil');
  return (
    <>
      <h1>Home page</h1>
      <p>This is the home page!</p>
    </>
  );
}
