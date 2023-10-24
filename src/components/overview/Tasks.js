import React, { useEffect } from "react";
import { List, Tabs } from "antd";
import { faBuilding, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import BrannPaper from "components/ui/box/Paper";
import BrannSubTitle from "components/ui/typo/SubTitle";
import BrannIcon from "components/ui/typo/Icon";
import BrannText from "components/ui/typo/Text";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/overview/actions";

export default function Tasks() {
  const dispatch = useDispatch();
  const { tasks, isFetchingTasks } = useSelector((state) => state.overview);

  useEffect(() => {
    dispatch({
      type: actions.FETCH_TASKS,
    });
  }, [dispatch]);

  const items = [
    {
      key: "1",
      label: `Åpen (3)`,
      children: (
        <List
          loading={isFetchingTasks}
          itemLayout="horizontal"
          dataSource={tasks.slice(0, 3)}
          renderItem={(item) => (
            <List.Item actions={[<BrannIcon icon={faChevronRight} />]}>
              <List.Item.Meta
                avatar={<BrannIcon icon={faBuilding} size={28} />}
                title={<BrannText text={item.title} />}
                description={item.property}
              />
            </List.Item>
          )}
        />
      ),
    },
    {
      key: "2",
      label: `Pågår (2)`,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={tasks.slice(3, 6)}
          renderItem={(item) => (
            <List.Item actions={[<BrannIcon icon={faChevronRight} />]}>
              <List.Item.Meta
                avatar={<BrannIcon icon={faBuilding} size={28} />}
                title={<BrannText text={item.title} />}
                description={item.property}
              />
            </List.Item>
          )}
        />
      ),
    },
    {
      key: "3",
      label: `Forfalt (1)`,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={tasks.slice(6, 9)}
          renderItem={(item) => (
            <List.Item actions={[<BrannIcon icon={faChevronRight} />]}>
              <List.Item.Meta
                avatar={<BrannIcon icon={faBuilding} size={28} />}
                title={<BrannText text={item.title} />}
                description={item.property}
              />
            </List.Item>
          )}
        />
      ),
    },
    {
      key: "4",
      label: `Løst (2)`,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={tasks.slice(3, 6)}
          renderItem={(item) => (
            <List.Item actions={[<BrannIcon icon={faChevronRight} />]}>
              <List.Item.Meta
                avatar={<BrannIcon icon={faBuilding} size={28} />}
                title={<BrannText text={item.title} />}
                description={item.property}
              />
            </List.Item>
          )}
        />
      ),
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <BrannPaper>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BrannSubTitle text="Gjøremål (8)" />
          <span>Vis alle</span>
        </div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </BrannPaper>
  );
}
