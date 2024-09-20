import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {loader as postsLoader} from './routes/Posts';
import Posts from './routes/Posts';
import NewPost from './routes/NewPost';
import PostDetails, { loader as PostDetailsLoader} from './routes/PostDetails';
import RootLayout from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: '/create-post', element: <NewPost /> },
          {path: '/:id', element: <PostDetails/>, loader: PostDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);