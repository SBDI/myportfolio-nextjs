import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import BlogSectionTitle from "./BlogSectionTitle";

// Define interface for blog post
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

// Sample blog post data - in a real app, this would come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introduction to Data Science",
    excerpt: "An overview of key data science concepts and methodologies for beginners.",
    date: "May 15, 2024",
    category: "Data Science",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Best Practices for Machine Learning Projects",
    excerpt: "Essential workflows and patterns to make your ML projects more maintainable and scalable.",
    date: "April 30, 2024",
    category: "Machine Learning",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Future of AI in Business",
    excerpt: "How artificial intelligence is transforming business operations and decision-making.",
    date: "April 12, 2024",
    category: "AI",
    readTime: "6 min read",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm px-3 py-1 rounded-full bg-emerald-900 bg-opacity-30 text-emerald-400">{post.category}</span>
          <span className="text-sm text-gray-400">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{post.title}</h3>
        <p className="text-gray-300">{post.excerpt}</p>
        <div className="pt-4 flex justify-between items-center border-t border-gray-700">
          <span className="text-sm text-gray-400">{post.date}</span>
          <button className="text-emerald-400 hover:text-emerald-300 transition-colors">Read more →</button>
        </div>
      </div>
    </div>
  );
};

const BlogMainSection = () => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen relative overflow-hidden rounded-md"
      id="blog"
    >
      <ConstrainedBox classNames="px-4 py-16 z-20">
        <BlogSectionTitle 
          title="Blog" 
          subtitle="Sharing insights, tutorials, and thoughts on data science, AI, and machine learning."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium transition-colors duration-300">
            View All Posts
          </button>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default BlogMainSection; 