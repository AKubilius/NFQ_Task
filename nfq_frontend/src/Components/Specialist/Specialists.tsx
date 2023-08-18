import React, { useEffect, useState } from 'react'
import { getRequest } from "../Api/api"
import { Specialist } from './Specialist';

type SpecialistType = {
  userName: string;
  id: string;
};

export const Specialists = () => {
  
  const [specialists, setSpecialists] = useState<SpecialistType[] | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getRequest('https://localhost:7214/api/Specialist', '');
      setSpecialists(data);
      console.log(data)
    };
    fetchData();
  }, []);

  return (
    <>
    {specialists?.map((specialist, index) => (
      <Specialist
        username={specialist.userName}
        id= {specialist.id}
      />
    ))}
    </>
  )
}
