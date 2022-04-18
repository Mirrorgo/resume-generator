import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import { savedResumeData } from "./Resume.constants";
//TODO: 使用immer替代useState
export default function Resume() {
  // TODO:<div>简历主体,弄一个骨架屏的效果</div>
  const [resumeData, setResumeData] = useState(savedResumeData);
  const handleClickBlock = (e: BaseSyntheticEvent) => {
    // 弹窗, 这个弹窗支持修改这部分的内容;
  };
  return (
    <Resume_Component>
      {resumeData.map((item) => {
        return (
          <article onClick={handleClickBlock}>
            {/* 此处仅有展示能力,必须在弹窗中进行修改 */}
            <div className="block">{item.name}</div>
          </article>
        );
      })}
    </Resume_Component>
  );
}

const Resume_Component = styled.div`
  /* TODO: 此处的各级标题以及内容样式支持自定义导入 */
  padding: 3px;
  .block {
    font-size: 18px;
    margin: 3px;
    font-weight: bold;
  }
`;
//TODO:使用链表改善性能
