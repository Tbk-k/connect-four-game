import React, { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  padding: 0 7px;
`;

export const StyledInput = styled.input`
  width: 64px;
  height: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  opacity: 0;
`;

const initialColumsState = [
  { id: 0, value: 0 },
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
  { id: 5, value: 0 },
  { id: 6, value: 0 },
];

const BoardColumns = ({ setTargetId }) => {
  const [columnFilling, setColumnFilling] = useState([
    { 0: 0 },
    { 1: 0 },
    { 2: 0 },
    { 3: 0 },
    { 4: 0 },
    { 5: 0 },
    { 6: 0 },
  ]);

  const handleMouseMove = (e) => {
    if (!e.target.id) return;
    setTargetId((prev) => (prev !== e.target.id ? e.target.id : prev));
  };

  const handleClick = (e) => {
    let targetId = e.target.id;
    let targetValue = e.target.value;

    const newValue = parseInt(columnFilling[targetId]) + 1;
    if (newValue > 6) return;

    setColumnFilling((prev) => ({
      ...prev,
      [targetId]: newValue,
    }));
  };
  console.log(columnFilling);
  return (
    <Wrapper onMouseMove={handleMouseMove} onClick={handleClick}>
      {initialColumsState.map(({ id }) => (
        <StyledInput
          id={id}
          value={columnFilling[id].value}
          key={id}
          type="button"
        />
      ))}
    </Wrapper>
  );
};

export default BoardColumns;
