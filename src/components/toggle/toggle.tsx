import React, { useState } from "react";
import { FieldInputProps } from "react-final-form";
import styled from "styled-components";

type ToggleProps = {
  input: FieldInputProps<any>;
};

export const Toggle = (props: ToggleProps) => {
  const { input } = props;

  const handleClick = () => {
    input.onChange(!input.value);
  };

  return (
    <ToggleRoot $isChecked={input.value} onClick={handleClick}>
      <ToggleHandle $isChecked={input.value} />
    </ToggleRoot>
  );
};

type ToggleContainerProps = {
  $isChecked: boolean;
};

const ToggleRoot = styled.div<ToggleContainerProps>`
  width: 28px;
  height: 14px;
  background-color: ${(props) => (props.$isChecked ? "#233d6b" : "#dcdcdc")};
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

type ToggleHandleProps = {
  $isChecked: boolean;
};

const ToggleHandle = styled.div<ToggleHandleProps>`
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.$isChecked ? "translateX(14px)" : "translateX(0)"};
`;
