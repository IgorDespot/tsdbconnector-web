import React from 'react';
import {NavLink} from "react-router-dom";

const UploadPage = () => (

    <div className="container-fluid">

        <div className="row justify-content-center">

            <div className="col-md-12">

                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Welcome To File Upload Demo</h5>
                        <form action="">
                            <div className="form-row justify-content-center">
                                <div className="form group col-md-4">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

        </div>

    </div>

);

export default UploadPage;