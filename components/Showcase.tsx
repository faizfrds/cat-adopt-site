export const revalidate = 0;

const Showcase = () => {
  const posts = [
    {
      title: "React Tailwind Card with Grid 1",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 2",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 3",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "Find More Cats",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
  ];

  return (
    <div className="flex-col justify-center h-fit bg-white pb-32">
      <div className="bg-cyan-600 w-screen h-3" />

      <div className="text-4xl text-center py-6 text-cyan-700">
            Cats Looking For Home Nearby
      </div>

      <div className="pt-4 justify-center flex">
        <div className="w-8/12 flex-wrap grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts.map((items, key) => (
            <div className="rounded-lg shadow-md lg:max-w-sm" key={key}>
              <img
                className="object-cover w-full h-48 rounded-lg"
                src={items.img}
                alt="image"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-blue-600">
                  {items.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
