import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Paw } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { motion } from "framer-motion";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [showPaw, setShowPaw] = useState(false);

  useEffect(() => {
    if (showPaw) {
      const timer = setTimeout(() => setShowPaw(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showPaw]);

  const handleLike = () => {
    setLikes(likes + 1);
    setShowPaw(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-8 text-center text-purple-800 tracking-tight"
        >
          Feline Fascination
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <Card className="flex flex-col justify-center relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-4xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">The Enigmatic World of Cats</CardTitle>
              <CardDescription className="text-lg">Discover the charm and mystery of our feline friends</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-lg leading-relaxed">Cats have been captivating humans for thousands of years with their grace, independence, and playful nature. Whether you're a long-time cat lover or just curious about these fascinating creatures, join us on a journey to explore the wonderful world of cats!</p>
              <div className="flex justify-between items-center">
                <Button onClick={handleLike} variant="outline" className="relative">
                  <Heart className="mr-2 h-4 w-4" /> Like ({likes})
                  {showPaw && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: -20 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    >
                      <Paw className="h-6 w-6 text-pink-500" />
                    </motion.div>
                  )}
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20"></div>
          </Card>
        </div>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="characteristics" className="text-lg">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none pl-6 space-y-4">
                  {[
                    "Independent nature with a touch of affection",
                    "Excellent hunters with sharp claws and keen senses",
                    "Flexible bodies and lightning-quick reflexes",
                    "Superior night vision and acute hearing",
                    "Complex communication through vocalizations, body language, and scent marking"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <Paw className="h-5 w-5 mr-3 text-purple-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Popular Cat Breeds</CardTitle>
                <CardDescription>Explore the diversity of feline breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-6">
                  {[
                    { name: "Siamese", img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
                    { name: "Persian", img: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
                    { name: "Maine Coon", img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Maine_Coon_female.jpg" },
                    { name: "Bengal", img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" }
                  ].map((breed, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <img src={breed.img} alt={breed.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                      <span className="text-lg font-medium">{breed.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
