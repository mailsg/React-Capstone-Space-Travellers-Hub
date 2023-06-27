import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsFetched = useSelector((state) => state.missions.missions.length > 0);

  useEffect(() => {
    if (!missionsFetched) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionsFetched]);

  const missionsList = useSelector((state) => state.missions.missions);

  return (
    <div className="mx-5">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr className="fw-bold">
            <th style={{ width: '10%' }}>Mission</th>
            <th style={{ width: '70%' }}>Description</th>
            <th style={{ width: '10%' }}>Status</th>
            <th style={{ width: '10%' }}>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="fw-bold">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>to be</td>
              <td>to be</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
