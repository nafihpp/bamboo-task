import { FilledHeartIcon } from "../../../assets/icons";
import { Heading } from "../../common/heading";
import CategoryListing from "./categories";
import ProductList from "./products";

export default function HomeComponent() {
  return (
    <main>
      <div className="wrapper w-[90%] !mx-auto">
        <Heading
          title="Double tap on Product or Press the Heart to make it your Favourite Product"
          icon={<FilledHeartIcon className="w-8 h-8 md:w-12 md:h-12" />}
        />
        <CategoryListing />
        <ProductList />
      </div>
    </main>
  );
}
