import { createContext, useState, useEffect } from "react";
import api from "../api/Post";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate=useNavigate();
  const fetchData = async () => {
    const res = await api.get("/feedback");
    setPosts(res.data.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.includes(search)
    );
    setSearchResult(result);
  }, [search, posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newObj = {
      id: (posts.length + 1).toString(),
      title:title,
      body:body,
    };

    await api.post("/feedback", newObj);

    setTitle("");
    setBody("");
    fetchData();
    alert("feedback added successfully!");
    navigate('/');
  };
  
  const handleDelete = async (id) => {
    await api.delete(`/feedback/${id}`);
    fetchData();
    alert("Post deleted successfully!");
    navigate('/');
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        fetchData,
        search,
        setSearch,
        searchResult,
        title,
        setTitle,
        body,
        setBody,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
