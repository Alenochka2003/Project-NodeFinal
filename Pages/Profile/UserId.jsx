import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Изменение на react-router-dom
import { $api } from "../../api/api";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("/default-profile.png");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Используем navigate

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUsername(userData.username);
      setBio(userData.bio);
      setWebsite(userData.website || "");
      setProfileImageUrl(userData.profile_image || "/default-profile.png");
    } else {
      getUserProfile();
    }
  }, []);

  const getUserProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("User ID not found");
        return;
      }
      const response = await $api.get(`/user/${userId}`);
      const userData = response.data;
      setUsername(userData.username);
      setBio(userData.bio);
      setWebsite(userData.website || "");
      setProfileImageUrl(userData.profile_image || "/default-profile.png");
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      setError("Не удалось загрузить профиль");
      console.error("Ошибка получения профиля:", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedData = {
      username,
      bio,
      website,
      profile_image: profileImageUrl,
    };
    try {
      const response = await $api.put("/user/current", updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(updatedData));
        navigate('/profile'); // Перенаправление
      } else {
        setError("Ошибка обновления профиля");
      }
    } catch (error) {
      console.error("Ошибка при обновлении профиля:", error);
      setError("Ошибка обновления профиля");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await $api.post("/post", formData);
      const imageUrl = response.data.url;
      setProfileImageUrl(imageUrl);
    } catch (err) {
      console.error("Ошибка при загрузке изображения:", err);
      alert("Ошибка при загрузке изображения");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Редактировать профиль</h3>
      <div className="flex items-center gap-4 mb-6 bg-gray-100 p-4 rounded-lg">
        <img src={profileImageUrl} alt="Profile" className="w-16 h-16 rounded-full object-cover border border-gray-300" />
        <div><p className="text-lg font-semibold">{username}</p></div>
      </div>
      <div className="mb-6">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
        <button onClick={(e) => e.preventDefault()} className="px-4 py-2 bg-blue-500 text-white rounded-md">Загрузить изображение</button>
      </div>
      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4 mt-4">
        <div>
          <label className="block font-medium text-gray-700">Имя пользователя</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Веб-сайт</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">О себе</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} maxLength={150} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Расскажите о себе" />
          <p className="text-right text-gray-500 text-sm">{bio.length} / 150</p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button type="submit" disabled={isLoading} className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition mt-4">
          {isLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </form>
    </div>
  );
};

ProfilePage.propTypes = {};

export default ProfilePage;
