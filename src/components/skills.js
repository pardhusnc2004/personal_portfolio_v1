import TechIcon from "./techicon"
export function Skills() {
    return (
        <div className="mt-5">
            <div className="container mt-3 text-center d-grid align-items-center justify-content-center" style={{paddingTop: "35px",paddingBottom: "100px"}}>

                <div className="row my-3">
                    <div className="col-md-3">
                        <h6 class="mt-5">Programming Languages</h6>
                    </div>
                    <div className="col-md-8 d-flex flex-wrap  align-items-center justify-content-center ">
                        <TechIcon techName="Python" />
                        <TechIcon techName="Java" />
                        <TechIcon techName="JavaScript" />
                        <TechIcon techName="SQL" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-3" style={{marginTop: "7%"}}>
                        <h6 class="mt-5">Web Technologies</h6>
                    </div>
                    <div className="col-md-8 d-flex flex-wrap  align-items-center justify-content-center">
                        <TechIcon techName="HTML" />
                        <TechIcon techName="CSS" />
                        <TechIcon techName="Bootstrap" />
                        <TechIcon techName="NodeJS" />
                        <TechIcon techName="React" />
                        <TechIcon techName="MongoDB" />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col-md-3">
                        <h6 class="mt-5">Version Control</h6>
                    </div>
                    <div className="col-md-8 d-flex flex-wrap  align-items-center justify-content-center">
                    <TechIcon techName="Git" />
                    <TechIcon techName="GitHub" />
                    </div>
                </div>
                </div>
        </div>
    )
}