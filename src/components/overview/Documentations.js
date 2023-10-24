import React, { useEffect } from "react";
import { List } from "antd";
import { faChevronRight, faHotel } from "@fortawesome/free-solid-svg-icons";

import BrannPaper from "components/ui/box/Paper";
import BrannIcon from "components/ui/typo/Icon";
import BrannSubTitle from "components/ui/typo/SubTitle";
import BrannText from "components/ui/typo/Text";
import LineProgress from "components/ui/progress/LineProgress";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/overview/actions";

export default function Documentations() {
  const dispatch = useDispatch();
  const { documents, isFetchingDocuments } = useSelector(
    (state) => state.overview
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_DOCUMENTS,
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
          <BrannSubTitle text="Branndokumentasjon (10)" />
          <span>Vis alle</span>
        </div>
        <List
          loading={isFetchingDocuments}
          itemLayout="horizontal"
          style={{ height: "662px", overflowY: "auto" }}
          dataSource={documents}
          renderItem={(item) => (
            <List.Item actions={[<BrannIcon icon={faChevronRight} />]}>
              <List.Item.Meta
                avatar={<BrannIcon icon={faHotel} size={28} />}
                title={<BrannText text={item.property} />}
                description={
                  <LineProgress percent={item.percent} text="utført" />
                }
              />
            </List.Item>
          )}
        />
      </div>
    </BrannPaper>
  );
}
