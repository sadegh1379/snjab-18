import * as Highcharts from "highcharts";
import { useTheme } from "styled-components";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

interface CustomHighchartsOptions {
  isLoading?: boolean;
  loadingText?: string;
  chartRef?: React.MutableRefObject<Highcharts.Chart | undefined>;
  series?: Highcharts.SeriesOptionsType[];
  chartType: Highcharts.SeriesOptionsType["type"];
  chartTitle?: string;
  chartCaption?: string;
  chartHeight?: number;
  allowDecimals?: boolean;
}

export const getHighchartsOptions = ({
  isLoading = false,
  allowDecimals = false,
  loadingText = "...در حال بارگذاری",
  chartRef,
  series = [],
  chartTitle,
  chartCaption,
  chartHeight,
  chartType,
  ...restProps
}: Highcharts.Options & CustomHighchartsOptions): Highcharts.Options => {
  const { colors } = useTheme();

  return {
    ...restProps,
    lang: {
      exportInProgress: "...در حال گرفتن خروجی",
    },

    plotOptions: {
      pie: {
        borderWidth: 2,
        cursor: "pointer",
        innerSize: "40%",
        borderRadius: 8,
        // showInLegend: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    title: {
      text: chartTitle,
      style: { color: colors.text.primary },
      ...restProps.title,
    },
    subtitle: {
      text: chartCaption,
      style: { color: colors.text.primary },
      ...restProps.subtitle,
    },

    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      borderColor: colors.text.primary,
      borderRadius: 8,
      padding: 10,
      style: {
        color: "#FFFFFF",
        fontWeight: "bold",
        direction: "rtl",
        textAlign: "right",
      },
      shadow: {
        color: "rgba(0, 0, 0, 0.5)",
        offsetX: 0,
        offsetY: 0,
        width: 10,
        opacity: 0.5,
      },
      useHTML: true,
      formatter: function () {
        let formattedValue;

        if (chartType === "column") {
          formattedValue = `
                <div style="text-align: center; min-width: 100px;">
                    <div style=" font-size: 10px; border-bottom: 1px solid gray; color: ${this.color}; padding-bottom: 8px; margin-bottom: 8px;">${this.series.name}</div>
                    <span style="font-size: 12px;">${this.x}</span>: &nbsp;<span style="font-size: 16px;">${this.y}</span>
                </div>`;
        } else {
          formattedValue = `
                <div style="text-align: center;">
                    <span style="font-size: 16px; color: ${this.color};">${this.point.name}</span><br>
                    <span style="font-size: 16px;">${this.y}</span> (${this.point?.percentage?.toFixed(1)}%)
                </div>`;
        }

        return formattedValue;
      },
      ...restProps.tooltip,
    },
    exporting: {
      enabled: true,
      showExportInProgress: true,
      buttons: {
        contextButton: {
          theme: {
            fill: "transparent",
          },
          menuItems: [
            "viewFullscreen",
            "printChart",
            "downloadPNG",
            "downloadPDF",
            "downloadXLS",
            "downloadCSV",
          ],
          className: "highcharts_export_menu",
        },
      },
      menuItemDefinitions: {
        downloadPNG: { text: "دانلود تصویر PNG" },
        downloadPDF: { text: "دانلود فایل PDF" },
        downloadXLS: { text: "دانلود فایل اکسل" },
        downloadCSV: { text: "دانلود فایل CSV" },
        printChart: { text: "چاپ نمودار" },
        viewFullscreen: { text: "مشاهده تمام صفحه" },
      },
      accessibility: {
        enabled: true,
      },
      ...restProps.exporting,
    },
    series: series,
    loading: {
      showDuration: 1000,
      hideDuration: 1000,
      labelStyle: { color: colors.text.primary, fontSize: "12px" },
      style: {
        className: "highcharts_custom_loading",
      },
      ...restProps.loading,
    },
    chart: {
      events: {
        load: function () {
          if (isLoading && this.showLoading) {
            this.showLoading(loadingText);
          }
          if (chartRef) {
            chartRef.current = this;
          }
        },
      },
      backgroundColor: colors.background.primary,
      plotShadow: true,
      style: {
        fontFamily: "yekan",
      },
      height: chartHeight,
      ...restProps.chart,
    },
    xAxis: {
      lineColor: colors.background.gray,
      tickColor: colors.background.gray,
      lineWidth: 2,
      labels: {
        style: {
          color: colors.text.primary,
          fontWeight: "700",
        },
      },
      ...restProps.xAxis,
    },
    yAxis: {
      gridLineColor: colors.background.gray,
      labels: {
        style: {
          color: colors.text.primary,
        },
      },
      title: {
        text: "مقادیر",
      },
      allowDecimals: allowDecimals,
      ...restProps.yAxis,
    },
    legend: {
      itemStyle: {
        color: colors.text.primary,
        fontWeight: "700",
      },
      itemHoverStyle: {
        color: colors.text.primary,
      },
      title: {
        style: {
          color: colors.text.primary,
          fontWeight: "bold",
        },
      },
      layout: "horizontal",
      align: chartType === "pie" ? "center" : "left",
      verticalAlign: chartType === "pie" ? "bottom" : "top",
      x: 50,
      y: 0,
      ...restProps.legend,
    },
    credits: {
      enabled: false,
    },
  };
};
