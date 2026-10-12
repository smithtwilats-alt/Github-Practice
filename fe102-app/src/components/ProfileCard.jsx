import './ProfileCard.css';
function ProfileCard({ avatar, name, title, isFeatured }) {
      const cardClass = isFeatured ? "profile-card featured" : "profile-card";
    return (
    <div className={cardClass}>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

export default ProfileCard;