import { useRouter } from 'next/router'
 
const Home = () => {

  const router = useRouter()
  return (
    <p className="text-center text-danger">Welcome Home!</p>
  )
}

export default Home;