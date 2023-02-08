import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Promotion from "./Pages/Promotion/Promotion";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import LoginPrivateRoute from "./PrivateRoute/LoginPrivateRoute";
import Profile from "./user/Profile/Profile";
import Layout from "./Layout/Layout";
import NewProducts from "./Pages/NewProducts/NewProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Shirt from "./Others/Shirt/Shirt";
import Pant from "./Others/Pant/Pant";
import Saree from "./Others/Saree/Saree";
import Tshirt from "./Others/Tshirt/Tshirt";
import Panjabi from "./Others/Panjabi/Panjabi";
import Tops from "./Others/Tops/Tops";
import Jacket from "./Others/Jacket/Jacket";
import Coats from "./Others/Coats/Coats";
import HalfPant from "./Others/HalfPant/HalfPant";
import Tights from "./Others/Tights/Tights";
import Kurta from "./Others/Kurta/Kurta";
import Frogs from "./Others/Frogs/Frogs";
import Kameez from "./Others/Kameez/Kameez";
import ManCollections from "./Pages/ManCollections/ManCollections";
import WomanCollections from "./Pages/WomanCollections/WomanCollections";
import KidCollections from "./Pages/KidCollections/KidCollections";
import WinterCollection from "./Pages/WinterCollections/WinterCollection";
import SummerCollections from "./Pages/SummerCollection/SummerCollections";
import DashBoard from "./Pages/DashBoard/DashBoard";
import QuestionBox from "./Share/QuestionBox/QuestionBox";
import Prestigious from "./Share/Prestigious/Prestigious";
import Community from "./Share/Community/Community";
import Contact from "./Share/Contact/Contact";
import About from "./Share/About/About";
import ForumBox from "./Share/ForumBox/ForumBox";
import AddPromotion from "./Products/AddPromotion/AddPromotion";
import AddProducts from "./Products/AddProducts/AddProducts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/saree" element={<Saree/>} />
          <Route path="/shirt" element={<Shirt/>} />
          <Route path="/pant" element={<Pant/>} />
          <Route path="/Tshirt" element={<Tshirt/>} />
          <Route path="/panjabi" element={<Panjabi/>} />
          <Route path="/tops" element={<Tops/>} />
          <Route path="/jacket" element={<Jacket/>} />
          <Route path="/coats" element={<Coats/>} />
          <Route path="/half-pant" element={<HalfPant/>} />
          <Route path="/tights" element={<Tights/>} />
          <Route path="/kurta" element={<Kurta/>} />
          <Route path="/frogs" element={<Frogs/>} />
          <Route path="/kameez" element={<Kameez/>} />
          <Route path="/manCollections" element={<ManCollections />} />
          <Route path="/womanCollections" element={<WomanCollections />} />
          <Route path="/kidsCollections" element={<KidCollections />} />
          <Route path="/winterCollections" element={<WinterCollection />} />
          <Route path="/summerCollections" element={<SummerCollections />} />
        </Route>
        <Route path="/questionBox" element={<QuestionBox/>} />
        <Route path="/prestigious" element={<Prestigious/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/forum" element={<ForumBox/>} />
        <Route path="/addPromotion" element={<AddPromotion/>} />
        <Route path="/addNew" element={<AddProducts/>} />
        <Route element={<UserPrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/promotion" element={<Promotion />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/newItems" element={<NewProducts />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route element={<LoginPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
