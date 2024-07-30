'use client'
import Image from "next/image";
import Write from "../prisma/index"
import axios, { AxiosError } from 'axios';
import Login from "./components/login";


export default function Home() {

  const submitForm = async (data: any) => {
    try {
      const res = await axios.post('/api/register', {});
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log((e as AxiosError).response?.data);
      }
    }
  };

  return (
    <div className=" p-12">

      <Login/>


      

    </div>

  );
}
