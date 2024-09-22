import { type PropsWithChildren } from "react";

// interface CourseGoalProps {
//     title: string;
// }

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id:number)=> void;
}>;

// A different syntaxs that can also be used
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//     return (<article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>);
// }
// export default CourseGoal;

// Cualquier forma es correcta
//////// Forma 1  ///////////
export default function CourseGoal({title, children, onDelete, id }: CourseGoalProps){
    return (<article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>);
}