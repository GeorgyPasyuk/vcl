import styles from "../createCourse.module.css";
import { TaskType } from "./TaskType/TaskType.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { ICourseInfo } from "../../../shared/interfaces/ICourseInfo.ts";
import { ITask } from "../../../shared/interfaces/ITask.ts";
import { SelectGroups } from "./SelectGroups/SelectGroups.tsx";

export interface ICourseForm {
  tasks: ITask[];
  course_info: ICourseInfo;
}

export const CourseForm = () => {
  const [tasks, setTasks] = useState(0);
  const [groups, showGroups] = useState(false);
  const { register, handleSubmit } = useForm<ICourseForm>({});

  const submit: SubmitHandler<ICourseForm> = (data) => {
    console.log(data);
  };

  const addTask = () => {
    setTasks(tasks + 1);
  };
  const renderTaskTypes = () => {
    const taskTypes = [];
    for (let i = 0; i < tasks; i++) {
      taskTypes.push(<TaskType key={i} register={register} taskIndex={i} />);
    }
    return taskTypes;
  };

  const handleShowGroups = () => {
    showGroups(!groups);
  };

  return (
    <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
      <div className={styles.form__item}>
        <p>Введите название курса</p>
        <input
          type="text"
          {...register("course_info.course_name", { required: true })}
        />
      </div>
      <hr className={styles.hrs}></hr>
      <div className={styles.form__item}>
        <p>Выберете язык разработки для курса</p>
        <select {...register("course_info.language")}>
          <option>Python</option>
          <option>Java</option>
        </select>
      </div>
      <hr className={styles.hrs}></hr>
      <button type="button" onClick={addTask}>
        Добавить тип задания
      </button>
      {renderTaskTypes()}
      <hr className={styles.hrs}></hr>

      <p>Введите время на выполнения курса (мин) </p>
      <select {...register("course_info.time_limit")}>
        <option>10 min</option>
        <option>15 min</option>
        <option>20 min</option>
      </select>
      <hr className={styles.hrs}></hr>

      <div className={styles.group__selector__container}>
        <p>Выберете группу(ы)</p>
        <button
          className={styles.arrow}
          type="button"
          onClick={handleShowGroups}
        >
          ^
        </button>
      </div>
      {Boolean(groups) && <SelectGroups register={register} />}
      <hr className={styles.hrs}></hr>

      <button>Отправить курс</button>
    </form>
  );
};
