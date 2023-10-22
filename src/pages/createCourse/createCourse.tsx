import styles from "./createCourse.module.css"
import {CourseForm} from "./components/form.tsx";

export const CreateCourse = () => {

    return (
        <main className={styles.form__wrapper}>
            <h1 className={styles.form__header}>Создание курса</h1>
            <CourseForm/>
        </main>
    )
}