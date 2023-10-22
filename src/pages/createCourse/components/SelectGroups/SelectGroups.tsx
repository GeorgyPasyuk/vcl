import { UseFormRegister } from "react-hook-form";
import { ICourseForm } from "../form.tsx";
import { FC } from "react";
import styles from "../../createCourse.module.css";
import { emails } from "../../../../mocks/emails.ts";

interface ISelectGroups {
  register: UseFormRegister<ICourseForm>;
}

export const SelectGroups: FC<ISelectGroups> = ({ register }) => {
  const items = emails;

  return (
    <>
      {items.map((item, index) => (
        <div className={styles.group__selector__item} key={index}>
          <p>{item}</p>
          <input
            type="checkbox"
            value={item}
            {...register(`course_info.group_with_access`, { required: true })}
          />
        </div>
      ))}
    </>
  );
};
