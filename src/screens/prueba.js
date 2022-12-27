import axios from 'axios';
import React, { useState, useEffect, Component } from "react";


export default function Test() {
  const [state,setState] = useState(null)

  const fetchNote = async() => {
    try {
      const data = await axios.get('/api/courses')
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchNote();
  }, [])

  console.log(state)
  return (
    <p>hola {state.data}</p>
  );
}
