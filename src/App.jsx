import style from "./style/projects.module.css";
import { Header } from "./pagina/header";
import { Banner } from "./pagina/banner";
import { Project } from "./pagina/project";
import { Footer } from "./pagina/footer";

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
