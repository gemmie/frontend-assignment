import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { getArticles } from "../api/article";
import { ArticleData } from "../components/Article";
import ArticleList from "../components/ArticleList";
import Filter from "../components/Filter";
import { Header } from "../components/Header";
import { Message } from "../components/Message";
import Sorter from "../components/Sorter";
import { monthsMap, MonthsMapKey, validateMonth } from "../utils";

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 60px 0;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const MainPage = () => {
  const [articles, setArticles] = useState<ArticleData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState<string[]>(["fashion"]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    Promise.all([getArticles("fashion"), getArticles("sports")])
      .then(([resF, resS]) => {
        setArticles(
          resF.concat(resS).map((a) => {
            let d = a.date.split(" ");
            validateMonth(d[1]);
            a.sortingDate = Date.parse(
              a.date.replace(d[1], monthsMap[d[1] as MonthsMapKey])
            );
            return a;
          })
        );
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setOptions((curr) => [...curr, e.target.id]);
    } else {
      setOptions((curr) => (curr = curr.filter((x) => x !== e.target.id)));
    }
  };

  const handleOnClick = () => {
    if (articles && options.length > 0) {
      if (sorted) {
        setArticles([...articles].reverse());
      } else {
        const sortedArt = [...articles].sort(
          (a: ArticleData, b: ArticleData) => {
            return a.sortingDate - b.sortingDate;
          }
        );
        setArticles(sortedArt);
        setSorted(true);
      }
    }
  };
  return (
    <div>
      <Header />
      <Layout>
        <Filter changeHandler={handleOnChange} />
        {loading ? (
          <Message>Loading...</Message>
        ) : error ? (
          <Message>
            Could not connect to server, please try again later...
          </Message>
        ) : (
          <ArticleList props={articles || []} options={options} />
        )}
        <Sorter onClickHandler={handleOnClick} />
      </Layout>
    </div>
  );
};

export default MainPage;
