import { CreateCourse } from "./pages/createCourse/createCourse.tsx";
import styles from './main.module.css'


function App() {
  return (
    <>
      <div className={styles.course__form__container}>
        <CreateCourse />
      </div>
    </>
  );
}

export default App;
