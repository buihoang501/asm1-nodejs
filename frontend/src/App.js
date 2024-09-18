import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Browse = lazy(() => import('./pages/browse/Browse'));
const Search = lazy(() => import('./pages/search/Search'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<p>Loading...!</p>}>
              <Browse />
            </Suspense>
          }
        />
        <Route
          path='/search'
          element={
            <Suspense fallback={<p>Loading...!</p>}>
              <Search />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
