import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FieldInputProps } from "react-final-form";
import styled from "styled-components";
import Image from "next/image";

import { Button, ButtonVariant } from "../button";
import { Primary } from "../typography";

import fileIcon from "./file-icon.svg";

type FileLoaderProps = {
  input: FieldInputProps<any>;
  actionName: string;
};

export const Dropzone = (props: FileLoaderProps) => {
  const { input, actionName } = props;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      input.onChange(acceptedFiles[0]);
    },
    [input]
  );
  const { getRootProps, getInputProps, open } = useDropzone({
    maxFiles: 1,
    onDrop,
  });

  const inputProps = getInputProps();

  return (
    <Wrap>
      <DropzoneRoot {...getRootProps()}>
        <input {...inputProps} />

        {input.value ? (
          <Primary>{input.value.name}</Primary>
        ) : (
          <>
            <ImageWrap>
              <Image src={fileIcon} alt="File icon" width={32} height={32} />
            </ImageWrap>

            <Primary>
              Drag & Drop Here Or <Primary $bold>Browse</Primary>
            </Primary>
          </>
        )}
      </DropzoneRoot>

      <Button $variant={ButtonVariant.Primary} onClick={() => open()}>
        {actionName}
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #aeaeae;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
`;

const DropzoneRoot = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 2px dashed #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ImageWrap = styled.div`
  margin-bottom: 10px;
  color: yellow;
`;
