import styled from "styled-components";

export default function Toolbar() {
  return (
    <Tool_Bar>
      <Button>智能一页</Button>
      {/* 👇可以自己传入css,点进去是一堆可编辑的css样式文件 */}
      <Button>模板样式</Button>
      <Button>添加模块</Button>
    </Tool_Bar>
  );
}
const Tool_Bar = styled.div`
  display: flex;
  justify-content: space-around;
`;
const cssVariables = {
  blue: "#037bff",
};
const Button = styled.button`
  /* background-color: white; */
  height: 100%;
  position: relative; //为了tooltip的定位
  border-radius: 4px;
  border: ${cssVariables.blue} 1px solid;
  margin: 0 3px;
  padding: 3px 8px;
  color: ${cssVariables.blue};
  background-color: inherit;
  > .tooltip {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
    opacity: 0;
    pointer-events: none;
    transition: ease 0.3s;
    z-index: 10; //显示在上层,防止遮盖
  }
  &.active {
    background-color: #e8e8e8;
  }
  &:hover {
    background-color: #f5f5f5;
    > .tooltip {
      opacity: 1;
    }
  }
`;
