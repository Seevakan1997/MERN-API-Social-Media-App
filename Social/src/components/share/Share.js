import React, { useContext, useRef, useState } from 'react'
import './share.css'
import { PermMedia as PermMediaIcon, Label as LabelIcon, Room as RoomIcon, EmojiEmotions  as EmojiEmotionsIcon } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import {Cancel as CancelIcon} from '@mui/icons-material';

export default function Share() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e)=>{
    e.preventDefault()
    const newPost = {
      userId:user._id,
      desc:desc.current.value
    }

    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file",file);
      newPost.img = fileName;
      console.log(newPost);
      try{
        await axios.post("/upload",data);
      }catch(err){
        console.log(err);
      }

    }

    try{
      await axios.post("/posts",newPost)
      window.location.reload();
    }catch(err){
      
    }

  }
    return (
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
              <img className="shareProfileImg" src={user.profilePicture ? user.profilePicture : PF+"no-profile.jpg"} alt="" />
              <input
                placeholder={"What's in your mind " + user.username +"?"}
                className="shareInput" ref={desc}
              />
            </div>
            <hr className="shareHr"/>
            {file && (
              <div className='shareImgContainer'>
                <img src={URL.createObjectURL(file)} alt='' className='shareImg'/>
                <CancelIcon className='shareCancelImg' onClick={()=>setFile(null)}/>
              </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display:"none"}} type='file' id='file' accept='.png,.jpeg,jpg' onChange={(e)=>setFile(e.target.files[0])}></input>
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type='submit'>Share</button>
            </form>
          </div>
        </div>
      );
}
