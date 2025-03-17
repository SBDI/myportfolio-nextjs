import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const BlogMainSection = dynamic(
  () => import("@/components/blog/MainSection")
);

export const metadata = {
  title: 'Blog | Data Science & AI Insights',
  description: 'Explore articles, tutorials, and insights on data science, machine learning, and AI.',
}

const BlogPage = () => {
  return (
    <PageBox>
      <BlogMainSection />
    </PageBox>
  );
};

export default BlogPage; 