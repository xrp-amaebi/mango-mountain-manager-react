import React, { useState } from "react"

import { CloudinaryAccount } from "./API/cloudinary"

import { Container, FileContainer, DottedLine, FileName } from "./style"


export const Upload = ({ id, setUrl, name }) => {

    const [file, setFile] = useState("")
    const [fileSize, setFileSize] = useState("")
    const [loading, setLoading] = useState(false)

    const fileFetch = ({ target }) => {

        const [_file] = target.files

        setLoading(true)

        const body = new FormData()
        body.append("file", _file)
        body.append("upload_preset", "somestring")

        console.log(body)

        const options = {
            method: "POST",
            body
        }

        return (
            fetch(`https://api.Cloudinary.com/v1_1/${CloudinaryAccount}/image/upload`, options)
            .then(response => response.json())
            .then(({ secure_url }) => {
                setLoading(false)

                console.log(secure_url, "secure url")
                
                setUrl(secure_url)
                setFile(_file.name)
                setFileSize(_file.size / 1000)

            }).catch(error => {

                console.log(error)
                setLoading(false)

            })
        )
    }

    return (
        <Container>
            <FileContainer>
                <DottedLine>
                    <div className="uploadBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 69 50" fill="none"> 
                            <rect x="9" y="10" width="60" height="40" rx="5" fill="#E6E2E2" fillOpacity="0.65"/>
                            <rect width="60" height="40" rx="5" fill="#C4C4C4" />
                            <path
                                d="M38.75 21.25H31.25V28.75H28.75V21.25H21.25V18.75H28.75V11.25H31.25V18.75H38.75V21.25Z"
                                fill="#E5E2E2"
                            />
                        </svg>
                        <br />
                        <label htmlFor={id}>upload file</label>
                        <input type="file" id={id} onChange={fileFetch} className="file" 
                            name={name} // value={values[name]}
                            accept=".png"
                        />
                        <br />
                        {
                            loading && (
                                <div className="lds-ring">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            )
                        }
                        {
                            file && fileSize ?
                                <FileName>
                                    {file}-{fileSize}KB
                                </FileName>
                            : 
                                null
                        }
                    </div>
                </DottedLine>
            </FileContainer>
        </Container>
    )
}