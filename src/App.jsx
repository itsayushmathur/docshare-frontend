import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import MyFiles from './pages/MyFiles';
import PublicFileView from './pages/PublicFileView';
import Upload from './pages/Upload';
import Transactions from './pages/Transactions';

const App = () => {
  return (
	<BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my-files" element={<MyFiles />} />
      <Route path="/public-file-view" element={<PublicFileView />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/transactions" element={<Transactions />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App;