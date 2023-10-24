import React, { useEffect } from "react";
import { List } from "antd";
import { faBuilding, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import BrannPaper from "components/ui/box/Paper";
import BrannSubTitle from "components/ui/typo/SubTitle";
import BrannIcon from "components/ui/typo/Icon";
import BrannText from "components/ui/typo/Text";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/overview/actions";

export default function Deviations() {
  const dispatch = useDispatch();
  const { deviations, isFetchingDeviations } = useSelector(
    (state) => state.overview
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_DEVIATIONS,
    });
  }, [dispatch]);

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
          <BrannSubTitle text="Avvik (6)" />
          <span>Vis alle</span>
        </div>
        <List
          itemLayout="horizontal"
          loading={isFetchingDeviations}
          dataSource={deviations}
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
      </div>
    </BrannPaper>
  );
}
