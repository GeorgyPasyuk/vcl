import {IUnitTests} from "./IUnitTests.ts";

export interface IVariations {
    variable_task_text: string
    author_solution: string
    hint_for_task: string
    unit_tests: IUnitTests[]
}