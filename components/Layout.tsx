import Header from "./Header";
import type { AppProps } from 'next/app'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const withLayout = ({ Component, pageProps }: AppProps) => {
    return () => (
      <div>
        {/* Header */}
        
        {/* Sidebar */}
      </div>
    )
  }
  
  export default withLayout