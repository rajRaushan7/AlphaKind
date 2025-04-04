import React from 'react';

const UploadNotes = () => {
    const [title, setTitle] = "";
    const [semester, setSemester] = "";
    const [subject, setSubject] = "";
    const [file, setFile] = "";

    const submitNotes = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("semester", semester);
        formData.append("subject", subject);
        formData.append("file", file);
    }
    return (
        <>
            <form className='uploadForm' onSubmit={ submitNotes }>
                <table > 
                    <tr>
                        <td><label htmlFor="title">Title: </label></td>
                        <td><input 
                        id='title' 
                        className='uploadInputs' 
                        type="text" 
                        placeholder='Enter Chapter Name' 
                        required 
                        onchange = {(e) => setTitle(e.targer.value)}
                        /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="semester">Semester: </label></td>
                        <td><input 
                        type="number" 
                        className='uploadInputs' 
                        id='semester' 
                        placeholder='Enter Semester' 
                        required 
                        onchange = {(e) => setSemester(e.targer.value)}
                        />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="subject">Subject: </label></td>
                        <td><input 
                        type="text" 
                        className='uploadInputs' 
                        id='subject' 
                        placeholder='Enter Subject' 
                        required 
                        onchange = {(e) => setSubject(e.targer.value)}
                        /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="notes">Select Your Notes: </label></td>
                        <td><input 
                        type="file" 
                        id='uploadNotes' 
                        accept='application/pdf' 
                        required 
                        onchange = {(e) => setFile(e.targer.files[0])}
                        /></td>
                    </tr>
                </table>
                <button className='uploadButton'>Upload</button>
            </form>
        </>
    );
}

export default UploadNotes;
