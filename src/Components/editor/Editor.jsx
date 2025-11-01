import React, { useCallback } from "react";
import Cropper from "react-easy-crop";
import useEditorStore from "../../utils/editorStore"; // We will update this file next
import "./editor.css"; // We will replace this file next

const Editor = ({ previewImg }) => {
  // Get state from your Zustand store
  const {
    crop,
    setCrop,
    zoom,
    setZoom,
    aspect,
    setAspect,
    setCroppedAreaPixels,
  } = useEditorStore();

  // This is the callback from react-easy-crop
  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [setCroppedAreaPixels]
  );

  return (
    <div className="editorContainer">
      {/* This is the main cropper component */}
      <div className="cropperWrapper">
        <Cropper
          image={previewImg.url}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      {/* These are the aspect ratio buttons */}
      <div className="controls">
        <div className="aspectRatios">
          <button onClick={() => setAspect(1 / 1)}>1:1</button>
          <button onClick={() => setAspect(2 / 3)}>2:3</button>
          <button onClick={() => setAspect(3 / 4)}>3:4</button>
          <button onClick={() => setAspect(9 / 16)}>9:16</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;