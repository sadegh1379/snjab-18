import {
  Container,
  PublicHeader,
  SelectInput,
  WardSelect,
  YearSelectSection,
} from "components";
import { getHighchartsOptions } from "config";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState, type FC } from "react";
import { FaChartLine } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { ChartCard } from "./components";
import { DashboardContainer } from "./css/dashboard.style";
import { useCrmDashboard } from "./hooks/use-crm-dashboard";

const CrmDashboard: FC = () => {
  const { selectedYear } = useSelector((state: RootState) => state.profile);

  const [reportType, setReportType] = useState<IGSelectOption>({
    label: "شکایت",
    value: "report",
  });

  const [groupSelectedWard, setGroupSelectedWard] = useState("");
  const [categorySelectedWard, setCategorySelectedWard] = useState("");
  const [causeSelected, setCauseSelected] = useState<IGSelectOption | null>(
    null
  );

  const {
    loadings,
    genderChartSeries,
    submittedByChartSeries,
    priorityChartsSeries,
    wardChartsSeries,
    hospitalizationChartsSeries,
    targetGroupChartsSeries,
    causeChartsSeries,
  } = useCrmDashboard({
    selectedYear,
    groupSelectedWard,
    categorySelectedWard,
    causeSelected: causeSelected?.value,
    reportType: reportType.value,
  });

  return (
    <DashboardContainer>
      <PublicHeader
        backPath="applications"
        title="داشبورد"
        icon={<FaChartLine size={26} />}
      />
      <YearSelectSection />
      <Container className="container">
        <div className="dashboard_title_container">
          <p className="dashboard_title">داشبورد CRM</p>
          <SelectInput
            containerClassName="input_dashboard"
            value={reportType}
            title="نوع گزارش"
            onChange={setReportType}
            placeholder="نوع گزارش"
            options={[
              { label: "شکایت", value: "report" },
              { label: "تقدیر و تشکر", value: "reward" },
            ]}
          />
        </div>
        <hr className="mt-3 mb-4" />
        <div className="container_charts">
          <ChartCard title={`گزارش ${reportType.label} به تفکیک جنسیت`}>
            <HighchartsReact
              highcharts={Highcharts}
              options={getHighchartsOptions({
                series: genderChartSeries,
                chartType: "pie",
              })}
            />
          </ChartCard>
          <ChartCard title={`گزارش ${reportType.label} به تفکیک واحد مورد نظر`}>
            <HighchartsReact
              highcharts={Highcharts}
              options={getHighchartsOptions({
                chartType: "column",
                series: wardChartsSeries.series,
                xAxis: {
                  categories: wardChartsSeries.categories,
                  title: { text: "واحد" },
                },
              })}
            />
          </ChartCard>
        </div>
        <div className="container_charts_revers">
          <ChartCard title={`گزارش ${reportType.label} به تفکیک بخش بستری`}>
            <HighchartsReact
              highcharts={Highcharts}
              options={getHighchartsOptions({
                chartType: "column",
                series: hospitalizationChartsSeries.series,
                xAxis: {
                  categories: hospitalizationChartsSeries.categories,
                  title: { text: "بخش های بستری" },
                },
              })}
            />
          </ChartCard>
          <ChartCard title={`گزارش ${reportType.label} به تفکیک گزارش دهنده`}>
            <HighchartsReact
              highcharts={Highcharts}
              options={getHighchartsOptions({
                chartType: "pie",
                series: submittedByChartSeries,
              })}
            />
          </ChartCard>
        </div>
        <div className="container_charts">
          <ChartCard title={`گزارش ${reportType.label} بر اساس اولویت بررسی`}>
            <HighchartsReact
              highcharts={Highcharts}
              options={getHighchartsOptions({
                chartType: "pie",
                series: priorityChartsSeries,
              })}
            />
          </ChartCard>
          <ChartCard
            title={`گزارش ${reportType.label} به تفکیک گروه`}
            leftOption={
              <WardSelect
                containerClassName="filter_select selected_ward"
                onChange={(name) => setGroupSelectedWard(name as string)}
                isClearable
                wardId={groupSelectedWard}
                placeholder="فیلتر بر اساس نام بخش"
              />
            }
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={getHighchartsOptions({
                chartType: "column",
                series: targetGroupChartsSeries.series,
                xAxis: {
                  categories: targetGroupChartsSeries.categories,
                  title: { text: "گروه‌ها" },
                },
              })}
            />
          </ChartCard>
        </div>
        {reportType.value === "report" && (
          <div className="single_chart">
            <ChartCard
              title={`گزارش ${reportType.label} بر اساس دسته‌بندی`}
              leftOption={
                <div className="container_filter">
                  <SelectInput
                    value={causeSelected}
                    onChange={(ob) => setCauseSelected(ob)}
                    placeholder="علت"
                    containerClassName="filter_select end_filter"
                    isClearable
                    options={[
                      {
                        label: "کیفیت ارائه خدمات",
                        value: "کیفیت ارائه خدمات",
                      },
                      {
                        label: "انطباق حریم خصوصی",
                        value: "انطباق حریم خصوصی",
                      },
                      { label: "مدت زمان انتظار", value: "مدت زمان انتظار" },
                      { label: "اخلاقی و رفتاری", value: "اخلاقی و رفتاری" },
                      { label: "مالی و هزینه", value: "مالی و هزینه" },
                      {
                        label: "اطلاع رسانی و راهنمایی",
                        value: "اطلاع رسانی و راهنمایی",
                      },
                      {
                        label: "هتلینگ و امکانات رفاهی",
                        value: "هتلینگ و امکانات رفاهی",
                      },
                      { label: "نظافت و بهداشت", value: "نظافت و بهداشت" },
                    ]}
                  />
                  <WardSelect
                    containerClassName="filter_select end_filter"
                    onChange={(wardId) =>
                      setCategorySelectedWard(wardId as string)
                    }
                    isClearable
                    wardId={categorySelectedWard}
                    placeholder="فیلتر بر اساس نام بخش"
                  />
                </div>
              }
            >
              <HighchartsReact
                highcharts={Highcharts}
                options={getHighchartsOptions({
                  chartType: "column",
                  series: causeChartsSeries.series,
                  xAxis: {
                    categories: causeChartsSeries.categories,
                    title: { text: "دسته‌بندی" },
                  },
                })}
              />
            </ChartCard>
          </div>
        )}
      </Container>
    </DashboardContainer>
  );
};

export default CrmDashboard;
