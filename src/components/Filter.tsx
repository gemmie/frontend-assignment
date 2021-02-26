import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  font-size: 17px;
  white-space: nowrap;

  @media (max-width: 800px) {
    order: 1;
    flex: 1 0 0;
    flex-basis: auto;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const DataSource = styled.span`
  padding-right: 1em;
`;

interface Props {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: FC<Props> = ({ changeHandler }) => {
  return (
    <Wrapper>
      <DataSource>Data sources:</DataSource>
      <FlexColumn>
        <Checkbox
          id={"fashion"}
          onChange={changeHandler}
          defaultChecked={true}
        />
        <Checkbox id={"sport"} onChange={changeHandler} />
      </FlexColumn>
    </Wrapper>
  );
};

export default Filter;
