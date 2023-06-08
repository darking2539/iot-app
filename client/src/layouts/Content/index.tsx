import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { APIGetProfile } from '../../api/auth';
import Avartar from "../../assets/user_avatar.avif"


const Sidebar: React.FC = () => {
    return (
        <aside className="bg-sky-900 text-gray-300 w-1/4 h-screen">
            <div className="p-4">
                <h1 className="text-white text-lg font-bold">Menu</h1>
            </div>
            <nav className="flex flex-col">
                <Link to="/dashboard" className="p-4 hover:bg-gray-700">
                    <i className="fas fa-home mr-2"></i>
                    Dashboard
                </Link>
                <Link to="/devices" className="p-4 hover:bg-gray-700">
                    <i className="fas fa-users mr-2"></i>
                    Devices
                </Link>
            </nav>
        </aside>
    );
};

type ProfileProps = {
    name: string;
    email: string;
    avatar: string;
  };
  
  type HeaderProps = {
    onLogout: () => void;
    username: string;
    email: string;
  };
  
  const Profile: React.FC<ProfileProps> = ({ name, email, avatar }) => {
    return (
      <div className="flex items-center">
        <img src={avatar} alt="Profile" className="w-8 h-8 rounded-full" />
        <div className="ml-2">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>
    );
  };
  
  const Header: React.FC<HeaderProps> = ({ onLogout, username, email }) => {
    return (
      <header className="bg-sky-300 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">IoT APP</h1>
          <div className="flex items-center">
            <Profile
              name={username}
              email={email}
              avatar={Avartar}
            />
            <button
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    );
  };

const ContentLayout = (props: any) => {

    const { children } = props;
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();
    
    const LogoutHandle = () => {
        localStorage.removeItem("token");
        history("/login")
    }

    useEffect(() => {

        if (!localStorage.getItem("token")) {
            history("/login")
        }

        APIGetProfile().then((resp: any)=> {
            setUsername(resp.data.username);
            setEmail(resp.data.email);
        })

    }, [])
    
    
    return (
        <div>
            <Header onLogout={LogoutHandle} username={username} email={email} />
            <div className='flex'>
                <Sidebar />
                <div className="w-3/4 bg-gray-100">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default ContentLayout;