import { profile } from '../data'

export default function ProfileSummary() {
  return (
    <section className="profile">
      <div className="profile-inner">
        {profile.avatar && (
          <img src={profile.avatar} alt="" className="profile-avatar" />
        )}
        <h1>{profile.name}</h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-summary">{profile.summary}</p>
      </div>
    </section>
  )
}
