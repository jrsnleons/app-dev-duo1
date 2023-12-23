import { useEffect, useState, useRef } from "react";
import { Avatar, StyledButton } from "../misc";
import StyledTextArea from "./TextArea.styled";
import { UserAuth } from '../../utils/contexts';
import {StyledImageInput} from '../misc';
import {storage} from '../../utils/database';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {useDatabase} from '../../utils/hooks';
import {v4} from 'uuid';

export default function PostFieldInput() {
    const textAreaRef = useRef(null);
    const {user} = UserAuth();
    const {addPost} = useDatabase();
    const [val, setVal] = useState("");
    const [img, setImg] = useState(null);
    const [file, setFile] = useState(null);
    const [imgURL, setImgURL] = useState(null);

    const uploadImage = async () => {
        if(file == null) return;
        const imageRef = ref(storage, `images/${file.name + v4()}`);

        uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImgURL(url);
            })
        })
    }

    const handleClick = () => {
        uploadImage().then(() => {
            addPost({
                photoURL: user.photoURL,
                displayName: user.displayName,
                chirper_uid: user.uid,
                content: val,
                image: imgURL, 
                createdAt: new Date(),
            })
        });

        console.log(imgURL);
    }

    const handleChange = (e) => {
       setVal(e.target.value);
    }

    const onImageChange = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val]);

  return (
    <div>
        <div className="flex flex-row pb-5 gap-5 w-full">
            <div>
                <Avatar size={80} src={user.photoURL} />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <StyledTextArea ref={textAreaRef} placeholder="Write a post here" className="text-black bg-transparent w-full p-1 resize-auto resize-none rounded-lg" value={val} onChange={handleChange}/>
                <img src={img} className="w-fit rounded-lg" alt="" />
                <div className="flex flex-row justify-between">
                    <StyledImageInput onChange={onImageChange} className="opacity-10 pt-2 justify-center items-center" type="file" accept="image/png, image/gif, image/jpeg" />
                    <StyledButton onClick={handleClick}>
                        Post
                    </StyledButton>
                </div>
            </div>
        </div>
        <hr className="h-px mt-2 mb-6 bg-gray-700 opacity-30 border-0"></hr>
    </div>
  )
}
