import LayOut from "../layout/index";
import CurrencySection from "../components/CurrencySection";
import Footer from "../layout/Footer";
import Screens from "../screens";
import NewsPage from "../components/News";
import About from "../components/Aboutsection";
import Serviceha from "../components/ServicSection";
import NewsAndBlogs from "../components/blogs";
import ContactUsScreen from "../components/ContactUs";


let routes = [
  { path: "/", element: <LayOut /> },
  { path: "/CurrencySection", element: <CurrencySection /> },
  { path: "/Footer", element: <Footer /> },
  { path: "/screens", element: <Screens /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/About", element: <About /> },
  { path: "/Service", element: <Serviceha /> },
  { path: "/NewsAndBlogs", element: <NewsAndBlogs /> },
  { path: "/ContactUs", element: <ContactUsScreen /> },
];

export default routes;
