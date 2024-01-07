

export default function Carousel() {
    const items = [1,2,3,4]
    return (
        <div className="row mx-5">
            {items.map((id)=>{
                return(
                    <div className="col-sm-3" key={id}>
                        <div className="card">
                            <div className="card-body text-center py-5">
                                <a href="/chat" className="btn btn-primary my-5">React</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}