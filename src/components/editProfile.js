import React, { useState, useEffect } from "react";
import styled from "styled-components";
import uploadIcon from "../Media/upload-icon.png";
import AccountsAPI from "../api/accounts";

const EditProfile = ({ user, setIsEditing, setUser, setIsUpdated }) => {
  const [currentUser, setCurrentUser] = useState({});

  const onChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const onChangeProfile = (e) => {
    setCurrentUser({ ...currentUser, ["file"]: e.target.files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AccountsAPI.updateUser(setIsUpdated, currentUser, setUser, setIsEditing);
    
  };
  return (
    <Editor>
      <h3 className="title">Edit Profile</h3>{" "}
      <form className="register-form" onSubmit={onSubmit}>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          name="name"
          value={currentUser.name || user.name}
          onChange={onChange}
        />
        <label className="form-label" htmlFor="phone">
          Phone
        </label>
        <input
          className="form-input"
          type="text"
          name="phone"
          value={currentUser.phone || user.phone}
          onChange={onChange}
        />
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input
          className="form-input"
          type="text"
          name="age"
          value={currentUser.age || user.age}
          onChange={onChange}
        />
        <label className="form-label" htmlFor="bloodGrp">
          Blood Group
        </label>
        <select
          className="option-input"
          defaultValue={"none"}
          name="bloodGrp"
          onChange={onChange}
        >
          <option className="input-option" name="none" selected hidden disabled>
            Select Blood Group
          </option>
          <option className="input-option" name="A Positive">
            A Positive
          </option>
          <option className="input-option" name="A Negative">
            A Negative
          </option>
          <option className="input-option" name="B Positive">
            B Positive
          </option>
          <option className="input-option" name="B Negative">
            B Negative
          </option>
          <option className="input-option" name="AB Positive">
            AB Positive
          </option>
          <option className="input-option" name="AB Negative">
            AB Negative
          </option>
          <option className="input-option" name="O Positive">
            O Positive
          </option>
          <option className="input-option" name="O Negative">
            O Negative
          </option>
        </select>
        <label className="form-label" htmlFor="gender">
          Gender
        </label>
        <select
          className="option-input"
          name="gender"
          defaultValue={"none"}
          onChange={onChange}
        >
          <option className="input-option" name="none" selected hidden disabled>
            Select Gender
          </option>
          <option className="input-option" name="Male">
            Male
          </option>
          <option className="input-option" name="Femle">
            Female
          </option>
          <option className="input-option" name="Transgender">
            Transgender
          </option>
        </select>
        <div className="file-upload-content">
          <label>Profile Picture</label>
          <div className="form-group custom-drop-file text-center">
            <input
              className="form-input file-upload"
              type="file"
              name="profilePic"
              onChange={onChangeProfile}
              placeholder=""
            />
            <img src={uploadIcon} alt="icon" />
            <p>Upload Picture</p>
          </div>
        </div>
        <input
          className="form-register"
          type="submit"
          value="Save"
          onSubmit={onSubmit}
        />
      </form>
      <button
        className="close-editor"
        onClick={(e) => {
          setIsEditing(false);
        }}
      >
        Cancel
      </button>
    </Editor>
  );
};

export default EditProfile;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 40vw;
  margin: 50px auto;
  overflow: hidden;
  padding: 10px 30px;
  transition-duration: 0.4s;
  background-color: #fafafa;
  /* box-shadow: 10px 20px 20px #e3e3e3; */

  @media only screen and (max-width: 1200px) {
    & {
      min-width: 70vw;
      max-width: 70vw;
      margin: 30px auto;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 95vw;
      max-width: 95vw;
      margin: 30px auto;
    }
  }

  .branding {
    display: flex;
    flex-direction: row;
  }
  .success-title {
    text-align: center;
    font-weight: bold;
  }
  .title {
    display: flex;
    text-align: center;
    padding: 50px auto;
  }
  .close-editor {
    background: none;
    border: none;
    margin-top: 10px;
  }
  .logo {
    width: 70px;
    margin: 30px auto;
  }
  .option-input {
    padding: 7px 50px;
    font-weight: 500;
    font-size: larger;
    border-radius: 5px;
    border: 1px solid lightgrey;
    align-items: left;
    margin: 5px auto;
    margin-bottom: 12px;
    width: 100%;
  }

  .success-gif {
    display: flex;
    align-items: center;
    width: 300px;
    margin: 0 auto;
  }

  .register-form {
    display: flex;
    flex-direction: column;
  }
  .title {
    display: flex;
    margin: 0 auto;
  }
  .custom-drop-file {
    position: relative;
    padding: 24px 16px;
    border: 1px solid #e4e4e4;
    cursor: pointer;
  }
  .custom-drop-file input {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }
  .custom-drop-file img {
    margin-bottom: 8px;
    width: 40px;
  }
  .custom-drop-file p {
    margin: 0;
    color: #a4a4a4;
  }

  .login-redirect {
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px 0;
    box-shadow: 10px 20px 20px #e3e3e3;
  }
  .form-label {
    display: block;
    font-weight: medium;
    text-decoration: none;
    font-size: larger;
    font-weight: 500;
  }
  input[type="file"]::file-selector-button {
    display: none;
    margin: 8px 5px;
    border: none;
  }

  .form-input {
    border-radius: 7px;
    border: 1px solid lightgrey;
    height: 40px;
    margin-bottom: 20px;
  }

  .form-register {
    border-radius: 7px;
    background-color: black;
    border: none;
    color: white;
    font-size: large;
    padding: 5px 0;
  }

  .file-upload::placeholder {
    display: none;
  }
`;
