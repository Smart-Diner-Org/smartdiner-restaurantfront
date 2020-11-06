import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MultiCards(props) {
  return (
    <div className="multi-cards">
      {props.cards && (
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: props.cards.length > 1 ? 1.3 : 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {props.cards.map((card) => (
            <img
              onClick={() => {
                if (card.card_link_type === "menu_category") {
                  document
                    .getElementById(`menuCategory_${card.card_link_value}`)
                    .click();
                  document.getElementById(`menu-dropdown`) &&
                    (document.getElementById(`menu-dropdown`).value =
                      card.card_link_value);
                }
              }}
              style={
                card.card_link_type === "menu_category"
                  ? { cursor: "pointer" }
                  : {}
              }
              loading="lazy"
              src={card.url}
              alt="preOrderImage"
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}
