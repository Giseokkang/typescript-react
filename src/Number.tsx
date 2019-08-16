import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container>{count}</Container>
);

export default Number;
