import useFetch from "./useFetch";

function UseFetchHookTest() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1 className="text-[16px]">Use Fetch Hook</h1>
      {pending ? <h3>Pending Please Wait.</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((dataItem, index) => (
            <p key={index}>{dataItem.title}</p>
          ))
        : null}
    </div>
  );
}

export default UseFetchHookTest;
