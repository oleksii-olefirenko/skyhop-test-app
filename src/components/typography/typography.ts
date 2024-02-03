"use client";

import styled, { css } from "styled-components";

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0.67em 0;
  color: #233d6b;
`;

type PrimaryProps = {
  $bold?: boolean;
  $green?: boolean;
};

export const Primary = styled.span<PrimaryProps>`
  font-size: 14px;
  font-weight: 400;
  color: #233d6b;

  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: 700;
    `}

  ${({ $green }) =>
    $green &&
    css`
      color: #4caf50;
    `}
`;
