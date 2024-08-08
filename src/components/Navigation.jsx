import { Button } from "@/components/ui/button";
import { Cat, Home, Info, Book } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cat className="h-6 w-6 text-purple-600" />
          <span className="text-xl font-bold text-purple-800">CatWorld</span>
        </div>
        <div className="space-x-2">
          <Button variant="ghost">
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
          <Button variant="ghost">
            <Info className="mr-2 h-4 w-4" /> About
          </Button>
          <Button variant="ghost">
            <Book className="mr-2 h-4 w-4" /> Blog
          </Button>
        </div>
      </div>
    </nav>
  );
};
