import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={400} />
    </Wrapper>
  );
};

export default BalanceChart;

const Wrapper = styled.div``;
