  import React,{lazy, Suspense} from 'react'
  import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";

  import './App.scss'
  import './style.css'

import Layout from './layouts/Layout';
import NotFound from './components/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

import ProductDetail from './components/ProductDetail';
import Orders from './components/Orders';
import Profile from './components/Profile';

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./components/checkout/Checkout'));
const WishList = lazy(() => import('./components/WishList'));



const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
            <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
          </ErrorBoundary>
        ),
      },

      {
        path:"product/:id",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
            <Suspense fallback={<div>Loading product Detail...</div>}>
              <ProductDetail/>
          </Suspense>
          </ErrorBoundary>
          
        ),
      },
      {
        path: "cart",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "cart/checkout",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
          <Suspense fallback={<div>Loading Checkout...</div>}>
            <Checkout />
          </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "wishlist",
        element: (

          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
          <Suspense fallback={<div>Loading WishList...</div>}>
            <WishList />
          </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "orders",
        element: (

          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
          <Suspense fallback={<div>Loading orders...</div>}>
            <Orders/>
          </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "profile",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
          <Suspense fallback={<div>Loading Profile...</div>}>
           <Profile/>
          </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,//page Not found page willl be attach later here
  },
]);

  function App() {

    return (
      <RouterProvider router={browserRouter} />
    )
  }

  export default App
