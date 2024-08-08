import { Button } from "@/components/ui/button";
import { Cat, Home, Info, Book } from "lucide-react";
import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md shadow-md p-4 sticky top-0 z-10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Cat className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">CatWorld</span>
        </motion.div>
        <div className="space-x-4">
          {[
            { icon: Home, label: "Home" },
            { icon: Info, label: "About" },
            { icon: Book, label: "Blog" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button variant="ghost" className="text-lg">
                <item.icon className="mr-2 h-5 w-5" /> {item.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
