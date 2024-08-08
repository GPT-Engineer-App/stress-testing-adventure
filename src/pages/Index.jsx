import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import { Navigation } from "../components/Navigation";

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-800">Feline Fascination</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
          <Card className="flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-3xl">The Enigmatic World of Cats</CardTitle>
              <CardDescription>Discover the charm and mystery of our feline friends</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Cats have been captivating humans for thousands of years with their grace, independence, and playful nature. Whether you're a long-time cat lover or just curious about these fascinating creatures, join us on a journey to explore the wonderful world of cats!</p>
              <div className="flex justify-between items-center">
                <Button onClick={() => setLikes(likes + 1)} variant="outline">
                  <Heart className="mr-2 h-4 w-4" /> Like ({likes})
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Independent nature with a touch of affection</li>
                  <li>Excellent hunters with sharp claws and keen senses</li>
                  <li>Flexible bodies and lightning-quick reflexes</li>
                  <li>Superior night vision and acute hearing</li>
                  <li>Complex communication through vocalizations, body language, and scent marking</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
                <CardDescription>Explore the diversity of feline breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" alt="Siamese" className="w-12 h-12 rounded-full mr-4" />
                    <span>Siamese</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" alt="Persian" className="w-12 h-12 rounded-full mr-4" />
                    <span>Persian</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Maine_Coon_female.jpg" alt="Maine Coon" className="w-12 h-12 rounded-full mr-4" />
                    <span>Maine Coon</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" alt="Bengal" className="w-12 h-12 rounded-full mr-4" />
                    <span>Bengal</span>
                  </li>
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
