import Link from "next/link"
import { ILecture } from "../api"

interface IProps{
    lectures:ILecture[]
}

export default function Lecture({lectures}:IProps){
    return<div className="columns is-gapless is-multiline is-mobile">
        {
            lectures.map(lecture => <div key={lecture.id} className="column is-one-quarter is-size-4">
                <p>{lecture.name} {lecture.surname} </p>
                <p> {lecture.age} </p>
                <p>{lecture.subject} </p>
                <p>{lecture.salary} AMD  </p>
                <Link href={"lectures/edit/" + lecture.id} className="my-3 button is-info">Edit</Link>
            </div>)
        }

    </div>
}