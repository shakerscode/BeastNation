import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

function CommonGetInTouchBtn({ title = "Get In Touch" }: { title?: string }) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/contact")}
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

export default CommonGetInTouchBtn;
