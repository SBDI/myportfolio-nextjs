interface BlogSectionTitleProps {
  title: string;
  subtitle: string;
}

const BlogSectionTitle = ({ title, subtitle }: BlogSectionTitleProps) => {
  return (
    <div>
      <p className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold">
        {title}
      </p>
      <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default BlogSectionTitle; 