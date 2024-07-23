const Sidebar = ({selectedTab,setSelectedTab}) => {
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark " style={{width: "180px"}}>
            <a href="/" className=" text-white mb-2 text-decoration-none px-3">
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto my-3">
                <li className="nav-item" onClick={()=>setSelectedTab("Home")}>
                    <a href="#" className={`nav-link text-white px-3 py-2 mb-1 ${selectedTab==="Home" && "active"}`} aria-current="page">
                        Home
                    </a>
                </li>
                <li onClick={()=>setSelectedTab("Create Post")}>
                    <a href="#" className={`nav-link text-white px-3 py-2 mb-1 ${selectedTab==="Create Post"&& "active"}`}>
                        Create Post
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown mt-3">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
            </div>
        </div>
    );
}
export default Sidebar;