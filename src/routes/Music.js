import React from 'react';
import { useParams } from 'react-router-dom';

export default function Music() {
  const params = useParams();

  return (
    <div>
      Music
      {params.id}
    </div>
  );
}
