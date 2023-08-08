import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import Root from './layouts/Root'
import ChannelPage from './pages/ChannelPage';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path=":videoId" element={<VideoPage />} />  
        <Route path='/channel'>
          <Route path=':channelId' element={<ChannelPage />} />
        </Route>      
      </Route>
    )
  );
  
  return <RouterProvider router={routes} />
}

export default App
