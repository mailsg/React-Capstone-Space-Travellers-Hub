import { useSelector } from 'react-redux';
import '../App.css';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);

  const missionsList = useSelector((state) => state.missions.missions);
  const selectedMission = missionsList.filter((mission) => mission.reserved);

  return (
    <div className="profile mx-5">
      <div className="my-container">
        <h2>My Missions</h2>
        <ul>
          {selectedMission.map((mission) => (
            <li key={mission.mission_id} className="fw-bold">
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-container">
        <h2>My Rockets</h2>
        <ul>
          {reserveRocket.map((rocket) => (
            <li key={rocket.id} className="fw-bold">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
