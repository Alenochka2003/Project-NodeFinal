// import { useState } from "react";
// import { $api } from "../../api/api";

// export const ImageForm = () => {
//   const [file, setFile] = useState(null);  
//   const [filePath, setFilePath] = useState("");  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!file) {
//       return;
//     }
//     const formData = new FormData();
//     formData.append("image", file);

//     $api.post("/post", formData)
//       .then((res) => setFilePath(res.data.url))
//       .catch((err) => console.error(err));  // Обработка ошибок
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         required
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           const file = e.target.files?.[0]; 
//           if (file) {
//             setFile(file);
//           }
//         }}
//       />
//       <button type="submit">Отправить картинку</button>
//       {filePath && <span>URL до картинки: {filePath}</span>}
//     </form>
//   );
// };


"use client";

import { useState } from "react";
import { $api } from "../../api/api";

const ImageForm = () => {
  const [file, setFile] = useState(null); // Убрана типизация
  const [filePath, setFilePath] = useState(""); // Убрана типизация

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("Файл не выбран");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await $api.post("/post", formData);
      setFilePath(response.data.url);
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        onChange={(e) => {
          if (e.target.files) setFile(e.target.files[0]);
        }}
        type="file"
        accept="image/*"
      />
      <button type="submit">Отправить картинку</button>
      {filePath && <span>URL изображения: {filePath}</span>}
    </form>
  );
};

export default ImageForm;
