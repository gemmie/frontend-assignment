import React, { FC, useState } from "react";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
`;

const ArticleBox = styled.div`
  display: flex;
`;

const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1em;
`;

const Headline = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1em;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 30px;
  padding-right: 20px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 17px;
    font-weight: bold;
    padding-right: 0;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
`;

const Preambule = styled.div`
  align-items: flex-start;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 30%;
  object-fit: cover;
`;

const ImageFallback = styled.div`
  width: 61%;
  background-color: lightgray;
  font-size: 15px;
`;

export interface ArticleData {
  id: number;
  image: string;
  title: string;
  preamble: string;
  date: string;
  category: string;
  sortingDate: number;
}

interface Props {
  data: ArticleData;
}

export const Article: FC<Props> = ({ data }) => {
  const [imgError, setImgError] = useState(false);
  const handleOnError = () => {
    setImgError(true);
  };

  return (
    <ArticleWrapper>
      <ArticleBox>
        {imgError ? (
          <ImageFallback>
            <p>This image is broken ;(</p>
          </ImageFallback>
        ) : (
          <Image
            alt={"This image is broken ;("}
            src={data.image}
            onError={handleOnError}
          />
        )}
        <TextPart>
          <Headline>
            <Title>{data.title}</Title>
            <Date>{data.date}</Date>
          </Headline>
          <Preambule>{data.preamble}</Preambule>
        </TextPart>
      </ArticleBox>
    </ArticleWrapper>
  );
};
