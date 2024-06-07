import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react';

function RecipeInfo() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const dataDetails = await data.json();
        setDetails(dataDetails);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <ButtonWrapper>
                    <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
                        Instructions
                    </Button>
                    <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
                        Ingredients
                    </Button>
                </ButtonWrapper>
                <Content activeTab={activeTab}>
                    {activeTab === "instructions" && (
                        <div>
                            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                        </div>
                    )}
                    {activeTab === "ingredients" && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    )}
                </Content>
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    align-items: flex-start;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 1.5rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    ul {
        margin-top: 1.5rem;
    }
    img {
        max-width: 400px;
        height: auto;
        border-radius: 10px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    padding: 1rem 1.5rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    font-weight: 600;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }
`;

const Info = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
    max-width: 700px;
    h3 {
        font-size: ${props => props.activeTab === 'instructions' ? '1rem' : '1.2rem'};
        font-weight: ${props => props.activeTab === 'instructions' ? 'normal' : 'bold'};
        line-height: 1.5;
    }
`;

export default RecipeInfo;
