import { ReactElement, ReactNode, type FC } from "react";
import { ChartLayoutContainer } from "../css/chart-card.style";

interface IChartLayoutProps {
  title: string;
  leftOption?: ReactElement;
  children: ReactNode;
}

const ChartCard: FC<IChartLayoutProps> = ({ children, title, leftOption }) => {
  return (
    <ChartLayoutContainer>
      <div className="chart_card_top_section">
        <p className="chart_card_title">{title}</p>
        {leftOption && (
          <div className="chart_card_left_option"> {leftOption}</div>
        )}
      </div>
      {children}
    </ChartLayoutContainer>
  );
};

export default ChartCard;
