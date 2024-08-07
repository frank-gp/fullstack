import { useFetch } from "../hooks/useFetch";

 const LazyDataLoader = () => {
  const { data, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {error ? (
        <p style={{ color: "black" }}>{error}</p>
      ) : (
        <ul>
          {data?.map((user) => (
            <li key={user.id} style={{ color: "black" }}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LazyDataLoader;
