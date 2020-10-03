import React from "react";

export default function Hero({ chilren, hero }) {
  return <header className={hero}>{chilren}</header>;
}

// When we forget to pass hero page para then this defaultHero css class will be used
Hero.defaultProps = {
  hero: "defaultHero",
};
