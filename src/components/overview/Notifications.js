import React, { useEffect } from "react";
import { Avatar, List } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";

import BrannPaper from "components/ui/box/Paper";
import BrannIcon from "components/ui/typo/Icon";
import BrannSubTitle from "components/ui/typo/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/overview/actions";

export default function Notifications() {
  const dispatch = useDispatch();
  const { notifications, isFetchingNotifications } = useSelector(
    (state) => state.overview
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_NOTIFICATIONS,
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
          <BrannSubTitle text="Varslinger (2)" />
          <span>Marker alle som lest</span>
        </div>
        <List
          loading={isFetchingNotifications}
          itemLayout="horizontal"
          dataSource={notifications}
          style={{ height: "660px", overflowY: "auto" }}
          renderItem={(item) => (
            <List.Item actions={<FontAwesomeIcon icon={faChevronRight} />}>
              <List.Item.Meta
                avatar={
                  <Avatar size="large" icon={<BrannIcon icon={faUser} />} />
                }
                title={item.message}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </BrannPaper>
  );
}
