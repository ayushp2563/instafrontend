import { Routes, Route } from "react-router-dom";
import "./App.css";
import SplashScreen from "./Components/splashscreen";
import Login from "./Components/LogIn/Login";
import SignUp from "./Components/SignUp/SignUp";
import NavBar from "./Components/HoomeScreen/NavBar";
import AccountMenu from "./Components/HoomeScreen/AccoutMenu";
import Feed from "./Components/HoomeScreen/Feed";
import Settings from "./Components/HoomeScreen/Settings";
import InstagramPost from "./Components/HoomeScreen/Postsec";
import ChnPass from "./Components/HoomeScreen/changePass";
import ChnProfile from "./Components/HoomeScreen/changeProfile";
import CreatePost from "./Components/HoomeScreen/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/navbar/accountmenu" element={<AccountMenu />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/InstagramPost" element={<InstagramPost />} />
        <Route path="/chnpass" element={<ChnPass />} />
        <Route path="/chnprofile" element={<ChnProfile />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
