import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../UI";
import { MarvelPage,DcPage, SearchPage, HeroPage } from "../pages";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="Search" element={<SearchPage />} />
            
            <Route path="Hero/:id" element={<HeroPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
