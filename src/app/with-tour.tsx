import { TourProvider } from "@reactour/tour";
import { tourConfig } from "config";
import { useWindowDimensions } from "hooks";
import { ITourData, tourData } from "utils";

const withTour = (Component: React.FC, tourName: keyof ITourData) => () => {
  const { width } = useWindowDimensions();
  const { steps } = tourData[tourName];

  if (width < 768) {
    return <Component />;
  } else {
    return (
      <TourProvider steps={steps} {...tourConfig(tourName as string)}>
        <Component />
      </TourProvider>
    );
  }
};

export default withTour;
