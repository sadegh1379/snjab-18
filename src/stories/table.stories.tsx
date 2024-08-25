import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components";
import { TSortType } from "components/table/types";

const HEADERS = [
  {
    child: "ردیف",
    sortable: true,
  },
  { child: "بخش", key: "level", sortable: true },
  { child: "نام" },
  { child: "نام خانوادگی" },
  { child: "پاش شاخص" },
  { child: "اندازه گیری شاخص", key: "name", sortable: true },
  { child: "نام بیمارستان", key: "user", sortable: true },
  { child: "نام بخش" },
  { child: "نام بخش" },
  { child: "نام بخش" },
];

const DATA = [
  [
    "2022/05/26 15:25:04",
    "4",
    "1",
    "109402",
    "5986",
    <p>Buy</p>,
    "BTCUSD",
    "0.01",
    "0.07 USD",
    "396",
  ],
  [
    "2022/05/26 15:25:04",
    "4",
    "1",
    "109402",
    "5986",
    <p>Buy</p>,
    "BTCUSD",
    "0.01",
    "0.07 USD",
    "396",
  ],
  [
    "2022/05/26 15:25:04",
    "4",
    "1",
    "109402",
    "5986",
    <p>Buy</p>,
    "BTCUSD",
    "0.01",
    "0.07 USD",
    "396",
  ],
  [
    "2022/05/26 15:25:04",
    "4",
    "1",
    "109402",
    "5986",
    <p>Buy</p>,
    "BTCUSD",
    "0.01",
    "0.07 USD",
    "396",
  ],
  [
    "2022/05/26 15:25:04",
    "4",
    "1",
    "109402",
    "5986",
    <p>Buy</p>,
    "BTCUSD",
    "0.01",
    "0.07 USD",
    "396",
  ],
];

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#212121",
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TableUI: Story = {
  args: {
    data: DATA,
    headers: HEADERS,
    onSort: (key: string, sortType: TSortType) => {},
    defaultSort: {
      key: "id",
      sortType: "ASC",
    },
  },
};

export const TableEmptyUI: Story = {
  args: {
    data: [],
    headers: HEADERS,
    noDataTitle: "موردی یافت نشد!!",
    onSort: (key: string, sortType: TSortType) => {},
    defaultSort: {
      key: "id",
      sortType: "ASC",
    },
  },
};

export const TableLoadingUI: Story = {
  args: {
    data: null,
    headers: HEADERS,
    onSort: (key: string, sortType: TSortType) => {},
    defaultSort: {
      key: "id",
      sortType: "ASC",
    },
  },
};
