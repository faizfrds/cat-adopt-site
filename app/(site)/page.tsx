import Header from "@/components/Header";
import Showcase from "@/app/(site)/components/Showcase";

import getCatHome from "@/actions/getCatHome";

export const revalidate = 0;

const Home = async () => {
  const cats = await getCatHome();

  return (
    <div>
      <Showcase cats={cats} />
    </div>
  );
};

export default Home;
