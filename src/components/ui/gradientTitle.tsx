interface GradientTitle {
  title?: string;
  description?: string;
}

const GradientTitle = ({ title, description }: GradientTitle) => {
  return (
    <section>
      <div className="text-center max-w-lg mx-auto py-24">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-5">
          {title}
        </h1>
        <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-5">
          {description}
        </p>
      </div>
    </section>
  );
};

export default GradientTitle;
