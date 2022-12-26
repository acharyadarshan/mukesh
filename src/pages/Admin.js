import { useState } from "react";
import axios from "axios";

function Admin() {
    const [file, setFile] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    const submit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("author", author);
        formData.append("image", file);

        axios
            .post("http://localhost:4200/api/blog", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                dataType: "json",
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="App">
            <form onSubmit={submit}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter blog Title"
                />
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter blog Description"
                />
                <input
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter blog Author"
                />
                <input
                    filename={file}
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    accept="image/*"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Admin;
