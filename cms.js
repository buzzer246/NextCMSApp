import React, { useState,useEffect} from "react";


const CmsAPP = () => {

    const cms = useState([""]);
    const [tittle, setTittle] = useState([""]);
    const [url, setURL] = useState([""]);
    const [images, setImage] = useState([""]);
    const [email, setEmail] = useState([""]);
    const [address, setAddress] = useState([""]);
    const [comments, setComments] = useState([""]);
    const [message, updateMessage] = useState([""]);
    

    const getDetails = () => {

       
            fetch("https://localhost:8080/").then(response => response.json())
            .then(cmsinfo => {
                if (cmsinfo.length > 0) {
                    updateMessage("CMS Data Saved Successfully");
                }

                setTittle();
                setURL();
                setImage();
                setEmail();
                setAddress();
                setComments();


            })
    }

    useEffect(()=>{

        getDetails();

    })

    const save = () => {

        var cmslist = {"tittle": tittle,"url": url,"images": images,"email": email,"address": address,"comments": comments};
        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cmslist)
        };
        fetch("https://localhost:8080/save",postData).then(response => response.text())
        .then(severResponse => {
                updateMessage("Data Saved Successfully !");
                setTittle();
                setURL();
                setImage();
                setEmail();
                setAddress();
                setComments();

    })
}

    const editcms = () => {

        var cmslist = {"tittle": tittle,"url": url,"images": images,"email": email,"address": address,"comments": comments};

        const postData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cmslist)
        };
        fetch("https://localhost:8080/update" + postData).then(response => response.text())
            .then(severResponse => {

                updateMessage("Data Updated Successfully !");

            })
    }


    const Deletecms = (id) => {

        const postData = {

            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        };

        fetch("https://localhost:8080/delete" + id,postData).then(response => response.text())
        .then(severResponse => {

            updateMessage("Data Deleted Successfully !");
    })
}

return (
    <>
        <div className="container">
            <div className="row">
                <h4 className="text-center text-danger">Content Management App</h4>
                <div className="col-lg-3">
                    <p className="text-danger text-center">{message}</p>
                    <div className="mb-3">
                        <p className="text-success">Tittle</p>
                        <input type="text" className="form-control" onChange={obj =>setTittle(obj.target.value)} value={tittle} />
                    </div>
                    <div className="mb-3">
                        <p className="text-success">URL</p>
                        <input type="text" className="form-control" onChange={obj =>setURL(obj.target.value)} value={url} />
                    </div>
                    <div className="mb-3">
                        <p className="text-success">Images</p>
                        <input class="form-control form-control-sm" id="formFileSm" type="file" onChange={obj => setImage(obj.target.value)} value={images} width={100} height={50} />
                        
                    </div>
                    <div className="mb-3">
                        <p className="text-success">E-mail</p>
                        <input type="email" className="form-control" onChange={obj =>setEmail(obj.target.value)} value={email} />
                    </div>
                    <div className="mb-3">
                        <p className="text-success">Address</p>
                        <input type="text" className="form-control" onChange={obj =>setAddress(obj.target.value)} value={address} />
                    </div>
                    <div className="mb-3">
                        <p className="text-success">Comments</p>
                        <textarea type="text" className="form-control" maxLength={100} minLength={4} onChange={obj => setComments(obj.target.value)} value={comments} ></textarea>
                    </div>
                    <div className="container text-center">
                        <button className="radiumbtn btn btn btn-success" type="submit" onClick={save}>Submit</button>
                    </div>

                </div>

                <div className="col-lg-9">
                    <table className="table table-bordered table-striped">
                        <thead className="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Tittle</th>
                                <th>URL</th>
                                <th>Images</th>
                                <th>Email-id</th>
                                <th>Address</th>
                                <th>Comments</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cms.map((cmsinfo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{cmsinfo.index}</td>
                                            <td>{cmsinfo.tittle}</td>
                                            <td>{cmsinfo.url}</td>
                                            <td>{cmsinfo.images}</td>
                                            <td>{cmsinfo.email}</td>
                                            <td>{cmsinfo.address}</td>
                                            <td>{cmsinfo.comments}</td>
                                            <td>
                                                <button className='warbtn btn btn-warning btn-sm m-2' onClick={editcms}>Edit</button>
                                                <button className='danbtn btn btn-danger btn-sm m-2'  onClick={Deletecms.bind(this, cmsinfo.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
)

}

export default CmsAPP;