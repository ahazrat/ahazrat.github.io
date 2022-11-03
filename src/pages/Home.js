import logo from '../images/k8s-logo.webp'
import { Link } from "react-router-dom"

export default function Home(props) {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

      <p>Get started with <code>Kubernetes</code></p>
      <p>Save yourself ⏱💰😭</p>

      <Link to='/services' style={{ color: 'magenta' }}>Learn k8s with us!</Link>

    </div>
  )
}
