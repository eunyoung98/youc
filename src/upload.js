import React from 'react';
import './upload.css';
import {BrowserRouter as Router} from 'react-router-dom';

const Upload = () => {

    return (
        <Router>
            <div className = "upload-page">
                <div class="upload">
                    <div class="file_input">
                        <input type="text" readonly="readonly" title="File Route" id="file_route" />
                        <label>
                        찾아보기
                        <input type="file" onchange="javascript:document.getElementById('file_route').value=this.value" />
                        </label>
                    </div>
                </div>
            </div>
        </Router>
    );
  }

  export default Upload;
  