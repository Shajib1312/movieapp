import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async ({item}) => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          poster: item.poster_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <p onClick={saveShow}>
        {like ? (
          <AiFillStar className="absolute top-4 left-4 text-yellow-500" />
        ) : (
          <AiOutlineStar className="absolute top-4 left-4 text-red-300" />
        )}
      </p>
    </div>
  );
};

export default Movie;
