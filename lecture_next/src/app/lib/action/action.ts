"use server"
import { redirect } from "next/navigation"
import { addLecture, InputLecture, updateLectureById } from "../api"

export const handleAdd = (data:FormData) =>{

    let lecture:InputLecture =  {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        age: +(data.get('age') as string),
        subject: data.get('subject') as string,
        salary: +(data.get('salary') as string)
    }

    addLecture(lecture)
    // redirect("/lectures")
    redirect("/")
}


export const handleUpdate = (id:number, data:FormData) =>{
    let lecture:Partial<InputLecture> =  {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        age: +(data.get('age') as string),
        subject: data.get('subject') as string,
        salary: +(data.get('salary') as string)
    } 
    updateLectureById(id, lecture)
    // redirect("/lectures")
    redirect("/")
}