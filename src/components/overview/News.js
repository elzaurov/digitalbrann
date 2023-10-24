import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Row, Skeleton, Space } from "antd";
import {
  faChevronLeft,
  faChevronRight,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import BrannPaper from "components/ui/box/Paper";
import BrannSubTitle from "components/ui/typo/SubTitle";
import BrannIcon from "components/ui/typo/Icon";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/overview/actions";
import { useMobileViewport } from "utils/responsive";

const NewsCard = ({ item, itemsPerScreen }) => (
  <Col span={24 / itemsPerScreen}>
    <Card
      cover={
        <div style={{ padding: "20px 0", textAlign: "center" }}>
          <BrannIcon icon={faNewspaper} size={40} />
        </div>
      }
    >
      <Card.Meta title={item.title} description={item.description} />
    </Card>
  </Col>
);

export default function News() {
  const dispatch = useDispatch();
  const isXS = useMobileViewport(576);
  const isXL = useMobileViewport(1200);

  const { news, isFetchingNews } = useSelector((state) => state.overview);

  const itemsPerScreen = useMemo(() => {
    if (isXS) return 1;
    if (isXL) return 3;
    return 6;
  }, [isXS, isXL]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch({
      type: actions.FETCH_NEWS,
    });
  }, [dispatch]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
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
          <BrannSubTitle text="Nyheter" />
          <Space size="small">
            <Button
              type="default"
              icon={<BrannIcon icon={faChevronLeft} />}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            />
            <Button
              type="default"
              icon={<BrannIcon icon={faChevronRight} />}
              onClick={handleNext}
              disabled={
                currentSlide >= Math.ceil(news.length / itemsPerScreen) - 1
              }
            />
          </Space>
        </div>
        <Skeleton loading={isFetchingNews}>
          <div className="carousel-container">
            <Row gutter={[16, 16]}>
              {news
                .slice(
                  currentSlide * itemsPerScreen,
                  (currentSlide + 1) * itemsPerScreen
                )
                .map((item) => (
                  <NewsCard
                    key={item.id}
                    item={item}
                    itemsPerScreen={itemsPerScreen}
                  />
                ))}
            </Row>
          </div>
        </Skeleton>
      </div>
    </BrannPaper>
  );
}
