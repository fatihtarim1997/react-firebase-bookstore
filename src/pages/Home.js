import { useCollections } from "../hooks/useCollections";

import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const { docs: books } = useCollections("books",["uid","==",user.uid]);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
};

export default Home;
