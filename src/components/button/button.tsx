"use client";

import styled, { css } from "styled-components";

export enum ButtonVariant {
  Primary,
  Secondary,
}

type ButtonProps = {
  $variant?: ButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  font-size: 14px;
  text-align: center;
  border-radius: 10px;
  color: #ffffff;
  height: 44px;
  padding: 0 50px;
  min-width: 150px;

  transition: all 0.3s ease;

  ${(props) =>
    props.$variant === ButtonVariant.Primary
      ? css`
          background: #233d6b;
          border: 1px solid #233d6b;

          &:hover {
            background: #1a2f4e;
          }
        `
      : css`
          background: #ffffff;
          border: 2px solid #f8a83d;
          color: #f8a83d;

          &:hover {
            background: #f8a83d;
            color: #ffffff;
          }
        `}
`;
