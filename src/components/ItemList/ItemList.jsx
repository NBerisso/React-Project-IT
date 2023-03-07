import Item from "../Item/Item";
import { useSearchFilter } from "../hooks";

import { withDataSources } from "../../data/context";
import { useEffect, useState } from "react";

let ItemList = ({ dataSources }) => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    (async function () {
      const aux = await dataSources.products().all();
      setItems(aux);
    })();
  });

  const filter = useSearchFilter();
  console.log(filter);

  if (filter != "" && filter != null)
    items = items.filter((val) =>
      val.title.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className="list-wrapper">
      <section className="list">
        {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </section>
    </div>
  );
};

ItemList = withDataSources(ItemList);

export default ItemList;
