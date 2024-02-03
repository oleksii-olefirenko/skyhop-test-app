import { Field, Form } from "react-final-form";
import styled from "styled-components";
import Image from "next/image";

import { Dropzone } from "@/components/dropzone";
import { Select } from "@/components/select";
import { Primary } from "@/components/typography";
import { Toggle } from "@/components/toggle";

import clockIcon from "./clock-icon.png";
import { Button, ButtonVariant } from "@/components/button";

export const DocumentUpladForm = () => {
  return (
    <Form
      onSubmit={(values) => {
        console.log("submit", values);
      }}
      render={({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FieldsRootContainer>
              <MainContainer>
                <Field name="importName" render={Select}>
                  <option value="1">Select Import Name</option>
                </Field>
                <Divider />

                <Primary $bold>
                  Select a manifest you&apos;d like to import
                </Primary>

                <Field
                  name="file"
                  render={(props) => (
                    <Dropzone {...props} actionName="Upload manifest" />
                  )}
                />
                <Divider />

                <Primary $bold>Elapse Data Checking</Primary>
                <TextRow $bold $green>
                  No Elapsed Data!
                </TextRow>

                <Divider />

                <Primary $bold>Tolerance Window:</Primary>

                <TolernaceRow>
                  <Field name="toleranceWindow" render={Toggle} />

                  <Primary>
                    Toggle {values.toleranceWindow ? "ON" : "OFF"}
                  </Primary>
                  {values.toleranceWindow && (
                    <>
                      <ToleranceDivider />
                      <Image
                        src={clockIcon}
                        alt="clock-icon"
                        width={18}
                        height={18}
                      />
                      <Primary>Select Tolerance Level</Primary>
                    </>
                  )}
                </TolernaceRow>
              </MainContainer>

              <SideContainer>
                <Primary $bold>Split schedule using social distancing?</Primary>
                <RadioRow>
                  <RadioWrap>
                    <Field
                      name="splitSchedule"
                      component="input"
                      type="radio"
                      value="Yes"
                    />
                    <Primary>Yes</Primary>
                  </RadioWrap>
                  <RadioWrap>
                    <Field
                      name="splitSchedule"
                      component="input"
                      type="radio"
                      value="No"
                    />
                    <Primary>No</Primary>
                  </RadioWrap>
                </RadioRow>
                <Divider />

                <Primary $bold>Location checking:</Primary>
                <TextRow $bold $green>
                  All Available!
                </TextRow>
                <Divider />

                <Primary $bold>Client:</Primary>
                <RadioRow>
                  <RadioWrap>
                    <Field
                      name="client"
                      component="input"
                      type="radio"
                      value="single"
                    />
                    <Primary>Single</Primary>
                  </RadioWrap>
                  <RadioWrap>
                    <Field
                      name="client"
                      component="input"
                      type="radio"
                      value="multiple"
                    />
                    <Primary>Multiple</Primary>
                  </RadioWrap>
                </RadioRow>

                <TestingCenterRow>
                  <Primary>Testing Center 1</Primary>
                  <Field
                    name="testingCenter1"
                    render={(props) => <Select {...props} $width="130px" />}
                  >
                    <option value="1">Select client</option>
                  </Field>
                  <Image
                    src={clockIcon}
                    alt="clock-icon"
                    width={18}
                    height={18}
                  />
                </TestingCenterRow>
                {/* / 4 more clients go next */}
                <TestingCenterRow>
                  <Primary>Testing Center 2</Primary>
                  <Field
                    name="testingCenter2"
                    render={(props) => <Select {...props} $width="130px" />}
                  >
                    <option value="1">Select client</option>
                  </Field>
                  <Image
                    src={clockIcon}
                    alt="clock-icon"
                    width={18}
                    height={18}
                  />
                </TestingCenterRow>
                <TestingCenterRow>
                  <Primary>Testing Center 3</Primary>
                  <Field
                    name="testingCenter3"
                    render={(props) => <Select {...props} $width="130px" />}
                  >
                    <option value="1">Select client</option>
                  </Field>
                  <Image
                    src={clockIcon}
                    alt="clock-icon"
                    width={18}
                    height={18}
                  />
                </TestingCenterRow>
                <TestingCenterRow>
                  <Primary>Testing Center 4</Primary>
                  <Field
                    name="testingCenter4"
                    render={(props) => <Select {...props} $width="130px" />}
                  >
                    <option value="1">Select client</option>
                  </Field>
                  <Image
                    src={clockIcon}
                    alt="clock-icon"
                    width={18}
                    height={18}
                  />
                </TestingCenterRow>
              </SideContainer>
            </FieldsRootContainer>
            <CheckResultRow>
              <Primary $bold>
                Data in the import file is correct. Please press Continue to
                Import
              </Primary>
            </CheckResultRow>
            <ButtonsRow>
              <Button type="submit" $variant={ButtonVariant.Primary}>
                Continue Import
              </Button>
              <Button type="button">Cancel</Button>
            </ButtonsRow>
          </form>
        );
      }}
    />
  );
};

const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;
  margin-top: 16px;
`;

const CheckResultRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const TestingCenterRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: 16px;
`;

const RadioWrap = styled.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const RadioRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin: 20px 0;
`;

const TextRow = styled(Primary)`
  margin-top: 10px;
`;

const TolernaceRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-top: 10px;
`;

const ToleranceDivider = styled.div`
  height: 18px;
  width: 2px;
  background-color: #233d6b;
`;

const FieldsRootContainer = styled.div`
  display: flex;
  column-gap: 40px;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 0 0 450px;
  flex-direction: column;
  justify-content: flex-start;
`;

const SideContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const Divider = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 250px;
  height: 2px;
  background-color: #e5e5e5;
`;
