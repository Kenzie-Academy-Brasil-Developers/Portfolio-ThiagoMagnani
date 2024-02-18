import style from "./style/projects.module.css";
import { Header } from "./page/header";
import { Banner } from "./page/banner";
import { Project } from "./page/project";
import { Footer } from "./page/footer";

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
