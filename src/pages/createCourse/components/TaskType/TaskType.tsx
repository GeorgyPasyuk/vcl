import styles from "../../createCourse.module.css";
import { UseFormRegister } from "react-hook-form";
import { ICourseForm } from "../form.tsx";
import { FC, useState } from "react";
import { TaskVariant } from "../TaskVariant/TaskVariant.tsx";

interface TaskType {
  register: UseFormRegister<ICourseForm>;
  taskIndex: number;
}

export const TaskType: FC<TaskType> = ({ register, taskIndex }) => {
  const [taskVariants, setTaskVariant] = useState(0);

  const addTaskVariant = () => {
    setTaskVariant(taskVariants + 1);
  };
  const renderTaskVariants = () => {
    const taskTypes = [];
    for (let i = 0; i < taskVariants; i++) {
      taskTypes.push(<TaskVariant key={i} register={register} variantIndex={i} taskIndex={taskIndex}/>);
    }
    return taskTypes;
  };

  return (
    <>
      <h3>Задание {taskIndex + 1}</h3>
      <p>Введите общее описание для задания</p>
      <textarea {...register(`tasks.${taskIndex}.general_text`)} />
      <p>Введите количество баллов за задание</p>
      <input
        type="number"
        {...register(`tasks.${taskIndex}.task_score`, { required: true })}
      />
      <button type="button" onClick={addTaskVariant}>Добавить вариант задания</button>
        {renderTaskVariants()}
      <hr className={styles.hrs}></hr>
    </>
  );
};
