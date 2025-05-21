import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

function CommonBtn({
  title = "Get In Touch",
  onClick,
}: {
  title?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="bg-primary-gradient text-base hover:bg-beast-purple shadow-glow w-fit"
    >
      {title}
      <MoveRight
        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </Button>
  );
}

export default CommonBtn;
