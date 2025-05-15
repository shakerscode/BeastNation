import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { MoveRight } from "lucide-react";

function CommonGetInTouchBtn() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/contact")}
      size="lg"
      className="bg-primary-gradient hover:bg-beast-purple shadow-glow w-fit"
    >
      Get In Touch
      <MoveRight
        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </Button>
  );
}

export default CommonGetInTouchBtn;
