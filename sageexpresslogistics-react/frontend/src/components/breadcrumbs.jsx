

const Breadcrumbs = ({ bcontent }) => {
  return (
   
 <div className="breadcrumbs">
    <div className="page-header d-flex align-items-center" style={{backgroundImage: 'url("/assets/img/page-header.jpg")'}}>
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>{ bcontent.title }</h2>
            <p>{ bcontent.description }</p>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div className="container">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>{bcontent.page}</li>
        </ol>
      </div>
    </nav>
  </div>
  )
}

//Add prop validation

Breadcrumbs.propTypes ={

}

export default Breadcrumbs