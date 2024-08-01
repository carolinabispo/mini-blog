import React from "react";
import styles from "./CreatePost.module.css";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAsyncValue } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const {insertDocument, response} = useInsertDocument("posts")

  const {user} = useAuthValue()

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault();
    setFormError("")
    // validade iamge url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    // cheecar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos")
    }

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName 
    })

    navigate("/")
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Título</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label htmlFor="">
          <span>URL da imagem</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label htmlFor="">
          <span>Conteúdo</span>
          <textarea
            type="text"
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label htmlFor="">
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vígulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
