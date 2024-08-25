import { FC } from "react";
import Button from "react-bootstrap/Button";
import { default as BButtonGroup } from "react-bootstrap/ButtonGroup";
import { ButtonContainer } from "./button-group.style";
import { IButtonGroups } from "./types";

export const ButtonGroup: FC<IButtonGroups> = ({
  items,
  containerClassName,
  buttonsClassName,
  value,
  onClick,
  title,
  required = false,
}) => {
  return (
    <ButtonContainer className={containerClassName || ""}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <BButtonGroup>
        {items.map((item) => (
          <Button
            key={item.title}
            className={`btn_group_item ${value === item.value ? "active" : ""} ${buttonsClassName || ""}`}
            onClick={() => onClick(item.value)}
          >
            {item.title}
          </Button>
        ))}
      </BButtonGroup>
    </ButtonContainer>
  );
};
