import styled from "styled-components";

export const FileUploaderContainer = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 10px;
    font-family: "yekan-bold";
    font-size: 14px;
  }

  .uploader_container {
    padding: 14px;
    border-radius: ${({ theme }) => theme.sizes.border.r_8};
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    .drop_container {
      text-align: center;
      border: 1px dashed ${({ theme }) => theme.colors.border.primary};
      padding: 32px 0;
      border-radius: ${({ theme }) => theme.sizes.border.r_8};
      .drop_title {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.text.secondary};
      }
      .drop_sub_title {
        font-size: 10px;
        margin-top: 10px;
        color: ${({ theme }) => theme.colors.text.secondary};
      }
    }

    .files_container {
      margin-top: 14px;

      &.static_files {
        margin-bottom: -5px;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
        margin: 0;
        li {
          border-radius: ${({ theme }) => theme.sizes.border.r_8};
          background-color: ${({ theme }) => theme.colors.background.secondary};
          padding: 10px 13px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;

          p {
            font-size: 16px;
            font-weight: 700;
            line-height: 19.5px;
            padding-top: 6px;
            color: ${({ theme }) => theme.colors.text.primary};

            &:hover {
              text-decoration: underline;
            }
          }
          .remove_icon {
            cursor: pointer;

            &.disabled {
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .uploader_container {
      .drop_container {
        padding: 18px 0;

        .drop_title {
          font-size: 14px;
        }
        .drop_sub_title {
          margin-top: 8px;
        }
      }

      .files_container {
        margin-top: 12px;
        ul {
          gap: 8px;
          li {
            padding: 8px 10px;
            gap: 8px;
            overflow-x: hidden;

            p {
              font-size: 14px;
              line-height: 17.5px;
              padding-top: 5px;
            }
          }
        }
      }
    }
  }
`;
