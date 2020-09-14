import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import db from "../src/firebase";
import withLayout from "../components/Layout";
import styled from 'styled-components';

const StyledTitle = styled.div`
  margin-top: 20px;
  font-size: 60px;
  font-weight: 900;

  .auther {
    font-size: 30px; 
    font-weight: 300;
  }

  .subtitle {
    margin-top: 100px;
    font-size: 30px;
    font-weight: 800;
  }
`

const StyledDiscription = styled.div`
  max-width: 500px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 400px;
`

const StyledSection = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  > hr {
    margin-bottom: 30px;
  }
`

const Index = (props: any) => (
    <div>
      <div>
        <StyledTitle>
          Development Footprints
          <h3 className="auther">
            by Jiin Kim
          </h3>
          <h2 className="subtitle">
            Sharing thoughts and inspiration
          </h2>
        </StyledTitle>
        <StyledDiscription>
          <p>
          I'm a Software Developer who resides in Vancouver, Canada. I love coding that can my ideas into reality, 
          and meeting new people with full of creativity and inspiration.
          <br /><br />
          Contact me if you're intriguted with my posts or projects!
          </p>
        </StyledDiscription>
      </div>

      <StyledSection>
        <hr />
        <h2>Projects</h2>
      </StyledSection>
      <StyledSection>
        <hr />
        <h2>Posts</h2>
      </StyledSection>
      <StyledSection>
        <hr />
        <h2>Tech News</h2>
      </StyledSection>
      <style jsx global>{`
        html,
        body {
          font-family: Roboto;
          --primary-color: #3f0f40;
        }
      `}</style>
    </div>
)

/*
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
*/

export default withLayout(Index);