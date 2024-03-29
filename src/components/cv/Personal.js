import React, { useState } from "react";
import Preview from "../cv-preview/PreviewPersonal-info";
import uniqid from "uniqid";

const Personal = (props) => {
    const { name, email, phone } = props;

    const initialPersonalInfo = {
        name: name || "",
        email: email || "",
        phone: phone || "",
        id: uniqid()
    };

    const [personal, setPersonal] = useState(initialPersonalInfo);
    const [personalInfo, setPersonalInfo] = useState([]);
    const [mode, setMode] = useState(true);

    const handleChange = (e) => {
        setPersonal({
            ...personal,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (["name", "email", "phone"].filter((input) => personal[input] === "").length === 0) {
            setPersonalInfo([...personalInfo, personal]);
            setMode(!mode);
            setPersonal(initialPersonalInfo);
        }else{
            console.log("form empty");
        }
    };

    return mode ? (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="button-container">
                    <button className="button-submit">Preview Personal Info</button>
                </div>
                <div className="personal-info">
                    <label>Name: </label>
                    <input type="text" name="name" value={personal.name} onChange={handleChange}></input>
                </div>
                <div className="personal-info">
                    <label>Email: </label>
                    <input type="email" name="email" value={personal.email} onChange={handleChange}></input>
                </div>
                <div className="personal-info">
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={personal.phone} onChange={handleChange}></input>
                </div>
            </form>
        </div>) : (
        <Preview personal={personalInfo} />
    )
}
export default Personal;