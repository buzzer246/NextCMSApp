import { useRouter } from 'next/router'
 
const Inbox = () => {

  const router = useRouter()
  return (
    <p className="text-center text-danger">There is no Messages Recevied!</p>
  )
}

export default Inbox;