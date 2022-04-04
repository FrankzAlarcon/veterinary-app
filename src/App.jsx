import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import NewPatient from './pages/NewPatient';
import NotFound from './pages/NotFound';
import PacientList from './pages/PacientList';
import PatientData from './pages/PatientData';
import Tasks from './pages/Tasks';
import { CustomersProvider } from './context/CustomersProvider';
import EditCustomer from './pages/EditCustomer';

function App() {
  return (
    <BrowserRouter>
      <CustomersProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PacientList />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="new-patient" element={<NewPatient />} />
            <Route path="edit-patient/:id" element={<EditCustomer />} />
            <Route path="patient/:id" element={<PatientData />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CustomersProvider>
    </BrowserRouter>
  );
}

export default App;
