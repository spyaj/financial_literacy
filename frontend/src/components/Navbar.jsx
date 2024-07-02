import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/user/userSlice";
import { logout } from "../features/api/user/authSlice";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Expenses",
      path: "/expenses",
    },
    {
      name: "Calculators",
      path: "/calculators",
    },
    {
      name: "Quiz",
      path: "/quiz",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <>
      <div className="flex text-center md:text-start md:flex-row items-center justify-between pb-6">
        <div className="flex gap-6 space-y-3 md:space-y-0 md:space-x-4 justify-center items-center text-[20px] md:flex-row">
          <Link to="/">
            <i className="fa-solid fa-house w-[50px] h-[50px] rounded-full bg-green-500 flex justify-center items-center"></i>
          </Link>
          <div className="">
            <h1 className="text-[18px] md:text-[24px] font-bold capitalize">
              {userInfo.name}
            </h1>
          </div>
        </div>

        {userInfo && (
          <>
            <div className="hidden lg:flex items-center space-x-3 pt-3 md:pt-0">
            {routes.map((route,index) => (
                <Link key={index} to={route.path}>
                  <button className="btn btn-info">{route.name}</button>
                </Link>
              ))}
              <button onClick={logoutHandler} className="btn btn-error">
                Logout
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="btn btn-info">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </>
        )}
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#28272D] w-1/2 p-6 rounded-lg shadow-lg z-10">
            
            <button onClick={toggleMenu} className="btn btn-info absolute top-6 right-6 ">
                <i className="fa-solid fa-times"></i>
              </button>
            <div className="flex  flex-col space-y-3">
              {routes.map((route,index) => (
                <Link key={index} to={route.path} onClick={toggleMenu}>
                  <button className="btn btn-info w-full">{route.name}</button>
                </Link>
              ))}
              <button onClick={() => {logoutHandler(); toggleMenu();}} className="btn btn-error w-full">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
