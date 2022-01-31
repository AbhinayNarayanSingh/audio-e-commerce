// imp import
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom"; // https://reacttraining.com/blog/react-router-v6-pre/

// Screen
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="mobile">
      <Header />
      <Routes>
        {/* All component children of <Routes> must be a <Route> or <React.Fragment> */}
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
