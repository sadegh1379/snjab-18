import type { FC } from "react";
import { FooterContainer } from "../css/footer.style";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <p className="title">
        طراحی و پیاده سازی توسط شرکت دانش بنیان نوآوران سلامت گستر شریف، تمامی
        حقوق متعلق به سامانه سنجاب است
      </p>
    </FooterContainer>
  );
};

export default Footer;
