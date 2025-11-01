import { create } from "zustand";

const useEditorStore = create((set) => ({
  // New state for the cropper
  crop: { x: 0, y: 0 },
  zoom: 1,
  aspect: 2 / 3, // Default aspect ratio
  croppedAreaPixels: null,

  // Setters
  setCrop: (crop) => set({ crop }),
  setZoom: (zoom) => set({ zoom }),
  setAspect: (aspect) => set({ aspect }),
  setCroppedAreaPixels: (croppedAreaPixels) => set({ croppedAreaPixels }),

  // Reset function
  resetStore: () =>
    set({
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 2 / 3,
      croppedAreaPixels: null,
    }),
}));

export default useEditorStore;