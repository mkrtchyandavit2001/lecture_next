import { handleAdd } from "@/app/lib/action/action";

export default function Page(){
    return<>
        <h1>Add Lectures</h1>
        <div className="column  is-two-fifths my-4">
            <form className="box" action={handleAdd}>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="name"
                        placeholder="Enter a name"
                    />
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="surname"
                        placeholder="Enter a surname"
                    />
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="age"
                        placeholder="Enter a age"
                    />
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="subject"
                        placeholder="Enter a subject"
                    />
                </div>
                <div className="my-4">
                    <input 
                        type="text"
                        className="input is-primary"
                        name="salary"
                        placeholder="Enter a salary"
                    />
                </div>
                <button className="button is-success">Submit</button>
            </form>
        </div>

    </>
}