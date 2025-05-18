import { Grid, Text } from "@mantine/core";
import React from "react";

interface ICompDetailData {
  data: {
    title: string;
    value: string;
  };
}
export default function Comp_DetailData({ data }: ICompDetailData) {
  return (
    <>
      <Grid>
        <Grid.Col span={3}>
          <Text
            // lineClamp={1}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "pre-line",
              wordBreak: "break-word",
            }}
          >
            {data.title}
          </Text>
        </Grid.Col>
        <Grid.Col span={1}>:</Grid.Col>
        <Grid.Col span={8}>
          <Text
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {data.value}
          </Text>
        </Grid.Col>
      </Grid>
    </>
  );
}
