import { resume } from "../../../assets/svgs/resume";

const Picture = () => {
  return (
    <>

      <div class="upload-container">
        <label for="image-upload" class="upload-label">
          <div class="upload-field" id="image-field">
          {resume}
            <span class="upload-text">Drag and Drop or Click to Upload</span>
           
          </div>
        </label>
        <input
          type="file"
          id="image-upload"
          class="upload-input"
          accept="image/*"
        />
        {/* <h3>Picture js</h3> */}
      </div>
    </>
  );
};
export default Picture;
