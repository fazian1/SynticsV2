import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';

function ViewCurrentAssignmentContentForTeacher() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()

    /*
    const timerId = setTimeout(() => {
        chartsData()
      }, 1500);
      
      const chartsData = () => {
        fileForCv()
      
      }
      const fileForCv = () => {
        axios({
            method: "POST",
            url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
            responseType: "blob"
          })
            .then(res => rezzingFileForCv(res.data),)
            
      }
      const rezzingFileForCv = (response) => {
        var urlCreator = window.URL || window.webkitURL;
        var cvUrl = urlCreator.createObjectURL(response);
        document.querySelector("#audioReference").src = cvUrl;
      }
      */
      const handlingAttachments = () => {
        if(location.state.answertype == "Drawing"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForImg(res.data),)
                const rezzingFileForImg = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(response);
                    document.querySelector("#imgReference").src = imageUrl;
                  }
                  if((location.state.startDate != null) && (location.state.endDate != null)){
                    return(
                        <div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Start Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.startDate}
                                </div>
                                <hr />
                            </div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >End Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.endDate}
                                </div>
                                <hr />
                            </div>
                        <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Attachments</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                    <a id = "vidReference" style={{fontWeight: 'bold', textDecoration : 'none'}} >{location.state.referenceName}</a>
                                </div>
                                <hr />
                            </div>
                            </div>
                    )
                }
                else{
            return(
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <img id = "imgReference" width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}} >
                            </img>
                        </div>
                        <hr />
                    </div>
            )
                }
        }
        else if(location.state.answertype == "Audio"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForCv(res.data),)
                const rezzingFileForCv = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var cvUrl = urlCreator.createObjectURL(response);
                    document.querySelector("#audioReference").src = cvUrl;
                  }
                  if((location.state.startDate != null) && (location.state.endDate != null)){
                    return(
                        <div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Start Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.startDate}
                                </div>
                                <hr />
                            </div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >End Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.endDate}
                                </div>
                                <hr />
                            </div>
                        <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Attachments</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                <audio id = "audioReference"  controls="controls" className="" type="audio/mpeg"  />
                                </div>
                                <hr />
                            </div>
                            </div>
                    )
                }
                else{
            return(
                <div className = "mt-4">
                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                    <label >Attachments</label>
                </div>
                <div class="p-3 mb-2 bg-light text-dark">
                    <audio id = "audioReference"  controls="controls" className="" type="audio/mpeg"  />
                </div>
                <hr />
            </div> 
            )
                }
        }
        else if(location.state.answertype == "Video"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForVid(res.data),)
                const rezzingFileForVid = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var vidUrl = urlCreator.createObjectURL(response);
                    document.querySelector("#vidReference").src = vidUrl;
                  }
                  if((location.state.startDate != null) && (location.state.endDate != null)){
                    return(
                        <div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Start Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.startDate}
                                </div>
                                <hr />
                            </div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >End Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.endDate}
                                </div>
                                <hr />
                            </div>
                        <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Attachments</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                <video id = "vidReference" controls width="400"   type="video/webm" />
                                </div>
                                <hr />
                            </div>
                            </div>
                    )
                }
                else{
            return(
                <div>
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <video id = "vidReference" controls width="400"   type="video/webm" />
                        </div>
                        <hr />
                    </div>
                    </div>
            )
                }
        }
        else if(location.state.answertype == "Upload a File"){
            axios({
                method: "POST",
                url: `https://syntics.co/api/file/display/${location.state.referenceName}`,
                responseType: "blob"
              })
                .then(res => rezzingFileForVid(res.data),)
                const rezzingFileForVid = (response) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var vidUrl = urlCreator.createObjectURL(response);
                    document.querySelector("#vidReference").href = vidUrl;
                  }
                  if((location.state.startDate != null) && (location.state.endDate != null)){
                    return(
                        <div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Start Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.startDate}
                                </div>
                                <hr />
                            </div>
                            <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >End Date</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                   {location.state.endDate}
                                </div>
                                <hr />
                            </div>
                        <div className = "mt-4">
                                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                                    <label >Attachments</label>
                                </div>
                                <div class="p-3 mb-2 bg-light text-dark">
                                    <a id = "vidReference" style={{fontWeight: 'bold', textDecoration : 'none'}} className = "text-dark" >{location.state.referenceName}</a>
                                </div>
                                <hr />
                            </div>
                            </div>
                    )
                }
                else{
            return(
                <div>
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <a id = "vidReference" style={{fontWeight: 'bold', textDecoration : 'none'}} >{location.state.referenceName}</a>
                        </div>
                        <hr />
                    </div>
                    </div>
            )
                }
        }
        
    }
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes-assignments/${id}`)
    }
    return (

        <>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Assignment</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
      <h6 className="m-0 font-weight-bold text-white">View Clicked Assignment</h6>
    </div>
    <div className="card-body">
    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Course Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.coursetype}
                        </div>
                        <hr />
                    </div>
                   
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Question Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questiontype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Answer Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.answertype}
                        </div>
                        <hr />
                    </div>
                  
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Question Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questiontitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Question Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questioncontent}
                        </div>
                        <hr />
                    </div>
                    {handlingAttachments()}
                  <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "#a98799"}}>
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.totalmarks}
                        </div>
                        <hr />
                    </div>
    </div>
    <center>
                      <div>    
                      <div className="">
                        <button type="submit" className="btn btn-outline-primary" onClick = {(e) => onBackClick(e)}>
                          Back to Grades
                        </button>
                      </div>
                    </div>
                    </center>
  </div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
<div className="containerBlackDashboard my-auto">
  <div className="copyright text-center my-auto">
    <span></span>
  </div>
</div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
    </>
    )
}

export default ViewCurrentAssignmentContentForTeacher