import {
  GETCauseCharts,
  GETGenderChart,
  GETHospitalizationCharts,
  GETPriorityCharts,
  GETSubmittedByCharts,
  GETTargetGroupCharts,
  GETWardCharts,
} from "api/crm";
import {
  ICauseChartsResponse,
  IGenderChartResponse,
  IHospitalizationChartsResponse,
  IPriorityChartsResponse,
  ISubmittedByChartsResponse,
  ITargetGroupChartsResponse,
  IWardChartsResponse,
} from "api/crm/types";
import { useEffect, useMemo, useState } from "react";
import { chartColorPalettes } from "style/app-theme";

interface CrmDashboardProps {
  selectedYear: string;
  groupSelectedWard: string;
  categorySelectedWard: string;
  causeSelected?: string;
  reportType: string;
}

export const useCrmDashboard = ({
  selectedYear,
  groupSelectedWard,
  categorySelectedWard,
  causeSelected,
  reportType,
}: CrmDashboardProps) => {
  const [loadings, setLoadings] = useState({
    genderChart: false,
    submittedByChart: false,
    priorityChart: false,
    wardChart: false,
    hospitalizationChart: false,
    targetGroupChart: false,
    causeCharts: false,
  });

  const [genderChart, setGenderChart] = useState<IGenderChartResponse | null>(
    null
  );
  const [submittedByChart, setSubmittedByChart] =
    useState<ISubmittedByChartsResponse | null>(null);
  const [priorityChart, setPriorityChart] =
    useState<IPriorityChartsResponse | null>(null);
  const [wardChart, setWardChart] = useState<IWardChartsResponse[] | null>(
    null
  );
  const [hospitalizationWardChart, setHospitalizationWardChart] = useState<
    IHospitalizationChartsResponse[] | null
  >(null);
  const [targetGroupChart, setTargetGroupChart] = useState<
    ITargetGroupChartsResponse[] | null
  >(null);
  const [causeCharts, setCauseCharts] = useState<ICauseChartsResponse[] | null>(
    null
  );

  const isCriticism = reportType === "report";

  useEffect(() => {
    setLoadings((prev) => ({
      ...prev,
      genderChart: true,
      submittedByChart: true,
      priorityChart: true,
      wardChart: true,
      hospitalizationChart: true,
    }));

    const fetchChartData = async () => {
      const [
        genderRes,
        submittedByRes,
        priorityRes,
        wardRes,
        hospitalizationWardRes,
      ] = await Promise.all([
        GETGenderChart({ year: selectedYear, is_criticism: isCriticism }),
        GETSubmittedByCharts({
          year: selectedYear,
          is_criticism: isCriticism,
        }),
        GETPriorityCharts({ year: selectedYear, is_criticism: isCriticism }),
        GETWardCharts({ year: selectedYear, is_criticism: isCriticism }),
        GETHospitalizationCharts({
          year: selectedYear,
          is_criticism: isCriticism,
        }),
      ]);

      setGenderChart(genderRes);
      setSubmittedByChart(submittedByRes);
      setPriorityChart(priorityRes);
      setWardChart(wardRes);
      setHospitalizationWardChart(hospitalizationWardRes);

      setLoadings((prev) => ({
        ...prev,
        genderChart: false,
        submittedByChart: false,
        priorityChart: false,
        wardChart: false,
        hospitalizationChart: false,
      }));
    };
    fetchChartData();
  }, [selectedYear, isCriticism]);

  useEffect(() => {
    setLoadings((prev) => ({ ...prev, targetGroupChart: true }));
    GETTargetGroupCharts({
      year: selectedYear,
      is_criticism: isCriticism,
      ward: groupSelectedWard,
    }).then((res) => {
      setTargetGroupChart(res);
      setLoadings((prev) => ({ ...prev, targetGroupChart: false }));
    });
  }, [selectedYear, isCriticism, groupSelectedWard]);

  useEffect(() => {
    setLoadings((prev) => ({ ...prev, causeCharts: true }));
    GETCauseCharts({
      year: selectedYear,
      is_criticism: isCriticism,
      ward: categorySelectedWard,
      cause: causeSelected,
    }).then((res) => {
      setCauseCharts(res);
      setLoadings((prev) => ({ ...prev, causeCharts: false }));
    });
  }, [selectedYear, isCriticism, categorySelectedWard, causeSelected]);

  const genderChartSeries = useMemo(() => {
    return [
      {
        name: "Share",
        type: "pie" as const,
        colors: chartColorPalettes.sunset,
        data: genderChart
          ? Object.entries(genderChart).map(([name, value]) => ({
              name,
              y: value,
            }))
          : [],
      },
    ];
  }, [genderChart]);

  const submittedByChartSeries = useMemo(() => {
    return [
      {
        name: "Share",
        type: "pie" as const,
        colors: chartColorPalettes.sunset,
        data: submittedByChart
          ? Object.entries(submittedByChart).map(([name, value]) => ({
              name,
              y: value,
            }))
          : [],
      },
    ];
  }, [submittedByChart]);

  const priorityChartsSeries = useMemo(() => {
    return [
      {
        name: "Share",
        type: "pie" as const,
        colors: chartColorPalettes.sunset,
        data: priorityChart
          ? Object.entries(priorityChart).map(([name, value]) => ({
              name,
              y: value,
            }))
          : [],
      },
    ];
  }, [priorityChart]);

  const wardChartsSeries = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];

    wardChart?.forEach((item) => {
      categories.push(item.ward);
      data.push(item.count);
    });

    return {
      categories,
      series: [
        {
          type: "column" as const,
          name: "بخش",
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              { 0: 0, 1: "#2f54fd" },
              { 0: 1, 1: "#8797f3" },
            ],
          },
          data,
        },
      ],
    };
  }, [wardChart]);

  const hospitalizationChartsSeries = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];

    hospitalizationWardChart?.forEach((item) => {
      categories.push(item.ward);
      data.push(item.count);
    });

    return {
      categories,
      series: [
        {
          type: "column" as const,
          name: "بخش",
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              { 0: 0, 1: "#ad42f4" },
              { 0: 1, 1: "#d29ce2" },
            ],
          },
          data,
        },
      ],
    };
  }, [hospitalizationWardChart]);

  const targetGroupChartsSeries = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];

    targetGroupChart?.forEach((item) => {
      categories.push(item.group);
      data.push(item.count);
    });

    return {
      categories,
      series: [
        {
          type: "column" as const,
          name: "گروه",
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              { 0: 0, 1: "#e92a33" },
              { 0: 1, 1: "#e29c9c" },
            ],
          },
          data,
        },
      ],
    };
  }, [targetGroupChart]);

  const causeChartsSeries = useMemo(() => {
    const categories: string[] = [];
    const data: number[] = [];

    causeCharts?.forEach((item) => {
      categories.push(item.cause);
      data.push(item.count);
    });

    return {
      categories,
      series: [
        {
          type: "column" as const,
          name: "علت",
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              { 0: 0, 1: "#e0d31e" },
              { 0: 1, 1: "#e0e9b9" },
            ],
          },
          data,
        },
      ],
    };
  }, [causeCharts]);

  return {
    loadings,
    genderChartSeries,
    submittedByChartSeries,
    priorityChartsSeries,
    wardChartsSeries,
    hospitalizationChartsSeries,
    targetGroupChartsSeries,
    causeChartsSeries,
  };
};
