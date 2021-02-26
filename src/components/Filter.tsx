import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  font-size: 17px;

  @media (max-width: 600px) {
    order: 1;
    flex: 1 0 0;
    flex-basis: auto;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Checkbox = styled.input`
  margin-right: 0.5em;
  zoom: 1.4;
  cursor: pointer;
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
      <CheckboxWrapper>
        <div>
          <Checkbox
            id={"fashion"}
            type={"checkbox"}
            onChange={changeHandler}
            defaultChecked={true}
          />
          <label htmlFor={"fashion"}>Fashion</label>
        </div>
        <div>
          <Checkbox id={"sport"} type={"checkbox"} onChange={changeHandler} />
          <label htmlFor={"sport"}>Sports</label>
        </div>
      </CheckboxWrapper>
    </Wrapper>
  );
};

export default Filter;
