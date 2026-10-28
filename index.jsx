function UserProfile() {
  const username = "Alex";
  const avatarUrl = "https://placeholder.com";

  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={username} />
      <h2>User: {username.toUpperCase()}</h2>
    </div>
  );
}
