
import {Link} from'react-router-dom'

const Navbar = (props) => {
    function handleclick(ans){
      console.log(ans)
      props.tran(ans)
    }
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-warning">
    <Link className="navbar-brand" to={'/'}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to={'/Login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Signup'}>Signup</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to={'/Heading'}>Heading</Link>
        </li>
        <li onClick={()=>handleclick('India')} class="nav-item">
          <Link class="nav-link" href="#">India</Link>
        </li>
        <li onClick={()=>handleclick('sports')} class="nav-item">
          <Link class="nav-link" href="#">sports</Link>
        </li>
        <li onClick={()=>handleclick('politics')} class="nav-item">
          <Link class="nav-link" href="#">politics</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
