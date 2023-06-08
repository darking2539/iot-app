import { Routes, Route, Navigate } from 'react-router-dom';
import { ContentLayout, EmptyLayout } from '../layouts'
import { LoginPage, Registerpage, Dashboardpage, DevicesPage, AddDevicesPage } from '../pages'

const WebRoutes = (props:any) =>{
    const {} = props;
  
    return (
      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<EmptyLayout children={<LoginPage/>} />} />
        <Route path="/register" element={<EmptyLayout children={<Registerpage/>} />} />
        <Route path="/devices" element={<ContentLayout children={<DevicesPage/>}  />} />
        <Route path="/devices/add" element={<ContentLayout children={<AddDevicesPage/>}  />} />
        <Route path="/dashboard" element={<ContentLayout children={<Dashboardpage/>} />} />

      </Routes>
    );
  }

  export default WebRoutes;