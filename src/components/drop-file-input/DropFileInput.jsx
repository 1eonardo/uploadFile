import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';

import { ImageConfig } from '../../config/ImageConfig';

import Pic from '/UploadA/SubirArchivosReact/uploadreact/src/assets/upload.png';


const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const [progress] = useState();

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList); 
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const formatBytes = (bytes, decimals = 2) => {
        const dm = decimals < 0 ? 0 : decimals;
        let i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'EB', 'ZB', 'YB'];

        return parseFloat((bytes / Math.pow(1024, i)).toFixed(dm))  + ' ' + sizes[i]; 
    }


    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={Pic} alt="" />
                    <h1>Drag files here or </h1><h2> browse</h2>
                </div>
                <input type="file" class="file-input" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                            <p className="drop-file-preview__title">
                                Upload File List
                            </p>
                        <div class="section">

                            {
                                fileList.map((item, index) => (
                                        <div key={index} className="drop-file-preview__item">
                                            <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                            <div className="drop-file-preview__item__info">                       
                                            <p>{item.name.substring(0, 8) + "... ." + item.name.split('.').pop()}</p>                                   

                                            <p1>{formatBytes(item.size)}</p1>
                                            
                                            <div className='ts tiny primary progress'>
                                                <div className='bar' style={{with: `${progress * 100}%`}}/>
                                            </div>
                                            </div>
                                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
