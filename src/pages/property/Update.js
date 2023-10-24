import React, { useEffect } from "react";
import { Col, Row, Skeleton } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import BrannText from "components/ui/typo/Text";
import PropertyUpdateForm from "components/property/UpdateForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/property/actions";

export default function PropertyUpdate() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { property, isFetchingProperty } = useSelector(
    (state) => state.property
  );

  useEffect(() => {
    if (id) {
      dispatch({
        type: actions.FETCH_PROPERTY,
        payload: {
          id: id,
        },
      });
    }
  }, [id, dispatch]);

  return (
    <AppLayout>
      <Skeleton loading={isFetchingProperty}>
        <Row gutter={[0, 32]}>
          <Col span={24}>
            <Row justify="space-between" align="bottom">
              <Col>
                <BrannTitle text={property?.property} />
                <BrannText text="Lorem ipsum dolor sit amet consectetur upsum." />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <PropertyUpdateForm />
          </Col>
        </Row>
      </Skeleton>
    </AppLayout>
  );
}
