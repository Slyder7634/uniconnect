import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookCopy, Quote } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "The Role of Quantum Entanglement in Information Theory",
    authors: "C.H. Bennett, G. Brassard, C. Crépeau, R. Jozsa, A. Peres, W.K. Wootters",
    publication: "Physical Review Letters, 1993",
    quote: "The discovery of quantum teleportation has profound implications for quantum computation and secure communication, demonstrating that quantum information can be transmitted over classical channels, assisted by prior entanglement.",
    tags: ["Quantum Physics", "Information Theory"],
  },
  {
    id: "2",
    title: "A Relational Model of Data for Large Shared Data Banks",
    authors: "E. F. Codd",
    publication: "Communications of the ACM, 1970",
    quote: "Future users of large data banks must be protected from having to know how the data is organized in the machine (the internal representation). Activities of users at terminals and most application programs should remain unaffected when the internal representation of data is changed.",
    tags: ["Computer Science", "Databases"],
  },
  {
    id: "3",
    title: "The Structure of Scientific Revolutions",
    authors: "Thomas S. Kuhn",
    publication: "University of Chicago Press, 1962",
    quote: "A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.",
    tags: ["History of Science", "Philosophy"],
  },
  {
    id: "4",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, et al.",
    publication: "Advances in Neural Information Processing Systems, 2017",
    quote: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.",
    tags: ["AI", "Machine Learning"],
  },
  {
    id: "5",
    title: "The Economic Consequences of the Peace",
    authors: "John Maynard Keynes",
    publication: "Harcourt, Brace and Howe, 1919",
    quote: "The policy of reducing Germany to servitude for a generation, of degrading the lives of millions of human beings, and of depriving a whole nation of happiness should be abhorrent and detestable... even if it were possible, even if it enriched ourselves, even if it did not sow the decay of the whole civilized life of Europe.",
    tags: ["Economics", "History"],
  },
    {
    id: "6",
    title: "An Algorithm for the Shortest Path between Two Vertices in a Graph",
    authors: "Edsger W. Dijkstra",
    publication: "Numerische Mathematik, 1959",
    quote: "My algorithm solves the problem of finding the shortest path from a given starting vertex to all other vertices in a weighted graph with non-negative edge weights. It is a greedy algorithm that maintains a set of vertices whose shortest distance from the source is known.",
    tags: ["Algorithms", "Computer Science"],
    },
];

export default function ResearchDatabasesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Research Databases</h1>
        <p className="text-muted-foreground">
          Find scholarly articles and publications for your research needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <BookCopy className="h-8 w-8 text-muted-foreground mb-4" />
                <div className="flex gap-2">
                    {article.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </div>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.authors}</CardDescription>
              <CardDescription className="italic">{article.publication}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Quote className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">"{article.quote}"</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <a href="#">Read Full Article</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
