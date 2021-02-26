import React, { FC } from "react";
import styled from "styled-components";
import { ArticleData } from "../ArticleData";
import { Article } from "./Article";
import { Message } from "./Message";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;

  @media (max-width: 800px) {
    padding: 0 1rem;
    order: 3;
    flex: 2 0 0;
    flex-basis: 70%;
  }
`;

const ListItem = styled.li`
  padding: 0.75rem 0 0.75rem 0;
  border-bottom: 1px solid lightgray;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border: none;
  }
`;

interface Props {
  props: ArticleData[];
  options: string[];
}

const ArticleList: FC<Props> = ({ props, options }) => {
  return (
    <List>
      {options.length > 0 ? (
        props
          .filter((p) => options.includes(p.category))
          .map((p) => <ListItem key={p.id}>{<Article data={p} />}</ListItem>)
      ) : (
        <Message>Please select at least one category...</Message>
      )}
    </List>
  );
};

export default ArticleList;
