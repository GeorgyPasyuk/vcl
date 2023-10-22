import styles from "../../createCourse.module.css";
import { FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { ICourseForm } from "../form.tsx";
import { Tests } from "../Tests/Tests.tsx";

interface TaskVariant {
  register: UseFormRegister<ICourseForm>;
  taskIndex: number;
  variantIndex: number;
}

export const TaskVariant: FC<TaskVariant> = ({
  register,
  taskIndex,
  variantIndex,
}) => {
  const [tests, setTest] = useState(0);

  const addTest = () => {
    setTest(tests + 1);
  };

  const renderTests = () => {
    const taskTypes = [];
    for (let i = 0; i < tests; i++) {
      taskTypes.push(
        <Tests
          key={i}
          register={register}
          variantIndex={variantIndex}
          taskIndex={taskIndex}
          testIndex={i}
        />,
      );
    }
    return taskTypes;
  };

  return (
    <div className={styles.variant__container}>
      <p>Введите текст задания</p>
      <textarea
        {...register(
          `tasks.${taskIndex}.variations_of_task.${variantIndex}.variable_task_text`,
        )}
      />
      <p>Введите шаблон для задания на выбранном языке</p>
      <textarea {...register(`tasks.${taskIndex}.pattern_code`)} />
      <p>Введите решение задания на выбранном языке</p>
      <textarea
        {...register(
          `tasks.${taskIndex}.variations_of_task.${variantIndex}.author_solution`,
          {
            required: true,
          },
        )}
      />
      <hr className={styles.hrs}></hr>
      <button type="button" onClick={addTest}>
        Добавить тестовые значения (не менее 1)
      </button>
      {renderTests()}
    </div>
  );
};
