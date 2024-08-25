import styled from "styled-components";

export const AuthHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};

  .right_section {
    position: relative;

    .notification_icon {
      animation: shake-rotate linear 0.5s infinite;
      cursor: pointer;
    }
    .badge_number {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.background.errorLight};
      left: -10px;
      top: -8px;
      border-radius: 50%;
      font-size: 12px;
      color: white;
      padding-top: 3px;
      cursor: pointer;
    }

    .info_box {
      .notification_dropdown {
        background-color: ${({ theme }) => theme.colors.background.primary};

        position: absolute;
        top: 50px;
        right: 0;
        box-shadow: ${({ theme }) => theme.colors.shadow.lg};
        border-radius: 10px;
        overflow: hidden;
        z-index: 1000;
        width: 290px;

        .header {
          padding: 11px 14px;
          display: flex;
          align-items: center;
          cursor: default;
          gap: 5px;

          .close_icon {
            cursor: pointer;
          }
          .title {
            font-size: 14px;
            font-weight: 700;
            line-height: 24px;
            margin-bottom: -5px;
          }
        }

        .notifications {
          cursor: default;
          height: 300px;
          overflow-y: scroll;
          .menu_list {
            display: flex;
            flex-direction: column;
            cursor: default;

            .menu_item {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              gap: 10px;
              padding: 16px 13px;
              transition: all 0.2s linear;
              cursor: pointer;
              border-bottom: 1px solid
                ${(props) => props.theme.colors.border.primary};

              .notification_logo {
                width: 35px;
                height: 35px;
                background-color: ${(props) =>
                  props.theme.colors.background.info};
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                .notification_logo_icon {
                  color: #fff;
                }
              }

              .notification_new {
                width: 13px;
                height: 13px;
                background-color: ${(props) =>
                  props.theme.colors.background.errorDark};
                border-radius: 50%;
                margin: 0 3px;
              }

              .notification_close {
                color: ${(props) =>
                  props.theme.colors.background.primaryReverse};
              }

              .notification_info {
                .notification_info_title {
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 20.15px;
                }
                .notification_info_subtitle {
                  font-size: 12px;
                  font-weight: 500;
                  line-height: 15.5px;
                }
              }

              &:hover {
                background-color: ${(props) =>
                  props.theme.colors.background.InfoLight2};
                color: ${(props) => props.theme.colors.text.infoDark};
              }
            }
            .notfound_message {
              text-align: center;
              height: 280px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .empty_text {
                font-size: 14px;
                margin-top: 10px;
                color: ${(props) => props.theme.colors.text.primary};
              }
            }
          }
        }
        .footer {
          padding: 11px 14px;
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 5px;
          .title {
            font-size: 12px;
            font-weight: 700;
            line-height: 18.6px;
            margin-bottom: -5px;
          }
        }
      }
    }
  }
  .left_section {
    display: flex;
    align-items: center;
    gap: 8px;

    .info_box {
      display: flex;
      align-items: center;
      border: 1px solid ${(props) => props.theme.colors.border.primary};
      border-radius: 8px;
      padding: 8px 10px;

      gap: 10px;
      width: 180px;
      position: relative;

      .hospital_icon {
        width: 30px;
        height: 30px;
      }

      .profile_dropdown {
        position: absolute;
        top: 60px;
        left: 0;
        box-shadow: ${({ theme }) => theme.colors.shadow.lg};
        border-radius: 10px;
        overflow: hidden;
        z-index: 1000;
        width: 266px;
        background-color: ${(props) => props.theme.colors.background.primary};

        .header {
          padding: 14px 11px;
          display: flex;
          align-items: center;
          cursor: default;
          gap: 5px;
          border-bottom: 1px solid
            ${(props) => props.theme.colors.border.primary};

          .user_info {
            .user_info_title {
              font-size: 16px;
              font-weight: 500;
              line-height: 24px;
            }
            .user_info_subtitle {
              font-size: 14px;
              font-weight: 500;
              line-height: 21px;
            }
          }
        }

        .profile_box {
          padding: 14px 11px;
          cursor: default;
          .menu_list {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            cursor: default;
            .menu_item {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
              padding: 10px 13px;
              transition: all 0.2s linear;
              cursor: pointer;

              p {
                font-size: 14px;
                font-weight: 500;
                line-height: 21px;
              }

              &:hover {
                background-color: ${(props) =>
                  props.theme.colors.background.InfoLight2};
                border-radius: 5px;
                color: ${(props) => props.theme.colors.text.infoDark};
              }

              &.change_mode {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .change_mode_item {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
              }
            }
          }
          .logout_btn {
            margin-top: 20px !important;
          }
        }
      }

      &.cursor_pointer {
        cursor: pointer;
      }
    }

    .title {
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
    }
    .user_info_skeleton {
      width: 180px;
      height: 50px;
    }
  }

  @media (max-width: 440px) {
    .left_section {
      .info_box {
        border: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        gap: 10px;
        width: auto;
        .title {
          display: none;
        }
      }
      .user_info_skeleton {
        display: none;
      }
    }
  }
`;
