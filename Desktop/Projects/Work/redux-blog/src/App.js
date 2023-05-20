import Posts from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <Posts />
    </main>
  );
}

export default App;
