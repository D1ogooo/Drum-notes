import { useState } from 'react';

function NewNote() {
  const [images, setImages] = useState([]);

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = {
          preview: reader.result,
          size: `${file.size / 1024} KB`,
        };
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    }
  }

  function removeImage(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  function handleSubmit() {

  }

  return (
    <>
      <div className="bg-white shadow p-4 py-8">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">New Post</div>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Título do vídeo" type="text" />
          <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Link do vídeo" type="text" />
          <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none resize-none" spellCheck="false" placeholder="Descreva o conteúdo do video"></textarea>
          <div className="icons flex text-gray-500 m-2">
            <label htmlFor="fileInput">
              <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <input id="fileInput" type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
            </label>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
          </div>
          <div className="buttons flex justify-end">
            <div onClick={handleSubmit} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewNote;
