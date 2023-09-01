import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import GetChapters from "../../Components/GetChapters/GetChapters.jsx";
import MangaInfo from "../../Components/MangaInfo/MangaInfo.jsx";

function MangaTabs({ activeTab }) {
  const { id } = useParams();

  if (activeTab === 0) return <MangaInfo />;
  if (activeTab === 1) return <GetChapters id={id} />;
}

export default MangaTabs;
