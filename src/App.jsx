import style from "./style/projects.module.css";
import { Header } from "./page/header.jsx";
import { Banner } from "./page/banner.jsx";
import { Project } from "./page/project.jsx";
import { Footer } from "./page/footer.jsx";
import React from "react";

function App() {
  return (
    <div className={style.page}>
      <Header />

      <Banner />

      <Project />

      <Footer />
    </div>
  );
}
export default App;
