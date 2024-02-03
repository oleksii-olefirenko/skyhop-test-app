import { ComponentProps } from "react";
import styled, { css } from "styled-components";
import { FieldInputProps } from "react-final-form";

type SelectProps = ComponentProps<"select"> &
  SelectRootProps & {
    input: FieldInputProps<any>;
  };

export const Select = (props: SelectProps) => {
  const { input, ...rest } = props;

  return <SelectRoot {...input} {...rest} />;
};

type SelectRootProps = {
  $fullWidth?: boolean;
  $width?: string;
};

export const SelectRoot = styled.select<SelectRootProps>`
  border: 1px solid #aeaeae;
  border-radius: 10px;
  min-width: 50px;
  height: 40px;
  padding: 10px;
  padding-bottom: 0;

  background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
    no-repeat;
  background-position: calc(100% - 0.75rem) center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}
`;
