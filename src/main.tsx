import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './routes/Root/Root';
import MainPage from './routes/MainPage/MainPage'; 
import Home from './routes/Home/Home'; // import your Home component
import Statistics from './routes/Statistics/Statistics'; // import your Statistics component
import Notifications from './routes/Notifications/Notifications'; // import your Notifications component
import Settings from './routes/Settings/Settings'; // import your Settings component
import Upload from './routes/Upload/Upload'; // import your Upload component
import Help from './routes/Help/Help'; // import your Help component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<MainPage />} />
          <Route path="home" element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="upload" element={<Upload />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
