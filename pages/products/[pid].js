import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>loading...</p>
  }

  return (
    <Fragment>
      <h1>{loadedProduct.id}</h1>
      <div>{loadedProduct.description}</div>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  
  const product = data.products.find((product) => product.id === productId);
  if (!product) {
    return {notFound: true}
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,
    // fallback: "blocking",
    fallback: true
  };
}

export default ProductDetailPage;
