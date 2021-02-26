import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

const CheckInput = styled.input`
  margin-right: 0.5em;
  zoom: 1.4;
  cursor: pointer;
`;

interface Props {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
}

const Checkbox: FC<Props> = ({ id, onChange, defaultChecked }) => {
  return (
    <div>
      <CheckInput
        id={id}
        type={"checkbox"}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
    </div>
  );
};

export default Checkbox;
