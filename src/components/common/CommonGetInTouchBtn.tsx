import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

function CommonGetInTouchBtn() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/contact")}
      size="lg"
      className="bg-primary-gradient hover:bg-beast-purple shadow-glow w-fit"
    >
      Get In Touch
    </Button>
  );
}

export default CommonGetInTouchBtn;
