import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ICourseForm } from "../form.tsx";

interface ITests {
  register: UseFormRegister<ICourseForm>;
  taskIndex: number;
  variantIndex: number;
  testIndex: number;
}

export const Tests: FC<ITests> = ({
  register,
  taskIndex,
  variantIndex,
  testIndex,
}) => {
  return (
    <>
      <p>Ввод</p>
      <textarea
        {...register(
          `tasks.${taskIndex}.variations_of_task.${variantIndex}.unit_tests.${testIndex}.input`,
        )}
      />
      <p>Вывод</p>
      <textarea
        {...register(
          `tasks.${taskIndex}.variations_of_task.${variantIndex}.unit_tests.${testIndex}.output`,
        )}
      />
    </>
  );
};
