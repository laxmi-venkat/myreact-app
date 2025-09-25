import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Navbar";
import Ycombinator from "./Components/Ycombinator";
import TopCompanies from "./Components/TopCompanies";
import Footer from "./Components/Footer";
import Requirements from "./Components/About/Requirements";
import People from "./Components/About/People";

import MainPerson from "./Components/About/MainPerson";
import HowWeFund from "./Components/About/HowWeFund";
import BioHeaven from "./Components/Companies/BioHeaven";
import CodeVidhaya from "./Components/Companies/CodeVidhya";
//import { Navigate } from "react-router-dom";
import SuperChat from "./Components/Companies/SuperChat";
import IRasus from "./Components/Companies/IRasus";
import ThangamCapital from './Components/Companies/ThangamCapital';
import Engineering from "./Components/Jobs/Engineering";
import HRandAdmin from "./Components/Jobs/HRandAdmin";
import SalesAndMarketing from "./Components/Jobs/SalesAndMarketing";
import AllJobs from "./Components/Jobs/AllJobs";
import Ourpeople from "./Components/About/Ourpeople";



const Home = () => {
  return (
    <>
      <Ycombinator />
      <TopCompanies />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/ourpeople" element={<Ourpeople />}></Route>
            <Route path="/about/how-we-fund" element={<HowWeFund />} />
            <Route path="/about/requirements" element={<Requirements />} />
            <Route path="/about/people" element={<People />} />
            <Route path="/about/chairperson" element={<MainPerson />} />

            <Route path="/companies/superchat" element={<SuperChat />} />
            <Route path="/companies/codevidhya" element={<CodeVidhaya />} />
            <Route path="/companies/irasus" element={<IRasus />} />
            <Route path="/companies/bioheaven" element={<BioHeaven />} />
            <Route path="/companies/thangamcapital" element={<ThangamCapital />} />
            {/* <nav className="bg-gray-200 p-4 flex gap-6">
        <Link to="/jobs">All Jobs</Link>
        <Link to="/jobs/engineering">Engineering</Link>
        <Link to="/jobs/salesMarketing">Sales & Marketing</Link>
        <Link to="/jobs/HrAndAdmin">HR & Admin</Link>
      </nav> */}
           
            <Route path="/jobs/all" element={<AllJobs />} />
            <Route path="/jobs/engineering" element={<Engineering />} />
            <Route path="/jobs/salesMarketing" element={<SalesAndMarketing />} />
            <Route path="/jobs/HrAndAdmin" element={<HRandAdmin />} />

          </Routes>

        </main>
        <Footer />
      </div>
    </BrowserRouter >

  );
}

export default App;
