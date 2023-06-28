import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';

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
    <div className="mx-5 px-4">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr className="fw-bold">
            <th style={{ width: '10%' }}>Mission</th>
            <th style={{ width: '60%' }}>Description</th>
            <th style={{ width: '15%' }}>Status</th>
            <th style={{ width: '15%' }}>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="fw-bold">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="text-center align-middle">
                { mission.reserved ? (
                  <Badge bg="info">Active Member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                ) }
              </td>
              <td className="text-center align-middle">
                { mission.reserved ? (
                  <Button variant="outline-secondary" onClick={() => dispatch(leaveMission({ missionId: mission.mission_id }))}>Leave Mission</Button>
                ) : (
                  <Button variant="outline-danger" onClick={() => dispatch(joinMission({ missionId: mission.mission_id }))}>Join Mission</Button>
                ) }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
