import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import db from "../src/firebase";
import withLayout from "../components/Layout";
import styled from 'styled-components';

const Container = styled.div`
  line-height: 1.6;

> hr {
    margin-top: 80px;
    border: 1px solid gray;
  }
`

const StyledTitle = styled.div`
  margin-top: 30px;
  font-size: 40px;
  font-weight: 900;

  .subtitle {
    font-size: 30px; 
    font-weight: 100;
    color: #686868;
  }
`

const StyledIntro = styled.div`
  max-width: 450px;
  margin-top: 110px;
  font-size: 20px;
  font-weight: 200px;

  .myName {
    font-size: 22px;
    font-weight: 800;
    color: blue;
  }
`

const StyledSection = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;

  > hr {
    margin-bottom: 30px;
    margin-right: 80px;
    color: #C0C0C0;
  }
`

function Index() {
  return(
    <Container>
      <div>
        <StyledTitle id="#section-0">
          Greeting!
        </StyledTitle>

        <StyledIntro>
          <p>
          My name is <span className="myName">Jiin Kim</span>, a CS graduate, who loves 
          sharing thoughts and inspiration with people, and create a spark of ideas that can change the world!
          <br/><br/>
          If you're looking for a unique, rare character with full of talents and creative endeavor, well you are lucky!
          <br/><br/>
          Also, email me if you feel interested, and want to collaborate!
          </p>
        </StyledIntro>
      </div>
      <hr />

      <StyledSection id="#section-1">
        <h2>Projects</h2>
        <hr />
      </StyledSection>
      <StyledSection id="#section-2">
        <hr />
        <h2>Blog</h2>
      </StyledSection>
      <StyledSection id="#section-3">
        <hr />
        <h2>Tech News</h2>
      </StyledSection>

      <style jsx global>{`
        html,
        body {
          font-family: Roboto;
          --primary-color: #3f0f40;
          margin: 0px;
          padding: 0px;
          scroll-behavior: smooth;
        }
      `}</style>
    </Container>
  );
}

async function fetchAllProjects() {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();
  return data;
}

async function fetchAllPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  return data;
}

async function fetchAllNews() {
  const res = await fetch('http://localhost:3000/api/news');
  const data = await res.json();
  return data;
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchAllProjects();
  const posts = await fetchAllPosts();
  const news = await fetchAllNews();
  console.log(projects);
  return {
    props: {
      projects,
      posts,
      news
    },
  }
}

export default withLayout(Index);