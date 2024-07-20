import Database from "better-sqlite3"

export interface ILecture{
    id:number
    name:string
    surname:string
    age:number
    subject:string
    salary:number
}

export type InputLecture  = Omit<ILecture, 'id'>

const db = new Database("lectures.db")

export const addLecture = (lecture:InputLecture) =>{

    db.prepare(`
        INSERT INTO lectures(name, surname, age, subject, salary)
        VALUES(@name, @surname, @age, @subject, @salary)
        `).run(lecture)
}

export const getAllLectures = ():ILecture[] =>{
    return db.prepare(`SELECT * FROM lectures`).all() as ILecture[]
}

export const getLectureById = (id:number):ILecture => {
    return db.prepare("SELECT * FROM lectures WHERE id = ?").get(id) as ILecture
}

export const updateLectureById = (id:number, body:Partial<InputLecture>) =>{
    return db
    .prepare("UPDATE lectures set name=?, surname=?, age=?, subject=?, salary=? WHERE id=?")
    .run(body.name, body.surname, body.age, body.subject, body.salary, id)
}