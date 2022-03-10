// eslint-disable-next-line no-unused-expressions
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

function SnsCard() {
    
    let FlexStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    `
    let ImgStyled = styled.a`
    width: 16%;
    height: 300px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    text-decoration: none;
    position: relative;
    cursor: pointer;

    &:hover {
        background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${(props) => props.url});
        box-shadow: 5px 10px 20px 2px rgba(0,0,0,0.253);
        transition: 0.5s;
    }

    @media screen and (max-width: 768px) {
        margin: 1.2%;
        width: 45%
    }
    `
    let [isHover, setIsHover] = useState(false)
    let [imgList, setImgList] = useState([
        {
            id: 1, src: `${process.env.PUBLIC_URL}/img/instagram01.jpg`,
        },
        {
            id: 2, src: `${process.env.PUBLIC_URL}/img/instagram02.jpg`,
        },
        {
            id: 3, src: `${process.env.PUBLIC_URL}/img/instagram03.jpg`,
        },
        {
            id: 4, src: `${process.env.PUBLIC_URL}/img/instagram04.jpg`,
        },
        {
            id: 5, src: `${process.env.PUBLIC_URL}/img/instagram05.jpg`,
        },
        {
            id: 6, src: `${process.env.PUBLIC_URL}/img/instagram06.jpg`,
        }
    ])

    return (
        <div className="mt-5">

            <h3>INSTAGRAM</h3>
            <p>@A_PlusShop</p>

            <FlexStyled>
                {imgList.map((item, index) => {
                    return <ImgStyled key={index} url={item.src}
                        >
                        <span style={{position: "absolute", right: "1rem", top:"0.5rem"}}>🤍</span> 
                        </ImgStyled>
                })}
                {/* <img src={imgList[1].src}/> */}
            </FlexStyled>

        </div>
    )
} export default SnsCard;