import { Input, Button } from "antd";
import { useState } from "react";
import { Title } from "./CommonStyles";
import styled from "styled-components";
import { FileImageOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";

const { TextArea } = Input;
type DiaryInputProps = {
    isLoading: boolean;
    onSubmit: (input: string) => void;
    messageApi: {
        open: (options: { type: "error" | "success", content: string }) => void;
    };
};

const DiaryInput = ({ isLoading, onSubmit, messageApi }:DiaryInputProps) => {
    const [userInput, setUserInput] = useState("");
    // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달

    // loading 상태 - 사용자가 제출버튼을 못 누르도록 처리
    const handleUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    const handleClick = () => {
        if (!userInput) {
            messageApi.open({
                type: "error",
                content: "일과를 적어주세요.",
            });
            return;
        }
        messageApi.open({
            type: "success",
            content: "생성 요청 완료",
        });

        onSubmit(userInput);
        setUserInput("");
    };

    const captureAndDownload = async () => {
        const nodeToCapture = document.getElementById("capture");
        if (!nodeToCapture) {
            messageApi.open({
                type: "error",
                content: "캡처할 요소를 찾을 수 없습니다.",
            });
            return;
        }

        html2canvas(nodeToCapture, {
            allowTaint: true,
            useCORS: true,
        }).then(function (canvas) {
            // 스크린샷을 이미지로 변환합니다.
            const image = canvas.toDataURL("image/png");
            // 이미지를 다운로드할 수 있는 링크를 생성합니다.
            const a = document.createElement("a");
            a.href = image;
            a.download = "gpt-diary-result.png";
            a.click();
        });
    };

    return (
        <div>
            <Title>오늘의 일</Title>
            <TextArea
                value={userInput}
                onChange={handleUserInput}
                placeholder="오늘 일어난 일들을 간단히 적어주세요."
                style={{ height: "200px" }}
            />
            <ButtonContainer>
                <Button loading={isLoading} onClick={handleClick}>
                    GPT 회고록을 작성해줘!
                </Button>
                <Button
                    icon={<FileImageOutlined />}
                    loading={isLoading}
                    onClick={captureAndDownload}
                >
                    저장
                </Button>
            </ButtonContainer>
            <canvas id="canvas" style={{ display: "none" }}></canvas>
        </div>
    );
};

export default DiaryInput;

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 5px;
`;