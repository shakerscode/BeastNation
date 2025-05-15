import React from "react";
import CommonGetInTouchBtn from "../common/CommonGetInTouchBtn";

function CaseStudiesCTA(props) {
  return (
    <section className=" text-white py-20 text-center px-4">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        Let’s Write a <span className="text-beast-purple-light">Success</span>{" "}
        Story
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        Connect with our team to learn how we can propel your brand into the era
        of social-first.
      </p>
      <CommonGetInTouchBtn />
    </section>
  );
}

export default CaseStudiesCTA;
