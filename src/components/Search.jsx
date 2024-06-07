import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {

    const [input,setInput]=useState("");

    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input);
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)}
            type="text" value={input} placeholder="Search your favourite"/>
        </div>
    </FormStyle>
  )
}

const FormStyle=styled.form`
    margin:2rem 0rem;
    width:100%;

    div{
        width:100%;
        position:relative;
    }

    input{
        border:none;
        width:100%;
        background:linear-gradient(35deg,#494949,#313131);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border-radius:1rem;
        outline:none;
        box-sizing:border-box;
    };

    svg{
        position:absolute;
        top:50%;
        left:1rem;
        transform:translateY(-50%);
        color:white;
        font-size:1.5rem;
    };
`;

export default Search
