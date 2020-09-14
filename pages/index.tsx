import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import db from "../src/firebase";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components';

const Index = (props: any) => (
    <div>
        <Header />
        <div className="app__body">
            <Sidebar channels={props.channels}/>
        </div>
        {/* Global CSS Module Styles */}
        <style jsx global>{`
          html,
          body {
            font-family: Roboto;
            --primary-color: #3f0f40;
          }
        `}</style>
    </div>
)

export const getStaticProps: GetStaticProps = async () => {
  //const res = await fetch('https://.../posts')
  //const posts = await res.json()
  const channels: Array<object> = [];
  await db.collection("room").get()
      .then(snapshot => snapshot.forEach(doc => {
          channels.push({
              id: doc.id,
              name: doc.data().name
          })
      }))
  return {
    props: {
      channels,
    },
  }
}

export default Index;