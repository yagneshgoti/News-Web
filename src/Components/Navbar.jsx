
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="bage bg-light collapse navbar-collapse" id="navbarNav">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-danger fs-4">News Web</span></a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("entertainment")}>Entertaiment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("general")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
