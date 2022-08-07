import React from "react";
import styled from "styled-components";
import uploadIcon from "../Media/upload-icon.png";

const formInput = ({
  field,
  onNext,
  onChange,
  value,
  onPrev,
  user,
  onChangeFile,
}) => {
  const ques = field.ques.replace("*****", user[field.dynamicData]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Input>
      <h2> {ques} </h2>
      <form onSubmit={onSubmit}>
        {field.type == "file" ? (
          <div className="file-upload-content">
            <div className="form-group custom-drop-file text-center">
              <input
                className="form-input file-upload"
                type="file"
                name="profilePic"
                onChange={onChangeFile}
                placeholder=""
              />
              <img src={uploadIcon} alt="icon" />
              <p>Upload Picture</p>
            </div>

            <button type="button" className="input-btn" onClick={onPrev}>
              {" "}
              Back{" "}
            </button>
          </div>
        ) : (
          <div>
            {field.isOption ? (
              <select
                className="option-input"
                value={value}
                name={field.name}
                onChange={onChange}
              >
                {field.options.map((option) => {
                  return (
                    <option className="input-option" name={field.name}>
                      {option.length > 0 && option}
                    </option>
                  );
                })}
              </select>
            ) : (
              <input
                className="input"
                type={field.type}
                name={field.name}
                value={value}
                placeholder={field.label}
                onChange={onChange}
              />
            )}

            <div className="nav-buttons">
              {field.id == 0 ? (
                <button type="button" className="input-btn" onClick={onNext}>
                  {" "}
                  Next{" "}
                </button>
              ) : (
                <div className="nav-buttons">
                  <button type="button" className="input-btn" onClick={onPrev}>
                    {" "}
                    Back{" "}
                  </button>
                  {field.type == "file" ? (
                    <button
                      style={{ display: "none" }}
                      type="button"
                      className="input-btn"
                      onClick={onNext}
                    >
                      {" "}
                      Next{" "}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="input-btn"
                      onClick={onNext}
                    >
                      {" "}
                      Next{" "}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </form>
    </Input>
  );
};

const Input = styled.div`
  display: flex;
  flex-direction: column;

  .input {
    border-radius: 7px;
    border: 1px solid lightgrey;
    height: 40px;
    width: 100%;
    margin: 20px 0;
    box-shadow: 6px 20px 20px #d4d4d4;
  }

  .input::placeholder {
    font-size: 20px;
    padding-left: 10px;
  }

  input:valid {
    font-size: larger;
    text-align: center;
    font-weight: 900;
  }
  .gif {
    width: 300px;
    margin: 0 auto;
  }

  .nav-buttons {
    display: flex;

    gap: 30px;
    margin: 30px auto;
  }

  .input-btn {
    display: flex;
    background-color: black;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
  }
  .custom-drop-file {
    position: relative;
    padding: 24px 16px;
    border: 1px solid #e4e4e4;
    cursor: pointer;
    margin-top: 20px;
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

  .option-input {
    padding: 10px 50px;
    font-weight: 500;
    font-size: larger;
    border-radius: 5px;
    box-shadow: 6px 20px 20px #d4d4d4;
    align-items: center;
    margin: 20px auto;
    margin-bottom: 0px;
    width: 100%;
  }
`;

export default formInput;
