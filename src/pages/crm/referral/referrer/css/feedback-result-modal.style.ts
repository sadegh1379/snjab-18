import styled from "styled-components";

export const FeedbackResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .subject {
    font-size: 12px;
    font-family: "yekan-bold";
    line-height: 25.8px;
    text-align: center;
  }

  .chat_card {
    padding: 14px 18px;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 5px;
    height: 500px;
    overflow-y: scroll;
    margin-top: 10px;
    position: relative;

    .chat_container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &.me {
        align-items: flex-start;
      }

      &.you {
        align-items: flex-end;
      }

      .bubble_box {
        position: relative;
        border-radius: 10px;
        display: inline-block;
        padding: 10px 13px;
        max-width: 60%;
        font-size: 14px;
        font-family: "yekan-bold";
        line-height: 19.35px;
        margin-top: 30px;
        text-align: justify;
        .dot {
          background-color: #fff;
        }

        &.me {
          background-color: ${({ theme }) => theme.colors.background.infoLight};
          border-bottom-right-radius: 0;
          color: #ffffff;
          direction: rtl;
        }

        &.you {
          border-bottom-left-radius: 0;
          background-color: ${({ theme }) => theme.colors.background.secondary};
          direction: ltr;
        }

        .info {
          position: absolute;
          width: max-content;
          bottom: -25px;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5px;
          width: 100%;

          .username {
            color: ${({ theme }) => theme.colors.text.primary};
            font-size: 12px;
            font-family: "yekan-bold";
            line-height: 19.35px;
            white-space: nowrap;
          }

          .date {
            color: ${({ theme }) => theme.colors.text.primary};
            font-size: 12px;
            font-family: "yekan-bold";
            line-height: 19.35px;
            white-space: nowrap;
          }
        }

        .file_body {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;

          .file_name {
            &.me {
              color: #fff;
            }

            &.you {
              color: ${({ theme }) => theme.colors.text.primary};
            }
          }
          .file_icon {
            padding: 5px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &.me {
              border: 1px solid
                ${({ theme }) => theme.colors.background.secondary};
            }

            &.you {
              border: 1px solid
                ${({ theme }) => theme.colors.background.primaryReverse};
            }
          }
        }
      }
    }

    .suggestions_container {
      display: flex;
      flex-direction: row;
      gap: 5px;
      overflow-x: scroll;
      width: 99%;

      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .suggestion {
        padding: 5px 10px;
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
        font-size: 12px;
        font-family: "yekan-bold";
        line-height: 20px;
        border-radius: 40px;
        white-space: nowrap;
        cursor: pointer;
      }
    }
  }
  .chat_input_container {
    position: relative;

    .send {
      position: absolute;
      right: 10px;
      top: 9px;
      border-left: 1px solid ${({ theme }) => theme.colors.border.primary};
      padding-left: 10px;
      color: ${({ theme }) => theme.colors.background.info};
    }

    .add {
      position: absolute;
      left: 10px;
      top: 15px;
    }

    .chat_file_input {
      display: none;
    }

    .chat_input {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
      border-radius: 9px;
      border: 1px solid ${({ theme }) => theme.colors.border.primary};
      font-size: 17px;
      padding: 15px 60px 14px 50px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 12px;
        line-height: 18px;
      }
      &:disabled {
        background-color: ${({ theme }) => theme.colors.background.secondary};
      }
    }

    .file_name_display {
      margin-top: 12px;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
