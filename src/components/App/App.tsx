import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import Resume from "../Resume";
import Toolbar from "../Toolbar";
function App() {
  const [isLeftPanelHidden, setIsLeftPanelHidden] = useState(true);
  const handleHideLeftPanel = (e: BaseSyntheticEvent) => {
    setIsLeftPanelHidden((i) => !i);
  };
  return (
    <>
      <Body>
        <header>
          <button onClick={handleHideLeftPanel}>点击隐藏</button>
          <span className="title">resume generator</span>
        </header>
        <div className="two-column">
          <main>
            <Toolbar />
            <Resume />
          </main>
          <aside className={`left-panel ${isLeftPanelHidden ? "hidden" : ""}`}>
            左侧的一栏,放在最底下让其最后加载,且弄一个骨架屏的效果 左栏
          </aside>
        </div>
      </Body>
    </>
  );
}
const Body = styled.div`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
  }
  .two-column {
    display: flex;
    justify-content: space-between;
    gap: 3px;
    .left-panel {
      background-color: gray;
      order: 1;
      max-width: 200px;
      overflow-x: hidden;
      transition: ease 0.3s;
      &.hidden {
        /* FIXME:正常的侧边栏效果如何实现 */
        max-width: 0;
        opacity: 0;
        /* display: none; */
      }
    }
    main {
      order: 2;
      display: flex;
      flex-direction: column;
      gap: 3px;
      width: 100%;
    }
  }
`;
export default App;
