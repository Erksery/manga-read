import React, {useState, useRef, useEffect} from 'react';
import {useQueryCreateChapter} from "../../hooks/useQueryCreateChapter.js";
import {useQueryCreateBook} from "../../hooks/useQueryCreateBook.js";
import {useParams} from "react-router";

function ChapterCreate() {
    const [array, setArray] = useState([])
    const [imageUrl, setImageUrl] = useState("")

    const {mutate} = useQueryCreateChapter()
    const mutationAddImage = useQueryCreateBook()
    const fileInputRef = useRef(null);
    const {id} = useParams()

    const handleClear = (file) => {
        const filename = file.name;
        const newFilename = filename.replace(/\.(jpg|png|jpeg)$/i, "");
        setImageUrl(newFilename);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        mutationAddImage.mutate(file);
        handleClear(file);
    };

    const submitPush = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const field = Object.fromEntries(formData);
        const stringArray = JSON.stringify(array)
        const obj = {array: stringArray, numberChapter: field.number}
        mutate(obj)
    };


    return (
        <div>

            {array.map((item) => (
                <img key={item}
                    width={70 * 2}
                    height={100 * 2}
                    src={`http://localhost:5001/image/${item}`}
                />
            ))}
            <form action={`/api/manga/${id}/createChapters`} method="post" onSubmit={submitPush}>
                <div
                    className="File-container"
                    onClick={() => fileInputRef.current.click()}
                >
                    {!imageUrl ? (
                        <label>Нажмите, чтобы загрузить картинку</label>
                    ) : (
                        <img
                            width={70 * 2}
                            height={100 * 2}
                            src={`http://localhost:5001/image/${imageUrl}`}
                        />
                    )}
                </div>
                <button type="button" onClick={() => setArray(prevArray => [...prevArray, imageUrl])}>Добавить</button>
                <input
                    ref={fileInputRef}
                    type="file"
                    name="fileData"
                    onChange={handleFileChange}
                />
                <input type="text" name="number" placeholder="Номер главы"/>
                <button type="submit">Загрузить</button>
            </form>
        </div>
    );
}

export default ChapterCreate;