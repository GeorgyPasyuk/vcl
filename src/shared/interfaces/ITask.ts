import {IVariations} from "./IVariations.ts";

export interface ITask {
    general_text: string
    variations_of_task: IVariations[]
    pattern_code: string
    task_score: number
}