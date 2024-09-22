import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalProps = {
    goals:CGoal[];
    onDeleteGoal: (id:number)=> void;
  };

export default function CourseGoalList({
  goals,
   onDeleteGoal
  }: CourseGoalProps){
    if(goals.length === 0){
      return (
        <InfoBox mode="hint">
          You have no course goals yet, start adding some
        </InfoBox>
        );
    }

    let warningBox: ReactNode;
    if (goals.length >= 4){
      warningBox = <InfoBox mode="warning">
        You are collecting a lot of goals. Dont put too much on your plate! 
      </InfoBox>;
    }

    return(
      <>
        {warningBox}
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
              </CourseGoal>
          </li>
        ))}

      </ul>
      </>
    );
}