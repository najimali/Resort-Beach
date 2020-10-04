import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          return Home{" "}
        </Link>
      </Banner>
    </Hero>
  );
}
