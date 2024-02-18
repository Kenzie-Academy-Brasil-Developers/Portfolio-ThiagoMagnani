import style from "./style/projects.module.css";
import { Header } from "./page/header.tsx";
import { Banner } from "./page/banner";
import { Project } from "./page/project";
import { Footer } from "./page/footer";
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
