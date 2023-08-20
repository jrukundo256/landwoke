import { Layout } from "./components/Layout"
import { Helmet } from "react-helmet";

const App = () => {
  // return (
  //   <h1 className="text-3xl font-bold underline">
  //     LandWoke
  //   </h1>
  // )

  return (
    <Layout>
      <Helmet>
        <title>LandWoke - Bringing trust and justice to land ownership</title>
      </Helmet>

    </Layout>
  );
}

export default App
