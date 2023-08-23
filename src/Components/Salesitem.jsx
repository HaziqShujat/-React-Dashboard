import React, { useState } from "react";

import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { ArrowsExpandIcon } from "@heroicons/react/solid";
const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];
const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

function Salesitem() {
  const [selectindex, setSelectindex] = useState(0);
  return (
    <Card className="max-w-full mx-auto ">
      <Flex className="space-x-8  flex-col lg:flex-row">
        <Title>Overview</Title>
        <TabGroup index={selectindex} onIndexChange={setSelectindex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8 ">PortfolioValue</Text>
      <Metric>$56.55</Metric>
      <Divider />
      <Text className="mt-8 ">
        {" "}
        <Bold>PortfolioValue</Bold>{" "}
      </Text>
      <Text>1 Asset class-5 Holding</Text>
      {selectindex === 0 ? (
        <DonutChart
        className="mt-8"
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={false}
          category="value"
          index="name"
        />
      ) : (
        <>
        <Flex className="mt-8 justify-between"> 
        <Text className="truncate">Stocks</Text>
        <Text>Since Transuction</Text>

        </Flex>
        <List className="mt-4">
          {stocks.map((stock) =>(
            <ListItem key={stock.name}>
              <Text>{stock.name}</Text>
              <Flex className="space-x-2 justify-end">
                <Text>
                  ${Intl.NumberFormat('us').format(stock.value).toString()}
                </Text>
              </Flex>
            </ListItem>
          ))}

        </List>
        </>
      )}
      <Flex className="mt-4 pt-4 border-t">
        <Button variant="light" icon={ArrowRightIcon} iconPosition="right">view more</Button>
      </Flex>
    </Card>
  );
}

export default Salesitem;
