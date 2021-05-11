import {useState} from "react";

function App() {
    const inputCSS =
        "rounded-full p-4 border-4 focus:border-blue-500 outline-none text-2xl font-sans";
    const cell = "my-2 rounded-full p-4 border-4 hover:border-blue-500 outline-none text-xl font-sans";

    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        pno: "",
    });

    const takeData = (event) => {
        setData(function (prevData) {
                return {
                    ...prevData,
                    [event.target.name]: event.target.value,
                }
            }
        )
    };
    const done = () => {
    };

    return (
        <div className="grid grid-cols-2">
            <div className="content-center justify-center gap-y-4 grid justify-items-center">
                <div className="font-sans text-5xl"> Hello</div>
                <form
                    onSubmit={done}
                    className="content-center justify-center gap-y-4 grid justify-items-center"
                >
                    <input
                        type="text"
                        placeholder="first Name"
                        name="fname"
                        value={data.fname}
                        className={inputCSS}
                        onChange={takeData}
                    />
                    <input
                        type="text"
                        placeholder="last Name"
                        name="lname"
                        value={data.lname}
                        className={inputCSS}
                        onChange={takeData}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        value={data.email}
                        className={inputCSS}
                        onChange={takeData}
                    />
                    <input
                        type="text"
                        placeholder="phone number"
                        name="pno"
                        value={data.pno}
                        className={inputCSS}
                        onChange={takeData}
                    />
                    <button
                        type="submit"
                        className="p-4 font-sans text-3xl bg-blue-500 border-8 border-blue-500 rounded-full hover:border-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="content-center justify-center gap-y-4 grid justify-items-center">
                <div className="border-4 border-gray-500 p-8 rounded-2xl table-auto">
                    <div className="my-4 text-8xl font-light"> Output</div>
                    <div className={cell}> {data.fname}</div>
                    <div className={cell}> {data.lname}</div>
                    <div className={cell}> {data.email}</div>
                    <div className={cell}> {data.pno}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
