import { handleUpdate } from "@/app/lib/action/action"
import { getLectureById } from "@/app/lib/api"

interface IProps{
    params: {id:number}
}
    

export default function Page({params}:IProps){
    const lecture = getLectureById(params.id)
    return<>
        <h1 className="is-size-4">Edit By ID...{params.id}</h1>
        <div className="column">
            <form className="box" action={handleUpdate.bind(null, params.id)}>
            <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="name"
                        defaultValue={lecture.name}
                    />
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="surname"
                        defaultValue={lecture.surname}
/>
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="age"
                        defaultValue={lecture.age}
/>
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="subject"
                        defaultValue={lecture.subject}
                    />
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="salary"
                        defaultValue={lecture.salary}
/>
                </div> 
                <button className="button is-success" >Submit</button>
            </form>
        </div>
    </>
}