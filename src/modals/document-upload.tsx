"use client";

import styled from "styled-components";

import { H1 } from "@/components/typography";
import { DocumentUpladForm } from "./document-upload-form";

type DocumentUploadModalProps = {
  onClose: () => void;
};

export const DocumentUploadModal = (props: DocumentUploadModalProps) => {
  const { onClose } = props;

  return (
    <Backdrop>
      <DocumentUploadRoot>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Header>Document Upload</Header>
        <Divider />

        <DocumentUpladForm />
      </DocumentUploadRoot>
    </Backdrop>
  );
};

const Divider = styled.div`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 240px;
  height: 2px;
  background-color: #e5e5e5;
`;

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const DocumentUploadRoot = styled.div`
  position: relative;
  background: #ffffff;
  width: 800px;
  padding: 20px;
  border-radius: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: #233d6b;
  font-weight: bold;
  padding: 0;
  margin: 0;
  width: 35px;
  height: 30px;
  border-radius: 8px;
`;

const Header = styled(H1)`
  text-align: center;
`;
