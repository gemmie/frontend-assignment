import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const SorterWrapper = styled.div`
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;

  @media (max-width: 600px) {
    order: 2;
    flex: 1 0 0;
    flex-basis: auto;
  }
`;

const Sort = styled.div`
  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;
  text-align: right;

  &:hover {
  }
`;

interface Props {
  onClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const Sorter: FC<Props> = ({ onClickHandler }) => {
  return (
    <SorterWrapper>
      <Sort onClick={onClickHandler}>
        Sort by date <FontAwesomeIcon icon={faSort} />
      </Sort>
    </SorterWrapper>
  );
};

export default Sorter;
