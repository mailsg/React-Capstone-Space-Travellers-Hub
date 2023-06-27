import { useSelector } from 'react-redux';
import '../App.css';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="my-container">

      {/* for missonn */}
      <div>
        <h2>My Rockets</h2>
        <ul>
          {reserveRocket.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
